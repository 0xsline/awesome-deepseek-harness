#!/usr/bin/env bash
# Install the dsh-store CLI into your PATH (~/.local/bin, fallback ~/.dsh/bin).
# Downloads the single-file CLI from the awesome-deepseek-harness repo.
#
#   bash <(curl -fsSL https://raw.githubusercontent.com/0xsline/awesome-deepseek-harness/main/scripts/install-dsh-store.sh)
#
# Requires: node >= 18 (dsh already requires it), curl or wget.
set -euo pipefail

REPO="0xsline/awesome-deepseek-harness"
BRANCH="${DSH_STORE_BRANCH:-main}"
CLI_SOURCE="https://raw.githubusercontent.com/${REPO}/${BRANCH}/scripts/dsh-store.js"

case "$(uname -s)" in
  Darwin|Linux) PREFIX="${DSH_STORE_PREFIX:-$HOME/.local/bin}" ;;
  MINGW*|MSYS*|CYGWIN*) PREFIX="${DSH_STORE_PREFIX:-$HOME/.dsh/bin}" ;;
  *) PREFIX="${DSH_STORE_PREFIX:-$HOME/.local/bin}" ;;
esac

mkdir -p "$PREFIX"

if command -v curl >/dev/null 2>&1; then
  curl -fsSL "$CLI_SOURCE" -o "$PREFIX/dsh-store.js"
else
  wget -qO "$PREFIX/dsh-store.js" "$CLI_SOURCE"
fi

chmod +x "$PREFIX/dsh-store.js"

cat > "$PREFIX/dsh-store" <<EOF
#!/usr/bin/env bash
exec node "$PREFIX/dsh-store.js" "\$@"
EOF
chmod +x "$PREFIX/dsh-store"

echo "✔ dsh-store 已安装到 $PREFIX/dsh-store"
if ! command -v dsh-store >/dev/null 2>&1; then
  echo "  将 $PREFIX 加入 PATH 后即可使用，例如:"
  echo "    echo 'export PATH=\"$PREFIX:\$PATH\"' >> ~/.bashrc"
fi
echo "  用法: dsh-store search  dsh-spotlight"
echo "        dsh-store check   dsh-spotlight   # 安装前冲突检查"
echo "        dsh-store install dsh-spotlight"
