import nodeMailer from 'nodemailer';
import Locals from '../providers/Locals';
import Log from '../middlewares/Log';

export default class notification {
  static async sendEmail(to, subject, html) {
    const transporter = nodeMailer.createTransport({
      service: Locals.mail.sevice,
      auth: {
        user: Locals.mail.user,
        pass: Locals.mail.password,
      },
    });

    const mailOptions = {
      from: Locals.mail.sender,
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    if (!info.messageId) {
      Log.error(
        `Unable to send OTP mail to ${to}`,
      );
      return {
        success: false,
        msg: 'Unknown error on sending mail',
      };
    }

    return {
      success: true,
      msg: 'Mail send successfully',
    };
  }
}
