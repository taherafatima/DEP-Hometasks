const express = require('express');
const app = express();

const imp = require('./implementation.js');

const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

var usersdata = [];

app.use(express.json({extended : false}) );

 
app.post('/users',  (req, res, next) => {  
  let emp = req.body;
  const userSchema = Joi
                    .object()
                    .keys({
                        id: Joi.number().integer().required(),
                        login: Joi.string().regex(/^[a-zA-Z]{3,30}$/).required(),
                        password: Joi.string().regex(/^[a-zA-Z0-9]{6,20}$/).required(),
                        age: Joi.number().integer().min(4).max(130).required(),
                        isDeleted: Joi.boolean().required(),
    });
  
  const result = userSchema.validate(req.body); 
  const { value, error } = result; 
  const valid = error == null; 
  
  if (!valid) { 
    res.status(422).json({ 
      message: result.error.details,  
    });
  } else { 
    usersdata.push(emp);
    res.send("Validated the data");
  } 
 });


app.put('/users/:id', function(req, res) {

    let emp = req.body;
    console.log(req.body);
    let updated = imp.updateUserDataById(usersdata, req.params.id, emp);
    console.log(updated);
    if(updated)
        res.send(emp);
        
    else
        res.send('ID not found');
}); 



app.get('/users/:id', function(req,res) {
    
    let getuser = imp.getUserByID(usersdata, req.params.id);
    if(getuser == 0)
        res.send('ID not found');
    else
        res.send(getuser);
});


app.delete('/users/:id', function(req,res) {

    let flag = imp.deleteUserByID(usersdata, req.params.id);

    if(flag) {
        usersdata[flag].isDeleted = true;
        res.send(usersdata[flag]);
    }
    else 
        res.send("ID not found");
})


app.get('/users/:subString/:limit', function(req,res) {
    usersdata.sort(imp.getSortedOrder("login"));
    let result = imp.getUsersBySubstring(usersdata, req.params.subString, req.params.limit);
    if(result.length == 0){
        res.status(404).json({message:`No Employees found with ${req.params.subString}`});
    } else {
        res.send(result);
    }
});