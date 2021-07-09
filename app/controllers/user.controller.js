const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.initial = async () => {
  const initialdata = [{ "uid": 1, "login": "login1", "password": "mypass1", "age": 15 },
                       { "uid": 2, "login": "login2", "password": "mypass2", "age": 17 },
                       { "uid": 3, "login": "login3", "password": "mypass3", "age": 19 }];
  for (let i = 0; i < initialdata.length; i++)
    await User.create(initialdata[i]).then("DONE");
}


exports.create = (req, res) => {

  if (!req.body.uid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }


  const user = {
    uid: req.body.uid,
    login: req.body.login,
    password: req.body.password,
    age: req.body.age,
    isDeleted: req.body.isDeleted
  };

  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};


exports.findOne = (req, res) => {
  const findid = req.params.id;

  User.findByPk(findid)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.send({
          message: `Cannot find User with id=${findid}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + findid
      });
    });
};


exports.update = (req, res) => {
  const updateid = req.params.id;

  User.update(req.body, {
    where: { uid: updateid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${updateid}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + updateid
      });
    });
};

exports.delete = (req, res) => {
  const findid = req.params.id;

  User.destroy({
    where: { uid: findid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${findid}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + findid
      });
    });
};