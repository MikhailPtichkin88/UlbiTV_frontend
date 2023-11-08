cd ~/UlbiTV_frontend
npm run build:prod apiUrl=https://ptichkinproject.ru:8443/api

rm -rf ~/../var/www/UlbiTV_frontend/html
mv ~/UlbiTV_frontend/build ~/../var/www/UlbiTV_frontend/html