import React from 'react'

export default function Card({ data }) {
  return (
    <div className="app">
      <div className="top-card">
        <div style={{ height: '200px', backgroundColor: 'rgba(0, 0, 127, 0.4)'}}>
          <img src={data.avatar_url} alt="profile-image" style={{ height: '150px', width: '150px', borderRadius: '50%', top: 100, position: 'relative', left: 125 }}/>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: "200px" }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <h3>{data.name}</h3>
            {/* <p>{`(${data.company})`}</p> */}
          </div>
          <div>{data.bio}</div>
          <a href={data.html_url} target='_blank' >Link to Github</a>
        </div>
      </div>
      <div className="lower-card">
        <div className="lower-card-section">
          <h3 style={{ margin: 0 }}>{data.public_repos}</h3>
          <div>Public Repos</div>
        </div>
        <div className="lower-card-section">
          <h3 style={{ margin: 0 }}>{data.followers}</h3>
          <div>Followers</div>
        </div>
        <div className="lower-card-section">
          <h3 style={{ margin: 0 }}>{data.following}</h3>
          <div>Following</div>
        </div>
      </div>
    </div>
  )
}

