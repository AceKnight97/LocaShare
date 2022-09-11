import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import User from "../../pages/user";

const Tab = createBottomTabNavigator();

function BottomAppStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="user" component={User} />
      <Tab.Screen name="user1" component={User} />
      <Tab.Screen name="user2" component={User} />
      <Tab.Screen name="user3" component={User} />
    </Tab.Navigator>
  );
}

export default BottomAppStack;
