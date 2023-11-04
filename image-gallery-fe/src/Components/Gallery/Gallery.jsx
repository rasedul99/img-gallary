import React, { useEffect, useState } from 'react'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getImages } from "../../Helper/data"
import "./Gallery.css";
import GalleryGlimmer from '../GalleryGlimmer/GalleryGlimmer';

const Gallery = () => {

  const [images, setImages] = useState(getImages)
  const [selectedItems, setSelectedItems] = useState([]);
  const [showImageGallery, setShowImageGallery] = useState(false);

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
  useEffect(() => {
    setTimeout(() => {
      setShowImageGallery(true);
    }, 1000); // 1 seconds delay
  }, []);
  return (
    <>
      <section className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          {
            selectedItems.length >= 1 ? <div className="items-info">
              <div className="length">
                <input type="checkbox" defaultChecked />
                <h3> {selectedItems.length} items selected</h3>
              </div>
              <div onClick={() => handleDeleteSelectedItems(selectedItems)} className='delete'>Delete File</div>
            </div> : <h3>Gallery</h3>
          }
          <hr />
        </div>
        {/* If showImageGallery is true render images otherwise display the Glimmer component */}
        {showImageGallery ? <div className="image-grid">
          {images.map((image, index) =>
          (
            <div className="image" key={index}>
              <img src={image.path} alt={image.title} />
              <input type="checkbox" defaultValue={image.id} defaultChecked={false} onChange={handleCheckBoxChange} />
              <div className="overlay"></div>
            </div >
          ))}
          <div className="upload-btn">
            <input type='file' name='file' id="file" />
            <FontAwesomeIcon icon={faImage} />
            <label htmlFor="file">Add Image</label>
          </div>
        </div > : <GalleryGlimmer />}

      </section >
    </>
  )
}

export default Gallery