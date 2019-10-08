console.log('express intro');
let express = require('express')

const app = express();

app.get('/', (req, res) => {
    console.log('I have been hit!')
    res.send('This is the base route!');
});
app.get('/welcome', (req, res) => {
    console.log('I have been hit!')
    res.sendStatus(200);
    res.send('This is the base route!');
    
});




app.listen(5000);

