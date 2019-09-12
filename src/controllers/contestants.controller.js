const contestantsCtrl = {};
const Contestant = require('../models/Contestant')

// contestantsCtrl.getContestants = (req, res) => {
//   res.json({message: 'hola, soy el getcontestants'})
// }

contestantsCtrl.getContestants = async (req, res) => {
  const contestants = await Contestant.find().collation({'locale':'en'}).sort('lastname');
  res.json(contestants)
}

contestantsCtrl.getContestant = async (req, res) => {
  const contestant = await Contestant.findById(req.params.id);
  res.json({contestant})
}

contestantsCtrl.createContestant = async (req, res) => {
  const {firstname, lastname, dateofbirth, mobilephone, countryofres, email, swcharacter } = req.body
  const newContestant = new Contestant({
    firstname: firstname,
    lastname: lastname,
    dateofbirth: dateofbirth,
    mobilephone: mobilephone,
    countryofres: countryofres,
    email: email,
    swcharacter: swcharacter
  })
  await newContestant.save();
  res.json({message:'Contestant saved'})
}

contestantsCtrl.deleteContestant = async (req, res) => {
  await Contestant.findByIdAndDelete(req.params.id)
  res.json({message:"Contestant deleted"})
}

contestantsCtrl.updateContestant = async (req, res) => {
  const { firstname, lastname, dateofbirth, mobilephone, countryofres, email, swcharacter } = req.body;
  await Contestant.findByIdAndUpdate(req.params.id, {
    firstname,
    lastname,
    dateofbirth,
    mobilephone,
    countryofres,
    email,
    swcharacter
  })
  res.json({message:"Contestant updated"})
}

module.exports = contestantsCtrl;