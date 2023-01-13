import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {SpendData, addSpend} from '../../Data';


export default function HomeScreen({ navigation }) {

    const [items, setItems] = useState([]);
    const [what, setWhat] = useState('');
    const [where, setWhere] = useState('');
    const [cost, setCost] = useState('');
    const [when, setWhen] = useState('');
    const [message, setMessage] = useState('');

    const onButtonPress = () => {
        const newSpend = { what, where, cost, when };
        setItems([...items, newSpend]);
        addSpend(newSpend);
        setWhat('');
        setWhere('');
        setCost('');
        setWhen('');
      }


    const onButtonPress2 = () => {
        setMessage(items.length);
    }


    return (
        <View style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 300,
            paddingBut: 300,
            alignItems: 'center',
          }}>
            <Text style={{fontSize: 40, color: '#e91e63', fontWeight: 'bold'}}>
                Add a New Spend
            </Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{fontSize: 20, color: '#e91e63', fontWeight: 'bold'}}>What:</Text>
                <TextInput 
                    value={what}
                    onChangeText={setWhat}
                    style={{borderRadius: 100, color: 'darkGreen', paddingHorizontal: 10, width: '50%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}} placeholder="What did you buy?" />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{fontSize: 20, color: '#e91e63', fontWeight: 'bold'}}>Where:</Text>
                <TextInput
                    value={where}
                    onChangeText={setWhere}
                    style={{borderRadius: 100, color: 'darkGreen', paddingHorizontal: 10, width: '50%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}} placeholder="Where did you buy it?" />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{fontSize: 20, color: '#e91e63', fontWeight: 'bold'}}>Cost:</Text>
                <TextInput 
                    value={cost}
                    onChangeText={setCost}
                    style={{borderRadius: 100, color: 'darkGreen', paddingHorizontal: 10, width: '50%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}} placeholder="How much it cost?" />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{fontSize: 20, color: '#e91e63', fontWeight: 'bold'}}>When:</Text>
                <TextInput 
                    value={when}
                    onChangeText={setWhen}
                    style={{borderRadius: 100, color: 'darkGreen', paddingHorizontal: 10, width: '50%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}} placeholder="What did you buy?" />
            </View>

            <Button color='#e91e63' title="Add" onPress={() => { onButtonPress(); onButtonPress2();}} />

            <Text>{message}</Text>
        </View>
    );
}