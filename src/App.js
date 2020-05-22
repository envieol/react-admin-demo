import React from 'react';
import {Button,message} from "antd";


const handleClick = () => {
    message.success("success")
}


function App() {
  return (
      <div>
          <Button type="primary" onClick={()=>handleClick()}>Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="link">Link</Button>
      </div>
  );
}

export default App;
