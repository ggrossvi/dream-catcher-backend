const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//   app.get(“/status”, (request, response));
//   response.send(status) is now a function that takes the JSON object as the argument.

// app.get(“/status”, (request, response) => {
//    const status = {
//       “Status”: “Running”
//    };
   
//    response.send(status);
//});