const express = require('express')
const app = express();
var path = require('path');

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5555;

app.use(express.static(path.join(__dirname, "dist")))
app.use('/css', express.static('css'));
app.use('/scss', express.static('scss'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'))
app.use('/fonts', express.static('fonts'))
app.use('/dist', express.static('dist'))
app.use('/public', express.static('public'))


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    });
});

app.listen(port, function () {
    console.log(`Listenin ${port}`);
});