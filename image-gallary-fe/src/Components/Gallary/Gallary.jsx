import React, { useState } from 'react'
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
  const initialState = [{ id: 1, path: img1, title: "headphone" }, { id: 2, path: img2, title: "headphone" }, { id: 3, path: img3, title: "headphone" }, { id: 4, path: img4, title: "headphone" }, { id: 5, path: img5, title: "headphone" }, { id: 6, path: img6, title: "headphone" }, { id: 7, path: img7, title: "headphone" }, { id: 8, path: img8, title: "headphone" }, { id: 9, path: img9, title: "headphone" }, { id: 10, path: img10, title: "headphone" }, { id: 11, path: img11, title: "headphone" }]

  const [images, setImages] = useState(initialState)
  const [selectedItems, setSelectedItems] = useState([]);
  //  Handle checkboxes 
  const handleCheckBoxChange = (e) => {
    const { value, checked } = e.target;
    
    // Case 1: The user checks the box
    if (checked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, +value]);
    }
    // Case 2: The user unchecks the box
    else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== +value)
      );
    }
  }
  // Delete selected items
  const handleDeleteSelectedItems = (items) => {
    const updatedImages = images.filter((image) => !items.includes(image.id));
    setImages(updatedImages);

    // Clear selected items after deleting
    setSelectedItems();
  }
  return (
    <>
      <section className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          {
            selectedItems.length >= 1 ? <div className="items-info"> <div className="length">{selectedItems.length} items selected</div>  <div onClick={() => handleDeleteSelectedItems(selectedItems)}>Delete File</div> </div> : <h3>Gallary</h3>
          }
          <hr />
        </div>
        {/* images */}
        <div className="image-grid">
          {images.map((image, index) =>
          (
            <div className="image" key={index}>
              <img src={image.path} alt={image.title} />
              <input type="checkbox" value={image.id} onChange={handleCheckBoxChange} />
              <div className="overlay"></div>
            </div >
          ))}
          <div className="upload-btn">
            <input type='file' name='file' id="file" />
            <FontAwesomeIcon icon={faImage} />
            <label htmlFor="file">Add Image</label>
          </div>

        </div >
      </section >
    </>
  )
}

export default Gallary