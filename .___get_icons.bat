@echo off
set website-root=%cd%
cd ..
if exist aegis-icons\ (
  cd aegis-icons
  goto copy_icons
  ) else (
    if exist aegis-icons-master\ (
    cd aegis-icons-master
    goto copy_icons
    ) else (
      echo Please include "aegis-icons" or "aegis-icons-master" folder!
      echo.
      pause
      exit
    )
)
:copy_icons
robocopy "%cd%\_templates" "%website-root%" z_icon_grid.svg
robocopy "%cd%\icons" "%website-root%\icons" /mir