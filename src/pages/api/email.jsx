export default function (req, res) {

     let nodemailer = require('nodemailer')

     let EMAIL_USER = process.env.EMAIL_USER
     let EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
     
     const contactPage =`
          <p><strong>Enquiries: </strong> ${req.body.Enquiries}</p>
          <p><strong>Email: </strong> ${req.body.Email}</p>
          <p><strong>Message: </strong> ${req.body.Message}</p>
     `

     const cottonBagsOrder = `
          <p><strong>Name: </strong>${req.body.name}</p>
          <p><strong>Email: </strong>${req.body.Email}</p>
          <p><strong>Product: </strong>${req.body.title}</p>
          <p><strong>Quantity: </strong>${req.body.customQuantity}</p>
          <p><strong>Delivery Date: </strong>${req.body.deliveryDate}</p>
          <p><strong>Colors: </strong>${req.body.colors}</p>
          <p><strong>Sides: </strong>${req.body.sides}</p>
     `

     const subject = req.body.page === 'contact' ? `Enquiries From ${req.body.Enquiries}` : `Order From ${req.body.name}`

     // step-1 
     const transporter = nodemailer.createTransport({
          port: 465,
          host: "smtp.gmail.com",
          auth: {
               user: EMAIL_USER,
               pass: EMAIL_PASSWORD,
          },
          secure: true,
     })

     // step-2
     const mailData = {
          from: EMAIL_USER,
          to: `${EMAIL_USER},sales@printwish.co.uk , ${req.body.Email}`,
          subject,
          text: "Sent from: PrintWist",
          html: req.body.page === 'contact' ? contactPage : cottonBagsOrder ,
          attachments: req.body.page === 'contact' ? '' : [{
               filename: req.body.file.name,
               path: req.body.file.url
          }]
     }

     // step-3
     transporter.sendMail(mailData, function (err, info) {
          if (err)
               console.log(err)
          else {
               res.status(200).json({ message: "email sended!", info })
          }
     })


}