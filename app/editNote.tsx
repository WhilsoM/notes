import { notesStore } from '@/stores/notes'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const editNote = () => {
	const { id, title, body } = useLocalSearchParams()
	const router = useRouter()
	const [newTitle, setNewTitle] = useState('')
	const [newBody, setNewBody] = useState('')
	const [error, setError] = useState('')

	const handleEditNote = () => {
		if (newTitle.length < 3 || newBody.length < 3) {
			return setError('Заполните все поля')
		}
		const formatEditNoteData = {
			id: +id,
			title: newTitle,
			body: newBody,
		}
		notesStore.editNote(formatEditNoteData)

		router.push({
			pathname: '/',
		})
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Редактирование заметки</Text>

			<Text style={styles.beforeText}>Предыдущее название: {title}</Text>
			<TextInput
				style={styles.input}
				value={newTitle}
				onChangeText={setNewTitle}
			/>

			<Text style={styles.beforeText}>Предыдущее описание: {body}</Text>
			<TextInput
				style={styles.input}
				value={newBody}
				onChangeText={setNewBody}
			/>

			<Pressable onPress={handleEditNote} style={styles.editBtn}>
				<Text style={styles.editBtnText}>Изменить</Text>
			</Pressable>

			{error && <Text style={styles.errorText}>{error}</Text>}
		</View>
	)
}

export default editNote

const styles = StyleSheet.create({
	errorText: {
		color: 'red',
		fontSize: 16,
		marginTop: 10,
	},
	container: {
		paddingLeft: 10,
		paddingRight: 10,
	},
	title: {
		fontSize: 20,
		marginBottom: 15,
	},
	input: {
		paddingHorizontal: 15,
		paddingTop: 10,
		paddingBottom: 10,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 10,
	},
	editBtn: {
		width: '100%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
	editBtnText: {
		fontSize: 16,
	},
	beforeText: {
		marginBottom: 10,
		fontSize: 17,
	},
})
