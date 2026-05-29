# How to setup Tailwind CSS in your workspace

**STEP 1:** Install Tailwind CSS using npm
```
npm install tailwindcss @tailwindcss/cli
```
---
**STEP 2:** Create a folder called '**src**' and create a file called '**input.css**'

---
**STEP 3:** Paste the given code in the file '**input.css**'
```javascript
@import "tailwindcss";
```

---
**STEP 4:** Go to '**package.json**' → Inside "*scripts*" → Create a key '**build**' → Paste the given command as the value for the key.
```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```
#### This run the CLI tool to scan your source files for classes and build your CSS.

---
**STEP 5:** Add the following link to your .html file
```
<link rel="stylesheet" href="src/output.css">
```

---
**STEP 6:** Run the following command
```
npm run build
```

---
## Now, you can use Tailwind CSS in your workspace.