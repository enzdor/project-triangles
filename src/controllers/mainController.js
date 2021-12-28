const {validationResult} = require('express-validator');


function findAngle(sideA, sideB, sideC){
    let angle = Math.acos((sideA*sideA- sideB*sideB- sideC*sideC)/(-2*sideB*sideC))*(180/Math.PI);
    return angle;
}


const mainController = {
    index: (req, res) => {
        let angles = [];
        let v3 = 10;
        let v5 = 0;
        let v6 = 10;
        let area = 0;
        
        res.render('index', {angles, v3, v5, v6, area})
    },
    post: (req, res) => {
        let errors = validationResult(req);
        let angles = [];

        if(errors.isEmpty()){

            // FINDING ANGLES

            let sideA = Number(req.body.sideA);
            let sideB = Number(req.body.sideB);
            let sideC = Number(req.body.sideC);

            let sides = [sideA, sideB, sideC];

            let angleA = findAngle(req.body.sideA, req.body.sideB, req.body.sideC);
            let angleB = findAngle(req.body.sideB, req.body.sideA, req.body.sideC);
            let angleC = findAngle(req.body.sideC, req.body.sideB, req.body.sideA);

            let angles = [angleA, angleB, angleC];


            // FINDING POSITION OF THIRD VERTICE


            let x2 = Number(req.body.sideB);
            let r1 = Number(req.body.sideA);
            let r2 = Number(req.body.sideC);

            let b = x2*2;
            let c2 = r2*r2 - x2*x2;

            let x = (r1*r1 - c2)/b;
            let y = Math.sqrt(-x*x + r1*r1);

            let vertices = [0,0,x2,0,x,y];


            let v3 = x2;
            let v5 = x;
            let v6 = y;

            
            //FINDING AREA OF TRIANGLE

            let semiPerimeter = (sideA + sideB + sideC)/2;
            let area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));

                    

            res.render('index', {angles, v3, v5, v6, area, sideA, sideB, sideC});
            return
        } else {
            res.render('index', {angles, errors: errors.errors})
        }


        
    }
}


module.exports = mainController;
