let express = require("express");
let app = express();

app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res) {
    res.send(`
        <form action="/answer" method="POST">
            <p>What color is sky on a clear and sunny day</p>
            <input name="skyColor" autocomplete="off">
            <button>Submit Answer</button>
        </form>
    `)
})

app.post('/answer', function(req, res) {
    if(req.body.skyColor.toLowerCase() === "blue") {
        res.send(`
            <h2>Congrats, that's the correct answer!</h2>
            <a href="/">Back to homepage</a>
        `)
    }
    else {
        res.send(`
        <h2>Sorry, it's Incorrect, try again.</h2>        
        <a href="/">Back to homepage</a>
        `)
    }
})

app.get('/answer', function(req, res) {
    res.send(`<p>Are you lost, there is nothing to see here.</p>`)
})

app.listen(3000);