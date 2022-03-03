var express = require("express");
const res = require("express/lib/response");
var app = express();


app.get("/", function (req, res) {
    res.send("You're connected")
})

app.use(express.static("public"));
app.get("/home", function (req, res) {
    res.render("house.ejs")
})


app.get('/posts', function (req, res) {
    var posts = [
        { title: 'Me', author: "Ahammed" },
        { title: 'You', author: "Afrin" },
        { title: 'Who', author: "Ganesh" },
    ]


    res.render("posts.ejs", { posts: posts });
})

app.get("*", function (req, res) {
    res.send("Page not found")
})

app.listen(3232, function () {
    console.log('Server has started')
})