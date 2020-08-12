// Load http from Node
let http =require("http");

// Saving http to a variable, and passing an anonmymous function.
let app = http.createServer(function(req, res) {
    
    if (req.url === '/') {
        res.end("Hello, Welcome to our Website!");
    }
    if (req.url === '/about') {
        res.end("Thanks for taking interest in our website.");
    }    
    res.end("This pages does not exist");
});

// Adding a port number inside the paranthesis.
app.listen(3000);