const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/product');
const storeRouter = require('./routes/store');
const adminRouter = require('./routes/admin')

const productsourceRouter = require('./routes/productsource')
const providersRouter =  require('./routes/providers')
const adminOrderRouter =  require('./routes/adminorder')
const adminProductsRouter = require('./routes/adminproducts')
const adminMaterialRouter = require('./routes/adminmaterials')
const adminStatsRouter = require('./routes/adminstats')
const usersRegisterRouter = require('./routes/usersregister');
const usersOrdersRouter = require('./routes/usersorders');




const app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/usersregister', usersRegisterRouter);
app.use('/product', productRouter);
app.use('/store', storeRouter);






app.use('/admin', adminRouter);
app.use('/productsource', productsourceRouter);
app.use('/providers', providersRouter);
app.use('/adminorder', adminOrderRouter);
app.use('/adminproducts', adminProductsRouter);
app.use('/adminmaterials', adminMaterialRouter);
app.use('/adminstats', adminStatsRouter);

app.use('/usersorders', usersOrdersRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
