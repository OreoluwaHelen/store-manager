import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
let connectionString = '';

if ( process.env.NODE_ENV === 'test') {
  connectionString = process.env.DATABASE_TEST;
} else if (process.env.NODE_ENV === 'development') {
  connectionString = process.env.DATABASE_DEV;
} else {
  connectionString = process.env.DATABASE_URL;
}


const pool = pg.pool({ connectionString });

export default (callback) => {
  pool.connect ((err, client,done) => callback(err, client, done));
};





// // const connectionString = process.env.DARTABASE_URLORE;
// // const connectionString = 'postgres://localhost:5432/store_manager';
// const client = new client({
//   connectionString,
// });

// client.connect((err) => {
//   if (err) console.log(err);
// });

// export default client;

