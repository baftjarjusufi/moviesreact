import { useEffect, useState } from 'react';

const Card = ({title }) => {
  const [count, setCount] = useState(0);

  const [hasliked,setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasliked}`);
  }, [hasliked]);




  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title} - <br/>{count ? count : null}</h2>

      <button onClick={() => setHasLiked(!hasliked)}>
        {hasliked ? '❤️' : '🤍'}
      </button>
    </div>
  )

}


const App = () => {



  return (
    <div className="card-container">

    <Card  title ="Star Wars " rating={5} isCool={true}   />
    <Card  title ="Avatar "/>
    <Card  title ="The lion King."/>

    </div>

  )

}



export default App
