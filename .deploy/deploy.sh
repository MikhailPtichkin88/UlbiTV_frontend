cd ~/UlbiTV_frontend
npm run build:prod

rm -rf ~/../var/www/UlbiTV_frontend/html
mv ~/UlbiTV_frontend/build ~/../var/www/UlbiTV_frontend/html