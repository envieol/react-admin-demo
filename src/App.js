import React from 'react';
import {Button,message} from "antd";


const handleClick = () => {
    message.success("success")
}


function App() {
  return (
      <div>
        <Button onClick={() => handleClick()}>click</Button>
      </div>
  );
}

export default App;
