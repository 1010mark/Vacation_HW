const express = require("express");
const app = express();
const helmet = require("helmet");
const bodyparser = require("body-parser")

app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public/product"));
app.use(helmet());
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.all("/*", (req, res, next) => {
    console.log(req.url);
    if (req.headers.host.match(/www/) != null)
        res.redirect("https://" + req.headers.host.replace(/^www\n/, '') + req.url);
    else next();
})

app.use("/", require("./routes/top.js"));
app.use("/post", require("./routes/post.js"));

app.listen(8000);
console.log("listen:8000")