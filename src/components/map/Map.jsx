import React from 'react'
import "./map.css";

const Map = () => {
  return (
    <div className='mapdiv'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15138.423744133726!2d73.9327791!3d18.4561928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea281d5f2cb5%3A0x7b9fc3d2025b70e1!2sSai%20Park%20Galli%20Number%204%2C%20Pandhari%20Nagar%2C%20Handewadi%2C%20Pune%2C%20Maharashtra%20412308!5e0!3m2!1sen!2sin!4v1644574231605!5m2!1sen!2sin" width="800" height="600" style={{border:0}} allowfullscreen="" loading="lazy" title="map"></iframe>
    </div>
  )
}

export default Map