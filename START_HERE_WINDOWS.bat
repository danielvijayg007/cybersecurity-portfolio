@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is not installed. Install Node.js 22 LTS from https://nodejs.org/
  echo Then run this file again.
  pause
  exit /b 1
)
echo Installing project dependencies...
call npm install
if errorlevel 1 (
  echo Dependency installation failed. Check your internet connection and npm setup.
  pause
  exit /b 1
)
echo Starting the portfolio website...
echo The local website address will appear below. Usually: http://localhost:5173
call npm run dev
pause
