
import React, { useState, useCallback, useMemo } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';
import Card from './Card';
import './Canvas.css';


const Canvas = ({ openModal }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [idCounter, setIdCounter] = useState(0);

  const nodeTypes = useMemo(() => ({ card: Card }), []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addCard = () => {
    const newId = `card-${idCounter}`;
    setIdCounter((prev) => prev + 1);

    const newNode = {
      id: newId,
      type: 'card',
      position: { x: Math.random() * 300, y: Math.random() * 300 },
      data: {
        text: `This is some example text for card ${idCounter}. You can resize and connect it to others.`,
        openModal,
      },
    };

    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div className="canvas-container">
      <button className="add-card-button" onClick={addCard}>
        Add Card
      </button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default Canvas;
