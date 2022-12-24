#!/bin/bash

last=$(find . -path node_modules -prune -o -iname '0*.js' -not -name 'index.js' -printf '%T+ %p\n' \
  | sort \
  | head -n1)

echo -e $last
echo -n ">> "
cat "$(echo $last | awk '{ print $2 }' FS='/')/README.md" \
  | grep 'href'|awk '{ print $2 }' FS="\""
