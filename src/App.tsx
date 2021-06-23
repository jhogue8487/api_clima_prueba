import React, {Component} from 'react';

import TiempoInfo from './components/TiempoInfo';

class App extends Component {
  render(){
    return (
      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-6'>
            <TiempoInfo />
          </div>
        </div>    
      </div>
    );
  }
}

export default App;