const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "partnerfinderis"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/blog/get", (req, res) => {

    const sqlSelectAllBlogs = "SELECT * FROM blog";
    db.query(sqlSelectAllBlogs, (err, result) => {
        res.send(result);
    })
})

app.delete("/blog/delete/:blogID", (req, res) =>{
    
    const blogID = req.params.blogID;
    const sqlDeleteBlog = "DELETE FROM blog WHERE id = ?"

    db.query(sqlDeleteBlog, blogID, (err,result)=>{
        if(err){
            console.log(err);
        }
    });
})
app.post("/blog/insert", (req, res) => {
    
    const blogTitle = req.body.blogTitle;
    const blogText = req.body.blogText;
    const user_id = req.body.user_id;
    const sqlInsert = "INSERT INTO `blog` (`blog_title`, `blog_text`, `user_id`) VALUES (?,?,?)";
    db.query(sqlInsert, [blogTitle, blogText, user_id], (err, result) => {
        console.log(result);
    })
    
})

app.listen(3001, () => {
    console.log("Running on port 3001");
})