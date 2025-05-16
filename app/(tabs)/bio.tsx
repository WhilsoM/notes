import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import EmojiSelector from 'react-native-emoji-selector'

export default function TabTwoScreen() {
	const [value, setValue] = useState('')

	return (
		<View style={styles.container}>
			<Text>Кайф юзать?</Text>

			<TextInput
				value={value}
				onChangeText={setValue}
				multiline={true}
				numberOfLines={10}
				style={styles.input}
			/>

			<EmojiSelector
				columns={4}
				showSearchBar={false}
				onEmojiSelected={(e) => setValue(value + e)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 200,
		width: 200,
		marginHorizontal: 'auto',
		height: '90%',
	},
	textInput: {
		color: 'black',
	},
	input: {
		borderWidth: 1,
		borderColor: 'black',
		textAlignVertical: 'top',
		height: 200,
		width: 200,
		fontWeight: 400,
	},
})
