const express = require('express')
const app = express()
const port = 8080;

app.get('/:username/:id' ,(req, res) => {
  let {username,id}=req.params;
  res.send(`Hello World! I am root${username}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
// app.use((req,res)=>{
//   let code="<h1>fruit</h1>";
//   res.send(code);
//     console.log("hello");
// });
