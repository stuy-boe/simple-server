const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const testRoutes = require("./test-routes");

// body-parser is an express middleware that parses the post body for us
// it adds converts the post data into an object you can access from req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// We created our own router middleware for some routes
// check out the test-routes.js file to see how this works
app.use(testRoutes);


// Catch-all response
app.get("/random/:limit", (req, res) => {
	const limit = Number(req.params.limit);
	const randomNumber = Math.floor( Math.random() * limit );

	res.send("Your random number is " + randomNumber);
});

app.listen(3000, () => console.log("Listening on port 3000"));
