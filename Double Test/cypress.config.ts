import { defineConfig } from "cypress";
const mysql = require('mysql2/promise');

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async queryDatabase(query) {
          const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'your_username',
            password: 'your_password',
            database: 'your_database_name',
          });
          const [rows] = await connection.execute(query);
          await connection.end();
          return rows;
        },
      });
    },
  },
});