const express = require('express');
const faker = require('faker');

const app = express();
const PORT = 8081;



function getRandomDataSet(count) {
	let fakeData = {};
	fakeData['page_number'] = 0;
	fakeData['more_available'] = false;
	fakeData['spammers'] = [];

	for (let i = 0; i < count; i++) {
		fakeData['spammers'].push({
			'id': i,
			'number': faker.phone.phoneNumber("!##-!##-####"),
			'state': faker.address.state(),
			'type': faker.datatype.number(1)
		})
	}

	return fakeData;
}


app.get("/latest_spamdb", async (req, res) => {
	let data = getRandomDataSet(1000);
	res.send(data);
});


app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`)
});