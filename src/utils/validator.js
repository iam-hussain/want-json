import { body, param } from 'express-validator';
import validator from 'validator';
import Sequelize from 'sequelize';
import userModule from '../helper/user';
import payloadModule from '../helper/payload';
import payloadUtils from './payload';
import { profaneCheck } from './profanity';

const isFirstName = body('firstName')
  .isLength({
    min: 4,
  })
  .withMessage('Provide a valid First Name with min 4 letters');

const isFirstNameProfane = body('firstName').custom((value) => {
  if (value && profaneCheck(value)) {
    throw new Error('Profanity words and reserved words are not allowed');
  }
  return true;
});

const isLastName = body('lastName')
  .isLength({
    min: 4,
  })
  .withMessage('Provide a valid Last Name with min 4 letters');

const isLastNameProfane = body('lastName').custom((value) => {
  if (value && profaneCheck(value)) {
    throw new Error('Profanity words and reserved words are not allowed');
  }
  return true;
});

const isURL = body('url')
  .notEmpty()
  .withMessage('URL must be provided')
  .isURL()
  .withMessage('Provide a valid URL');

const isDisplayName = body('displayName')
  .isLength({
    min: 4,
  })
  .withMessage('Provide a valid display name with min 4 letters');

const isDisplayNameTaken = body('displayName').custom(async (value, { req }) => {
  if (value) {
    if (
      await userModule.existCheck({
        displayName: value,
        id: { [Sequelize.Op.not]: req.params.id },
      })
    ) {
      throw new Error('This display name is already taken please different name');
    } else if (profaneCheck(value)) {
      throw new Error('Profanity words and reserved words are not allowed');
    }
  }
  return true;
});

const isEmail = body('email')
  .notEmpty()
  .withMessage('Email must be provided')
  .isEmail()
  .withMessage('Provied a valid Email ID!');

const isPassword = body('password')
  .isLength({
    min: 8,
  })
  .withMessage('Provide a valid Password with min 8 letters');

const isEmailTaken = body('email').custom(async (value) => {
  if (await userModule.existCheck({ email: value })) {
    throw new Error('This Email ID is already registered, Try to Login!');
  }
  return true;
});

const isEmailExist = body('email').custom(async (value) => {
  if (!(await userModule.existCheck({ email: value }))) {
    throw new Error('This Email ID is not registered yet, Try to Register!');
  }
  return true;
});

const isOTP = body('otp').notEmpty().withMessage('OTP must be provided');

const isCurrentPassword = body('current_password')
  .notEmpty()
  .withMessage('Current password must be provided')
  .isLength({
    min: 8,
  })
  .withMessage('Provide a valid Password with min 8 letters');

const isAuthType = body('type')
  .notEmpty()
  .withMessage('Type must be provided')
  .isIn(['email_verify', 'reset_password'])
  .withMessage('Provide a valid OTP type');

// Payload
const isTitle = body('title')
  .isLength({
    min: 4,
  })
  .withMessage('Provide a valid Title with min 4 letters');

const isTitleTakenByAny = body('title').custom(async (value) => {
  if (value) {
    const url = await payloadUtils.urlMaker(value);
    if (await payloadModule.existCheck({ url })) {
      throw new Error('This title is already taken please different title');
    } else if (profaneCheck(value)) {
      throw new Error('Profanity words and reserved words are not allowed');
    }
  }
  return true;
});

const isTitleExistByOther = body('title').custom(async (value, { req }) => {
  if (value && req.params.id) {
    const url = await payloadUtils.urlMaker(value);
    if (
      await payloadModule.existCheck({
        url,
        id: { [Sequelize.Op.not]: req.params.id },
      })
    ) {
      throw new Error('This title is already taken please different title');
    }
  }
  return true;
});

const isDescription = body('description')
  .isLength({
    min: 10,
  })
  .withMessage('Provide a valid Description with min 10 letters');

const isDescriptionProfane = body('description').custom((value) => {
  if (value && profaneCheck(value)) {
    throw new Error('Profanity words and reserved words are not allowed');
  }
  return true;
});

const isKeywords = body('keywords')
  .isArray({
    min: 1,
    max: 6,
  })
  .withMessage('Provide a valid keywords with min 1 and max 6 words');


const isKeywordsProfane = body('keywords').custom((value) => {
  if (value && value.length > 0) {
    value.map((v) => {
      if (profaneCheck(v)) {
        throw new Error('Profanity words and reserved words are not allowed');
      }
      return v;
    });
    return true;
  }
  return true;
});

const isType = body('type')
  .isIn(['static', 'dynamic'])
  .withMessage('Provide a valid data type');

const isVisibility = body('visibility')
  .isIn(['public', 'private'])
  .withMessage('Provide a valid visibility type');

const isValidHasAuth = body('hasAuth').custom(async (value, { req }) => {
  if ((value === true || value === false) && req.body.visibility) {
    if (req.body.visibility === 'private' && !value) {
      throw new Error('Private payload must have header authentication');
    }
  }
  return true;
});

