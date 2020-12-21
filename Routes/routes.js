const router = require('express').Router();
const bodyParser = require('body-parser');
const User = require('../DB/user');

//route to post user details to db
router.post('/sellform', async(req, res) => {
    console.log(req.body)
    const sell = new User.sell({
        ProductName: req.body.ProductName,
        ProductQuantity: req.body.ProductQuantity,
        RegistrationNumber: req.body.RegistrationNumber,
        Category: req.body.Category,
        Price: req.body.Price,
        Area: req.body.Area,
        filebutton1: req.body.filebutton1,
        filebutton2: req.body.filebutton2,
        filebutton3: req.body.filebutton3,
        filebutton4: req.body.filebutton4,
        comment: req.body.comment
    });
    const savedDetails = await sell.save();
    res.send(savedDetails);
});


//route to see the data in the database
router.get('/selldata', function(req, res) {
    var select = req.query.select;
    User.sell.find({}, function(err, foundData) {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            if (foundData.length == 0) {
                var responseObj = undefined;
                if (select && select == 'count') {
                    responseObj = { count: foundData.length };
                }
            } else {
                var responseObj = foundData;
                if (select && select == 'count') {
                    responseObj = { count: foundData.length };
                }
                res.send(responseObj);
            }
        }
    });
});


module.exports = router;