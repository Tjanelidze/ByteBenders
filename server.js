const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bodyParse = require("body-parser");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(
  bodyParse.urlencoded({
    extended: true,
  })
);

mongoose
  .connect(
    "mongodb+srv://avtogvenetadze24:LD0FlbVK4ln7Cla9@cluster0.poarz23.mongodb.net/mydb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("conected to mongoDB");
  })
  .catch((err) => {
    console.error("error connecting to mongoDB:", err);
  });

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  confirm: String,
});

const User = mongoose.model("User", userSchema);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.get("/", (req, res) => {
  return res.redirect("index.html");
});

app.post("/register", async (req, res) => {
  try {
    const { email, password, confirm } = req.body;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      res
        .status(400)
        .json({ error: "user with this username already exists " });
    } else {
      const newUser = new User({ email, password, confirm });
      await newUser.save();
      res.status(201).json({ error: "user created successfully " });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

/////////////////////////////////////////////////////////////////////

app.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ error: "User not found" });
      return;
    }

    // const passwordMatch = password === user.password;

    if (password === user.password) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Authentication failed " });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});
