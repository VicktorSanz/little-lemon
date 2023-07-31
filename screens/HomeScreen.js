import { useCallback,useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useIsFocused, useFocusEffect, useNavigationState } from "@react-navigation/native";

const HomeScreen = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const routes = useNavigationState(state => state.routes)
    const prevRoute = routes[1]?.name

    useFocusEffect(

        useCallback(() => {
            console.log('prevRoute', prevRoute)
        if (prevRoute!='Login' && !isLoggedIn) {
            //props.navigation.navigate('Login')
        }
          }, [prevRoute])
        
    )


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text >Home Screen</Text>
            <Button
                title="Profile Settings"
                onPress={() => props.navigation.navigate('Profile')}
            />
        </View>
    )
}

export default HomeScreen