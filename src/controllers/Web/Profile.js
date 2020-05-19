import { successResponce } from '../../utils/exchange';
import userModule from '../../helper/user';

export default class Profile {
  static async get(req, res, next) {
    try {
      const profileData = await userModule.getWithPublicData({
        id: req.userID,
      });
      return successResponce(
        req,
        res,
        'Profile data fetched successfully',
        202,
        profileData,
      );
    } catch (_error) {
      return next(_error);
    }
  }

  static async update(req, res, next) {
    try {
      await userModule.update(
        { id: req.userID },
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          displayName: req.body.displayName,
          url: req.body.url,
        },
      );
      return successResponce(req, res, 'Profile updated successfully', 202, {});
    } catch (_error) {
      return next(_error);
    }
  }
}
