const fs = require('fs')
let data = fs.readFileSync('users.json')
let users = JSON.parse(data)
console.log(users)
// instantiate the app
const express = require('express')
const app = express()

const PORT = 3000
const server = app.listen(PORT, listening)
console.log(`App is running on PORT:${PORT}`)

function listening() {
 console.log('Callback confirmed')
}

// adding a second route path param
app.get('/loop/:query/:num', loop)
function loop(req,res){
 let data = req.params
 let num = data.num
 let reply = ""
 for (var i=0; i<num; i++){
  reply += `Print loop for ${data.query} \n`
 }
 res.send(reply)
}
// '?' makes score optional 
app.get('/add/:word/:score?', addWord)
function addWord(req,res){
 let data2 = req.params
 let word = data2.word
 let score = Number(data2.score)
 let reply

 if(!score){
  reply = "Score is a required path/parameter"
 } else {
// words = object at top of file (file database)
 users[word] = score

 reply = "Your word has been added"
}
 res.send(reply)
}

// show all file database entries
app.get('/all', sendAll)
function sendAll(req,res){
 res.send(users)
}

// search for word in file database
app.get('/search2/:fileDb', fileDB)
function fileDB(req,res){
 let fileDb = req.params.fileDb
 let reply
 if(users[fileDb]){
  reply = {
  status: "Found",
  fileDb,
  score: users[fileDb]
 }
 } else {
  reply = {
   status: "not found",
   fileDb
  }
 } res.send(reply)
}