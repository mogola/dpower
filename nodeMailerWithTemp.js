const config = require('./config.json')
//handle email 
const nodeMailer = require('nodemailer')
const EmailTemplate = require('email-templates');

const transporter = nodeMailer.createTransport({
  host: 'smtp.ionos.fr',
  port: 465,
  secure: true,  //true for 465 port, false for other ports
  auth: {
    user: config.USER_EMAIL,
    pass: config.PASSWORD_EMAIL
  },
  tls: {
    rejectUnauthorized: false
  }
});

const email = new EmailTemplate({
  transport: transporter,  //true for 465 port, false for other port,
  send: true,
  preview: false,
  htmlToText: false
});



exports.getEmailInformationProject = function (emailowner, option, content) {
  email
    .send({
      template: "project",
      message: {
        from: config.USER_EMAIL,
        to: "mogola.sangare@gmail.com"
      },
      locals: {
        emailowner: emailowner,
        options: option,
        content: content
      }
    })
    .then((result) => console.log('email has been send!', result))
    .catch(console.error);
};