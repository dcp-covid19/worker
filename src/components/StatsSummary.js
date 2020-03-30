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
  
  let stats = useAPIPolling(options)


  return <div id="stats-summary">
    <p style={{fontWeight: "bold"}}>Status</p>
    <p style={{margin: 0, fontSize: "0.9em"}}>(Updates every 5 minutes)</p>
    <div className="console">
    {!stats.worker && "Loading stats from network ..."}
    {stats.worker &&
      <>
        <p>Tasks on Network: {stats.worker.distSlices}</p>
        <p>COVID-19 Fighters: <span id="fighters-count">{stats.uniqueIds}</span></p>
      </>
    }
    </div>
  </div>

}

export default StatsSummary;