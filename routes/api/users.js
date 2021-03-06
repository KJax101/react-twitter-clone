const router = require('express').Router();
const passport = require('passport');
const usersController = require('../../controllers/usersController');
const User = require('../../models/user');

// Matches with "/api/user/login"
// restful API's - let's you perform CRUD operations as opposes to non-restful API, which are just GET
router
  .route('/login')
  .post(passport.authenticate('local'), function (req, res) {
    // Log in and send back user information
    console.log(req.user);
    res.json(req.user);
  })
  .get(function (req, res) {
    // Check to see if user is logged in
    console.log(req.user);
    if (req.user) {
      // If logged in, send back this flag and the username itself
      // NOTE: you can send back whatever you want here
      res.json({ isLoggedIn: true, username: req.user.username });
    } else {
      // If user isn't logged in, send back false
      res.json(false);
    }
  });

// logout route
router
  .route('/logout')
  .get(function (req, res) {
    // Log user out
    req.logout()
    console.log(req.user);
    res.json(false);
  })

router.route('/:id')
  .get(async function (req, res) {    
    const results = await User.find({"id": req.params.id})
    res.send(results)
  })

router.route('/:id')
  .post(async function (req, res) {
    const newUser = new User({"id": "ken", "email": "ken@gmail.com", "password": "abc123", "username": 'ken1'})
    console.log(newUser)
    await newUser.save()
    res.send("i did it, i added to the db")
  })



// Matches with "/api/user/:id"
// CRUD Operations
// router
//   .route('/:id')
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);



// register a new user ("/api/user/register")
// router
//   .route('/register')
//   .post(usersController.register);

module.exports = router;