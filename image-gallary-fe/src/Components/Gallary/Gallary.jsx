import React from 'react'
import "./Gallary.css";
import img1 from '../../assets/images/image-1.webp'
import img2 from '../../assets/images/image-2.webp'
import img3 from '../../assets/images/image-3.webp'
import img4 from '../../assets/images/image-4.webp'
const Gallary = () => {
  return (
    <>
      <section className="gallery-container">
        <div className="gallery-header">
          <h3>Gallary</h3>
          <hr />
        </div>
        <div className="image-grid">
          <div className="featured-image">
            <img src={img1} alt="featured-image" />
            <input type="checkbox" />
          </div >
          <div className="image">
            <img src={img2} alt="image" />
            <input type="checkbox" />
          </div>
          <div className="image">
            <img src={img3} alt="image" />
            <input type="checkbox" />
          </div>
          <div className="image">
            <img src={img4} alt="image" />
            <input type="checkbox" />
          </div>
          <div className="image">
            <img src={img4} alt="image" />
            <input type="checkbox" />
          </div>
          <div className="image">
            <img src={img4} alt="image" />
            <input type="checkbox" />
          </div>
          <div className="image">
            <img src={img4} alt="image" />
            <input type="checkbox" />
          </div>
          <div className="image">
            <img src={img4} alt="image" />
            <input type="checkbox" />
          </div>
          <div className="image">
            <img src={img4} alt="image" />
            <input type="checkbox" />
          </div>
          <div className="image">
            <img src={img4} alt="image" />
            <input type="checkbox" />
          </div>
          <div className="image">
            <img src={img4} alt="image" />
            <input type="checkbox" />
          </div>
          <div className="image">
            <img src={img4} alt="image" />
            <input type="checkbox" />
          </div>

        </div >
      </section >
    </>
  )
}

export default Gallary