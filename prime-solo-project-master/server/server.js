
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const productsRouter = require('./routes/products.router');
const storeRouter = require('./routes/stores.router');
const inventoryRouter = require('./routes/inventory.router');
const roleRouter = require('./routes/role.router');
const personRouter = require('./routes/person.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/products', productsRouter);
app.use('/stores', storeRouter);
app.use('/inventory', inventoryRouter);
app.use('/role', roleRouter);
app.use('/person', personRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
