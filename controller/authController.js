const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// SIGNUP
exports.signup = async (req, res) => {
  try {
    const { name, email, password, company } = req.body;

    // 1. Hash (Encrypt) the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 2. Create and Save User
    const newUser = new User({
      name,
      email,
      company,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // 2. Compare password with encrypted version
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // 3. Create JWToken (The 'Secret Key' can be anything for now)
    const token = jwt.sign({ id: user._id }, 'SECRET_KEY_123', { expiresIn: '1h' });

    res.json({
      token,
      user: { name: user.name, company: user.company }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};