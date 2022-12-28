#!/bin/bash

if [[ -z $1 ]]; then
  count=1
else 
  count=$1
fi

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

for i in $(seq 1 $count); do
  last=$(find . -path node_modules -prune -o -iname '0*.js' -not -name 'index.js' -printf '%T+ %p\n' \
    | sort \
    | head -n$i|tail -n1)

  echo -e "${RED}${i}${NC}. ${GREEN}$last${NC}"
  echo -en "${GREEN}>>${NC} "
  cat "$(echo $last | awk '{ print $2 }' FS='/')/README.md" \
    | grep 'href'|awk '{ print $2 }' FS="\""|head -n1
  done
