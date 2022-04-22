import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {

  useEffect(() => {
    console.log('planner screen');
  })

  return (
    <View>
      <Text>Planner Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}