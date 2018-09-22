let creatures = [
  {
    name: "Halloween Cat",
    image_url: "https://www.animalsheltering.org/sites/default/files/images/magazine/black-cat-pumpkins-bays-blog-m146689.jpg",
    scary: {
      level: 1
    }
  },
  {
    name: "Ghost",
    image_url: "http://konknet.com/-/wp-content/uploads/2017/08/a-ghost-story-thymb.jpg",
    scary: {
      level: 7
    }
  }
]

module.exports = {
  read: (req, res) => {
    res.status(200).send(creatures)
  },
  create: (req, res) => {

    creatures.push(req.body);
    res.status(200).send(creatures);
  },

  delete: (req, res) => {
    const { name } = req.params;
    const updatedCreatures = creatures.filter((creature, name) => creature.name !== name)

    updatedCreatures = creatures;
    res.status(200).send(creatures)

  }
}