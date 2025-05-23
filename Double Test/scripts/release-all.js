#!/usr/bin/env node

const { execSync } = require('child_process');

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error(`
❌ Debes proporcionar al menos un mensaje de commit.

👉 Uso:
  node release-all.js "tipo(scope): descripción"             (usa rama actual)
  node release-all.js "tipo(scope): descripción" rama-destino (usa rama especificada)
`);
  process.exit(1);
}

const commitMessage = args[0];
const branch = args[1] || getCurrentBranch();

function run(command, options = {}) {
  try {
    execSync(command, { stdio: 'inherit', ...options });
    return true;
  } catch (error) {
    return false;
  }
}

function branchExists(branchName) {
  try {
    execSync(`git show-ref --verify --quiet refs/heads/${branchName}`);
    return true;
  } catch {
    return false;
  }
}

function getCurrentBranch() {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  } catch {
    console.error('❌ No se pudo obtener la rama actual.');
    process.exit(1);
  }
}

// Verificar que la rama especificada exista
if (!branchExists(branch)) {
  console.error(`❌ La rama '${branch}' no existe localmente.`);
  process.exit(1);
}

// Agrega cambios antes de cambiar de rama (si hay cambios)
console.log('\x1b[36m%s\x1b[0m', 'Agregando cambios pendientes...');
run('git add .');

// Guarda los cambios en el stash si vas a cambiar de rama
if (args[1]) {
  console.log(
    '\x1b[36m%s\x1b[0m',
    `Guardando cambios temporales para cambiar a la rama '${branch}'...`,
  );
  run('git stash --include-untracked');

  console.log('\x1b[36m%s\x1b[0m', `Cambiando a la rama '${branch}'...`);
  if (!run(`git checkout ${branch}`)) {
    console.error('\x1b[31m%s\x1b[0m', `No se pudo cambiar a la rama '${branch}'.`);
    process.exit(1);
  }

  console.log('\x1b[36m%s\x1b[0m', 'Aplicando cambios guardados...');
  run('git stash pop');
}

console.log('\x1b[36m%s\x1b[0m', 'Agregando nuevamente todos los cambios...');
run('git add .');

console.log('\x1b[36m%s\x1b[0m', `Intentando commit con mensaje: "${commitMessage}"`);
if (!run(`git commit -m "${commitMessage}"`)) {
  console.error('\x1b[31m%s\x1b[0m', '❌ Commit inválido (¿falló el hook commit-msg?)');
  process.exit(1);
}

console.log('\x1b[36m%s\x1b[0m', 'Ejecutando semantic-release...');
if (!run('npx semantic-release --no-ci')) {
  console.error('\x1b[31m%s\x1b[0m', '❌ Error en semantic-release. No se publicará nada.');
  console.log('\x1b[33m%s\x1b[0m', 'Revirtiendo último commit...');
  run('git reset --soft HEAD~1'); // Revertir commit si semantic-release falla
  process.exit(1);
}

console.log('\x1b[36m%s\x1b[0m', `Haciendo push de commits y tags a la rama '${branch}'...`);
run(`git push origin ${branch} --tags`);
