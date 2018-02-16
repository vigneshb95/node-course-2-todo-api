const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

var id = '5a8601c8739284680e7cf12611aa';
/**
Todo.find({_id:id}).then((todos)=>{
  console.log('Todos',todos);
});

Todo.findOne({_id: id}).then((todo)=>{
  console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo by Id',todo);
});
**/
User.findById(id).then((user)=>{
  if(!user){
    return console.log('User not found');
  }
  console.log('User by Id',user);
}).catch((e)=> console.log(e));
