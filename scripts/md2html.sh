#!/bin/bash
cd "$(dirname "$0")"

echo -e "Starting MD2HTML!\n- - - - - - - - - - - -\nConverting markdown files to html..."

for file in ../src/blog/*
do
    path=$(echo $file | cut -d'/' -f4)
    echo "Removed ${path}"
    rm ../src/blog/$path
done

echo -e "- - - - - - - - - - - -\nConverting markdown files to html..."

for file in ../content/*
do
    path=$(echo $file | cut -d'/' -f3)
    echo "Converted ${path} to ${path%.*}.html"
    pandoc -f markdown -t html ../content/$path > ../src/blog/${path%.*}.html
    sed -i '1s/^/<div>\n/' ../src/blog/${path%.*}.html
    echo "</div>" >> ../src/blog/${path%.*}.html
done

echo -e "- - - - - - - - - - - -\nFinished MD2HTML!"