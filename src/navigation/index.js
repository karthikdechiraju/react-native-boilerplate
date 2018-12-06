import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../components/screens/home'

const Navigator = createStackNavigator(
    {
        Home:{
            screen: Home
        }
    },{
        initialRouteName:'Home',
        headerMode:'none'
    }
)

const App = createAppContainer(Navigator);

export default App;