const express = require('express');
const http = require('http');
const os = require('os');
const cors = require('cors');
const productsRouter = require('./routes/products');

const app = express();
const PORT = 4000;

// Middleware to log request method and URL (using http module's req and res)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());

// Mount product routes
app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  // Log system info using os module
  console.log('System Info:');
  console.log(`Platform: ${os.platform()}`);
  console.log(`CPU cores: ${os.cpus().length}`);
});