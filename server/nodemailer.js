const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
  {
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
      user: "IlyaFedoseevspb@yandex.ru",
      pass: "nvisilbzgihyjybo",
    },
  },
  {
    from: "Valutes chenge <IlyaFedoseevspb@yandex.ru>",
  }
);

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.error(err);
  });
}

module.exports = mailer