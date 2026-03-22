#!/bin/bash

cd ..
website_root=$(pwd)
cd ..

if [ -d "aegis-icons" ]; then
    cd aegis-icons
elif [ -d "aegis-icons-master" ]; then
    cd aegis-icons-master
else
    echo "Please include 'aegis-icons' or 'aegis-icons-master' folder!"
    echo
    read -p "Press any key to continue... " -n1 -s
    exit 1
fi

cp -R "_templates/z_icon_grid.svg" "$website_root"
rsync -a --delete "icons/" "$website_root/icons/"
