"use client";

import { EditorContent } from "@tiptap/react";
import Menu from "./Menu";
import { MenuProps } from "../types";

export default function TextEditor({ editor }: MenuProps) {
    return (
        <div>
            <Menu editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}
