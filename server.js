const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('BACKEND IS OPERATIONAL')
});

const PORT = process.env.Port || 5000;

app.listen(PORT, () => console.log(`Server lives on PORT ${PORT}`));

