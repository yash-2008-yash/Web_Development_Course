import express from 'express';
import mongoose from 'mongoose';

import { DummyData } from "./models/schema.js";

const __dirname = new URL('.', import.meta.url).pathname;

let conn = await mongoose.connect("mongodb://localhost:27017/dummy")

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: decodeURIComponent(__dirname) });
});

app.get('/generate-data', async(req, res) => {
  // logic for clearing the collections
  await DummyData.deleteMany({});

  const savedItems = [];

  for (let i = 0; i < 10; i++) {
    let employeeNames = ["Yashwanth", "Jon", "Sansa", "Tyrion", "Jaime", "Robert", "Baelor", "Aegon", "Rick", "Negan"];
    let randomEmployee = Math.floor(Math.random() * employeeNames.length);

    let randomSalary = Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;

    let languages = ["Python", "Java", "C", "Ruby", "Kotlin", "C++", "JavaScript", "Assembly", "Swift", "Rust"];
    let randomLanguage = Math.floor(Math.random() * languages.length);

    let cities = ["Bangalore", "New York", "Sao Paulo", "Paris", "Tokyo", "Berlin", "Mumbai", "Toronto", "London", "Moscow"];
    let randomCity = Math.floor(Math.random() * cities.length);

    let randomNumber = Math.floor(Math.random() * 2) + 1;
    let manager;
    if (randomNumber === 1) {
      manager = true;
    } else {
      manager = false;
    }

    const dummydata = new DummyData({
      employeeName: employeeNames[randomEmployee],
      salary: randomSalary,
      language: languages[randomLanguage],
      city: cities[randomCity],
      isManager: manager
    });

    savedItems.push(await dummydata.save());
  }

  res.send(savedItems);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});