

## Technical Manual
[Can be accessed through this link](https://github.com/lux9903/COMP30022-Microhard/wiki)
## Installation requirements
### Prerequisites
This tutorial will cover the process of setting up the development environment on your local computer for this application.
#### npm
npm is our chosen package manager for Node.js packages.
#### MongoDB Atlas
MongoDB Atlas is a database service that is fully managed by MongoDB and is a NoSQL database. To learn more about MongoDB Atlas, read more here: (https://www.mongodb.com/cloud/atlas)

### Packages
Once all the prerequisites have been satisfied, we can focus on the two packages: one for the client-side (`/client`) and another for the server-side (`/server`). These two packages have its own `package.json` files that stores their own dependencies.
- **Client packages**: this package is focused on the frontend development. To install the dependencies, make sure to `cd` to the `client` directory before `npm install`. 
- **Backend packages**: this package keeps all its necessary files in the root directory and the `server` directory. To install the necessary dependencies, we can `npm install` them to the root directory. 

### Package Installation
1. Install Node.js and npm through this link (https://nodejs.org/en/download/) 

2. Open the terminal window, from the root folder 
```
> npm install
> cd client
> npm install
```
3. Copy contents of .env.example and put it in a file called .env in both main folder and client folder
4. Up to this point, this should be sufficient enough to run the local development environment. Open a new terminal and type in the following command.
```
> npm run dev
```
### Setting up the environmental variables
This `.env` configuration is located in the root directory:
```
NODE_ENV= <development | production>
DATABASE="mongodb+srv://<your account: your password >@cluster0-gbsk9.mongodb.net/micro?retryWrites=true&w=majority"
SECRET= <your JWT secret>
SENDGRID_API_KEY= <your sendgrid api key>
FROM_EMAIL= <email from address>
```
This particular `.env` configuration should be located in the client directory:
```
REACT_APP_API_ENDPOINT = <path to react api endpoint>
API_MIDDLEWARE = <path to api middleware>
```

## List of important changes

```
Course --> License
Experience --> Tax Record
Project --> Insurance
Winter -> Car/Sedan
Semester 1 -> Motorcycle
Summer -> SUV
Semester 2 -> Lorry/Truck
Annual <- In Progress
Long Term <- Complete
```

