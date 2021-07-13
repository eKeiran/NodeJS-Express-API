# NodeJS-Express-API:
This is a code repository for the tasks I've been assigned in NodeJS and Express. Below is a summary of what each project/folder does and how I made them. </br>
<b><h2><ins>1.) Node.js-Express API Day 1</b></h2></ins>
<br>
This code creates an API using Node.js and Express and also handles all CURD operations through POSTMAN in a 'user' model with details like fullName, age and phoneNo. <br>
Here's a brief step-by-step summary of how I went about this and what the API can do:<br><br>
  
  First, I checked my Node.js version <code>(node -v )</code> which is v14.7.0 and installed express <code>(npm i --save express)</code> and then started with the steps below:  </li>  <br>
<ul><li>Created a folder for the API named "NodeJS Express API"  in VS code.</li>
    <li>Started with command <code>"npm init -y"</code> in the bash terminal of VS Code which created a package.json file, which contains the metadata, dependencies, and more information about the application.</li>
    <li>Created a main index.js file which the 'package.json' file uses by defualt as the main file. </li>
    <li>Imported express and used it in a constant called "api" which handles the framework of the api. </li>
    <li>Used express.json() and express.urlencoded() in "api" which are functions that are called between processing the Request and sending the Response, also called middleware. These fuctions are required for POST and PUT requests to work. </li>
    <li>Created a constant for PORT on localhost and used the api.listen() function to use it. </li>
    <li>Created an api.get() function to display a message on the localhost:port. </li>
    <li>Ran a npm nodemon index.js command so that the localhost server is updated automatically when changes are saved.</li>
    <li>Created a folder for routes for a routes file named "users.js" which routes the api to what it needs to do, from POST to PATCH to GET to DELETE and exports them so they can be accessed by other files.</li>
    <li>Then, imported usersRoutes in index.js from routes/user.js and made a api.use() function to GET the '/users' route.</li>
    <li>Typed '/users' as the first input in api.use() which means I won't have to type '/users' again in routes/user.js again because all routes will start from '/users' as that's the only route this program deal with. This won't be possible if there are multiple routes.</li>
    <li>Created a controller folder with a 'users.js' file which defines and exports all the functions that the route is suposed to perfrom such as createUser, getUser, etc.</li>
    <li>To get a specific user details, a UserID is assigned to each user in controller/user.js under createUser.</li>
    <li>Imported and used the controller functions in routes/user.js file. <br></li>
    <li>This api is expected to have the following user details to perform CURD operations on which I saved in a user.json file:<br> 
               <code> {
                 "fullName": "",
                  "age": "",
                   "phoneNo" : ""
                }</code> </li>
   <li>Checked all the POST, GET, PATCH, DELETE commands for the user details through postman. They all work. </li></ul>
   <h4><i>CONCLUSION: This API successfully performs all CURD operations on a user model.<br></h4></i>
  
   <h2><ins>2.) Node Js-Express API MySQL Day 2</h2></ins>
  
