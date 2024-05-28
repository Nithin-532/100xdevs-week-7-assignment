import './App.css';
import { IMAGES } from './assets';

function App() {

  return (
    <div className="app">
      <div className="top-card">
        <div style={{ height: '200px', backgroundColor: 'rgba(0, 0, 127, 0.4)'}}>
          <img src={IMAGES.chika} alt="profile-image" style={{ height: '150px', width: '150px', borderRadius: '50%', top: 100, position: 'relative', left: 125 }}/>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: "200px" }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <h3>Rita Correia</h3>
            <div>32</div>
          </div>
          <div>London</div>
        </div>
      </div>
      <div className="lower-card">
        <div className="lower-card-section">
          <h3 style={{ margin: 0 }}>80K</h3>
          <div>Followers</div>
        </div>
        <div className="lower-card-section">
          <h3 style={{ margin: 0 }}>803K</h3>
          <div>Likes</div>
        </div>
        <div className="lower-card-section">
          <h3 style={{ margin: 0 }}>1.4K</h3>
          <div>Photos</div>
        </div>
      </div>
    </div>
  )
}

export default App
