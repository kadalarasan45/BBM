const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Endpoint to handle email submissions
app.post('/subscribe', (req, res) => {
    const email = req.body.email;
    
    // Configure Nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Example using Gmail, you can use any email service
        auth: {
            user: 'kadalarasan29@gmail.com',
            pass: 'King@123'
        }
    });

    // Email options
    let mailOptions = {
        from: 'your-email@gmail.com',
        to: 'kadalarasancivil@gmail.com', // Where you want to receive submissions
        subject: 'New Subscriber',
        text: `New subscriber email: ${email}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.send('Error sending email.');
        } else {
            return res.send('Subscription successful!');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
