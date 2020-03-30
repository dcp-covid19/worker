import React, { useState, useCallback } from 'react';
import StartWorkerButton from './components/StartWorkerButton';
import WorkerProgressBars from './components/WorkerProgressBars';
import StatsSummary from './components/StatsSummary';
import Header from 'dcp-covid19.github.io/components/Header';

const App = () => {
  const [statusText, setStatusText] = useState();

  const updateStatus = useCallback((newStatus)=>{
    switch (newStatus) {
      case 'ready':
        setStatusText('Ready to Compute')
        break;
      case 'waiting':
        setStatusText('Waiting for Researchers ...');
        break;
      case 'computing':
        setStatusText('Computing ...');
        break
      default:
        throw new Error('Update status to one of three special values. Look at the code!')
        break;
    }
  },[])

  return (
    <>
      <Header activeLink="Worker" />
      <div className="container">
        <div className="row mt-4">
          <div className="col-12 col-lg-5 order-2">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img src="https://dcp-covid19.github.io/logo.svg" alt="dcp-covid19 logo"></img>
                  <h4 className="mb-1 ml-2">COVID-19 Mapping</h4>
                </div>
                <small>Join the fight against <span className="text-green">COVID-19</span></small>

                <StatsSummary />

                <p style={{fontWeight: "bold"}}>Project Objective:</p>
                <p>
                  To better inform remediation strategies and public health interventions against COVID-19 for municipalities, provincial/federal authorities by mapping transmission patterns of diseases based on reports from epidemiologists and transportation data.
                </p>

                <p>
                  The resulting micro-picture will inform community-specific public health interventions to maximize recovery and minimize economic impacts. This is a platform open to all epidemiologists.
                </p>

                <p className="font-weight-bold pt-4">How DCP speeds up COVID-19 mapping with your computing power</p>
                <p>
                  Space-time patterns of spread span multiple scales due to complex disease ecological processes and biases from surveillance data generated from multi-jurisdictions with different sampling protocols requires a tremendous amount of computing power.
                </p>
                <p>
                  The Distributed Compute Protocol (DCP) distributes computational workload across any device, anywhere, in order to speed up the overall computation. Many hands (computers) make light work!
                </p>

                <a href="https://distributed.computer" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success mt-4">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 p-3 order-lg-12 order-1">
            <h3 className="mb-4">Compute for <span className="text-green">COVID-19</span></h3>
            <StartWorkerButton updateStatus={updateStatus} />
            <WorkerProgressBars updateStatus={updateStatus} statusText={statusText}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
