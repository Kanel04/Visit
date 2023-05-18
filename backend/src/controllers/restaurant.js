const Restaurant = require("../models/restaurant");
const User = require("../models/index");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// Assuming you have a valid `userId` representing the user ID
const userId = '...';

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach((el) => {
      if (allowedFields.includes(el)) {
        newObj[el] = obj[el];
      }
    });
    return newObj;
  };

  exports.getRestaurant = (req, res, next) => {
    req.params.id = req.user.id;
    next();
  };


  exports.updateRestaurant = catchAsync(async (req, res, next) => {
   
    // 2) Filtered out unwanted fields names that are not allowed to be updated
    const filteredBody = filterObj(req.body);
  
    // 3) Update user document
    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  });

  exports.deleteRestaurant = catchAsync(async (req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, { active: false });
    // SEND RESPONSE
    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.createRestaurant =  factory.createOne(Restaurant);

exports.getAllRestaurant = factory.getAll(Restaurant);

exports.getRestaurant = factory.getOne(Restaurant);

// Do NOT update passwords with this
exports.updateRestaurant = factory.updateOne(Restaurant);

exports.deleteRestaurant = factory.deleteOne(Restaurant);

  
  
