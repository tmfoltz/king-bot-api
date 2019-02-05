export enum tribe {
	roman = '1',
	teuton = '2',
	gaul = '3'
}

export enum mission_type {
	spy = 6
}

export const buildings: { [index: number]: string } = {
	1: 'wood',
	2: 'clay',
	3: 'iron',
	4: 'crop',
	5: 'sawmill',
	6: 'brickyard',
	7: 'iron foundry',
	8: 'grain mill',
	9: 'bakery',
	10: 'warehouse',
	11: 'granary',
	12: '',
	13: 'smithy',
	14: 'tournament square',
	15: 'main building',
	16: 'rally point',
	17: 'marketplace',
	18: 'embassy',
	19: 'barracks',
	20: 'stable',
	21: 'workshop',
	22: 'academy',
	23: 'cranny',
	24: 'town hall',
	25: 'residence',
	26: 'palace',
	27: 'treasury',
	28: 'trade office',
	29: 'great barracks',
	30: 'great stable',
	31: 'city wall',
	32: 'earth wall',
	33: 'palisade',
	34: 'stonemasons lodge',
	35: 'brewery',
	36: 'trapper',
	37: '',
	38: 'great warehouse',
	39: 'great granary',
	40: 'world of wonder',
	41: 'horse drinking trough',
	42: 'water ditch',
	43: 'natarian wall',
	44: '',
	45: 'hidden treasury'
};

export const troops: any = {
	// roman units
	1: {
		1: {
			name: 'Legionnaire',
			attack: 40,
			speed: 6,
			infantry_defense: 35,
			calvary_defense: 50,
			carry_capacity: 50,
		},
		2: {
			name: 'Praetorian',
			attack: 30,
			speed: 5,
			infantry_defense: 65,
			calvary_defense: 35,
			carry_capacity: 20,
		},
		3: {
			name: 'Imperian',
			attack: 70,
			speed: 7,
			infantry_defense: 40,
			calvary_defense: 25,
			carry_capacity: 50,
		},
		4: {
			name: 'Equites Legati',
			attack: 0,
			speed: 16,
			infantry_defense: 20,
			calvary_defense: 10,
			carry_capacity: 0,
		},
		5: {
			name: 'Equites Imperatoris',
			attack: 120,
			speed: 14,
			infantry_defense: 65,
			calvary_defense: 50,
			carry_capacity: 100,
		},
		6: {
			name: 'Equites Caesaris',
			attack: 180,
			speed: 10,
			infantry_defense: 80,
			calvary_defense: 105,
			carry_capacity: 70,
		},
		7: {
			name: 'Battering Ram',
			attack: 60,
			speed: 4,
			infantry_defense: 30,
			calvary_defense: 75,
			carry_capacity: 0,
		},
		8: {
			name: 'Fire Catapult',
			attack: 75,
			speed: 3,
			infantry_defense: 60,
			calvary_defense: 10,
			carry_capacity: 0,
		},
		9: {
			name: 'Senator',
			attack: 50,
			speed: 4,
			infantry_defense: 40,
			calvary_defense: 30,
			carry_capacity: 0,
		},
		10: {
			name: 'Settler',
			attack: 0,
			speed: 5,
			infantry_defense: 80,
			calvary_defense: 80,
			carry_capacity: 3000,
		},
	},
	// teuton units
	2: {
		1: {
			name: 'Clubswinger',
			attack: 40,
			speed: 7,
			infantry_defense: 20,
			calvary_defense: 5,
			carry_capacity: 60,
		},
		2: {
			name: 'Spearman',
			attack: 10,
			speed: 7,
			infantry_defense: 35,
			calvary_defense: 60,
			carry_capacity: 40,
		},
		3: {
			name: 'Axeman',
			attack: 60,
			speed: 7,
			infantry_defense: 30,
			calvary_defense: 30,
			carry_capacity: 50,
		},
		4: {
			name: 'Scout',
			attack: 0,
			speed: 10,
			infantry_defense: 10,
			calvary_defense: 5,
			carry_capacity: 0,
		},
		5: {
			name: 'Paladin',
			attack: 55,
			speed: 10,
			infantry_defense: 100,
			calvary_defense: 40,
			carry_capacity: 110,
		},
		6: {
			name: 'Teutonic Knight',
			attack: 150,
			speed: 9,
			infantry_defense: 50,
			calvary_defense: 75,
			carry_capacity: 80,
		},
		7: {
			name: 'Ram',
			attack: 65,
			speed: 4,
			infantry_defense: 30,
			calvary_defense: 80,
			carry_capacity: 0,
		},
		8: {
			name: 'Catapult',
			attack: 50,
			speed: 3,
			infantry_defense: 60,
			calvary_defense: 10,
			carry_capacity: 0,
		},
		9: {
			name: 'Chief',
			attack: 40,
			speed: 4,
			infantry_defense: 60,
			calvary_defense: 40,
			carry_capacity: 0,
		},
		10: {
			name: 'Settler',
			attack: 0,
			speed: 5,
			infantry_defense: 80,
			calvary_defense: 80,
			carry_capacity: 3000,
		}
	},
	// gaul units
	3: {
		1: {
			name: 'Phalanx',
			attack: 15,
			speed: 7,
			infantry_defense: 40,
			calvary_defense: 50,
			carry_capacity: 35,
		},
		2: {
			name: 'Swordsman',
			attack: 65,
			speed: 6,
			infantry_defense: 35,
			calvary_defense: 20,
			carry_capacity: 45,
		},
		3: {
			name: 'Pathfinder',
			attack: 0,
			speed: 17,
			infantry_defense: 20,
			calvary_defense: 10,
			carry_capacity: 0,
		},
		4: {
			name: 'Theutates Thunder',
			attack: 90,
			speed: 19,
			infantry_defense: 25,
			calvary_defense: 40,
			carry_capacity: 75,
		},
		5: {
			name: 'Druidrider',
			attack: 45,
			speed: 16,
			infantry_defense: 115,
			calvary_defense: 55,
			carry_capacity: 35,
		},
		6: {
			name: 'Haeduan',
			attack: 140,
			speed: 13,
			infantry_defense: 60,
			calvary_defense: 165,
			carry_capacity: 65,
		},
		7: {
			name: 'Ram',
			attack: 50,
			speed: 4,
			infantry_defense: 30,
			calvary_defense: 105,
			carry_capacity: 0,
		},
		8: {
			name: 'Trebuchet',
			attack: 70,
			speed: 3,
			infantry_defense: 45,
			calvary_defense: 10,
			carry_capacity: 0,
		},
		9: {
			name: 'Chieftain',
			attack: 40,
			speed: 5,
			infantry_defense: 50,
			calvary_defense: 50,
			carry_capacity: 0,
		},
		10: {
			name: 'Settler',
			attack: 0,
			speed: 5,
			infantry_defense: 80,
			calvary_defense: 80,
			carry_capacity: 3000,
		}
	}
};
