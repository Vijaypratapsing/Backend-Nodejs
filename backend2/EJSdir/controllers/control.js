 function first(req, res) {
    try {
      res.send("hello world") 
    } catch(err) {
        console.log(err)
    }
}
module.exports = first;
