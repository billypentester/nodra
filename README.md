
# Nodra

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

[![Rate this package](https://badges.openbase.com/js/rating/nodra.svg?style=openbase&token=jtcu3lJDdoqmiV3HppxDMdwbGozEy1Aa8Xy13JnaKas=)](https://openbase.com/js/nodra?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

![build: passing](https://img.shields.io/badge/build-passing-blue)

Nodra is a public npm package that will help you to create and configure a custom backend node based CRUD application in minutes


## Installation

Install **Nodra** with npm

```
  npm install -g nodra
  nodra create-server
```

## Features

#### Nodra provide you wide range features to setup a custom backend for your web application

- Database Connectivity
- Schema Validation
- Ready to use API
- Template engine
- Authentication & Authorization
- Static website

## Folder Structure

```
server
├── node_modules
├── api
│   └── user.js
├── db
│   └── conn.js
├── middlewares
│   └── auth.js
├── models
│   └── schema.js
├── public
│   ├── css
│   ├── js
│   └── images
├── routes
│   └── route.js
├── temp
│   ├── partials
│   └── views  
├── .env
└── package.json
```





## Site Map

| Action       | Path                                 | Request | Description                                                                                    |
|--------------|--------------------------------------|---------|------------------------------------------------------------------------------------------------|
| Static files | http://localhost:3000/user/public    | GET     | this endpoint contains static files like css, js, images etc.                                  |
| Create       | http://localhost:3000/user/register  | POST    | This endpoint get user data, validate schema and create a user in database.                    |
| Update       | http://localhost:3000/user/update/id | POST    | This endpoint get user data along user ID and update the user data in database.                |
| Delete       | http://localhost:3000/user/delete    | POST    | This endpoint get get user data along user ID, verify password and delete the user.            |
| Login        | http://localhost:3000/user/login     | POST    | This endpoint get user credentials, verify it, check authorization and redirect to user panel. |
| Logout       | http://localhost:3000/user/logout    | GET     | This endpoint is just logout the user If that user is logged in.                               |


## How do I setup my app?

- **Configure Enviromental variable**
  - Open .env file, modify secret values or remain it default.
  - DB contain mongodb endpoint, PORT number used for node app, SECRET is for Auth token generation, STATIC concat value with app endpoint.

- **Move Static files**
  - Navigate to Public folder, move files in css, js, images folders.
  - Modify your paths in html files and got to endpoint : http://localhost:3000/public/

- **Move Dynamic files**
  - Navigate to temp folder, move handlebars (hbs) files in views folder
  - Move components / parts of website in partial folder which are frequently used.
  - Modify paths of handlebar files and link css, js, images files with template engine.

- **Set Routes**
  - Go to routes folder, route files contains main routes of node app.
  - You can create more routes according to need like contact us, login, register etc.
  - In user panel route, give the name of user dashboard from template engine files. Note : Dashboard will open after successfull Authentication.

- **Manage API**
  - Jump to API folder, user.js file contains all user actions like registeration, updation, deletion etc.
  - Convert all res.json to res.render to render data in template engine pages.
 
- **Modify Schema**
    - By default, there's user schema to valide data but you modify it and add more schemas for different collections.

## What Next ?

### Nodra is a complete backend solution for web developers but what about frontend ? Is there any way ?

Well, there are multiple ways to integrate node app with different frontends but currently main are two:

- **Using Template Engine :**

  Template Engine like hbs, ejs are easy to integrate with Node for sending and receiving data in both ways. No prior knowledge is required, fast development and easy to setup and efficient for small projects. 

- **Using React JS :**

  React JS is one of the best frontend framework and part of MERN development. It provides you an awesome frontend using rich css libraries. Prior knowledge is required, a little bit difficult to setup, best for huge projects and it takes a lot of time.

## Authors

[Bilal Ahmad](https://www.github.com/billypentester)


## License

[MIT](https://choosealicense.com/licenses/mit/)



