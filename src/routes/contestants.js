const { Router } = require('express');
const router = Router();

const { getContestants, getContestant, createContestant, deleteContestant, updateContestant } = require('../controllers/contestants.controller')

// const { getContestants, createContestant } = require('../controllers/contestants.controller')




router.route('/')
  .get(getContestants)
  .post(createContestant)
  // .get((req, res) => res.json({message:'Get ppor fin'}))
  // .post((req, res) => res.json({message:'post por fin'}))
  

router.route('/:id')
  // .get()  
  // .put()
  // .delete((req, res) => res.json({message:'cont eliminado'}))
  .get(getContestant)
  .delete(deleteContestant)
  .put(updateContestant)

module.exports = router;