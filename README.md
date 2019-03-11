# <img src="https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2Fpack.jpg?1551768465967" height="60">AirDrop Farer

<img src="https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FScreen%20Shot%202019-03-10%20at%205.13.06%20PM.png?1552263258270">
App for users to share tips (AKA posts) about their favorite locations around the world.

## Technology Used:
  - REACT
  - JWT authentication with Passport to a MERN app
  - Full CRUD for posts
  - Custom HTML, CSS, and JavaScript (using the asset pipeline)
  - Deployed to heroku

## AirDrop Farer App Hierarchy:
```
App
├──  App.js
├──  App.css
├──  Nav(folder)
    └──  Nav.js
    └──  Nav.css
├──  Main(folder)
    └──  Main.js
    └──  Main.css
          └──  CityList.js
          └──  CityList.css          
                └──  City.js
          └──  PostList.js
          └──  PostList.css 
                └──  Post.js
└──  Landing
```
## Repo of Different Versions of AirDrop Farer:
[Version1](https://github.com/heggy231/New-Fullstack-WayfarerV1)

[Version2](https://github.com/heggy231/New-FullStack-V2)

[Version3 Final](https://github.com/heggy231/airdropwayfarer)

## Challenge as a Team:
- Team (overall): 
  - Restructuring our file system: We overhauled our file system for props to flow better.
  - Task delineation due to code not being up on Github
  - Making the AirDrop Farer serve on localhost
  - Gaps in technical knowledge, discovering what we didn't know
  
## Challenge as individual:
- Darnell:
  - Delineating tasks to team members
  - Understanding with how frontend connects with backend
  - Managing state and passing props down


- Heggy:
  - Routing vs passing props using state
  - Understanding database concepts
  - Running the backend and frontend together

- Ghenet:
  - Making components communicate (setting and managing state)
  - Backend

## Lessons Learned (Personal area of growth, Working with a team):
- Personal area of growth: 
  - Heggy: Express routing, React State, Local storage
  - Darnell: Creating CRUD functionalities, managing state, task management (breaking down challenges into manageable tasks)
  - Ghenet: How to utilize local storage, learn about setting and managing state, learned about task management
  
- Working with a team:
  - Heggy: Communicating with team better
  - Darnell: Giving more specific and constructive in the moment feedback
  - Ghenet: Communicating with team better, Learned that working in a team is better, Healthy team means complimenting each other's strengths.

## How to run AirDrop Farer React app:
- frontend: runs on http://localhost:3000/
```
cd /frontend
npm install
```
- backend: runs on http://localhost:3001/
```
#### backend ########################
> `npm install`  // pulling down from master install the dependencies require for the project `npm i` also same
> `npm install bcrypt --save`
> `mongod` is running in a tab of Terminal.
> 'node db/seed.js' and make sure to require our models folder at the top.
> `nodemon` // test if express is working
```

```
https://media.giphy.com/media/ZI9yBW6pTpJOE/giphy.gif
```