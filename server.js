// const express = require('express');
// const app = express();
// const port = 3000; // Port number to run the server on

// // Serve static files from the "public" directory
// app.use(express.static('src'));

// // Define a route for the homepage
// app.get('/', (req, res) => {
//     // res.send('Hello, World!');
//     // res.sendFile(__dirname + '/src/index.html');
//     app.use(express.static('src'));

// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static('src'));

app.get('/', (req, res) => {
    // res.send('Hello, World!');
    // res.sendFile(__dirname + '/src/index.html');
    app.use(express.static('src'));
})

app.post('/sendEmail', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Outlook', // E.g., 'Gmail', 'Outlook'
        auth: {
            user: 'ppp.pattima@hotmail.com',
            pass: 'ppattimaa007',
        },
    });

    const mailOptions = {
        from: 'ppp.pattima@hotmail.com',
        to: 'ppp.pattima@hotmail.com',
        subject: `${subject}`,
        text: `New message from ${name}\nTel: ${phone}\nEmail: ${email}\n`+message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send();
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send();
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
