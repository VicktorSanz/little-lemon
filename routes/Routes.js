import Onboarding from '../screens/Onboarding'
import HomeScreen from '../screens/HomeScreen'
import Profile from '../screens/Profile'

const Routes = [
    { name: 'Home', component: HomeScreen, aceptGoBack: false },
    { name: 'Login', component: Onboarding , aceptGoBack: false },
    { name: 'Profile', component: Profile, aceptGoBack: true },
]

export { Routes }