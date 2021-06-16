const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const creds = require('./config');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.name;
  const subject = req.body.subject;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: 'izabeladev88@gmail.com',
    subject: 'Contact Form Message',
    html: `<p>Name: ${name}</p> <p>Subject: ${subject}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'fail' });
    } else {
      res.json({ status: 'success' });
    }
  });
});
