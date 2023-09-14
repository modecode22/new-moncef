import * as nodemailer from "nodemailer";
const MY_EMAIL = import.meta.env.MY_EMAIL;
const MY_PASSWORD = import.meta.env.MY_PASSWORD;




export const sendEmail = async (
{name, email,message}: { name: string,
  email: string,
  message: string
}): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: MY_EMAIL,
      pass: MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: MY_EMAIL,
    to: "aissaouimoncefdev@gmail.com",
    subject: `Contact form submission from ${name}`,
    text: `Email: ${email}\nMessage: ${message}`,
  };

  await transporter.sendMail(mailOptions);
};
