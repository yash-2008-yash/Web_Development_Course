import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {
  return (
    <>
      <Navbar />

      {/* We can add as many cards as we want without repeating HTML */}
      <div className="cards" style={{ display: "flex", justifyContent: "center" }}>
        <Card title="Card 1" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus cupiditate eum repellendus modi beatae nostrum praesentium aspernatur facilis sunt sint, ipsum, ea pariatur veritatis quos non earum quasi consequatur." />

        {/* If we don't pass 'props' default values will be taken */}
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </>
  )
}

export default App