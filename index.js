const express = require("express")

const app = express();

app.use(express.json())

app.use('/auth', require("./routes/auth"))

app.listen((5000), () => {
    console.log("Connecting on port 5000")
})