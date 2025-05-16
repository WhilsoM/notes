import { notesStore, NotesTypes } from '@/stores/notes'
import { useRouter } from 'expo-router'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
	const router = useRouter()
	const notes = notesStore

	const handlePress = (note: NotesTypes) => {
		router.push({
			pathname: '/note',
			params: {
				id: note.id,
				title: note.title,
				body: note.body,
			},
		})
	}

	const createNote = () => {
		router.push({
			pathname: '/createNote',
		})
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Все заметки</Text>

				<Pressable onPress={createNote}>
					<Text style={styles.noteFormCreate}>+</Text>
				</Pressable>
			</View>

			{notes.notes.length === 0 && (
				<Text style={styles.empty}>Заметок нету</Text>
			)}

			<FlatList
				data={notes.notes}
				renderItem={({ item }) => (
					<View style={styles.borderBottom}>
						<Pressable
							style={styles.noteScreenBtn}
							onPress={() => handlePress(item)}
						>
							<Text style={styles.noteScreenBtnText}>{item.title}</Text>
						</Pressable>
					</View>
				)}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		paddingTop: 100,
		paddingLeft: 20,
		paddingRight: 20,
	},
	title: {
		fontSize: 30,
	},
	note: {
		backgroundColor: '#000',
	},
	text: {
		color: '#fff',
		fontSize: 18,
		padding: 10,
	},
	empty: {
		textAlign: 'center',
		fontSize: 24,
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 15,
		marginBottom: 10,
	},
	btn: {
		fontSize: 25,
	},
	borderBottom: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,

		width: '100%',
	},
	noteScreenBtn: {
		paddingLeft: 10,
		borderBottomColor: 'black',
		marginBottom: 15,
		marginTop: 15,
	},
	noteScreenBtnText: {
		fontSize: 18,
	},
	noteFormCreate: {
		fontSize: 25,
	},
})