const isPayloadData = body('data').custom(async (value, { req }) => {
  if (!value) {
    throw new Error('Data must be provided');
  }
  if (req.body.type === 'dynamic' && !Array.isArray(value)) {
    throw new Error('Provide a valid Aarry format !');
  }
  if (req.body.type === 'static' && !(value instanceof Object)) {
    throw new Error('Provide a valid JSON format !');
  }
  if (!(value instanceof Object)) {
    throw new Error('Provide a valid JSON!');
  }
  return true;
});

const isUUID = param('id')
  .notEmpty()
  .withMessage('ID must be provided')
  .isUUID()
  .withMessage('This is not an valid ID!');

const isValidClonePayloadId = param('id').custom(async (value) => {
  if (validator.isUUID(value)) {
    const payloadIs = await payloadModule.getFullData({
      id: value,
    });
    if (!payloadIs.id) {
      throw new Error('No payload found in this ID!');
    }
    if (payloadIs.visibility !== 'public') {
      throw new Error("You don't have access to edit this payload!");
    }
  }
  return true;
});

const isURLOptional = body('cloneUrl')
  .optional()
  .isString()
  .withMessage('Provide a valid string for cloneUrl');

const isValidCloneURL = body('cloneUrl').custom(async (value, { req }) => {
  if (value) {
    const payloadIs = await payloadModule.getFullData({
      url: value,
    }).then((p) => p.get({ plain: true }));
    if (!payloadIs.id) {
      throw new Error('No payload found in this URL!');
    }
    if (payloadIs.visibility !== 'public') {
      throw new Error("You don't have access to edit this payload!");
    }
    req.body.cloanID = payloadIs.id;
  }
  return true;
});

const isValidPayloadAndOwner = param('id').custom(async (value, { req }) => {
  if (validator.isUUID(value)) {
    const payloadIs = await payloadModule.getFullData({
      id: value,
    });
    if (!payloadIs.id) {
      throw new Error('No payload found in this ID!');
    }
    if (payloadIs.status !== 'active') {
      throw new Error('This payload is deleted, please try to restore');
    }
    if (payloadIs.user_id !== req.userID) {
      throw new Error("You don't have access to edit this payload!");
    }
  }
  return true;
});

const isDeletedPayloadAndOwner = param('id').custom(async (value, { req }) => {
  if (validator.isUUID(value)) {
    const payloadIs = await payloadModule.getFullData({
      id: value,
    });
    if (!payloadIs.id) {
      throw new Error('No payload found in this ID!');
    }
    if (payloadIs.status !== 'inactive') {
      throw new Error('This payload is already deleted!');
    }

    if (payloadIs.user_id !== req.userID) {
      throw new Error("You don't have access to edit this payload!");
    }
  }
  return true;
});

const isValidURL = param('url').custom(async (value) => {
  if (value) {
    const payloadIs = await payloadModule.getFullData({
      url: value,
    });
    if (!payloadIs.id) {
      throw new Error('No payload found in this URL!');
    }
  }
  return true;
});

const isSortBy = body('sortBy')
  .optional()
  .isIn(['hitCount', 'viewCount', 'createdAt'])
  .withMessage('Provide a valid sort type');

const isOrderBy = body('orderBy')
  .optional()
  .isIn(['ASC', 'DESC'])
  .withMessage('Provide a valid order type');


const isMailSubject = body('subject')
  .isLength({
    min: 10,
    max: 100,
  })
  .withMessage('Provide a valid subject with min 10 letters and max 100 letters');

const isMailMessage = body('message')
  .isLength({
    min: 100,
    max: 1000,
  })
  .withMessage('Provide a valid message with min 100 letters and max 1000 letters');

export const profileUpdateRules = [isFirstName, isLastName, isFirstNameProfane,
  isLastNameProfane, isDisplayName, isDisplayNameTaken, isURL];

// Export Validator
export const registerRules = [isEmail, isPassword, isEmailTaken];
export const loginRules = [isEmail, isPassword, isEmailExist];
export const sendOTPRules = [isEmail, isEmailExist, isAuthType];
export const emailVerifyRules = [isEmail, isEmailExist, isOTP];
export const resetPasswordRules = [isEmail, isEmailExist, isOTP, isPassword];
export const changePasswordRules = [isCurrentPassword, isPassword];

// Payload
export const getOnePayloadRules = [isUUID, isValidPayloadAndOwner];
export const createPayloadRules = [
  isTitle,
  isDescription,
  isDescriptionProfane,
  isKeywords,
  isKeywordsProfane,
  isType,
  isValidHasAuth,
  isVisibility,
  isPayloadData,
  isTitleTakenByAny,
  isURLOptional,
  isValidCloneURL,
];

export const clonePayloadRules = [
  isValidClonePayloadId,
];

export const updatePayloadRules = [
  isTitle,
  isDescription,
  isDescriptionProfane,
  isKeywords,
  isKeywordsProfane,
  isType,
  isValidHasAuth,
  isVisibility,
  isPayloadData,
  isUUID,
  isValidPayloadAndOwner,
  isTitleExistByOther,
];
export const deletePayloadRules = [isUUID, isValidPayloadAndOwner];
export const restorePayloadRules = [isUUID, isDeletedPayloadAndOwner];
export const exploreRules = [isSortBy, isOrderBy];
export const exploreOneRules = [isValidURL];
export const contactUSRules = [isEmail, isMailMessage, isMailSubject];

