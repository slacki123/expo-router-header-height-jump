import { useHeaderHeight } from 'expo-router/react-navigation';
import { Text, TextInput, View } from 'react-native';

export default function Pushed() {
  const headerHeight = useHeaderHeight();
  console.log('headerHeight', headerHeight);

  return (
    <View style={{ flex: 1, paddingTop: headerHeight }}>
      {/* Sits right under the header; watch it move down during the push. */}
      <View style={{ height: 40, backgroundColor: 'tomato' }} />
      <Text style={{ fontSize: 18, padding: 16 }}>headerHeight: {headerHeight}</Text>
      {/* Keeps the main thread busy at the start of the push, which makes the jump visible. */}
      <TextInput
        autoFocus
        placeholder="autoFocus input"
        style={{ fontSize: 18, padding: 16 }}
      />
    </View>
  );
}
