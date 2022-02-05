const plant = require('./plants-model')

const express = require('express');
const router = express.Router();

router.get ('/', (req, res, next) => {
    plant.getPlants()
    .then(plants => {
        res.status(200).json(plants)
    })
    .catch(next)

})

router.post('/', (req,res,next) => {
    plant.insertPlant(req.body)
    .then(plant => {
        res.status(201).json(plant)
    })
    .catch(next)
})

router.delete('/:plant_id', (req, res, next) => { 
   plant.deletePlant(req.params.plant_id)
      .then(count => {
        if (count > 0) {
          res.status(204).end();
        } else {
          res.status(404).json({ message: 'Record not found' });
        }
      })
      .catch(next);
  });
  
module.exports = router;
