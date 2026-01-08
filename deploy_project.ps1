
# ------------------------------------------------------------------
# Pack Yours - Deployment Helper Script
# ------------------------------------------------------------------

Write-Host "🚀 Starting Deployment Process..." -ForegroundColor Cyan

# 1. Check Backend Deployment
Write-Host "`n[STEP 1] Backend Deployment (Render.com)" -ForegroundColor Yellow
$backendDeployed = Read-Host "Have you deployed the backend to Render.com and have the URL? (y/n)"

if ($backendDeployed -ne 'y') {
    Write-Host "Opening Render.com dashboard..." -ForegroundColor Green
    Start-Process "https://dashboard.render.com"
    Write-Host "👉 INSTRUCTIONS:" -ForegroundColor White
    Write-Host "1. Create a new 'Web Service'."
    Write-Host "2. Connect your GitHub repository."
    Write-Host "3. It will auto-detect the configuration."
    Write-Host "4. Deploy and COPY the 'onrender.com' URL."
    Write-Host "`nOnce you have the URL, verify it works, then come back here."
    Pause
}

$backendUrl = Read-Host "Please paste your FULL Backend URL (e.g., https://pack-yours-backend.onrender.com)"
$backendUrl = $backendUrl.TrimEnd('/') # Remove trailing slash if present

# Ensure /api is appended or handled correctly. The app expects /api usually, checking VITE_API_URL usage.
# If api.js uses base url as VITE_API_URL, we should append /api if the user didn't.
if (-not $backendUrl.EndsWith("/api")) {
    $backendUrl = "$backendUrl/api"
}

Write-Host "✅ Using Backend URL: $backendUrl" -ForegroundColor Green
Set-Content -Path ".env.production" -Value "VITE_API_URL=$backendUrl"

# 2. Build Frontend
Write-Host "`n[STEP 2] Building Frontend..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build Failed! Exiting." -ForegroundColor Red
    exit
}

# 3. Firebase Login Check
Write-Host "`n[STEP 3] Firebase Login Check..." -ForegroundColor Yellow
firebase projects:list 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️ You need to login to Firebase." -ForegroundColor Yellow
    firebase login
}

# 4. Firebase Deploy
Write-Host "`n[STEP 4] Deploying to Firebase Hosting..." -ForegroundColor Yellow
# Check if initialized
if (-not (Test-Path "firebase.json")) {
    firebase init hosting
}

firebase deploy

Write-Host "`n🎉 DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "Check the 'Hosting URL' above to view your live site."
Pause
