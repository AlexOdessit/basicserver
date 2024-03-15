const express = require('express');
const errorMiddleware = require('./middlewares/error');
// const middleware1 = require('./middlewares');
const rootRouter = require('./routers');
const app = express();
app.use(rootRouter);

// Using the middleware
app.use(express.json());
app.use(errorMiddleware);

const PORT = 5000;
app.listen(PORT, () => {
  console.log('server started on port 5000');
});
