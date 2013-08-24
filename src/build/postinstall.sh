#!/bin/bash

# pretty colors and messaging
escape="\033";
green="${escape}[32m";
reset="${escape}[0m";
INFO="[${green}INFO${reset}]"

echo -e "${INFO} Running post install tasks"

echo -e "${INFO} Building man files"
npm run build-man

