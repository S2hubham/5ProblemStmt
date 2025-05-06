const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    const options = {
        root: path.join(__dirname)
    };

    const fileName = './index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
