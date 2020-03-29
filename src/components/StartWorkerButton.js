import React, { useState, useCallback, useEffect } from 'react';
import demoKeystore from '../demoKeystore';

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

  const onClick = useCallback(async () => {
    const nextRunning = !running;
    setRunning(nextRunning);

    if (nextRunning) {
      console.log("Starting worker...");
      let keystore = await new window.dcp.wallet.Keystore(demoKeystore)
      await keystore.unlock(null, 24 * 60 * 60)
      window.dcp.wallet.add(keystore)
      window.dcp.compute.mine();
    } else {
      window.dcp.compute.stopMining();
    }
  }, [running, setRunning]);

  return (
    <button className={`btn btn-${running? 'outline-' : ''}success`} onClick={onClick} style={{ width: '100px' }}>
      { running? 'Pause' : 'Start' }
    </button>
  );
}

export default StartWorkerButton;
