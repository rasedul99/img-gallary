import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import "./Gallary.css";
import img1 from '../../assets/images/image-1.webp'
import img2 from '../../assets/images/image-2.webp'
import img3 from '../../assets/images/image-3.webp'
import img4 from '../../assets/images/image-4.webp'
import img5 from '../../assets/images/image-5.webp'
import img6 from '../../assets/images/image-6.webp'
import img7 from '../../assets/images/image-7.webp'
import img8 from '../../assets/images/image-8.webp'
import img9 from '../../assets/images/image-9.webp'
import img10 from '../../assets/images/image-2.webp'
import img11 from '../../assets/images/image-4.webp'

const Gallary = () => {
  const images = [{ path: img1, title: "headphone" }, { path: img2, title: "headphone" }, { path: img3, title: "headphone" }, { path: img4, title: "headphone" }, { path: img5, title: "headphone" }, { path: img6, title: "headphone" }, { path: img7, title: "headphone" }, { path: img8, title: "headphone" }, { path: img9, title: "headphone" }, { path: img10, title: "headphone" }, { path: img11, title: "headphone" }]
  return (
    <>
      <section className="gallery-container">
        <div className="gallery-header">
          <h3>Gallary</h3>
          <hr />
        </div>
        <div className="image-grid">
          {images.map((image, index) =>
          (
            <div className="image" key={index}>
              <img src={image.path} alt={image.title} />
              <input type="checkbox" />
              <div className="overlay"></div>
            </div >
          ))}
          <div className="upload-btn">
            <input type='file' name='file' id="file" />
            <FontAwesomeIcon icon={faImage} />
            <label for="file">Add Image</label>
          </div>

        </div >
      </section >
    </>
  )
}

export default Gallary