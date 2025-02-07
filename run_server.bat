@echo off
python -c "import http.server" 2>nul
if %errorlevel% equ 0 (
    echo Starting Python server...
    start "" http://localhost:8000
    python -m http.server 8000
) else (
    echo Python not found, opening file directly...
    start "" "file://%~dp0index.html"
)
