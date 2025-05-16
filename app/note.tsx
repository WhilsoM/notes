import { PenIcon } from '@/assets/icons/UI/PenIcon'
import TrashIcon from '@/assets/icons/UI/TrashIcon'
import { notesStore } from '@/stores/notes'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function NoteScreen() {
	const router = useRouter()
	const { id, title, body } = useLocalSearchParams()

	const deletePress = () => {
		notesStore.deleteNote(id.toString())
		router.push({
			pathname: '/',
		})
	}

	const editPress = () => {
		console.log(id, title, body)
		router.push({
			pathname: '/editNote',
			params: {
				id,
				title,
				body,
			},
		})
	}
	return (
		<View style={styles.container}>
			<View style={styles.btnsWrapper}>
				<View style={styles.deleteWrapper}>
					<TrashIcon size={16} color={'black'} />

					<Pressable onPress={deletePress} style={styles.deleteBtn}>
						<Text style={styles.deleteBtnText}>Удалить</Text>
					</Pressable>
				</View>
				<Text>|</Text>
				<View style={styles.editWrapper}>
					<PenIcon color='black' />
					<Pressable onPress={editPress} style={styles.deleteBtn}>
						<Text style={styles.deleteBtnText}>Редактировать</Text>
					</Pressable>
				</View>
			</View>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.body}>{body}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	body: {
		fontSize: 18,
	},
	deleteWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 5,
	},
	deleteBtn: {
		padding: 5,
	},
	deleteBtnText: {
		fontSize: 16,
	},
	btnsWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 15,
		marginBottom: 15,
	},
	editWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
