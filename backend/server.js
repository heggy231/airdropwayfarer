const 
    express = require('express'),
    cors = require('cors'),
    citypostRoutes = require('./routes/citypostsroute'),
    userRoutes = require('./routes/user'),
    bodyParser = require('body-parser')


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

//when an axios is called it comes here because the server stands between the frontend and backend. 
//on this particular line we are giving our messanger (falcon) a route to take to get to the data base. (which tells the database how to respond.)
app.use('/api/cityposts', citypostRoutes)

app.use('/user', userRoutes)

app.listen(3001, () => console.log('Listening on port 3001 :)'))