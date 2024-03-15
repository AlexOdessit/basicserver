const errorMiddleware = async (err, req, res, next) => {
  res.send({ text: err.message });
};

module.exports = errorMiddleware;
