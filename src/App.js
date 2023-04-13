import { useState,useEffect } from 'react'
import Content from './Content';
function App() {

  const [show,setShow] = useState(false)
  const showClickHandle = () => {setShow(!show)}

return (
    <div style={{padding: 20}}>
      <button onClick={showClickHandle} >Toggle</button>
      {show && <Content />}
    </div>  
  );
}

export default App;
