#!/bin/sh 
#cd /Users/[path/to/your/react/project/root/directory] 
echo “Building React Project …” 
npm run build 
echo “Copying html file …” 
cp -r build html 
echo “Connecting to AWS VM and copying file to /var/www/html/ …” sudo scp -i /Users/cesarcueva/Documents/llavesPEM/ -r html ec2-44-212-1-120.compute-1.amazonaws.com:/var/www 
echo “Removing html file from local directory …” 
rm -r html