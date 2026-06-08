import { useMemo } from "react";
import {
  Background,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const categoryOrder = [
  "Frontend",
  "Language",
  "Backend",
  "Database",
  "Tool",
];

const categoryMeta = {
  Frontend: { color: "#e34c26", y: 42 },
  Language: { color: "#3178c6", y: 214 },
  Backend: { color: "#339933", y: 354 },
  Database: { color: "#47a248", y: 494 },
  Tool: { color: "#f05032", y: 634 },
};

const edgeOptions = {
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "#b65b3a",
    width: 14,
    height: 14,
  },
  style: {
    stroke: "#b65b3a",
    strokeWidth: 1.3,
  },
};

function CoreNode() {
  return (
    <div className="min-w-[138px] border border-[#151311] bg-[#151311] px-4 py-3 text-[#f8f4ec] shadow-[4px_4px_0_rgba(181,91,58,0.18)] dark:border-[#f0ece4] dark:bg-[#f0ece4] dark:text-[#151311]">
      <Handle
        type="source"
        position={Position.Right}
        className="!h-2 !w-2 !border-0 !bg-[#b65b3a] !opacity-0"
      />
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] opacity-70">
        Stack map
      </div>
      <div className="mt-2 text-base font-black leading-none">My skills</div>
    </div>
  );
}

function CategoryNode({ data }) {
  return (
    <div className="min-w-[124px] border border-[#81766b]/25 bg-[#f8f4ec]/95 px-3 py-2 backdrop-blur dark:border-[#f0ece4]/12 dark:bg-[#1f1b17]/95">
      <Handle
        type="target"
        position={Position.Left}
        className="!h-2 !w-2 !border-0 !bg-[#b65b3a] !opacity-0"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="!h-2 !w-2 !border-0 !bg-[#b65b3a] !opacity-0"
      />
      <div className="flex items-center gap-2">
        <span
          className="h-2 w-2 shrink-0"
          style={{ backgroundColor: data.color }}
        />
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#81766b] dark:text-[#c9b99a]">
          {data.count} tools
        </span>
      </div>
      <div className="mt-2 text-sm font-black leading-none text-[#151311] dark:text-[#f0ece4]">
        {data.label}
      </div>
    </div>
  );
}

function SkillNode({ data }) {
  const Icon = data.icon;

  return (
    <div className="group min-w-[172px] border border-[#81766b]/20 bg-[#f8f4ec]/85 px-3 py-2 shadow-[3px_3px_0_rgba(139,115,85,0.1)] backdrop-blur transition-colors hover:border-[#b65b3a] dark:border-[#f0ece4]/10 dark:bg-[#1f1b17]/85 dark:shadow-[3px_3px_0_rgba(245,240,232,0.04)]">
      <Handle
        type="target"
        position={Position.Left}
        className="!h-2 !w-2 !border-0 !bg-[#b65b3a] !opacity-0"
      />
      <div className="flex items-center gap-3">
        <span
          className="grid h-8 w-8 shrink-0 place-items-center border border-[#81766b]/20 bg-[#f0ece4] text-lg dark:border-[#f0ece4]/12 dark:bg-[#151311]"
          style={{ color: data.color }}
        >
          <Icon />
        </span>
        <span>
          <span className="block text-sm font-black leading-tight text-[#151311] dark:text-[#f0ece4]">
            {data.label}
          </span>
          <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-[#81766b] dark:text-[#c9b99a]">
            {data.category}
          </span>
        </span>
      </div>
    </div>
  );
}

const nodeTypes = {
  core: CoreNode,
  category: CategoryNode,
  skill: SkillNode,
};

function buildAllFlow(skills) {
  const nodes = [
    {
      id: "core",
      type: "core",
      position: { x: 0, y: 360 },
      data: {},
    },
  ];
  const edges = [];

  categoryOrder.forEach((category) => {
    const categorySkills = skills.filter((skill) => skill.category === category);
    const meta = categoryMeta[category];
    const categoryId = `category-${category}`;

    nodes.push({
      id: categoryId,
      type: "category",
      position: { x: 230, y: meta.y },
      data: {
        label: category,
        count: categorySkills.length,
        color: meta.color,
      },
    });

    edges.push({
      id: `core-${categoryId}`,
      source: "core",
      target: categoryId,
      type: "smoothstep",
      animated: category === "Frontend" || category === "Backend",
    });

    categorySkills.forEach((skill, index) => {
      const skillId = `skill-${skill.name}`;
      const column = index % 3;
      const row = Math.floor(index / 3);

      nodes.push({
        id: skillId,
        type: "skill",
        position: {
          x: 455 + column * 218,
          y: meta.y - 18 + row * 76,
        },
        data: {
          icon: skill.icon,
          label: skill.name,
          category: skill.category,
          color: skill.color,
        },
      });

      edges.push({
        id: `${categoryId}-${skillId}`,
        source: categoryId,
        target: skillId,
        type: "smoothstep",
      });
    });
  });

  return { nodes, edges };
}

function buildCategoryFlow(skills, selectedCategory) {
  const nodes = [
    {
      id: "core",
      type: "core",
      position: { x: 0, y: 148 },
      data: {},
    },
    {
      id: `category-${selectedCategory}`,
      type: "category",
      position: { x: 210, y: 148 },
      data: {
        label: selectedCategory,
        count: skills.length,
        color: categoryMeta[selectedCategory]?.color || "#b65b3a",
      },
    },
  ];

  const edges = [
    {
      id: `core-category-${selectedCategory}`,
      source: "core",
      target: `category-${selectedCategory}`,
      type: "smoothstep",
      animated: true,
    },
  ];

  skills.forEach((skill, index) => {
    const skillId = `skill-${skill.name}`;
    const column = index % 3;
    const row = Math.floor(index / 3);

    nodes.push({
      id: skillId,
      type: "skill",
      position: {
        x: 420 + column * 184,
        y: 72 + row * 76,
      },
      data: {
        icon: skill.icon,
        label: skill.name,
        category: skill.category,
        color: skill.color,
      },
    });

    edges.push({
      id: `category-${selectedCategory}-${skillId}`,
      source: `category-${selectedCategory}`,
      target: skillId,
      type: "smoothstep",
      animated: index < 2,
    });
  });

  return { nodes, edges };
}

function SkillsFlow({ skills, selectedCategory }) {
  const { nodes, edges } = useMemo(() => {
    if (selectedCategory === "All") {
      return buildAllFlow(skills);
    }

    return buildCategoryFlow(skills, selectedCategory);
  }, [skills, selectedCategory]);

  return (
    <div className="skills-flow relative h-[720px] overflow-hidden border border-[#81766b]/20 bg-[#f8f4ec]/60 shadow-[5px_5px_0_rgba(139,115,85,0.1)] dark:border-[#f0ece4]/10 dark:bg-[#1f1b17]/55 dark:shadow-[5px_5px_0_rgba(245,240,232,0.04)]">
      <ReactFlow
        key={selectedCategory}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={edgeOptions}
        fitView
        fitViewOptions={{ padding: 0.18 }}
        minZoom={0.25}
        maxZoom={1}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        nodesFocusable={false}
        edgesFocusable={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          color="#81766b"
          gap={24}
          size={1}
          className="opacity-[0.18] dark:opacity-[0.12]"
        />
      </ReactFlow>
    </div>
  );
}

export default SkillsFlow;
