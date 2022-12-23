#!/bin/bash

last=$(find . -path ./node_modules -prune -o -iname '*.js' -not -name 'index.js' -printf '%T+ %p\n' \
  | sort \
  | head -n1)

echo $last
echo -n ">> "
cat "$(echo $last | awk '{ print $2 }' FS='/')/README.md" \
  | grep 'href'|awk '{ print $2 }' FS="\""
