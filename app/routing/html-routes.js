const path = require("path");


module.exports =(app)=>{

	// app.get('/', (req, res)=>{
	// 	res.sendFile(path.join(__dirname, '../public/test.html'))
	// });

	app.get("/", (req, res)=>{
	    res.sendFile(path.join(__dirname, "../public/questionnaire.html"));
	});

};
