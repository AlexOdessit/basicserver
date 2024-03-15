//middlewares
module.exports.middleware1 = async (req, res, next) => {
  const result = Math.random() > 0.5;

  if (!result) {
    next();
  } else {
    next(new Error('bad stuff'));
  }
};
