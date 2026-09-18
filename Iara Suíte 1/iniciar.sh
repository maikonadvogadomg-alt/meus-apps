#!/bin/bash
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FILE="$DIR/index.html"

echo ""
echo "  ╔══════════════════════════════════════════╗"
echo "  ║         ⚡  IARA SUITE  ⚡               ║"
echo "  ║   Code Editor · APK Builder · Extrator  ║"
echo "  ╚══════════════════════════════════════════╝"
echo ""

if command -v xdg-open &>/dev/null; then
  xdg-open "$FILE"
elif command -v open &>/dev/null; then
  open "$FILE"
elif command -v google-chrome &>/dev/null; then
  google-chrome "$FILE"
elif command -v firefox &>/dev/null; then
  firefox "$FILE"
else
  echo "  Abra manualmente: $FILE"
fi

echo "  ✅ Iara Suite iniciado!"
