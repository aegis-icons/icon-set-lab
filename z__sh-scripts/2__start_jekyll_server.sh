#!/bin/bash -i
echo -ne "\033]0;Local Jekyll server for icon-set-lab\007"
cd ..
jekyll serve --host localhost --open-url
