# ';DROP DATABASE snake bot

Snakehack bot by Marco and Jan :)

To get started you'll need a working NodeJS development environment, and at least read the Heroku docs on [deploying a NodeJS app](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

If you haven't setup a NodeJS development environment before, read [how to get started with NodeJS](http://nodejs.org/documentation/tutorials/). You'll also need [npm](https://www.npmjs.com/) for easy JS dependency management.

This client uses [Express4](http://expressjs.com/en/4x/api.html) for easy route management, read up on the docs to learn more about reading incoming JSON params, writing responses, etc.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


### Running the AI locally

Fork and clone this repo:

```
git clone git@github.com:stair-ch/snakehack-node.git
cd snakehack-node
```

Install the client dependencies:

```
npm install
```

Create an `.env` file in the root of the project and add your environment variables (optional).

Run the server:

```
nf start web
```

Test the client in your browser: [http://localhost:5000](http://localhost:5000)


### Deploying to Heroku

Click the Deploy to Heroku button at the top or use the command line commands below.

Create new  NodeJS Heroku app, `--region eu` is important for faster response times:
```
heroku create [APP_NAME] --region eu
```

Push code to Heroku servers:
```
git push heroku master
```

Open Heroku app in browser:
```
heroku open
```

Or go directly via http://APP_NAME.herokuapp.com

View/stream server logs:
```
heroku logs --tail
```
