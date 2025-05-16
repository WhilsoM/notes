import { notesStore } from '@/stores/notes'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const createNote = () => {
	const router = useRouter()
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [error, setError] = useState('')

	const handlePress = () => {
		if (title.length < 3 || body.length < 3) {
			setError('Заполните все поля')
			return
		}
		setError('')
		notesStore.createNote({ id: Date.now(), title, body })
		router.push({
			pathname: '/',
		})
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Добавление заметки</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={setTitle}
				placeholder='Название'
			/>
			<TextInput
				style={styles.input}
				value={body}
				onChangeText={setBody}
				placeholder='Описание'
			/>

			<Pressable style={styles.createNoteBtn} onPress={handlePress}>
				<Text style={styles.createNoteBtnText}>Создать заметку</Text>
			</Pressable>

			{error && <Text style={styles.errorText}>{error}</Text>}
		</View>
	)
}
export default createNote

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		paddingLeft: 20,
		paddingRight: 20,
	},
	title: {
		fontSize: 25,
		marginBottom: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 10,
		marginTop: 15,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 15,
		paddingRight: 15,
	},
	errorText: {
		color: 'red',
		fontSize: 15,
		marginTop: 15,
	},
	createNoteBtn: {
		width: '100%',
		borderColor: 'black',
		borderWidth: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		marginTop: 10,
	},
	createNoteBtnText: {
		fontSize: 18,
	},
})
