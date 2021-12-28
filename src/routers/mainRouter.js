const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js");
const triangleTheoremMiddleware = require('../middlewares/triangleTheoremMiddleware.js')

const {check} = require('express-validator');

let validateSides = [
    check('sideA').notEmpty().withMessage('You need to complete this field'),
    check('sideB').notEmpty().withMessage('You need to complete this field'),
    check('sideC').notEmpty().withMessage('You need to complete this field'),
]


router.get('/', mainController.index);
router.post('/', validateSides , triangleTheoremMiddleware ,mainController.post);

module.exports = router;