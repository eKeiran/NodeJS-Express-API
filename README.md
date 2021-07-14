# NodeJS-Express-API:

This is a code repository for the tasks I've been assigned in NodeJS and Express. Below is a summary of what each project/folder does and how I made them. </br>
 <h2><ins>1.) Node.js and Express API - Day 1</ins></h2>
<br>
This code creates an API using Node.js and Express and also handles all CURD operations through POSTMAN in a 'user' model with details like Full name, age, and phone number stored locally in the program itself. <br> 
 Here's a brief step-by-step summary of how I went about this and what the API can do:<br><br>
  
  First, I checked my Node.js version <code>("node -v")</code> which is v14.7.0, and installed express <code>("npm i --save express")</code> and then started with the steps below:  </li>  <br>
<ul><li>Created a folder for the API named <code>"NodeJs Express API"</code> in VS code.</li>
    <li>Started with the command <code>"npm init -y"</code> in the bash terminal of VS Code which created a <code>"package.json"</code> file, which contains the metadata, dependencies, and more information about the application.</li>
    <li>Created a main <code>"index.js"</code> file which the <code>"package.json"</code> file uses by default as the main file. </li>
    <li>Imported express and used it in a constant called <code>"api"</code> which handles the framework of the API. </li>
    <li>Used <code>express.json()</code> and <code>express.urlencoded()</code> in "api" which are functions that are called between processing the Request and sending the Response, also called middleware. These functions are required for POST and PUT requests to work. </li>
    <li>Created a constant for PORT on localhost and used the <code>api.listen()</code> function to use it. </li>
    <li>Created an <code>api.get()</code> function to display a message on the <code>localhost:port</code>. </li>
    <li>Ran a command called <code>"npm nodemon index.js"</code> so that the localhost server is updated automatically when the changes are saved.</li>
    <li>Created a folder called <code>"routes"</code> for a routes file named <code>"users.js"</code> which defines the routes that take the API to urls for what it needs to do, such as POST, PATCH, GET, DELETE and exported them so they can be accessed by other files.</li>
    <li>Then, imported <code>usersRoutes</code> in <code>"index.js"</code> from <code>"routes/user.js"</code> and made an <code>api.use()</code> function to GET the <code>"/users"</code> route.</li>
    <li>Typed <code>'/users'</code> as the first input in <code>api.use()</code> which means I won't have to type <code>'/users'</code> again in <code>"routes/user.js"</code> again because all routes will start from <code>'/users'</code> as that's the only route this program deal with. This won't be possible if there are multiple routes.</li>
    <li>Created a folder called <code>"controller"</code> with a <code>"users.js"</code> file in it which defines and exports all the functions that the route is supposed to perform such as <code>createUser(), getUser(), delUser()</code> etc.</li>
    <li>To get a specific user's details, a User ID is assigned to each user in <code>"controller/user.js"</code> under <code>createUser()</code> function.</li>
    <li>Imported and used the controller functions in the <code>"routes/users.js"</code> file. <br></li>
    <li>This API is expected to have the following user details to perform CURD operations on which I saved in a <code>"user.json"</code> file:<br> 
               <code> {
                 "fullName": "",
                  "age": "",
                   "phoneNo" : ""
                }</code> </li>
   <li>Checked all the POST, GET, PATCH, DELETE commands for the user details stored locally through POSTMAN. They all work. </li></ul>
   <h4><i>CONCLUSION: This API successfully performs all CURD operations on a user model with details stored in the program itself.<br></h4></i>
  <hr>
   <h2><ins>2.) Node.js and Express API Integrated with MySQL - Day 2</ins></h2>
   Here, I've connected the above API to a MySQL database and it contains two models namely "users" and "products" which mimics an e-commerce API. The details for users and products are stored in a MySQL database with tables: <code>tb_users</code> and <code>tb_products</code>. Below is a brief step by step explanation: 
   <ul><li>Installed <code>mysql2.js</code> package from: <code>"npm install mysql2"</code></li>
   <li>Created a database called <code>"ECOM_API"</code> in MySQL with the tables tb_users and tb_products</li>
  <li>Created two Stored Procedures in <code>ECOM_API</code> called <code>"CU_User"</code> and <code>"CU_Product"</code> where CU stands for create and update. These are accessed by the routes in controllers while updating or posting (POST or PUT) values in the table for users and tables as they perform the update in the table.</li>
      <li>Created a folder called  <code>"connections"</code> with a file <code>"MySQL_connection.js"</code> to enter the database details and connect it to Note.js. Then exported the variable <code>"sql"</code> from <code>"MySQL_connection.js"</code> as this variable deals with the SQL connection so it can be used to modify the tables.</li>
      <li>Created the routes file <code>"database_routes.js"</code> in the <code>"routes"</code> folder to route to <code>localhost:port/products</code> and <code>localhost:port/users</code> and exported it.</li>
    <li>Then, imported <code>usersRoutes</code> and <code>productsRoutes</code> in <code>"index.js"</code> from <code>"routes/database_routes.js"</code> and made an <code>app.use()</code> function to GET the <code>"/users"</code> and <code>"/products"</code> routes.</li>
  <li>Imported the routes from <code>"databse_routes.js"</code> to <code>"index.js"</code>, created the functions for it like done in the API above.</li>      
      <li>In the controllers folder, created two files, <code>"database_user"</code> and <code>"database_prod"</code> to define and export all the functions that the route is suposed to perfrom.</li>
     <li>Imported the variable from <code>"MySQL_connection.js"</code> files to <code>"database_user"</code> and <code>"database_prod"</code>.
      <li>Imported the functions from the controller files to <code>"routes/database_routes.js"</code></li>
      <li>Checked all the POST, GET, PUT, DELETE commands for the user details and product details through POSTMAN which modifies them in the MySQL database as well. They all worked just fine.</li>
   <li>This API is expected to have the following user details and product details to perform CURD operations on which I saved in a <code>user.json</code> and <code>products.json</code> file:<br> 
       <code> {
    "id":"",
    "fullName": "",
    "age": "",
    "phoneNo" : "" 
} </code> - For users. <br><code> {
    "id":"",
    "prodName": "",
    "brand": "",
    "price" : "" 
     }</code> - For products. </li>
      <ul>- The Create and Update functions are handled by the Stored Procedures and the work this way:
     <li> POST: Here POST works by sending a user/product with "ID": 0 in POSTMAN, and the API automatically adds the next number in the sequence of the ID column to the newly posted user/product.</li>
       <li>PUT: Here PUT works by  sending a user/product with an already existing ID in POSTMAN and entering all the details. This is a PUT function and not PATCH like in the previous program so every detail must be added. </li></ul></ul>
