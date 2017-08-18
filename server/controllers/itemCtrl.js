const User = require('../db/index').User;
const Item = require('../db/index').Item;

module.exports = {

  addItem: ((req, res) => {
    Item.create({
      img: req.body.img,
      title: req.body.title,
      price: req.body.price,
      location: req.body.location,
      userId: req.body.userId
    })
    .then(item => res.status(201).send(item))
    .catch(err => res.status(500).send(`Can't add item! ${err}`))
  }),

  getItems: ((req, res) => {
    Item.findAll({
      limit: 40,
      order: [
        ['createdAt', 'ASC']
      ]
    })
    .then(items => res.status(200).send(items))
    .catch(err => res.status(500).send(`Can't find item! ${err}`))
  }),

  dummyRoute: ((req, res) => {
    res.send('This is a dummy Route needed for cloudinary')
  })
};