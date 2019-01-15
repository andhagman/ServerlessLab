export const handler = (event, context, cb) => {
    event.response.autoConfirmUser = true;
    event.response.autoVerifyEmail = true;

    cb(null, event);
};
