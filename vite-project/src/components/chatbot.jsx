import React from 'react';

const Chatbot = () => {
  return (
    <div className="chatbot-container">
    <iframe
      allow="microphone;"
      width="350"
      height="430"
      src="https://console.dialogflow.com/api-client/demo/embedded/75c7840c-00ca-4f0f-bf71-958e1d664a62">
    </iframe>
  </div>
  );
};

export default Chatbot;
