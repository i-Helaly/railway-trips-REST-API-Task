const { body } = require("express-validator");

const validation = [
    body('departure')
        .notEmpty()
        .withMessage("This is require and can not not empty"),
    body('destination')
        .notEmpty()
        .withMessage("This is require and can not not empty"),
    body('date')
        .notEmpty()
        .withMessage("This is require and can not not empty")
        .matches(/^\d{2}-\d{2}-\d{4}$/)
        .withMessage("must matches this patern"),
    body('duration')
        .notEmpty()
        .withMessage("This is require and can not not empty"),
    body('duration')
        .notEmpty()
        .withMessage("This is require and can not not empty")
        .isInt({ min: 2 })
        .withMessage("passengers must be greater than 1")
]

module.exports = validation;