var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'joannie.cormier58@ethereal.email',
      pass: '2Z4XTkAqtXyKhynaCy'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'avsg1991@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

const sendEmail = async(req, res) => {
  const { body } = req
  console.log("🚀 ~ sendEmail ~ body:", body)

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      return res.status(404).json({
        status: "error",
        //data: newFollow,
        mesaage: "Oops!, email is not sended!!"
      })
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({
        status: "success",
        //data: newFollow,
        mesaage: "Yes, email is sended!!"
      })
    }
  });
}

module.exports = {
  sendEmail
}