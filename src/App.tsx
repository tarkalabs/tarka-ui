import React, {useState} from 'react';
import Snackbar from '@/components/Snackbar';
import Button from '@/components/atoms/Button'
import FloatingActionButton from './components/FloatingActionButton';
import {ReactComponent as Plus} from './assets/icons/plus/plus-large.svg'

function App() {

  const [open,setOpen] = useState<boolean>(false);


  const SnackBarButton = <Button size='small' colortype='outlined' disableHover> Button Here </Button>
  return (


    <div style={{display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    gap:'100px'}}>

      <button onClick={()=>setOpen(!open)}> Show snackbar</button>
      <div id='1'><Snackbar open={open} colortype={'success'} anchorEl={document.getElementById('1')} customButton={SnackBarButton} buttonProps={{children:'hello'}}>This is a success snackbar with a custom button! </Snackbar></div>
      <div id='2'><Snackbar open={open} colortype={'information'} anchorEl={document.getElementById('2')}>This is a information snackbar. </Snackbar></div>
      <div id='3'><Snackbar open={open} colortype={'warning'} anchorEl={document.getElementById('3')} buttonProps={{children:'hello'}}>This is a warning snackbar. </Snackbar></div>
      <div id='4'><Snackbar open={open} colortype={'error'} anchorEl={document.getElementById('4')} buttonProps={{children:'hello',onClick:()=>setOpen(false)}}>This is a error snackbar. </Snackbar></div>

      <FloatingActionButton size='large' icon={<Plus/>}/>
    </div>
  );
}

export default App;
