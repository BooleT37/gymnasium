@echo off
echo Images:
ROBOCOPY /s /ns /nc /nfl /ndl /njh "src\main\resources\static\images" "target\classes\static\images"
echo Videos:
ROBOCOPY /s /ns /nc /nfl /ndl /njh "src\main\resources\static\videos" "target\classes\static\videos"