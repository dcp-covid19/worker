import React, { useState, useCallback, useEffect } from 'react';

const StartWorkerButton = ({ }) => {
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const onStart = () => setRunning(true);
    const onStop = () => setRunning(false);
    window.dcp.compute.supervisor.on('start', onStart);
    window.dcp.compute.supervisor.on('stop', onStop);

    return () => {
      window.dcp.compute.supervisor.off('start', onStart);
      window.dcp.compute.supervisor.off('stop', onStop);
    }
  }, [setRunning]);

  const onClick = useCallback(() => {
    const nextRunning = !running;
    setRunning(nextRunning);

    if (nextRunning) {
      console.log("Starting worker...");
      window.dcp.compute.mine();
    } else {
      window.dcp.compute.stopMining();
    }
  }, [running, setRunning]);

  return (
    <button className="btn btn-dcp-yellow" onClick={onClick} style={{ width: '70px'}}>
      { running? 'Stop' : 'Start' }
    </button>
  );
}

export default StartWorkerButton;
