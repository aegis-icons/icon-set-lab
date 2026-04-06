#!/bin/bash -i
echo -ne "\033]0;Local Jekyll server for icon-set-lab\007"
printf "\033[41;97m%s\033[0m\n" "Don't close the window, use CTRL+C instead! Otherwise Ruby stays running in the background!"
echo
cd ..
bundle exec jekyll serve --host localhost --open-url
