import React from 'react';
import TextField from './components/TextField';

function App() {
  return (
    <>
      <TextField label={'Label'} />
      <TextField tarkastate={'success'} label={'Label'} InputProps={{
          startAdornment: (
            <div>hello</div>
          ),
        }}/>
      <TextField tarkastate={'alert'} label={'Label'} />
      <TextField tarkastate={'error'} label={'Label'} />
    </>
  );
}

export default App;
