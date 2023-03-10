import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>This is an update published from GH actions</Text>
      <Text>Count: {count}</Text>
      <View style={{ backgroundColor: 'blue', borderRadius: 15, marginVertical: 100 }}>
        <Button title='Press me' onPress={() => setCount(count + 1)} color='white' />
      </View>
      <View style={{ backgroundColor: 'red', borderRadius: 15 }}>
        <Button title='Reset' onPress={() => setCount(0)} color='white' />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
