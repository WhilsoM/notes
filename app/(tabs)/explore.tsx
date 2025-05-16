import { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function TabTwoScreen() {
	const [value, onChangeText] = useState('Useless Multiline Placeholder')
	return (
		<View>
			<SafeAreaProvider>
				<SafeAreaView
					style={[
						styles.container,
						{
							backgroundColor: value,
						},
					]}
				>
					<TextInput
						editable
						multiline
						onChangeText={(text) => onChangeText(text)}
						value={value}
						style={styles.textInput}
					/>
				</SafeAreaView>
			</SafeAreaProvider>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 200,

		borderWidth: 1,
		borderColor: 'black',
		width: 200,
	},
	textInput: {
		color: 'black',
	},
})
