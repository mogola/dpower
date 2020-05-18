const express = require('express')
const app = express();
var path = require('path');

const cors = require('cors');
const bodyParser = require('body-parser')
// send mail
const mail = require('./nodeMailerWithTemp');

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5555;

app.use(express.static(path.join(__dirname, "dist")))
app.use('/css', express.static('css'));
app.use('/scss', express.static('scss'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'))
app.use('/fonts', express.static('fonts'))
app.use('/dist', express.static('dist'))
app.use('/public', express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    "Access-Control-Allow-Origin": "*"
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    });
});

app.post('/emailcontact', function (req, res) {
    console.log('req.body', req.body)
    try {
        const { email, option, content } = req.body
        mail.getEmailInformationProject(email, option, content);
        console.log('parameter url', email, option, content)
        res.json({
            'message': 'email reçu'
        })
    }
    catch (err) {
        res.send({
            'error': err
        })
    }
});


app.listen(port, function () {
    console.log(`Listenin ${port}`);
});