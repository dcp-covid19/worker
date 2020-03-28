import React from 'react';
import StartWorkerButton from './components/StartWorkerButton';
import WorkerProgressBars from './components/WorkerProgressBars';
import Header from 'dcp-covid19.github.io/components/Header';

function App() {
  return (
    <>
      <Header activeLink="Worker" />
      <div className="container">
        <div className="row mt-4">
          <div className="col-12 col-md-5">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img src="https://dcp-covid19.github.io/logo.svg" alt="dcp-covid19 logo"></img>
                  <h4 className="mb-1 ml-2">ACME Study</h4>
                </div>
                <small>How it helps fighting <span className="text-green">COVID-19</span></small>

                <div className="w-100 mt-4 mb-4" style={{ backgroundColor: '#e5e7e7', height: '100px' }} />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sapien massa eget orci ultrices ullamcorper feugiat.</p>
                <p>Dictum et suspendisse id placerat maecenas tempus. Nisi in pellentesque est, ut tempor a nibh. Ut mauris scelerisque arcu ipsum. Imperdiet ultricies convallis vel ut pulvinar at quisque. Velit mi nulla libero tellus curabitur phasellus scelerisque nec.</p>

                <p className="font-weight-bold pt-4">How DCP Worker speed up ACME with your compute power</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sapien massa eget orci ultrices ullamcorper feugiat.</p>
                <p>Vitae donec sed quam enim nisl porta elementum. Id consequat lacus tellus, auctor condimentum arcu adipiscing.</p>

                <button className="btn btn-outline-success mt-4">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 p-3">
            <h3 className="mb-4">Compute <span className="text-green">ACME</span></h3>
            <StartWorkerButton />
            <WorkerProgressBars />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
