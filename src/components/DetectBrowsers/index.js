import React from "react";

const DetectBrowsers = () => {
  var isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  return (
    <div>
      {isChrome ? "Yes, it is Chrome!" : "No"}
    </div>
  );
};

export default DetectBrowsers;
