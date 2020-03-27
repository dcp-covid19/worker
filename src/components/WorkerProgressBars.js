import React, { useEffect, useState } from 'react';

const ProgressBar = ({ worker }) => {
  const [active, setActive] = useState(worker.isWorking);
  const [progress, setProgress] = useState(worker.progress || 0);
  const [pub, setPublic] = useState(worker.public || {});

  useEffect(() => {
    const onSliceStart = ({ job }) => {
      setActive(true);
      setProgress(0);
      setPublic(job);
    }

    const onSliceEnd = () => {
      setActive(false);
    }

    const onSliceProgress = ({ progress }) => {
      setProgress(progress);
    }

    worker.on('sliceStart', onSliceStart);
    worker.on('sliceEnd', onSliceEnd);
    worker.on('sliceProgress', onSliceProgress);
    
    return () => {
      worker.off('sliceStart', onSliceStart);
      worker.off('sliceEnd', onSliceEnd);
      worker.off('sliceProgress', onSliceProgress);
    }
  }, [worker]);

  return active && (
    <div className="w-100 position-relative" style={{ height: '4px', backgroundColor: '#E5E7E7' }}>
      <div className="position-absolute" style={{
        top: 0, bottom: 0, left: 0,
        width: `${progress}%`, transition: 'width 0.1s ease',
        backgroundColor: '#146300',
      }} />
    </div>
  );
}

const WorkerProgressBars = () => {
  const [workers, setWorkers] = useState([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const onSandboxStart = (worker) => {
      setWorkers((workers) => [...workers, worker]);
      worker.on('workerStop', () => {
        setWorkers((workers) => workers.filter(w => w !== worker));
      });
    }

    const onStart = () => {
      setRunning(true);
    }

    const onStop = () => {
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
      <div className="border d-flex align-items-center justify-content-between p-3 mt-3">
        <span>
          <span className="font-weight-bold mr-4">Status</span>
          <span>{running? 'Computing' : 'Ready to Compute'}</span>
        </span>
        <span className="text-secondary">Task: ACME</span>
      </div>
      { workers.map((worker) => (
        <ProgressBar worker={worker} key={worker.id} />
      ))}
    </>
  );
}

export default WorkerProgressBars;
