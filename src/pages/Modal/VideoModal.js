import React from "react";
import ReactPlayer from "react-player";

const VideoModal = ({ selectedModule }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{selectedModule?.lesson}</h3>
          <ReactPlayer
            url={selectedModule?.url}
            controls={true}
            width="100%"
            height="100%"
          ></ReactPlayer>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
