import { log, find_state_data, sleep, list_remove, get_random_int } from '../util';
import { Ifarmlist, Ivillage, Iunits } from '../interfaces';
import { Ifeature, Irequest, feature_collection, feature_item, Ioptions } from './feature';
import { farming, village } from '../gamedata';
import api from '../api';
import database from '../database';
import uniqid from 'uniqid';

interface Ioptions_farm extends Ioptions {
	village_name: string
	interval_min: number
	interval_max: number
	farms: Array<any>


}

class basic_farmlist extends feature_collection {
	get_ident(): string {
		return 'basic_farmlist';
	}

	get_new_item(options: Ioptions_farm): farm_feature {
		return new farm_feature({ ...options });
	}

	get_default_options(options: Ioptions): Ioptions_farm {
		return {
			...options,
			village_name: '',
			interval_min: 0,
			interval_max: 0,
			farms: []
		};
	}
}

class farm_feature extends feature_item {
	options: Ioptions_farm;

	set_options(options: Ioptions_farm): void {
		const { uuid, run, error, village_name, interval_min, interval_max, farms } = options;
		this.options = {
			...this.options,
			uuid,
			run,
			error,
			village_name,
			interval_min,
			interval_max,
			farms
		};
	}

	get_options(): Ioptions_farm {
		return { ...this.options };
	}

	set_params(): void {
		this.params = {
			ident: 'basic_farmlist',
			name: 'travian minus farmlist'
		};
	}

	get_description(): string {
		const { village_name, interval_min, interval_max } = this.options;
		return `${village_name} / ${interval_min} - ${interval_max} s`;
	}

	get_long_description(): string {
		return 'this feature will just send the farmlist in a given interval.';
	}


	async run(): Promise<void> {
		const { village_name, farms, interval_min, interval_max
		} = this.options;
		while (this.options.run) {
			const params = [
				village.own_villages_ident,
			];

			const response = await api.get_cache(params);
			const vill: Ivillage = village.find(village_name, response);
			const village_id: number = vill.villageId;



			async function asyncForEach(array: any, callback: any) {
				for (let index = 0; index < array.length; index++) {
					await callback(array[index], index, array);
				}
			}
			async function sendAttack(farm: any) {
				const units: Iunits = {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
					6: 0,
					7: 0,
					8: 0,
					9: 0,
					10: 0,
					11: 0
				};
				console.log(farm.village_name)
				var attack = true;
				if (farm.unit_type < 1 || farm.unit_type > 11 || farm.unit_number < 1 || farm.priority <= 0) {
					attack = false;
				}
				if (attack) {
					const params = [
						village.own_villages_ident,
					];

					const response = await api.get_cache(params);
					const vill: Ivillage = village.find(village_name, response);
					const sourceVillage_id: number = vill.villageId;


					const responses = await api.check_target(sourceVillage_id, farm.villageId, 3);
					if (responses.destPlayerName == null || farm.player_name != responses.destPlayerName) { //farm.village_name != responses.villageName
						farm.priority = -2;
						attack = false;
						log(`Farm: ${farm.village_name} no longer exists.`)
					}

				}
				if (attack) {
					var reports = await api.get_report(farm.villageId);
					reports = reports.reports

					if (reports.length > 0) {
						const report = reports[0];
						if (report.attackerTroopLossSum > 0) {
							log(`Farm: ${farm.village_name} had losses.`)
							attack = false;
							farm.priority = -3;
						}
					}
				}

				if (attack) {
					units[farm.unit_type] = parseInt(farm.unit_number, 10);
					if (units[farm.unit_type] == 4) {
						await api.send_units(village_id, farm.villageId, units, 6)
					} else {
						await api.send_units(village_id, farm.villageId, units, 4)
					}
				}
			}


			asyncForEach(farms, async (farm: any) => {
				sendAttack(farm);
				await sleep(.25);
			});

			log("Farm list sent")
			await sleep(get_random_int(interval_min, interval_max));
		}
		log(`basic farmlist uuid: ${this.options.uuid} stopped`);
		this.running = false;
		this.options.run = false;





	}

}

export default new basic_farmlist();