// TextContainer.js

import { XCircle } from "react-bootstrap-icons";
import './text-container.css'

const TextContainer = ({ texts, setTexts }) => {
  const handleRemoveText = (id) => {
    const updatedTexts = texts.filter((text, index) => index !== id);
    setTexts(updatedTexts);
  };

  return (
    <div className="text-container">
      {texts.map((text, index) => (
        <div className="text-container-item" key={index}>
          {text}
          <XCircle
            className="text-container-icon"
            size={16}
            onClick={() => handleRemoveText(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default TextContainer;
