import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import "./Gallary.css";
import { getImages } from "../../Helper/data"

const Gallary = () => {

  const [images, setImages] = useState(getImages)
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
    setSelectedItems([]);
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