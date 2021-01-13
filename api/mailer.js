const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// async..await is not allowed in global scope, must use a wrapper
async function mailer(name, email, phone, message) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'email.active24.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, //email
      pass: process.env.PASSWORD, //heslo
    },
  });

  // send mail with defined transport object
  let info = await transporter
    .sendMail({
      from: email, // sender address
      to: 'kofron.jiri@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: name + phone + message, // plain text body
      html: `<b>${name}, ${phone}, ${message} </b>`, // html body
    })
    .catch(console.error);

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

// mailer().catch(console.error);

module.exports = mailer;
