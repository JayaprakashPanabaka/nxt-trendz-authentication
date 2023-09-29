// Write your JS code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-section">
      <div className="text-container">
        <h1 className="home-heading">
          Clothes That Get You <br /> Noticed
        </h1>
        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes <br /> all the time. Clothes have always been a marker of the
          era and we are in <br /> a revolution. Your fashion makes you been
          seen and heard that way you <br /> are. So, celebrate the seasons new
          and exciting fashion in your own <br /> way.
        </p>
        <button className="home-btn" type="button">
          Shop Now
        </button>
      </div>
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
          alt="clothes that get you noticed"
          className="home-image"
        />
      </div>
    </div>
    {/* <h1>Home</h1> */}
  </div>
)

export default Home
