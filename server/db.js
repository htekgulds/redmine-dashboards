import pg from "pg";
import { DB } from "./config.js";

const pool = new pg.Pool({
  connectionString: DB.connectionString,
});

export const query = (text, params) => pool.query(text, params);
