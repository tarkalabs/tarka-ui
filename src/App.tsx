import React from 'react';
import TestButton from './components/TestButton/TestButton';

function App() {
  return (
    <div>
      <TestButton size='large' type="button" color='outlined' disabled={true} onMouseOver={()=>console.log('hello')}> Label</TestButton>;
    </div>
  );
}

export default App;
