// components/TawkToChat.js

import React, { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    // Insert the tawk.to script into the DOM
    const tawkToScript = document.createElement('script');
    tawkToScript.type = 'text/javascript';
    tawkToScript.async = true;
    tawkToScript.src = 'https://embed.tawk.to/650c13d9b1aaa13b7a781672/default';
    document.head.appendChild(tawkToScript);

    return () => {
      // Clean up the script when the component is unmounted
      document.head.removeChild(tawkToScript);
    };
  }, []);

  return <div />;
};

export default TawkToChat;
