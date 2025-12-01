"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Menu from "./Menu";

export default function TextEditor() {
    const editor = useEditor({
        extensions: [StarterKit],
        editorProps: {
            attributes: {
                class: "border border-black/20 rounded-b-md min-h-[400px] p-4 focus:outline-none",
            }
        },
        shouldRerenderOnTransaction: true,
        immediatelyRender: false,
    })

    if (!editor) return null

    return (
        <div className="">
            <Menu editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}
