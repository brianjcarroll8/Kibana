#!/bin/bash

#IFS=$'\n';
#
touch all_assigned.txt
echo "" > all_assigned.txt

IFS=$'\n'

for i in `cat team_assignments.txt`; do (
  export team=$(echo $i | cut -d' ' -f2)
  for file in $(find $(echo $i | cut -d' ' -f1) -type f -name "*.js" -o -name "*.ts" -o -name "*.jsx" -o -name "*.tsx" | grep -v target |grep -v node_modules | grep -v __tests__ | grep -v __fixture__); do (
    echo "$file $team" >> all_assigned.txt
    echo "$file $team"
  ); done
); done

sed -i "" "s/\/\//\//g" all_assigned.txt
