
const admin=require('../model/admin')
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { estimatedDocumentCount } = require("../model/user");
//create a new student
exports.create = (req, res) => {
  /* only hashsync create a password not hash in bcrypt */
  // console.log(req.body);
  const hashedPass = bcrypt.hashSync(req.body.password, 8);
  admin
    .create({
      name: req.body.name,
      password: hashedPass,
      email: req.body.email,
      role: req.body.role,
    })
    .then((data) => {
      // console.log(data);
      res.json({ status: "ok", data: data });
    })
    .catch((err) => {
      console.log(err);
      res.json({ status: "err", err: err.message });
    });
};


   

exports.Adminlogin = (req, res) => {

  let password = req.body.password;
  admin
    .findOne({  email:req.body.email   })
    .then(async (data) => {
      if (!data) {
        res.json({ message: "Username not Found", status: "err" });
      } else {
        const authUser = await bcrypt.compareSync(password, data.password);
        if (authUser) {
          const token = jwt.sign(
            { id: data._id, role: data.role, balance: data.balance },
            process.env.SECRET,
            { algorithm: "HS256" }
          );
          res.header("Bearer", token);
          res.json({
            token: "Bearer " + token,
            data: data,
            status: "ok",
            message: "Successfully logged in",
          });
        } else {
          res.json({ message: "In correct Password", status: "err" });
        }
      }
    })
    .catch((err) => res.json({ status: "err", err: err.message }));
};
exports.getAdmin = (req, res) => {
  admin.find({role:req.params.role})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateAdmin = (req, res) => {
    admin
      .findOneAndUpdate(
        { _id: req.body.id },
       { $set:{
        name: req.body.name,
        password: hashedPass,
        email: req.body.email,
        role: req.body.role,
        }}
      )
      .then((data) => {
        res.json({message:"updated",value:data});
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Student.",
        });
      });
  };
  