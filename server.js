let express = require('express');
let path = require('path');
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', '/index.html'));
});

app.get('/map', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', '/map.html'));
});

app.get('/profile', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', '/profile.html'));
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});