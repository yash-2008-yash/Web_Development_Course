# How to create a React app?

## Step 1: Check whether Node.js is installed or not
```bash
node -v
```
Vite requires minumum Node.js version 18. If it's older, update it first.

## Step 2: Run the Vite create command
```bash
npm create vite@latest
```
After this, it'll ask you some questions.<br>
Like, what do you want to keep your app's name, which language, etc.<br>
Now, it'll create a folder of your app.

## Step 3: Navigate into your app folder
```bash
cd your-app-name
```

## Step 4: Install the dependencies
```bash
npm install
```

## Step 5: Start the dev server
```bash
npm run dev
```

---

Your app will be running at http://localhost:5173/. Open that in the browser.<br>
**Congratulations!!! You just created an own React app of yours.**

Inside your app folder, there will be a folder `src`.<br>
A file will be there called `App.jsx`, this is your app.
Inside `src`, create a folder `components` where you can create components.

---