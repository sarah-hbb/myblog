import { useEffect } from "react";
import Tools from "./Tools";
import { EditorProvider, EditorContent, useEditor } from "@tiptap/react";
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

const TextEditor = ({ onChange, content }) => {
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

  return (
    <div className="flex flex-col space-y-6">
      <Tools editor={editor} />
      <div className="min-h-60 border-4 border-gray-100">
        <EditorContent editor={editor} className="h-full" />
      </div>
    </div>
  );
};

export default TextEditor;
