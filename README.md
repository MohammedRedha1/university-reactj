## The stack (MERN)
1. `MongoDb` as a database.
2. `Expressjs` to build the API.
3. `Reactjs` alongside `Vite` to handle the frontend.
4. `nodejs` as a runtime environment for JavaScript. 

## Run the App
- Make sure that `node` is installed on your machine. [Download node](https://nodejs.org/en/download/current).
- Navigate to the project's directory and run the following command in your terminal only for the first time
```
npm i
```
then you should be able to run the app using the following command
```
npm run dev & cd backend && node server.js
```

## NOTE
I did not follow best practices in so many parts in this app, I just wanted to finish it quickly since it was just a college project and was never going into prodution.
- for example, I run the admin page on the same port as the frontend, and to make things even worse, there is no user authintication involved in the process, hence it's a joke when it comes to security.

## One final thing
For the love of god, please don't use JavaScript on the server like I did
