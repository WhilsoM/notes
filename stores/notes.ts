import { makeAutoObservable } from 'mobx'

export interface NotesTypes {
	id: number
	title: string
	body: string
}

class NotesStore {
	notes: NotesTypes[] = [{ id: 11, title: 'Hello', body: 'hello from body' }]

	constructor() {
		makeAutoObservable(this)
	}

	createNote(note: NotesTypes) {
		const { id, title, body } = note
		this.notes.push({ id, title, body })
	}

	deleteNote(id: string) {
		this.notes = this.notes.filter((item) => item.id !== +id)
	}

	editNote(note: NotesTypes) {
		const { id, title, body } = note
		const targetNote = this.notes.find((n) => n.id === id)

		if (targetNote) {
			targetNote.title = title
			targetNote.body = body
		}
	}
}

export const notesStore = new NotesStore()
