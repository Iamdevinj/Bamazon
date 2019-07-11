// what im pulling from 
var inquirer = require("inquirer")
var mysql = require ("mysql")

// creat the connection to mySQL
var connect = mysql.createConnection({
    host:"localhost",
    PORT:3306,
    user:"root",
    password: "dj101489",
    database:"bamazon"
})