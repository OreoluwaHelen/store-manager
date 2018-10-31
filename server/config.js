import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

const client = new Pool({
    connectionString 
})


client.connect((err) => {
    if(!err) return console.log("connected")
});
    
export default client;