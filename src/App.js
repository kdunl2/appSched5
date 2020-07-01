import React, {Fragment} from 'react';
import './App.css';
import './css/animations.css';
import './css/hstyle.css';
import './css/images.css';
import './css/name.css';
import './css/pageSlides.css';
import './css/schedule.css';
import './css/textanimation.css';

//components

import InputAppointment from "./components/inputAppointment"

function App() {
  return <Fragment>
    <div className="container">
    <InputAppointment/>

    </div>
  </Fragment>;
}

export default App;
