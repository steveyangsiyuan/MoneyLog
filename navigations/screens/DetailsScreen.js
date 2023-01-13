import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {SpendData, addSpend} from '../../Data';


export default function DetailsScreen({ navigation }) {

    
    useEffect(() => {
        console.log('Array updated');
    }, [SpendData]);

    return (
        <View>
            {SpendData.map((spend, index) => (
                <View key={index}>
                    <Text>{spend.what}  {spend.where}  {spend.cost}  {spend.when}</Text>
                </View>
            ))}
        </View>
    );
}