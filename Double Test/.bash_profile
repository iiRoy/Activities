release-all() {
  if [ -z "$1" ]; then
    echo "❌ Por favor proporciona un mensaje de commit"
    echo "👉 Ejemplo: release-all \"feat(api): agregar validación de tokens\""
    return 1
  fi

  echo "🚀 Agregando archivos..."
  git add .

  echo "📝 Haciendo commit con mensaje: $1"
  if ! git commit -m "$1"; then
    echo "❌ Commit falló. Es probable que no cumpla con el formato convencional."
    return 1
  fi

  echo "📦 Ejecutando semantic-release localmente..."
  if ! npx semantic-release --no-ci; then
    echo "❌ Error al correr semantic-release"
    return 1
  fi

  echo "🔀 Haciendo push de commits y tags..."
  git push origin HEAD --tags
}
