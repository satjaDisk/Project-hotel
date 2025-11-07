import pkg from 'pg';
const { Pool } = pkg;

export const db = new Pool({
  host: 'ep-sparkling-cherry-ahzou9xg-pooler.c-3.us-east-1.aws.neon.tech',
  user: 'neondb_owner',
  password: 'npg_w4ax3PegpZCX',
  database: 'neondb',
  port: 5432
});
