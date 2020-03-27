import React from 'react';
import StartWorkerButton from './components/StartWorkerButton';
import WorkerProgressBars from './components/WorkerProgressBars';
import DCPLogo from './components/DCPLogo';

function App() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col"></div>
        <div className="col-12 col-md-6">
          <DCPLogo />
        </div>
        <div className="col"></div>
      </div>
      <div className="row mt-4">
        <div className="col"></div>
        <div className="col-12 col-md-6 p-2" style={{ backgroundColor: '#0e2439' }}>
          <StartWorkerButton />
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col-12 col-md-6 p-2" style={{ backgroundColor: '#fff', minHeight: '30vh' }}>
          <WorkerProgressBars />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
