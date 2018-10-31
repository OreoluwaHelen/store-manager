import { Pool } from 'pg';
import dotenv from 'dotenv';
// import table from table;
dotenv.config();
console.log('hello');
// const connectionString = process.env.DARTABASE_URLORE;
const connectionString = 'postgres://localhost:5432/store_manager';
const client = new Pool({
    connectionString
})

client.connect((err) => {
    if(!err)  console.log('connected');
})

export default client;

