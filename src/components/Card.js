
import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { Handle } from 'react-flow-renderer';
import './Card.css';

const Card = ({ data }) => {
  const { text, openModal } = data;
  const [showMore, setShowMore] = useState(false);
  const shortText = text.length > 100 ? text.substring(0, 100) + '...' : text;

  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 200,
        height: 100,
      }}
      bounds="parent"
      minWidth={150}
      minHeight={50}
    >
      <div className="card">
        <p>{showMore ? text : shortText}</p>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        <button onClick={() => openModal(text)}>Open in Modal</button>

        {/* Handles for connection */}
        <Handle
          type="source"
          position="right"
          id="source"
          style={{ background: '#555', width: 10, height: 10 }}
        />
        <Handle
          type="target"
          position="left"
          id="target"
          style={{ background: '#555', width: 10, height: 10 }}
        />
      </div>
    </Rnd>
  );
};

export default Card;
