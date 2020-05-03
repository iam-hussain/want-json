import Locals from '@providers/Locals';
import Log from '../middlewares/Log';

const mailgun = require('mailgun-js');

const mg = mailgun({
    apiKey: Locals.mailgun.api_key,
    domain: Locals.mailgun.domain,
});
export default class hashingModule {
    static async sendEmail(to, subject, template, varible) {
        const data = {
            from: 'Excited User <me@samples.mailgun.org>', //  Locals.mailgun.sender,
            to,
            subject,
            template,
            'h:X-Mailgun-Variables': varible,
        };
        await mg.messages().send(data, (error, body) => {
            if (error && !body) {
                Log.error(
                    `[onError]${JSON.stringify(error)}, [onBody]${JSON.stringify(body)}`,
                );
                return {
                    success: false,
                    msg: 'Unknown error on sending mail',
                };
            }
            return {
                success: false,
                msg: 'Mail send successfully',
            };
        });
    }
}
