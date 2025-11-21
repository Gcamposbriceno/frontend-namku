import React from "react";

function DownloadButton({ href, download, children }) {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = href;
    link.download = download;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return <button onClick={handleDownload}>{children}</button>;
}

export default DownloadButton;
