import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native'

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: 20,
    }
})

const Onboarding = (props) => {
    return (
        <View  style={styles.formContainer}>
            <Text>Let us get to kwon you</Text>
            <View>
                <Text>Firts Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => { console.log(value) }}
                    value={""}
                />
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => { console.log(value) }}
                    value={""}
                />
            </View>
            <Button
                title="Next"
                onPress={() => props.navigation.navigate('Home')}
            />
        </View>
    )
}

export default Onboarding