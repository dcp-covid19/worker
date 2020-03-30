import React, { useState, useCallback, useEffect } from 'react';
import demoKeystore from '../demoKeystore';

const StartWorkerButton = ({ updateStatus }) => {
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const onStart = () => {
      console.log('start worker button onstart listenre')
      setRunning(true);
    }
    const onStop = () => {
      console.log('start worker button on stop listenre')
      setRunning(false);
    }
    window.dcp.compute.supervisor.on('start', onStart);
    window.dcp.compute.supervisor.on('stop', onStop);

    return () => {
      console.log('deregistering listeners from start worker button')
      window.dcp.compute.supervisor.off('start', onStart);
      window.dcp.compute.supervisor.off('stop', onStop);
    }
  }, [setRunning]);

  const onClick = useCallback(async () => {
    const nextRunning = !running;
    setRunning(nextRunning);

    // Modify text on click (putting the Hack in hackathon)
    let countSpan = document.getElementById('fighters-count');
    
    if (nextRunning) {
      let keystore = await new window.dcp.wallet.Keystore(demoKeystore)
      await keystore.unlock(null, 24 * 60 * 60)
      window.dcp.wallet.add(keystore)
      window.dcp.compute.mine(4);
      if (countSpan) countSpan.innerText = parseFloat(countSpan.innerText) + 1
    } else {
      window.dcp.compute.stopMining();
      updateStatus('ready')
      if (countSpan) countSpan.innerText = parseFloat(countSpan.innerText) - 1
    }
  }, [running, setRunning]);

  return (
    <button className={`btn btn-${running? 'outline-' : ''}success`} onClick={onClick} style={{ width: '100px' }}>
      { running? 'Pause' : 'Start' }
    </button>
  );
}

export default StartWorkerButton;
