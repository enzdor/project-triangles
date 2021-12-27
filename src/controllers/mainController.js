const {validationResult} = require('express-validator');


function findAngle(sideA, sideB, sideC){
    let angle = Math.acos((sideA*sideA- sideB*sideB- sideC*sideC)/(-2*sideB*sideC))*(180/Math.PI);
    return angle;
}


const mainController = {
    index: (req, res) => {
        let sides = [];
        let angles = [];
        res.render('index', {angles})
    },
    post: (req, res) => {
        let errors = validationResult(req);
        let sides = [];
        let angles = [];

        if(errors.isEmpty()){
            let sideA = Number(req.body.sideA);
            let sideB = Number(req.body.sideB);
            let sideC = Number(req.body.sideC);

            let sides = [sideA, sideB, sideC];

            let angleA = findAngle(req.body.sideA, req.body.sideB, req.body.sideC);
            let angleB = findAngle(req.body.sideB, req.body.sideA, req.body.sideC);
            let angleC = findAngle(req.body.sideC, req.body.sideB, req.body.sideA);

            let angles = [angleA, angleB, angleC];

            res.render('index', {sides, angles});
            return
        } else {
            res.render('index', {sides, angles, errors: errors.errors})
        }


        
    }
}


module.exports = mainController;