const model = require('../Model/model');
const nodemailer = require('nodemailer');
require('dotenv').config();
const postRequest = (req, res) => {
    const qaisarData = new model({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })
    qaisarData
        .save()
        .then(response => res.json(response))
        .catch(err => console.log(err))

    // send message on email
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER, // generated ethereal user
            pass: process.env.PASS // generated ethereal password
        },
    });

    var info = transporter.sendMail({
        from: qaisarData.email,
        to: "qaisarr108@gmail.com",
        subject: `HELLO ${req.body.name}`,
        html: req.body.message,
    });

    transporter.sendMail(info, function(err, info) {
        if (info) {
            console.log("Email Sent" + info.response);
        } else {
            console.log(err);
        }
    })

}
module.exports = postRequest