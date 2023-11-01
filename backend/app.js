require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const userRouter = require('./routes/users');
const { createUser, login } = require('./controllers/users');
const cardRouter = require('./routes/cards');
const auth = require('./middlewares/auth');
const cors = require('./middlewares/cors');
const { signUp, signIn } = require('./middlewares/validations');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const errorHandler = require('./middlewares/errorHandler');
const NotFoundError = require('./errors/NotFoundError');

const { PORT = 3000 } = process.env;

const app = express();
app.use(cors);
app.use(requestLogger);
app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signup', signUp, createUser);
app.post('/signin', signIn, login);

app.use('/users', auth, userRouter);
app.use('/cards', auth, cardRouter);
app.use('*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый адрес не найден'));
});

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
