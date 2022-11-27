const express = require("express")
const app = express()
const PORT = 3004

app.use(express.static("_site"))

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
