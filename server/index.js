require("dotenv").config({ path: '.env.local' });

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const authRouter = require("./routers/auth-router");
const boardRouter = require("./routers/board-router");
const columnRouter = require("./routers/column-router");
const taskRouter = require("./routers/task-router");

const errorMiddleware = require("./middlewares/error-middleware");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/boards", boardRouter);
app.use("/api/v1/columns", columnRouter);
app.use("/api/v1/tasks", taskRouter);

app.use(errorMiddleware);

const start = async () => {

    try {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(process.env.SERVER_PORT, () => console.log(`Server started on port ${process.env.SERVER_PORT}`));

    } catch (error) {
        console.error(error.message);
    }
}

start();