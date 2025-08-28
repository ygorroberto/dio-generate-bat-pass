import React, { useState } from 'react';
import { View, TextInput, Button, Text, Pressable } from 'react-native';
import { LogoBatman } from '../../components/LogoBatman/LogoBatman';
import styles from './Style';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';

export default function Home() {
    const [newPass, setNewPass] = useState('');

    function handleGenerateButton() {
        let generateToken = generatePass();
        setNewPass(generateToken);
    }

    async function handleCopyToClipboard() {
        if (!newPass) {
            Toast.show({
                type: 'error',
                text1: 'Nenhuma senha gerada!',
                text2: 'Por favor, gere uma senha antes de copiar.'
            });
            return;
        }

        await Clipboard.setStringAsync(newPass);
        Toast.show({
            type: 'success',
            text1: 'Senha copiada!',
            text2: 'Agora está na sua área de transferência.'
        });
    }

    return (
        <>
            <View style={styles.logoContainer}>
                <LogoBatman />
            </View>

            <TextInput style={styles.input} placeholder='[...]' onChangeText={setNewPass} value={newPass}></TextInput>

            <Pressable style={styles.button} onPress={handleGenerateButton}>
                <Text style={styles.buttonText}>GENERATE</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={handleCopyToClipboard}>
                <Text style={styles.buttonText}>COPY</Text>
            </Pressable>
        </>
    );
}