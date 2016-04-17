var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

// create reusable transporter object using the default SMTP transport 
var transporter = nodemailer.createTransport(smtpTransport({
    host: 'lubuskasiecinnowacji.pl',
    secure: false,
    port: 25,
    auth: {
        user: 'net@lubuskasiecinnowacji.pl',
        pass: 'Luneti123!'
    },
    tls: {
        rejectUnauthorized: false
    }
}));

// setup e-mail data with unicode symbols 
var mailOptions = {
    from: '"Lubuska Siec Innowacji" <net@lubuskasiecinnowacji.pl>', // sender address
    to: 'koral.mi@gmail.com', // list of receivers
    subject: 'Rejestracja na na platformie Lubuskiej Sieci Innowacji', // Subject line
    text: 'Hello world 🐴', // plaintext body 
    html: '<b>Hello world 🐴</b>' // html body 
};

// send mail with defined transport object 
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});