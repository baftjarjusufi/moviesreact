const Card = ({title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )

}


  const App = () => {
  return (
    <div>
    <h2>Functional Arrow Component TEST1111111</h2>

    <Card  title ="Star Wars"/>
    <Card  title ="Avatar "/>
    <Card  title ="The lion King."/>
    </div>

  )

  }



export default App
