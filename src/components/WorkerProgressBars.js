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
    <div className="w-100 position-relative d-flex justify-content-center align-items-center mb-1" style={{ backgroundColor: '#E5E7E7' }}>
      <span style={{ zIndex: 1 }}>{ progress }%</span>
      <div className="position-absolute" style={{
        top: 0, bottom: 0, left: 0,
        width: `${progress}%`, transition: 'width 0.1s ease',
        backgroundColor: '#6fc495',
      }} />
    </div>
  );
}

const WorkerProgressBars = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const onSandboxStart = (worker) => {
      setWorkers((workers) => [...workers, worker]);
      worker.on('workerStop', () => {
        setWorkers((workers) => workers.filter(w => w !== worker));
      });
    }

    window.dcp.compute.supervisor.on('sandboxStart', onSandboxStart);

    return () => {
      window.dcp.compute.supervisor.off('sandboxStart', onSandboxStart);
    }
  }, []);

  return (
    <>
      { workers.map((worker) => (
        <ProgressBar worker={worker} key={worker.id} />
      ))}
    </>
  );
}

export default WorkerProgressBars;
