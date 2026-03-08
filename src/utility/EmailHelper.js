const nodemailer = require("nodemailer");

const EmailSend = async (EamilTo, EmailText, EmailSubject) => {
  let transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "832b924557a92c",
      pass: "0ed81e5d5a39a5",
    },
  });

  let mailOption = {
    from: `Donation Platform <sorif.khondoker32@gmail.com`,
    to: EamilTo,
    subject: EmailSubject,
    text: EmailText,
  };
  return await transport.sendMail(mailOption);
};

module.exports = EmailSend;
