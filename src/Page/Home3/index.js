import { View, Text ,TextInput ,Button , } from 'react-native'
import React from 'react'

const Home3 = () => {
  const[number1,setNumber1] = useState(0);
  const[number2,setNumber2]= useState(0); 
  const[number3,setNumber3] = useState(0);
  const[number4,setNumber4]= useState(0);
  const[total , setTotal] = useState(number1 * number2 * number3 * number4)

 function addTogether() {
    const newTotal = number1 * number2 * number3 * number4 ;
    setTotal(newTotal);
    Alert.alert('Alert', 'Jumlah dua bilangan: ' + newTotal); // total has the old value in the render
}



  return (
    <View style={styles.container}>
            <TextInput
                type="number"
                placeholder="0"
                value={number1}
                onChangeText={v => {
                    setNumber1(Number.parseInt(v)); // Use parsed value from onChangeText
                }}
            />
            <TextInput
                type="number"
                placeholder="0"
                value={number2}
                onChange={e => {
                    setNumber2(Number.parseInt(e.nativeEvent.text)); // or get correct value from nativeEvent onChange
                }}
            />
            <TextInput
                type="number"
                placeholder="0"
                value={number3}
                onChangeText={v => {
                    setNumber3(Number.parseInt(v)); // Use parsed value from onChangeText
                }}
            />
            <TextInput
                type="number"
                placeholder="0"
                value={number4}
                onChangeText={v => {
                    setNumber4(Number.parseInt(v)); // Use parsed value from onChangeText
                }}
            />

            <Button onPress={addTogether} title="Tekan" />
           <Text>{total}</Text>
        
        </View>
  )
}

export default Home3

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
  },
  image: {
      width: 250,
      height: 100,
  },
  input: {
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
  },
});