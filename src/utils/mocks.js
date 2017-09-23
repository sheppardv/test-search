import faker from 'Faker';


export const getFakeData = (key) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data[key]());
		}, getRand(600, 1200))
	});
};

const data = {
	'search-results': () => {
		const items = [];
		for (let i = 0; i < getRand(1, 10); i++) {
			items[i] = {
				name: faker.Company.companyName(),
				details: faker.Company.catchPhrase(),
			}
		}
		const total = getRand(0, 20);

		return {
			data: items,
			total,
		};
	}
};

function getRand(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
