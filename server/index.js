import express from "express"
import { connectDB } from "./src/database/database.js";
import cors from "cors"
import router from "./src/routes/users.routes.js";
import productRouter from "./src/routes/products.routes.js";
import cartRouter from "./src/routes/carts.routes.js";
const app = express()
process.loadEnvFile()

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));
connectDB()
app.use(cors())
app.use("/", router)
app.use('/products', productRouter);
app.use('/cart', cartRouter)
const port = process.env.PORT || 3000
console.log(port)
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})