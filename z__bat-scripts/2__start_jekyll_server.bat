@echo off
title "Local Jekyll server for icon-set-lab"
cd ..
echo [41m Don't close the window, use CTRL+C instead! Otherwise Ruby stays running in the background! [0m
echo.
bundle exec jekyll serve --host localhost --open_url
pause
