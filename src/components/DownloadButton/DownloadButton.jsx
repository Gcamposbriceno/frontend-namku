import React from "react";

function DownloadButton({ href, download, children }) {
  return (
    <button className="btn-call-to-action">
      <a href={href} download={download}>
        {children}
      </a>
    </button>
  );
}

export default DownloadButton;
