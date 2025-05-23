#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error(
    '❌ Debes proporcionar la rama de origen y la rama de destino.\n👉 Uso: node merge-release.js origen destino',
  );
  process.exit(1);
}

const branchFrom = args[0];
const branchTo = args[1];

function run(command, options = {}) {
  try {
    execSync(command, { stdio: 'inherit', ...options });
    return true;
  } catch (error) {
    throw error;
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

function waitForUserInput(promptText) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(promptText, () => {
      rl.close();
      resolve();
    });
  });
}

// Verificar existencia de ramas
if (!branchExists(branchFrom)) {
  console.error(`❌ La rama de origen '${branchFrom}' no existe.`);
  process.exit(1);
}
if (!branchExists(branchTo)) {
  console.error(`❌ La rama de destino '${branchTo}' no existe.`);
  process.exit(1);
}

// Pull primero en la rama de origen
console.log(
  `\x1b[36m%s\x1b[0m`,
  `Actualizando '${branchFrom}' desde remoto antes de cambiar de rama...`,
);
run(`git checkout ${branchFrom}`);
run(`git pull origin ${branchFrom}`);

// Cambiar a la rama destino
console.log(`\x1b[36m%s\x1b[0m`, `Cambiando a la rama destino '${branchTo}'...`);
run(`git checkout ${branchTo}`);

// Pull en rama destino
console.log(`\x1b[36m%s\x1b[0m`, `Actualizando '${branchTo}' desde remoto...`);
run(`git pull origin ${branchTo}`);

// Merge desde la rama origen
console.log(`\x1b[36m%s\x1b[0m`, `Haciendo merge de '${branchFrom}' en '${branchTo}'...`);
const mergeMessage = `feat(merge): Merge from ${branchFrom} to ${branchTo}`;

try {
  run(`git merge ${branchFrom} -m "${mergeMessage}"`);
} catch (error) {
  console.log(
    '\x1b[33m%s\x1b[0m',
    '⚠️ Conflictos detectados. Resolviendo automáticamente algunos archivos...',
  );

  const autoResolvedFiles = ['package.json', 'package-lock.json', 'CHANGELOG.md'];
  run(`git checkout --theirs ${autoResolvedFiles.join(' ')}`);
  run(`git add ${autoResolvedFiles.join(' ')}`);

  const result = execSync('git diff --name-only --diff-filter=U').toString().trim();

  if (result) {
    console.log('\x1b[31m%s\x1b[0m', '🔧 Aún hay conflictos en otros archivos:');
    console.log(result);

    console.log(
      '\x1b[33m%s\x1b[0m',
      '✋ Por favor, resuélvelos manualmente. Luego presiona ENTER para continuar (se hará git add automáticamente).',
    );

    waitForUserInput('Presiona ENTER cuando hayas resuelto los conflictos...').then(() => {
      try {
        run('git add .');
        run('git commit -m "chore: manual conflict resolution after merge"');
        continueRelease();
      } catch (commitErr) {
        console.error('❌ Error al hacer commit tras resolver conflictos:', commitErr.message);
        process.exit(1);
      }
    });
    return;
  } else {
    run('git commit -m "chore: auto-resolve conflicts for known files"');
  }
}

// Continúa con release y push
continueRelease();

function continueRelease() {
  console.log('\x1b[36m%s\x1b[0m', '✅ Conflictos resueltos. Ejecutando semantic-release...');
  run('npx semantic-release --no-ci');

  console.log(`\x1b[36m%s\x1b[0m`, `📤 Haciendo push de '${branchTo}' con tags...`);
  run(`git push origin ${branchTo} --tags`);
}
