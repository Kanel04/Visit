const express = require('express');
const { 
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
    getRestaurant,
    getAllRestaurant,
    } = require('../controllers/restaurant');
const router = express.Router();

router
    .route('/createRestaurant')
    .post(createRestaurant);
router
    .route('/deleteRetaurant/:id')
    .delete(deleteRestaurant);
router
    .route('/getRetaurant/:id')
    .get(getRestaurant);
router
    .route('/getAllRestaurant')
    .get(getAllRestaurant);
router
    .route('/updateRestaurant/:id')
    .patch(updateRestaurant);


module.exports = router;