const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("top.ejs");
})

module.exports = router;