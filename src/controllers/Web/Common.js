import {
  successResponce, errorResponce,
} from '../../utils/exchange';
import contactUsEmail from '../../utils/email/contactUsEmail';

export default class Common {
  static async sentContactMail(req, res, next) {
    try {
      const emailData = await contactUsEmail(req.body.email, req.body.subject, req.body.message);
      if (!emailData.success) {
        return errorResponce(req, res, emailData.msg, 400, 'mail', {});
      }
      return successResponce(
        req,
        res,
        'Message sent to wantJSON team successfully',
        202,
        {},
      );
    } catch (_error) {
      return next(_error);
    }
  }
}
