import './App.css'
import Card from './components/Card'
import vehicles from './data/vehicles'
import ShowHide from './components/ShowHide'

function App() {
  const vehicleList = vehicles.map(v=>{
    return <Card title={v.name} description={v.description}></Card>
  })
  return (
    <>
    <div className='App'>
      <h1>hola react</h1>
      <div className='container'>
      

        {vehicleList}
        
      </div>
      <ShowHide></ShowHide>
      </div>
    </>
    
  )
}

export default App
