module.exports.getPhones = async (req, res, next) => {
  //сложный код
  const phones = [
    { id: 0, name: 'Vivo' },
    { id: 1, name: 'Samsung' },
    { id: 6, name: 'Sony' },
  ];

  res.send({
    data: phones,
  });
};

module.exports.getPhone = async (req, res, next) => {
  console.log(req.params.id); //5

  const phone = { id: req.params.id };
  res.send({ data: phone });
};

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;
  const newPhone = { id: 2, name: 'Google' };
  res.send({ data: newPhone });
};
