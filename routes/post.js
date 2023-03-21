const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("post.ejs");
})

router.post("/", (req, res) => {
    let data = req.body;
    switch(data.emo){
        case "ki":
            data.emo = "嬉しかった";
            break;
        case "do":
            data.emo = "怒った";
            break;
        case "ai":
            data.emo = "哀しかった";
            break;
        case "rk":
            data.emo = "楽しかった";
            break;
        default:
            res.send("予期せぬエラー。再度お試しください。")
    }
    res.render("check.ejs", data);
})

module.exports = router;