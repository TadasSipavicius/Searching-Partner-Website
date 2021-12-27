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

app.post("/blog/insert", (req, res) => {
    
    const blogTitle = req.body.blogTitle;
    const blogText = req.body.blogText;

    const sqlInsert = "INSERT INTO `blog` (`blog_title`, `blog_text`) VALUES (?,?)";
    db.query(sqlInsert, [blogTitle, blogText], (err, result) => {
        console.log(result);
    })
    
})

app.listen(3001, () => {
    console.log("Running on port 3001");
})