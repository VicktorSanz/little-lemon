import { Routes } from './routes/Routes';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Layout = (props) => {
    let Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    Routes?.map(routes =>
                        <Stack.Screen
                            key={routes.name}
                            options={{
                                headerBackVisible:routes.aceptGoBack,
                                gestureEnabled: routes.aceptGoBack,
                            }}
                            name={routes.name}
                            component={routes.component} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default Layout