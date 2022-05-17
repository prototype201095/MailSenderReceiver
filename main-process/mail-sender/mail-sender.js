const nodemailer = require("nodemailer");
class MailSender {
    constructor() {
        this.transporter = null;
    }

    async createTransporterObject() {
        if (this.transporter === null || this.transporter === undefined) {
            this.transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                requireTLS:true,
                auth: {
                    user: "guin.arpan1995@gmail.com", // generated ethereal user
                    pass: "lionelandressmessi", // generated ethereal password
                },
            });
        }
        return this.transporter;
    }

    async sendMessage() {
        let transporter = await this.createTransporterObject();
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'guin.arpan1995@gmail.com', // sender address
            to: "arpan@alumnux.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

    }

}

new MailSender().sendMessage();