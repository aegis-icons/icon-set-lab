set website-root=%cd%
cd ..
cd aegis-icons
robocopy "%cd%\_templates" "%website-root%" z_icon_grid.svg
robocopy "%cd%\icons" "%website-root%\icons" /mir