import express from "express"
const app = express()
process.loadEnvFile()
const port = process.env.PORT || 3000
console.log(port)
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})