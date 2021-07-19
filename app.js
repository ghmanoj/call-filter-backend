const express = require('express');
const app = express();
const PORT = 8081;


let mockData = {
	'page_number': 0,
	'more_available': false,
	'spammers': [
		{
			'id': 0,
			'number': '9379093281',
			'state': 'Ohio',
			'type': 0 // phone scammer
		},
		{
			'id': 1,
			'number': '9378932110',
			'state': 'Ohio',
			'type': 1 // message scammer
		},
		{
			'id': 2,
			'number': '5200382390',
			'state': 'Arizona',
			'type': 1 // message scammer
		}
	]
}



app.get("/latest_spamdb", async (req, res) => {
	console.log(req.headers);
	res.send(mockData);
});


app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`)
});