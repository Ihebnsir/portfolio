const nodes = [
  { id: 'core', cx: 280, cy: 180, label: 'CORE' },
  { id: 'edge-a', cx: 122, cy: 84, label: 'EDGE 01' },
  { id: 'edge-b', cx: 438, cy: 84, label: 'EDGE 02' },
  { id: 'edge-c', cx: 94, cy: 292, label: 'EDGE 03' },
  { id: 'edge-d', cx: 466, cy: 292, label: 'EDGE 04' },
  { id: 'relay', cx: 280, cy: 354, label: 'RELAY' },
];

const links = [
  ['core', 'edge-a'],
  ['core', 'edge-b'],
  ['core', 'edge-c'],
  ['core', 'edge-d'],
  ['core', 'relay'],
  ['edge-a', 'edge-b'],
  ['edge-c', 'edge-d'],
];

function NetworkVisual() {
  const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]));

  return (
    <div className="network-visual" aria-label="Animated network topology illustration" role="img">
      <svg className="network-svg" viewBox="0 0 560 430" aria-hidden="true">
        <defs>
          <linearGradient id="networkLine" x1="0" x2="1">
            <stop offset="0" stopColor="#00e5ff" stopOpacity="0.2" />
            <stop offset="0.5" stopColor="#7c3aed" stopOpacity="0.8" />
            <stop offset="1" stopColor="#00e5ff" stopOpacity="0.2" />
          </linearGradient>
          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="network-links">
          {links.map(([from, to]) => {
            const start = nodeById[from];
            const end = nodeById[to];
            return <line key={`${from}-${to}`} x1={start.cx} y1={start.cy} x2={end.cx} y2={end.cy} />;
          })}
        </g>
        <g className="packet-trails">
          <circle className="packet packet-one" r="3" />
          <circle className="packet packet-two" r="2.5" />
          <circle className="packet packet-three" r="2.5" />
        </g>
        <g className="network-nodes" filter="url(#nodeGlow)">
          {nodes.map((node) => (
            <g key={node.id} className={node.id === 'core' ? 'network-node core-node' : 'network-node'}>
              <circle className="node-halo" cx={node.cx} cy={node.cy} r={node.id === 'core' ? 28 : 18} />
              <circle className="node-ring" cx={node.cx} cy={node.cy} r={node.id === 'core' ? 12 : 7} />
              <circle className="node-point" cx={node.cx} cy={node.cy} r={node.id === 'core' ? 4 : 3} />
              <text x={node.cx + 16} y={node.cy + 4}>{node.label}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default NetworkVisual;
