const fs = require('fs');
const path = require('path');

const folder = '../prisma/seed';
const output = '../prisma/inserts.sql';

// Tablas y sus claves primarias opcionales
const tables = [
  'venues',
  'venue_coordinators',
  'assistant_coordinators',
  'mentors',
  'groups',
  'tutors',
  'participants',
  'collaborators',
  'excluded_date',
  'superuser',
];

// 🔧 Limpia y escapa valores para SQL
const escapeValue = (val) => {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'number') return val;
  if (typeof val === 'boolean') return val ? 1 : 0;
  return `'${val.toString().replace(/'/g, "''")}'`;
};

let allSQL = '';

for (const table of tables) {
  const filePath = path.join(folder, `${table}.json`);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ No se encontró el archivo ${table}.json`);
    continue;
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  if (!Array.isArray(data)) {
    console.warn(`⚠️ ${table}.json no contiene un arreglo válido`);
    continue;
  }

  allSQL += `-- Insertando datos en tabla: ${table}\n`;

  for (const row of data) {
    const columns = Object.keys(row)
      .map((col) => `\`${col}\``)
      .join(', ');
    const values = Object.values(row).map(escapeValue).join(', ');
    allSQL += `INSERT INTO \`${table}\` (${columns}) VALUES (${values});\n`;
  }

  allSQL += '\n';
}

// Guardar archivo final
fs.writeFileSync(output, allSQL, 'utf-8');
console.log(`✅ Archivo generado: ${output}`);
