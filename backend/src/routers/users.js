const express = require("express");
const {deleteUser , findAllUsers , findUser , updateUser   } = require("../controllers/user")
const router = express.Router();


router
 .route('/getUser/:id')
 .get(findUser)
router
 .route('/updateUser/:id')
 .patch(updateUser)
router
 .route('/deleteUser/:id')
 .delete(deleteUser)
router
 .route('/getalluser')
 .get(findAllUsers)

module.exports = router ;