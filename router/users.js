import express from 'express';
import {v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const router = express.Router();

let users = [
   // {
    //    Firstname:"John",
    //     Lastname:"Doe",
    //     Age     :25
   // },
   // {
   //     firstname:"jiya",
   //     lastname:"raj",
   //     age      :24
   // }
]   




router.get('/', (req, res)=>{
   // const string = JSON.stringify(users,null,2)
   // res.send(string);
   
    res.json(users);

    res.send('hello');
})
router.post('/', (req,res)=>{
    const user= req.body;
    
     const userid = uuidv4();
      // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      const userwithid = {...user, id: userid};
    users.push(userwithid);
    
    res.send(`ur name ${user.firstname} is added to the database`);

})
router.get('/:id', (req,res)=>{
    const {id} = req.params;
    const finduser = users.find((user) => user.id = id);
    res.send(finduser);
})
router.delete('/id', (req,res)=>{
    const{id}= req.params;
   users=users.filter((user) => user.id!= id) ;
   res.send(`the user with ${id} id is deleted from the database`);
})
router.patch('/id', (req,res)=>{
    const{id}= req.params;
    const{ firstname, lastname, age} =req.body;
    const user= users.find((user) => user.id=id);
    if(firstname){
        user.firstname =firstname;
    }
    if(lastname){
        user.lastname =lastname;
    }
    if(age){
        user.age =age;
    }
    res.send(`the user with the id${id} is been updated`);
})

export default router;