# Node/Express/PostgreSQL Store App


> ### The Backend project empowers users to create and manage their own stores, while also providing administrators with tools for oversight and user story management within the web application. It streamlines store creation, product management, and order processing.


----------

# Getting started

## Installation

Clone the repository

    git clone https://github.com/Elmostaine95/Store_service.git
    
Install dependencies
    
    Yarn
    
----------

## Database

this Project uses Postgres Database

Create a new Postgres database with the name `store_service`\
(or the name you specified in the config\settings-dev.ts)
    
Update the config file by setting your DB credential

    Store_service\backend\Store_service\src\config\settings-dev.ts
    
    {
        host: "localhost",
        database: "store_service",
        port: 5432,
        username: "postgres",
        password: "admin",
        dialect: "postgres",
    }
    
On application start, tables for all entities will be created.


----------

## YARN scripts

- `yarn dev` - Start application
- `npm run start` - Start application in watch mode

----------

## Start application

- `Yarn dev`
- Test api with `http://localhost:3000/api/{'service'}` in your favourite browser

----------

# Authentication
 
This applications uses JSON Web Token (JWT) to handle authentication. The token is passed with each request using the `Authorization` header with `Token` scheme. The JWT authentication middleware handles the validation and authentication of the token. Please check the following sources to learn more about JWT.
    