<h4><i>CONCLUSION: This API successfully performs all CURD operations in a MySQL database for a user and a products model.<br></h4></i>
  <hr>
   <h2><ins>3.) Node.js and Express API Integrating MySQL Databse Using ORM (Sequelize) - Day 3</ins></h2>
     Now, the above API's MySQL Databse isn't used by a pakage like <code>"mysql2"</code> but instead it is accessed and modified through an Object-Relation Mapping module called <code>"Sequelize"</code> which  maps the objects to database tables. Here's a step-by-step process:
     <ul><li>Installed sequelize with the command <code>"npm install --save sequelize"</code></li>
         <li>Created a file called <code>"Sequelize_connections"</code> to connect to the database.</li> 
         <li>Created a new database called <code>"ECOM_API_ORM"</code> with the same tables as above.</li> 
         <li>Imported the connection to <code>"database_user"</code> and <code>"database_prod"</code>.</li>
         <li>Created the controllers in the above files by refering to the sequelize manual.</li>
          <li>Imported, exported and used the routes file just as above.</li>
          <li>Created the same <code>user.json</code> and <code>products.json</code> files as above with the same details.</li>
            <li>Checked all the POST, GET, PUT, DELETE commands for the user details and product details through POSTMAN which modifies them in the MySQL database as well. They all worked just fine.</li>
           <h4><i>CONCLUSION: This API successfully performs all CURD operations on a user and products model with details stored in a MySQL database and accessed through an ORM module called Sequelize.<br></h4></i>
          
   
  
      
  
