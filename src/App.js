import Box from './Components/Box';
import classes from './Components/Styling.module.css';
import { useState } from 'react';

import WordProvider from './Components/WordProvider';

function App() {

 


  return (
    <WordProvider >
    <div className={classes.app}>
     <Box />
    </div>
    </WordProvider>
  );
}

export default App;
