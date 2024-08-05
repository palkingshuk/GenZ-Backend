import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// For form data req.body
app.use(express.json({
    limit: "20kb"
}))

// for extracting correct data from url as space is encode as %20 in url
app.use(urlencoded({
    extended: true,
    limit: "20kb"
}))

/* To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
The function signature is: */
app.use(express.static("public"))

/* The middleware will parse the Cookie header on the request and expose the cookie data as the property 
req.cookies and, if a secret was provided, as the property req.signedCookies. These properties are name 
value pairs of the cookie name to cookie value. */
app.use(cookieParser())

export default app