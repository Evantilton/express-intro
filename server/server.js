console.log('express intro');
let express = require('express')

const app = express();

const PORT = 5000;

let quotesData = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];



app.get('/', (req, res) => {
    console.log('I have been hit!')
    res.send('This is the base route!');
});

app.get('/welcome', (req, res) => {
    console.log('I have been hit!')
    res.sendStatus(200);
    res.send('This is the base route!');
    
});

app.get('/first', (req, res) => {
    console.log('I have been hit!')
    res.send(quotesData[1].quote);
    
});

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('Up and running on port', PORT);
});


