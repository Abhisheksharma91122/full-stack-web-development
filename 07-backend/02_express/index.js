import express from "express";
import logger from "./logger.js";
import morgan from "morgan";

const PORT = 3000;
const app = express();
const morganFormat = ":method :url :status :response-time ms";
app.use(express.json());

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  }),
);

const products = [];
let id = 1;

// add products
app.post("/products", (req, res) => {
  logger.info(`Received request to add product: ${JSON.stringify(req.body)}`);
  const { name, price } = req.body;

  const product = {
    id: id++,
    name: name,
    price: price,
  };

  products.push(product);
  return res.status(201).json(product);
});

// get all products
app.get("/products", (req, res) => {
  return res.status(200).json(products);
});

// get product by id
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  return res.status(200).json(product);
});

// update product by id
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  product.name = name || product.name;
  product.price = price || product.price;
  return res.status(200).json(product);
});

// delete product by id
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((p) => p.id === parseInt(id));
  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  products.splice(productIndex, 1);
  return res.status(200).json({ message: "Product deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
