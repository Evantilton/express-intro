console.log('express intro');
let express = require('express')

const app = express();

const PORT = 5000;

app.use(express.static('server/public'));
app.get('/', (req, res) => {
    console.log('I have been hit!')
    res.send('This is the base route!');
});

app.get('/welcome', (req, res) => {
    console.log('I have been hit!')
    res.sendStatus(200);
    res.send('This is the base route!');
    
});




app.listen(PORT, () => {
    console.log('Up and running on port', PORT);
});

