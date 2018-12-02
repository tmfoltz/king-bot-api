class logger {
	write(obj: any, category: string, level: string) {
		console.log(obj);
	}

}

export default new logger();
