import React from "react";
import RNPickerSelect from 'react-native-picker-select';

export default function Picker({ moedas, onChange }) {

    const placeholder = {
        label: "Selecione uma moeda...",
        value: null,
        color: '#000'
    }

    return (
        <RNPickerSelect
            placeholder={placeholder}
            items={moedas}
            onValueChange={(valor) => onChange(valor)}
            style={{
                inputIOS: {
                    fontSize: 20,
                    color: '#000'
                },
                inputAndroid: {
                    fontSize: 20,
                    color: '#000'
                }
            }}
        />
    )
}