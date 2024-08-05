import connectDb from './database/db.js'
import dotenv from  'dotenv'

dotenv.config({
    path:'./.env' 
})

connectDb()
 