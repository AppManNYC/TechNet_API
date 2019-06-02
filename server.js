const express = require('express');
const connectDB = require('./config/db');


const app = express();

connectDB();


app.get('/', (req, res) => {
	res.send('BACKEND IS OPERATIONAL')
});


app.use('/api/users', require('./controllers/api/users'));
app.use('/api/auth', require('./controllers/api/auth'));
app.use('/api/profile', require('./controllers/api/profiles'));
app.use('/api/posts', require('./controllers/api/posts'));



const PORT = process.env.Port || 5000;

app.listen(PORT, () => console.log(`Server lives on PORT ${PORT}`));

