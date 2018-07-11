# RESTful Blog Application 

This app was built using Javascript, NodeJS, Express.JS, Embedded JavaScript (EJS) and more using best practices of RESTful techniques.

## Description
* **app.js** is the main file that is the heart of our NodeJS web application and contains the RESTful Routes defined for each event.
* **views** directory contains the relevant files, the EJS templates, that render on each event.
* **public/css** directory contains CSS to create better interface.
* **package.json** file contains the information towards the various frameworks that were installed within the course of this project.


### Frameworks & Middlewares:

* **ExpressJS** is used for Server Side Routing applications.
* **MongooseJS** is used for Back-End Database operations with MongoDB NoSQL Database.
* **Body-Parser** is used to Parse the data that was received as a result of HTTP POST request.
* **Method-Override** is used to override the HTTP verb to implement PUT and DELETE methods.
* **Express.Static()** is used to serve the Static files CSS, JS, etc. in the directory as specified.
* **Sanitizer** is used to sanitize the contents of HTML inputs and keeps the Database Safe.



### RESTful Routes:

| Name	| Path	| HTTP-Verb	| Purpose	| Mongoose-Method |
| ----- | ----- | --------- | ------- | --------------- |
| Index	| /blogs	| GET	| List all blogs	| Blog.find() |
| New	| /blogs/new	| GET	| Show new blog form |	N/A | 
| Create	| /blogs	| POST	| Create a new blog, then redirect somewhere	| Blog.create() | 
| Show	| /blogs/:id	| GET	| Show info about one specific blog	| Blog.findById() | 
| Edit	| /blogs/:id/edit	| GET	| Show edit form for one blog	| Blog.findById() | 
| Update	| /blogs/:id	| PUT	| Update a particular blog, then redirect somewhere	| Blog.findByIdAndUpdate() | 
| Destroy	| /blogs/:id	| DELETE	| Delete a particular blog, then redirect somewhere	| Blog.findByIdAndRemove() | 

## Deployment

App was deployed on Heroku, click link to go to page

## Built With

* HTML, CSS, SemanticUI
* Javascript
* NodeJS

## Authors
Venkatesh Sridharan

