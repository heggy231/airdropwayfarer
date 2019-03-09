const 
  bcrypt = require('bcrypt'),
  db = require('../models'),
  jwt = require('jsonwebtoken')



module.exports = {
//-------------Signup In Functionality-------------------
    signup : (req, res) => {
        console.log(req.body); //<-- just making sure the sure name is there
        // Check to see if email is already in db
        db.User.find({email: req.body.email}) //<--search through it
          .exec()
          .then( user => {
            // if a user is found with that email
            if (user.length >= 1) { //<--is the user database is greater than 1 run function otherwise throw error
              // send an error and let the user know that the email already exists
              return res.status(409).json({
                message: "email already exists" //<--display the error to the user
              })
            // if we don't have this user's email in our db, lets get them set up!
            } else {
              // lets hash our plaintext password
              bcrypt.hash(req.body.password, 10, (err, hash) => { //<--stores the users password immediately into an encryption 10 times
                if(err){ 
                  console.log("hashing error:", err); //<-- if error send back error
                  res.status(200).json({error: err}) //<-- if error send back error so that the user knows whats going on
                // we now have a successful hashed password
                } else {
                  // we are creating a User object with their email address and OUR hashed password
                  db.User.create({ 
                    email: req.body.email, //<-- take the emaol
                    password: hash  //<-- the hashed password is being storred
                  }, (err, newUser) => {
                      console.log('here is the result',newUser)  //<-- the the user is created
                    // if(err){ return res.status(500).json({err})}
                    // we send our new data back to user or whatever you want to do.
                    let user ={
                      email: newUser.email, //<-- we now have a new user
                      _id: newUser._id //<-- who has an id
                    } 
                    
                  jwt.sign(
                      user,
                      "waffles",  //<-- This is the secret code that is signing the Jwt
                      {
                        // its good practice to have an expiration amount for jwt tokens.
                        expiresIn: "1h"    //<-- the user has access to the token for one hour. after one hour the user needs to sign in and will recieve a new token. But, is there a brand new token give if i signed out and signed back in with the same email.
                      },
                      (err, signedJwt) => { //<-- the Jwt
                      res.status(200).json({ //<-- sending it back to the front end from lines 49-52
                        message: 'User Created',  
                        user,
                        signedJwt
                      })
                    });
                    // send success back to user, along with a token.
                  })
                }
              })
            }
          })
          .catch( err => {
            console.log(err);
            res.status(500).json({err})
          })
      },
//-------------Log In Functionality-------------------
    login: (req, res) => {
        console.log("LOGIN CALLED");
        // find the user in our user db
        console.log("body", req.body)
        db.User.find({email: req.body.email}) 
          .select('+password')
          .exec()
          // if we have found a user
          .then( users => { //<--- take all the users 
            // if there is not email in our db
            console.log("USERS: ", users);
            if(users.length < 1) { //<--- if its less than 0 then the user doesnt exist
              return res.status(401).json({
                message: "Email/Password incorrect"   //<--- return this so that hackers are not sure what to focus on
              })
            }
            // we have an email in our db that matches what they gave us
            // now we have to compare their hashed password to what we have in our db
            console.log("body", req.body);
            console.log("hash", users[0].password);
            bcrypt.compare(req.body.password, users[0].password, (err, match) => {  //<--- bcrypt is encrypting the password then compare the passord with the same thing that is in the data base
              console.log(match)
              // If the compare function breaks, let them know
              if(err){console.log(err);return res.status(500).json({err})}
              // If match is true (their password matches our db password)
              if(match){
                console.log("MATCH: ", match)
                // create a json web token

                let user ={
                  email: users[0].email,
                  _id: users[0]._id
                } 
                jwt.sign(
                  user,
                  "waffles",
                  {
                    // its good practice to have an expiration amount for jwt tokens.
                    expiresIn: "1h"
                  },
                  (err, signedJwt) => {
                  res.status(200).json({
                    message: 'Auth successful',
                    user,
                    signedJwt
                  })
                });
              // the password provided does not match the password on file.
              } else {
                console.log("NOT A MATCH")
                res.status(401).json({message: "Email/Password incorrect"}) //<--- if there is an error in what the user typed send this.
              }
            })
      
      
          })
          .catch( err => {
            console.log("OUTSIDE ERROR_")
            console.log(err);
            res.status(500).json({err})
          })
        },
    show: (req,res)=>{  //<-- 
      console.log('trigger Show', req.userId)
      if(req.userId){ //<-- if there is a req.userId with the (verified._id) saved in it then it runs the function
        db.User.findById(req.userId, (err, foundUser)=>{  //<-- send back the founduser to the frontend (which is App.js)
          res.json(foundUser)
        })
      } else {
        res.json('No user Id provided')
      }
      
    },
    delete: (req, res) => {
        console.log("hitting delete");
        db.User.deleteOne({_id: req.params.userId}, (err, result) =>{
          if(err){return res.status(500).json({err})}
          res.status(200).json({result})
        })
      }
}