const express = require("express")

const app = express()

const PORT = 3001

app.get("/registration", (req, res) => {
    res.send("Registration page")
})

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/registration`))