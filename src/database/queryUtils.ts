import fs from 'fs';
import path from 'path';
import { Pool } from 'mysql2/promise';
import connection from './connection';

export function readQueries(filePath = 'createDatabase.sql') {
  const importPath = path.resolve(__dirname, filePath);
  const seedDBContent = fs.readFileSync(importPath).toString();
  const queries = seedDBContent.split(';').map((p) => p.trim());

  return queries;
}

export async function executeQueries(
  conn: Pool,
  queries = readQueries(),
) {
  try {
    for (let i=0; i < queries.length; i += 1) {
      const query = queries[i];
      if (query) {
        await conn.query(query);
      }  
    }
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erro ao executar queries', error);
  }
}

if (require.main === module) {
  executeQueries(connection)
    .then(async () => {
      // eslint-disable-next-line no-console
      console.info('Queries executadas com sucesso');
      await connection.end();
      process.exit(0);
    });
}