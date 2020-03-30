import React, { useEffect, useState, useCallback } from 'react';

const COLORS = ["#e8bc14", "#c0ab10", "#87930b", "#587f07", "#367104", "#146300"];

const ProgressBar = ({ worker, index }) => {
  const [active, setActive] = useState(worker.isWorking);
  const [progress, setProgress] = useState({indeterminate: true, val: worker.progress || 0});
  const [pub, setPublic] = useState(worker.public || {});

  useEffect(() => {
    const onSliceStart = ({ job }) => {
      setActive(true);
      setProgress({indeterminate: false, val: 0});
      setPublic(job);
    }

    const onSliceEnd = () => {
      setActive(false);
    }

    const onSliceProgress = (progressEv) => {
      if (progressEv.isIndeterminate) {
        const maxIndex = Math.round(Math.random() * COLORS.length);
        setProgress({indeterminate: true, val: maxIndex});
      } else {
        setProgress({indeterminate: false, val: progressEv.progress});
      }
      
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


  const determinateProgressBar = useCallback( function(progress) {
    return <div className="w-100 position-relative" style={{ height: '4px', backgroundColor: '#E5E7E7' }}>
      <div className="position-absolute" style={{
        top: 0, bottom: 0, left: 0,
        width: `${progress.val}%`, transition: 'width 0.1s ease',
        backgroundColor: '#146300',
      }} />
    </div>
  },[])

  const indeterminateProgressBar = useCallback( function(progress) {
    return <div className="position-relative" style={{ height: '25px', backgroundColor: 'white', width: "100px" }}>
      {
        [...Array(6).keys()].map((num) => {
          const backgroundColor = num < progress.val ? COLORS[num] : 'white';
          return <div key={num} className="position-absolute" style={{
            top: 0,
            bottom: 0,
            left: `${num*100/COLORS.length}%`,
            backgroundColor, 
            width: `calc(${100/COLORS.length}% - 8px)`
          }}></div>
        })
      }
    </div>
  },[])

  return active && (
    <div className="worker-status">
      <p>Worker {index+1} </p>
        {progress.indeterminate? indeterminateProgressBar(progress) : determinateProgressBar(progress)}
    </div>
  );
}

export default ProgressBar;