import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
let connectionString = ();

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
