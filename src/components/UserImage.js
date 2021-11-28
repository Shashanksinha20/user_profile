import React, { useState } from "react";
import "./UserImage.css";

const UserImage = () => {
  const [imgPreview, setImgPreview] = useState(null);

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      alert("File Type Not Supported");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div
          className="imgPreview"
          style={{
            background: imgPreview
              ? `url("${imgPreview}") no-repeat center/cover`
              : "#131313"
          }}
        >
          {!imgPreview && (
            <>
              <p className = "textDisplay">Add an image</p>
              <label htmlFor="fileUpload" className="customFileUpload">
                Choose file
              </label>
              <input type="file" id="fileUpload" onChange={handleImageChange} />
              <span className = "textDisplay">(jpg, jpeg or png)</span>
            </>
          )}
        </div>
        {imgPreview && (
          <button onClick={() => setImgPreview(null)}><i class="fa fa-trash"></i></button>
          )
        }
      </div>
    </div>
  );
};

export default UserImage;
