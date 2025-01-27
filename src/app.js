import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
//cookie-parser: Middleware to parse cookies attached to the client request object.
//cors: Middleware to enable Cross-Origin Resource Sharing, allowing your server to specify which domains can access its resources

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit: "16kb"}))
//Enables the parsing of incoming request bodies in JSON format with a size limit of 16 kilobytes. This is essential for handling POST requests that send JSON data.

app.use(express.urlencoded({extended: true,
    limit:"16kb"
}));
//Enables the parsing of incoming request bodies with URL-encoded data (e.g., form submissions) with a size limit of 16 kilobytes. The extended: true option allows for rich objects and arrays to be encoded into the URL-encoded format

app.use(express.static("public"));
//Serves static files (such as images, CSS, and JavaScript) from the public directory. This allows clients to access these assets directly via HTTP requests.

app.use(cookieParser())

export { app }