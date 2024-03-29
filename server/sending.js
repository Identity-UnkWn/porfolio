const nodemailer = require("nodemailer")

const sending = (req,res)=>{
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
       port: 2525,
       auth: {
          user: "90d1a6abf063a8",
          pass: "7eabd1dc0c097a"
       }
    })

    const email = req.body.email;
    const text =  req.body.text;
    message = {
        from: email,
        to: "kjsanjay1104@gmail.com",
        subject: "Subject",
        text: text
     }
     transport.sendMail(message, function(err, info) {
        if (err) {
           console.log(err);
           res.status(500).json({ error: "Error sending email" });
        } else {
        console.log(info);
        res.status(200).json({ success: true });
        }
     });
}

module.exports = sending