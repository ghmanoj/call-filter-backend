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
			'type': faker.datatype.number(1),
			'manual': false
		})
	}

	let lastIdx = fakeData['spammers'].length

	fakeData['spammers'].push({
		'id': lastIdx,
		'number': '937-123-4567',
		'state': 'Ohio',
		'type': 0,
		'manual': true
	});

	fakeData['spammers'].push({
		'id': lastIdx+1,
		'number': '937-123-4567',
		'state': 'Ohio',
		'type': 1,
		'manual': true
	});

	return fakeData;
}


app.get("/latest_spamdb", async (req, res) => {
	let size = req.query['size'] || 6120
	console.log(`Sending ${size} data sets`)
	let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
	console.log(`Received request from ${ip}`)
	
	let data = getRandomDataSet(size);
	res.send(data);
});


app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`)
});