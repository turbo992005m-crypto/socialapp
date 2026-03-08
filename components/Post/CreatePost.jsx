import { div, span } from "framer-motion/client";
import React from "react";
import { useState } from "react";
import { ApiServices } from "../../services/API";

export default function CreatePost({ getPosts }) {
  const [caption, setcaption] = useState("");
  const [image, setimage] = useState(null);
  const [imagePreview, setimagePreview] = useState(null);
  const [loading, setloading] = useState(false);
  const [showform, setshowform] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setimage(e.target.files[0]);
      const imagesrc = URL.createObjectURL(e.target.files[0]);
      setimagePreview(imagesrc);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setloading(true);
    const formData = new FormData();
    if (caption) {
      formData.set("body", caption);
    }
    if (image) {
      formData.set("image", image);
    }

    const response = await ApiServices.createPost(formData);
    if (response.success) {
      removeimage();
      setcaption("");
      setshowform(false);
      getPosts();
    }
    setloading(false);
  }

  function removeimage() {
    setimagePreview(null);
    setimage(null);
    document.getElementById("imageinput").value = null;
  }
  return (
    <div className="bg-white border-1 border-gray-700/9 rounded-lg  shadow-md mb-6 p-6   ">
      {!showform ? (
        <button onClick={() => setshowform(true)}>what's in your mind?</button>
      ) : (
        <form onSubmit={handleSubmit} className=" space-y-4">
          {/* caption input */}
          <div>
            <textarea
              value={caption}
              onChange={(e) => setcaption(e.target.value)}
              placeholder="whats on your mind?"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>

          {/* image preview */}
          {imagePreview && (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full max-h-64 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={removeimage}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition"
              ></button>
            </div>
          )}

          {/* action btn */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* image uploaded btn */}

              <label className=" curseor-pointer text-gray-600 hover:text-blue-600 transition duration-200">
                <input
                  type="file"
                  id="imageinput"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  disabled={loading}
                />
                <div className="flex items-center space-x-2">
                  <span className=" text-sm font-medium ">Photo</span>
                </div>
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setshowform(false)}
                disabled={loading}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition duration-200 disabled:opacity-50 "
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading || (!caption.trim() && !image)}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700  disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center space-x-2">
                    <span className="loading loading-infinity loading-xl">
                      Posting...
                    </span>
                  </span>
                ) : (
                  "Post"
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
