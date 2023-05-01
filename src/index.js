import { Amplify } from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import JaAvailability from './Pages/JaAvailability';
// import DemoPage from './Pages/DemoPage'
// import './App.css';

import { AMPLIFY_CONFIG } from './config';
Amplify.configure(AMPLIFY_CONFIG);

const App = () => {
  const demoDisplay = false

  return (
    // <Authenticator>
    //   <div className='App'>
    //       {/* demoDisplay ? */}
    //         {/* <DemoPage /> : */}
    //         <LandingPage />
    //   </div>
    // </Authenticator>
    <JaAvailability />
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
