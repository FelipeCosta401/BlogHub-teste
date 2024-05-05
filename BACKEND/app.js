// Imports

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

//JSON express config
app.use(express.json());

//Models
const User = require("./models/User");

//Rotas

//Public Route
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo à API!" });
});

//Private Route
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  //Check if user exists
  const user = await User.findById(id, "-password");
  if (!user) {
    res.status(404).json({ msg: "Usuário não encontrado!" });
  } else{
    res.status(200).json({msg: "Logado"})
  }
});

//Register Route
app.post("/register", async (req, res) => {
  const { name, email, password, confpassword } = req.body;

  //Validations
  if (!name) {
    res.status(422).json({ msg: "O nome está invalido" });
  } else if (!email) {
    res.status(422).json({ msg: "O Email está invalido" });
  } else if (!password) {
    res.status(422).json({ msg: "A senha é invalida" });
  } else if (password !== confpassword) {
    res.status(422).json({ msg: "As senhas não condizem!" });
  } else {
    //Check if email is already registered
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(422).json({
        msg: "Esse email já foi cadastrado! Por favor utilize outro.",
      });
    } else {
      //create password
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      //create user
      const user = new User({
        name,
        email,
        password: passwordHash,
      });

      try {
        await user.save();

        res.status(201).json({ msg: "Usuário cadastrado com sucesso!" });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ msg: "Ops! Aconteceu um erro, estamos trabalhando nisso!" });
      }
    }
  }
});

//Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //Validations
  if (!email) {
    res.status(422).json({ msg: "O email está inválido!" });
  } else if (!password) {
    res.status(422).json({ msg: "A senha está inválida" });
  } else {
    //Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ msg: "Usuário não encontrado!" });
    } else {
      //Check password validation
      const checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword) {
        res.status(422).json({ msg: "Senha incorreta!" });
      } else {
        try {
          const secret = process.env.SECRET;

          const token = jwt.sign(
            {
              id: User._id,
            },
            secret
          );

          res.status(200).json({ msg: "Login efetuado com sucesso!", token });
        } catch (err) {
          console.log(err);
          res.status(500).json({
            msg: "Ops! Aconteceu um erro, estamos trabalhando nisso!",
          });
        }
      }
    }
  }
});

// Credentials
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:wYY8ba2UVLc4KIs9@cluster0.ckyru0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(3000);
    console.log("Conectado ao banco");
  })
  .catch((err) => {
    console.log(err);
  });
