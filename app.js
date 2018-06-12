var bodyParser  = require("body-parser");
var express     = require("express");
var expressSanitizer     = require("express-sanitizer");
var mongoose    = require("mongoose");
var methodOverride  = require("method-override");
var app        = express();


mongoose.connect("mongodb://localhost/rest_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


//MONGOOSE/MODEL CONFIG 
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type:Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Blog 1",
//     image: "https://www.gettyimages.ae/gi-resources/images/RoyaltyFree/Apr17Update/ColourSurge1.jpg",
//     body: "this is the first blog post i created"
// });



//RESTFUL ROUTES
app.get("/", function(req, res){
    res.redirect("blogs");
});
//INDEX
app.get("/blogs", function(req, res)
{
    
    Blog.find({}, function(err, blog)
    {
        if(err)
            {console.log("Error");}
        else
            {
                res.render("index", {blog: blog});
            }
    });
        
});

// NEW
app.get("/blogs/new", function(req, res){
    res.render("new");
});

// CREATE
app.post("/blogs", function(req, res)
{
    //create blog
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog){
         if(err)
         {res.render("new");}
    //redirect to blog     
        else{
            res.redirect("/blogs");
            }
    });
}); 
//Show route
app.get("/blogs/:id", function(req, res)
{
    Blog.findById(req.params.id, function(err, foundBlog)
    {
        if(err)
            {res.redirect("/blogs");}
        else
            {res.render("show", {blog: foundBlog});}
    });
});

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res)
{   
    Blog.findById(req.params.id, function(err, foundBlog)
    {
        if(err)
                {res.redirect("/blogs");}
            else
                {res.render("edit", {blog: foundBlog});}
    });
});   

//UPDATE ROUTE
app.put("/blogs/:id", function(req, res)
{   console.log(req.body.blog.body);
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog)
    {
          console.log(req.body.blog.body);
        if(err)
        {res.redirect("/blogs");}
        else
        {res.redirect("/blogs/" + req.params.id);}
    
    });
    // res.send("updated route");
});

//DELETE

app.delete("/blog/:id", function(req, res)
{
    Blog.findByIdAndRemove(req.params.id, function(err)
    {
        if(err)
        {res.redirect("/blogs");}
        else
        {res.redirect("/blogs");}
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!!")
}); 