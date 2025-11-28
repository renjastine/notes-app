export type Notes = {
  id: number,
  content: string,
  tags: string[],
  createdAt: string,
}

export type NotesProps = Notes & {
  setIsDeleteOpen: (val: boolean) => void
  setDeleteById: (val: number) => void
}