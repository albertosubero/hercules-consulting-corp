const express = require("express");
const cors = require("cors")
const port = 3900 || 3000;
// App init
console.log("🚀 - App is Run!!")

//Node Server
const app = express()

// Cors config
app.use(cors())

// Parser body to JSON
app.use(express.json())
// Parse form-urlencoded format
app.use(express.urlencoded({ extended: true }))

//Routes
const sendEmailRoutes = require("./sendemail/sendemail.router")
app.use("/api/email", sendEmailRoutes)

// Run Server
app.listen(port, () => {
  console.log(`🚀 ~ Server is listen on port ${port}`)
})