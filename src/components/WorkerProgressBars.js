import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';

const WorkerProgressBars = () => {
  const [workers, setWorkers] = useState([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const onSandboxStart = (worker) => {
      setRunning(true);
      console.log('on sandbox start called')
      setWorkers((workers) => [...workers, worker]);
      worker.on('workerStop', () => {
        setWorkers((workers) => workers.filter(w => w !== worker));
      });
    }

    const onStart = () => {
      console.log('worker progressbars on start called')
      setRunning(true);
    }

    const onStop = () => {
      console.log('on stop called')
      setRunning(false);
    }

    window.dcp.compute.supervisor.on('sandboxStart', onSandboxStart);
    window.dcp.compute.supervisor.on('start', onStart);
    window.dcp.compute.supervisor.on('stop', onStop);

    return () => {
      window.dcp.compute.supervisor.off('sandboxStart', onSandboxStart);
      window.dcp.compute.supervisor.off('start', onStart);
      window.dcp.compute.supervisor.off('stop', onStop);
    }
  }, []);

  return (
    <>
      <div className="border row p-3 m-0 mt-3" style={{marginBottom: "15px"}}>
        <div className="col-12 col-sm-6">
          <span className="font-weight-bold mr-4">Status</span>
          <span id="compute-status-span">Ready to Compute</span>
        </div>
        <div className="col-12 col-sm-6">
          <span className="text-secondary float-right">Task: COVID-19 Mapping</span>
        </div>
      </div>
      { workers.map((worker, idx) => (
        <ProgressBar worker={worker} key={worker.id} index={idx} />
      ))}
    </>
  );
}

export default WorkerProgressBars;
