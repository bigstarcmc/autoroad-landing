@echo off
cd /d C:\Users\ForYou\Desktop\LandingPage\SimpleOrderPage

echo =============================
echo  변경사항 스테이징...
echo =============================
git add .

set datetime=%date% %time%
git commit -m "update: auto commit on %datetime%"

echo =============================
echo  GitHub으로 푸시 중...
echo =============================
git push origin main

echo =============================
echo  완료! 사이트가 곧 업데이트됩니다.
echo =============================
pause
