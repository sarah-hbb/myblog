import React from "react";
import { clsx } from "clsx";
import {
  FaBold,
  FaItalic,
  FaHeading,
  FaUnderline,
  FaCode,
  FaStrikethrough,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaList,
  FaListOl,
} from "react-icons/fa";

const Tools = ({ editor }) => {
  const handleClick = (task) => {
    switch (task) {
      case "bold":
        return editor.chain().focus().toggleBold().run();

      case "italic":
        return editor.chain().focus().toggleItalic().run();

      case "heading":
        return editor.chain().focus().toggleHeading({ level: 2 }).run();

      case "underline":
        return editor.chain().focus().toggleUnderline().run();

      case "strike":
        return editor.chain().focus().toggleStrike().run();

      case "left":
        return editor.chain().focus().setTextAlign("left").run();

      case "center":
        return editor.chain().focus().setTextAlign("center").run();

      case "right":
        return editor.chain().focus().setTextAlign("right").run();

      case "bulletlist":
        return editor.chain().focus().toggleBulletList().run();

      case "orderedlist":
        return editor.chain().focus().toggleOrderedList().run();

      case "codeBlock":
        return editor.chain().focus().toggleCodeBlock().run();
    }
  };
  const tools = [
    {
      task: "bold",
      icon: <FaBold />,
    },
    {
      task: "italic",
      icon: <FaItalic />,
    },
    {
      task: "heading",
      icon: <FaHeading />,
    },
    {
      task: "underline",
      icon: <FaUnderline />,
    },
    {
      task: "strike",
      icon: <FaStrikethrough />,
    },

    {
      task: "left",
      icon: <FaAlignLeft />,
    },
    {
      task: "center",
      icon: <FaAlignCenter />,
    },
    {
      task: "right",
      icon: <FaAlignRight />,
    },

    {
      task: "bulletlist",
      icon: <FaList />,
    },
    {
      task: "orderedlist",
      icon: <FaListOl />,
    },
    {
      task: "codeBlock",
      icon: <FaCode />,
    },
  ];
  return (
    <div>
      {tools.map((tool, i) => (
        <button
          key={i}
          type="button"
          onClick={() => handleClick(tool.task)}
          className={clsx(
            "p-2 mr-1",
            editor.isActive(tool.task) ||
              editor.isActive({ textAlign: tool.task })
              ? "bg-black text-white"
              : "bg-white text-black"
          )}
        >
          {tool.icon}
        </button>
      ))}
    </div>
  );
};

export default Tools;
