import { View, StyleSheet, Text, Dimensions,} from 'react-native';
import {LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');
export default function mainScreen() {
	return (
		<View style={sty.container}>
			<View>
				<LinearGradient			
      				colors={['#006400', '#32CD32']}
      				start={{ x: 0, y: 0 }}
      				end={{ x: 0, y: 1 }}
      				style={sty.topview}>

				</LinearGradient>
			</View>	
		</View>
		);
}

const sty = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#D3D3D3',

	},
	topview: {
		width: width,
		height: height * 0.12,
	},
	bg: {
		backgroundColor: '#444444',
	}, 
})