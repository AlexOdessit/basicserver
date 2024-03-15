module.exports.getCars = async (req, res, next) => {
  //сложный код
  const cars = [
    { id: 3, model: 'Toyota' },
    { id: 5, name: 'Renault' },
  ];
  res.send({
    data: cars,
    number: req.data,
  });
};
