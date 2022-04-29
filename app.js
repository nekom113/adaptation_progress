const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const PORT = process.env.PORT ?? 3000;
const indexRouter = require('./routes/indexRouter')
const addUserRouter = require('./routes/adduserRouter');
const authUserRouter = require('./routes/authRouter');
const formRouter = require('./routes/formRouter');
const checkRouter = require('./routes/checkboxRouter');
const templateRouter = require('./routes/templateRouter');

const app = express();
// hbs.registerPartials(path.join(process.env.PWD, 'views/partials'));

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'views'));

app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'oh klahoma', // АЛЕКС для кэширования паролей, чтобы потом их шифровать
    resave: false, // АЛЕКС  если сама сессия не поменялась, то она не будет пересохраняться, если будет тру, то наоборот
    store: new FileStore(), // в соответствии с докой по session-file-store npm
    saveUninitialized: false, //  АЛЕКС сессия будет создавать каждый раз когда заходишь на сайт
    name: 'sid', // имя нашей куки
    cookie: { httpOnly: true, maxAge: 60 * 60 * 1000 }, // АЛЕКС говорим что хотим сделать с куками,  httpOnly: true значит, что нашу куку нельзя будет изменить с фронта
  }),
);

app.use((req, res, next) => {
  res.locals.userId = req.session?.userId; // глобальная переменная userId теперь доступна во всех hbs
  next();
});

app.use('/', authUserRouter);
app.use('/user/new_user', addUserRouter);
app.use('/', formRouter);
app.use('/', checkRouter);
app.use('/', templateRouter);

app.listen(PORT, () => {
  console.log('server start on', PORT);
});
