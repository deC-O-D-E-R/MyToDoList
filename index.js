import express from "express";

const app = express();
const port = 2000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/todo", (req, res) => {
    res.render("todo.ejs");
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.listen(port, () => {
    console.log(`server running on port ${port}.`);
});