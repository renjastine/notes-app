import { Editor } from '@tiptap/react'

export type Notes = {
  id: number;
  content: string;
  tags: string[];
  createdAt: string;
  color: string;
}

export type NotesProps = Notes & {
  setIsDeleteOpen: (val: boolean) => void;
  setDeleteById: (val: number) => void;
  setIsOpen: (val: boolean) => void;
  setId: (val: number) => void;
}

export type ColorButtonProps = {
  color: string;
  selectedColor: string;
  setSelectedColor: (val: string) => void;
}

export type ColorProps = {
  selectedColor: string;
  setSelectedColor: (val: string) => void;
}

export type DeleteConfirmationProps = {
  deleteById: number;
  setIsDeleteOpen: (val: boolean) => void;
  notes: Notes[];
  setNotes: (val: Notes[]) => void;
}

export type DropdownItemProps = {
  itemName: "new" | "old";
  selectedSort: string;
  setSelectedSort: (val: string) => void;
}

export type DropdownSortProps = {
  selectSort: string;
  setSelectSort: (val: string) => void;
}

export type FilterTagsProps = {
  notes: Notes[];
  selectedTags: string[];
  setSelectedTags: (val: string) => void;
}

export type InputTagsProps = {
  tag: string;
  inputTags: string[];
  setInputTags: (val: string[]) => void;
}

export type MenuProps = {
  editor: Editor;
}

export type NewNoteProps = {
    setIsOpen: (val: boolean) => void;
}

export type NoteViewProps = {
    id: number;
    notes: Notes[];
    setNotes: (val: Notes) => void;
    setIsOpen: (val: boolean) => void;
    setId: (val: number) => void;
}

export type SearchBarProps = {
  search: string;
  setSearch: (val: string) => void;
}

export type TagsProps = {
    tag: string;
    clickable?: boolean;
    selectedTags?: string[];
    setSelectedTags?: (val: string) => void;
}