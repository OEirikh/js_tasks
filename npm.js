// const exp = require('joi');
// const Shortid = require('shortid'); - визов бивлиотек

const passwordSchema = Joi.string().min(3).max(10).alphanum();

console.log(passwordSchema.validate(qweqwe$));
