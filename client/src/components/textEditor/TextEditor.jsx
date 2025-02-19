import { useEffect, useState } from "react";
import Tools from "./Tools";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Placeholder from "@tiptap/extension-placeholder";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import "highlight.js/styles/monokai-sublime.css"; // Monokai theme
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import { all, createLowlight } from "lowlight"; // load all languages with "all" or common languages with "common"
import { FaMagic } from "react-icons/fa";

// create a lowlight instance with all languages loaded
const lowlight = createLowlight(all);

// define your extension array
const extensions = [
  Underline,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  StarterKit.configure({
    codeBlock: false, // ✅ Disable default CodeBlock to prevent conflicts
  }),
  CodeBlockLowlight.configure({
    lowlight, // Use the lowlight instance for syntax highlighting
  }),
  Placeholder.configure({
    // Use a placeholder:
    placeholder: "Write something …",
  }),
];

lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);

const TextEditor = ({ onChange, content, title }) => {
  const [isSymmaryLoading, setIsSummaryLoading] = useState(false);
  const editor = useEditor({
    extensions,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
    content: content,
  });

  // Update editor when content changes
  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  if (!editor) {
    return null;
  }

  // create summary from title with the help of ai
  const handleGenerateSummary = async () => {
    setIsSummaryLoading(true);
    try {
      const response = await fetch("/api/summary/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      const data = await response.json();
      editor.commands.setContent(data.summary);
    } catch (error) {
      console.error("Error generating summary:", error);
    } finally {
      setIsSummaryLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-row justify-between">
        <Tools editor={editor} />
        <button
          type="button"
          className={`p-2 text-yellow-500 ${
            isSymmaryLoading ? "animate-ping" : ""
          }`}
          onClick={handleGenerateSummary}
        >
          <FaMagic />
        </button>
      </div>
      <div className="min-h-60 border-4 border-gray-100">
        <EditorContent editor={editor} className="h-full" />
      </div>
    </div>
  );
};

export default TextEditor;
