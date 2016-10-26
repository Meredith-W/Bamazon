var prompt = require('prompt');
var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user:'root',
  password: '',
  database: 'bamazon'
})

// READ FILE ALL ITEMS

function readItems(){
connection.query('SELECT * FROM bamazon.products', function(err, res){
  if(err) throw err;
  console.log(res);
  });
}

readItems();

function takeOrder () {
      prompt.start();
      prompt.get(['item', 'quantity'], function (err, result) {

       console.log('Command-line input received:');
          console.log('item number: ' + result.item);
          console.log('quantity: ' + result.quantity);
        });
  }

takeOrder();

// var updatedQuan = stock_quantity - result.quantity ;

// function processOrder(){
// connection.query('UPDATE bamazon.products SET ? WHERE ?',[
//   {stock_quantity: updatedQuan },

//   {item_id: result.item},
  
//   ], function(err, res){
//     console.log(res);
//   });
// }


