import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateForm from './components/form/CreateForm';
import FormList from './components/form/FormList';
import EditForm from './components/form/EditForm';
import SeeForm from './components/form/SeeForm';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateForm">
        <Stack.Screen name="CreateForm" component={CreateForm} options={{ title: 'Agregar Formulario' }} />
        <Stack.Screen name="FormListScreen" component={FormList} options={{ title: 'Ver Formularios' }} />
        <Stack.Screen name="EditFormScreen" component={EditForm} options={{ title: 'Editar Formulario' }} />
        <Stack.Screen name="SeeFormScreen" component={SeeForm} options={{ title: 'Ver Formulario' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
