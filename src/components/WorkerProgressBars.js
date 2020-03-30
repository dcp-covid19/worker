import React, { useEffect, useState, useCallback } from 'react';
import ProgressBar from './ProgressBar';
import { act } from 'react-dom/test-utils';
// import { act } from 'react-dom/test-utils';

const WorkerProgressBars = ({updateStatus, statusText}) => {
  const [workers, setWorkers] = useState([]);
  const [activeWorkerCount, setActiveWorkerCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const onSandboxStart = (worker) => {
      setRunning(true);
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

  const incrementWorkerCount = useCallback(()=>{
    setActiveWorkerCount(activeWorkerCount+1)
  },[activeWorkerCount])

  const decrementWorkerCount = useCallback(()=>{
    setActiveWorkerCount(activeWorkerCount-1)
  },[activeWorkerCount])

  useEffect(()=>{
    if (running) {
      activeWorkerCount === 0 ? updateStatus('waiting') : updateStatus('computing');
    } else {
      updateStatus('ready')
    }
  },[activeWorkerCount, running])

  return (
    <>
      <div className="border p-3 m-0 mt-3" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        <div className="status-area">
          <span className="font-weight-bold mr-2">Status</span>
          <span id="compute-status-span">{statusText}</span>
        </div>
        <div className="status-area">
        <span className="font-weight-bold mr-2">Task</span>
          <span>COVID-19 Mapping</span>
        </div>
      </div>
      { workers.map((worker, idx) => (
        <ProgressBar worker={worker} key={worker.id} index={idx} incrementWorkerCount={incrementWorkerCount} decrementWorkerCount={decrementWorkerCount} />
      ))}
    </>
  );
}

export default WorkerProgressBars;
