var express = require('express');
var router = express.Router();

const { createConnection, getRepository } = require('typeorm');
const { UserSchema, User } = require('../entities/users');
const { ProductSchema, Product } = require('../entities/product');

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'ecomm',
  entities: [UserSchema, ProductSchema] ,
})


router.post('/login', async function(req, res){


  try {
    // Extract email and password from request body
    const { email, password } = req.body;
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ email: email });   
    // If user not found, return error
    console.log('user is', user)
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Compare password with hash stored in database
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log('password', password)
    // If password does not match, return error
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }


    // Return success response
    if (user.role === 'admin') {
        return res.redirect('./html/order');
      } else {
        return res.redirect('./html/product');
      }


  } catch (error) {
    console.error(error);
    res.send()
  }

   
})

router.get('/get-product', async function(req, res){
  const productRepository = getRepository(Product);
  const products = await productRepository.find();
  console.log(products);
  res.json(products)
})





module.exports = router;
