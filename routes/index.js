var express = require('express');
var router = express.Router();
var apiURI = 'http://localhost:3000/api'

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


router.get('/login', async function(req, res, next){
    res.render('./html/login')
  
})

module.exports = router;