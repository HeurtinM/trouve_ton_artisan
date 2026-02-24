const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

console.log("MAIL_HOST:", process.env.MAIL_HOST);
console.log("MAIL_PORT:", process.env.MAIL_PORT);
console.log("MAIL_USER:", process.env.MAIL_USER);


const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  }
});

//la route n'est pas faite pour renvoier des donnée, ce message est just pour verifier rapidement le bon fonctionnement via URL si besoin
router.get("/", (req, res) => {
  res.json({ message: "Route contact OK" });
});

router.post("/", async (req, res) => {
  try {
    const { artisanEmail, nom, prenom, email, sujet, message } = req.body;

    await transporter.sendMail({
      from: `"${nom} + " " + ${prenom}" <${email}>`,
      to: artisanEmail,
      subject: sujet,
      text: message
    });

    res.json({ message: "Email envoyé !" });

  } catch (err) {
    console.error("Erreur envoi mail :", err);
    res.status(500).json({ error: "Erreur envoi mail" });
  }
});

module.exports = router;
