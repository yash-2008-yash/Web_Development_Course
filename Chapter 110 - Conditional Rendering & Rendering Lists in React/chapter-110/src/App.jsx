import { useState } from "react";
import './App.css';

function App() {
  const [repos] = useState([
    {
      id: 1,
      name: "Twitter UI Clone",
      stars: 69
    },
    {
      id: 2,
      name: "Web Development Course",
      stars: 98
    },
    {
      id: 3,
      name: "College Code Archive",
      stars: 32
    }
  ]);

  return (<>
    {repos.map(repo => (
      <div key={repo.id} className="box">
        <h1>{repo.name}</h1>
        <p>{repo.stars} Stars</p>
      </div>
    ))}
  </>)
}

export default App;