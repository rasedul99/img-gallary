import React, { useEffect, useState } from 'react';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getImages } from '../../Helper/data';
import './Gallery.css';
import GalleryGlimmer from '../GalleryGlimmer/GalleryGlimmer';

const Gallery = () => {
  const [images, setImages] = useState(getImages);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);

  // Handle checkbox change
  const handleCheckBoxChange = (e, imageId) => {
    const { checked } = e.target;
    setSelectedItems((prevSelectedItems) => {
      if (checked) {
        return [...prevSelectedItems, imageId];
      } else {
        return prevSelectedItems.filter((item) => item !== imageId);
      }
    });
  };
  // handle select all images
  const handleSelectAll = () => {
    setSelectedItems(images.map((item) => item.id));
  };
  // handle deselect all images
  const handleDeselectAll = () => {
    setSelectedItems([]);
  };
  // Delete selected items
  const handleDeleteSelectedItems = () => {
    const updatedImages = images.filter((image) => !selectedItems.includes(image.id));
    setImages(updatedImages);
    // Clear selected items after deleting
    setSelectedItems([]);
  };

  // Handle drag start events
  const handleDragStart = (e, image) => {
    setDraggedItem(image);
  };

  // handle drag over events
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // handle drop events
  const handleDrop = (e, image) => {
    e.preventDefault();
    const updatedImages = [...images];
    const draggedItemIndex = updatedImages.findIndex((item) => item.id === draggedItem.id);
    const dropItemIndex = updatedImages.findIndex((item) => item.id === image.id);
    [updatedImages[draggedItemIndex], updatedImages[dropItemIndex]] = [
      updatedImages[dropItemIndex],
      updatedImages[draggedItemIndex],
    ];
    setImages(updatedImages);
    setDraggedItem(null);
  };

  // handle Uploaded Images
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const newImage = {
      id: images.length + 1,
      path: URL.createObjectURL(file),
      title: file.name
    };
    setImages([...images, newImage]);
  };
  // Rerender when new images are added
  useEffect(() => {
  }, [images]);

  // Display Glimmer before displaying the image gallery
  useEffect(() => {
    setTimeout(() => {
      setShowImageGallery(true);
    }, 1000); // 1 second delay
  }, []);

  return (
    <section className="gallery-container">
      <div className="gallery-header">
        {selectedItems.length >= 1 ? (
          <div className="items-info">
            <div className="length">
              <input
                type="checkbox"
                checked={selectedItems.length === images.length}
                onChange={() => {
                  if (selectedItems.length === images.length) {
                    handleDeselectAll();
                  } else {
                    handleSelectAll();
                  }
                }}
              />
              <h3>
                {selectedItems.length === images.length
                  ? 'All items are selected'
                  : selectedItems.length > 1
                    ? `${selectedItems.length} items are selected`
                    : `${selectedItems.length} item is selected`}
              </h3>
            </div>
            <div onClick={handleDeleteSelectedItems} className="delete">
              {selectedItems.length > 1 ? "Delete Files" : "Delete File"}
            </div>
          </div>
        ) : (
          <h3>Gallery</h3>
        )}
        <hr />
      </div>
      {/* If showImageGallery is true render images otherwise display the Glimmer component */}
      {showImageGallery ? (
        <div className="image-grid">
          {images.map((image, index) => (
            <div
              className="image"
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, image)}
              onDragOver={(e) => handleDragOver(e, image)}
              onDrop={(e) => handleDrop(e, image)}
            >
              <img src={image.path} alt={image.title} />
              <input
                type="checkbox"
                checked={selectedItems.includes(image.id)}
                onChange={(e) => handleCheckBoxChange(e, image.id)}
              />
              <div className="overlay"></div>
            </div>
          ))}
          <div className="upload-btn">
            <input type="file" name="file" id="file" onChange={handleImageUpload} />
            <FontAwesomeIcon icon={faImage} />
            <label htmlFor="file">Add Image</label>
          </div>
        </div>
      ) : (
        <GalleryGlimmer />
      )}
    </section>
  );
};

export default Gallery;
