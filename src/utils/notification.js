import Locals from '../providers/Locals';
import Log from '../middlewares/Log';

const AWS = require('aws-sdk');

AWS.config.update(Locals.aws);

export default class notification {
  static async sendEmail(to, subject, template) {
    const params = {
      Destination: {
        CcAddresses: [],
        ToAddresses: [to],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: template,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject,
        },
      },
      Source: Locals.mailSender,
      ReplyToAddresses: [Locals.contactEmail],
    };

    return new AWS.SES({
      apiVersion: '2010-12-01',
    }).sendEmail(params).promise().then(
      (data, err) => {
        if (err) {
          Log.error(err);
          return {
            success: false,
            msg: err,
          };
        }
        return {
          success: true,
          msg: 'Mail send successfully',
          data,
        };
      },
    );
  }
}

// const mg = mailgun({
//   apiKey: Locals.mail.apikey,
//   domain: Locals.mail.domain,
// });
// export default class notification {
//   static async sendEmail(to, subject, template, varible) {
//     const data = {
//       from: Locals.mail.sender,
//       to,
//       subject,
//       template,
//       ...varible,
//     };
//     // const mailPush = ses.sendEmail(params).promise();
//     return mg.messages().send(data, (error, body) => {
//       if (error && !body) {
//         Log.error(
//           `[onError]${JSON.stringify(error)}, [onBody]${JSON.stringify(body)}`,
//         );
//         return {
//           success: true,
//           msg: 'Unknown error on sending mail',
//         };
//       }
//       return {
//         success: false,
//         msg: 'Mail send successfully',
//       };
//     });
//   }
// }

// export default class notification {
//   static async sendEmail(to, subject, html) {
//     const transporter = nodeMailer.createTransport({
//       service: 'email-smtp.us-west-2.amazonaws.com',
//       auth: {
//         user: Locals.mail.user,
//         pass: Locals.mail.password,
//       },
//     });

//     const mailOptions = {
//       from: Locals.mail.sender,
//       to,
//       subject,
//       html,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     if (!info.messageId) {
//       Log.error(
//         `Unable to send OTP mail to ${to}`,
//       );
//       return {
//         success: false,
//         msg: 'Unknown error on sending mail',
//       };
//     }

//     return {
//       success: true,
//       msg: 'Mail send successfully',
//     };
//   }
// }
