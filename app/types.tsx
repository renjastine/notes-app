export type Notes = {
  id: number,
  content: string,
  tags: string[],
  createdAt: string,
  color: string
}

export type NotesProps = Notes & {
  setIsDeleteOpen: (val: boolean) => void
  setDeleteById: (val: number) => void
}