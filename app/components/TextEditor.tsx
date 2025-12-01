"use client";

import { Editor, EditorContent } from "@tiptap/react";
import Menu from "./Menu";

export default function TextEditor({ editor }: { editor: Editor }) {

    return (
        <div className="">
            <Menu editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}
