# How to host Node.js (with Express.js) apps on Ubuntu VPS

## Step 1 - Installing Node.js & build essentials

Run these following commands in the virtual computer provided by your hosting service.
```
curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash - &&\
```
```
sudo apt-get install -y nodejs
```
Now install the build essentials.
```
sudo apt-get install build-essential
```

## Step 2 - Create a sample Node.js app

You can use your own app if you want to host it.
Otherwise if you are just prototyping, you can use a sample app.

```javascript
// This is a sample Express.js App

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

```

## Step 3 - Install pm2 package and launch your app

Install pm2 package which is a process manager for Node.js applications.
When you run ```node app.js``` and close the terminal, your server dies.
That's the exact problem pm2 solves.

pm2 runs in the background to keeps your Node.js app alive all the time.
```
sudo npm install -g pm2
```

Now launch your app using this command:
```
pm2 start your-app-name.js
```

## Step 4 - Install nginx

Nginx is a high-performance web server that acts as a **reverse proxy**. 

It sits in front of your Express app and forwards incoming internet traffic to it, while also handling HTTPS, static files, and security.
```
sudo apt install nginx
```

Now edit the file at /etc/nginx/sites-available/default using the following command :
```
sudo nano /etc/nginx/sites-available/default
```

We want this file to look like this:
```
...
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
...
```

## Step 5 - Test and restart nginx

Test and restart nginx using following commands:

```
sudo nginx -t
```
```
sudo systemctl restart nginx
```