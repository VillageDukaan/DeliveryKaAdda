const express = require('express');
const morgan = require('morgan');

const boyRouter = require('./routes/boyRoutes')
const userRouter = require('./routes/userRoutes')

const app = express();

// 1) Middlewares
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

// 3) Routes
app.use('/api/v1/boys', boyRouter)
app.use('/api/v1/users', userRouter)

module.exports = app;
