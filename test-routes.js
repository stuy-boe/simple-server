const router = require("express").Router();

// --- IMPORTANT ---
// req stands for request
// res stands for response


router.get("/", (req, res) => {
	res.send("Hello!");
});


router.get("/greet/:name", (req, res) => {
	const name = req.params.name;

	res.send("Hey there " + name + "!");
});


router.get("/favorite-number", (req, res) => {
	const number = req.query.number;

	res.send("Wow " + number + " is my favorite number too!");
});


router.get("/test-post", (req, res) => {
	res.send(`
		<form method="post" action="/send-message">
			<input name="message">
			<button>send</button>
		</form>
	`);
});

router.post("/send-message", (req, res) => {
	const message = req.body.message;

	res.send("I got your message. Was it: " + message + " ?");
});



module.exports = router;
