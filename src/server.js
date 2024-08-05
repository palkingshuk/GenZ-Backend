import app from './app.js'
import connectDb from './database/db.js'
import dotenv from  'dotenv'

dotenv.config({
    path:'./.env' 
})

connectDb()
.then(
    () => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server started at ${process.env.PORT}`)
        })
    }
)
.catch((error) => {
    console.log(`Connection Failed due to this error: `,error);
})
 