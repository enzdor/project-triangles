const {validationResult} = require('express-validator');

function triangleTheoremMiddleware(req, res, next){
    let a = Number(req.body.sideA);
    let b = Number(req.body.sideB);
    let c = Number(req.body.sideC);
    if (a + b > c && a + c > b && b + c > a){
        next()
    } else {
        let errors = [];
        let angles = [];
        errors.push({
            value: '',
            msg: 'This does not form a triangle. The conditions required are: side A + side B > side C and side A + side C > side B and side B + side C > side A.',
            location: 'body'
        })
        res.render('index', {errors, angles});
    }
}

module.exports = triangleTheoremMiddleware;