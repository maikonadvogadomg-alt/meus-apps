@echo off
chcp 65001 >nul
title Iara Suite

echo.
echo  ╔══════════════════════════════════════════╗
echo  ║         ⚡  IARA SUITE  ⚡               ║
echo  ║   Code Editor · APK Builder · Extrator  ║
echo  ╚══════════════════════════════════════════╝
echo.

:: Abre o app no navegador padrão
start "" "%~dp0index.html"

echo  ✅ Iara Suite aberto no navegador!
echo.
echo  Se não abrir automaticamente, arraste o arquivo
echo  index.html para qualquer navegador.
echo.
pause
