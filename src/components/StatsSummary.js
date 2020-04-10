import React from 'react';
import useAPIPolling from 'use-api-polling'

const StatsSummary = () => {

  const fetchFunc = async () => {
    const resp = await fetch("https://covid19-scheduler.distributed.computer/scheduler/status5m.json")
    const stats = await resp.json()
    return stats
  }
  
  const options = {
    fetchFunc,
    initialState: {},
    delay: 10 * 1000
  }
  
  let rawStats = useAPIPolling(options);
  
  // sanitize data from untrusted json source
  let myStats = {}; 
  if (rawStats.worker) myStats.ready = true
  myStats.taskCount = rawStats.worker && rawStats.worker.distSlices && rawStats.worker.distSlices.total;
  myStats.fighterCount = rawStats.uniqueIds;
  if (isNaN(Number(myStats.taskCount))) myStats.taskCount = '...';
  if (isNaN(Number(myStats.fighterCount))) myStats.fighterCount = '...';

  return <div id="stats-summary">
    <p style={{fontWeight: "bold"}}>Status</p>
    <p style={{margin: 0, fontSize: "0.9em"}}>(Updates every 5 minutes)</p>
    <div className="console">
    {!myStats.ready && "Loading stats from network ..."}
    {myStats.ready &&
      <>
        <p>Tasks on Network: {myStats.taskCount}</p>
        <p>COVID-19 Fighters: <span id="fighters-count">{myStats.fighterCount}</span></p>
      </>
    }
    </div>
  </div>
}

export default StatsSummary;