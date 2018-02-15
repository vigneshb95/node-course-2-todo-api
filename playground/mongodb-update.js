//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

/**db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID("5a852fc940318bfb59c9429d")
},{
  $set:{
    completed: true
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});**/

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("5a84a8d33cd6a50c1813665b")
},{
  $set:{
    name: 'Vignesh'
  },$inc:{
    age:1
    }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});
  //db.close();
});
