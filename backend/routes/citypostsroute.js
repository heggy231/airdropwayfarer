const 
  express = require('express'),
  router = express.Router(),
  jwt = require('jsonwebtoken'),
  controllers = require('../controllers')

router.get('/', controllers.citypostsin.index)


router.use((req, res, next) => {
  console.log('activated')
  const bearerHeader = req.headers['authorization'];
  console.log('triggered token check', bearerHeader)

  console.log('/////  inside router.use')

  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    let verified = jwt.verify(req.token, 'waffles');
    console.log('here is the verified', verified)
    req.userId = verified._id //set user id for routes to use
    next();
  } 
  else {
    res.sendStatus(403);
  }
})

//
router.post('/', controllers.citypostsin.create)
router.get('/', controllers.citypostsin.getone)


// router.delete('/', controllers.citypostsin.delete)



// router.put('/', controllers.citypostsin.put)



module.exports = router;