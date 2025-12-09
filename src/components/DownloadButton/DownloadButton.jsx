import React from "react";

function DownloadButton({ href, download, children }) {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = href;
    link.download = download;
    link.click();
  };

  return (
    <button className="btn-call-to-action" onClick={handleClick}>
      <a>{children}</a>
    </button>
  );
}

export default DownloadButton;
