import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Text, PaperProvider} from 'react-native-paper';

const CombustivelApp: React.FC = () => {
  const [alcoolValue, setAlcoolValue] = useState('');
  const [gasolinaValue, setGasolinaValue] = useState('');
  const [resultado, setResultado] = useState('');

  const handleCalcular = () => {
    const alcool = parseFloat(alcoolValue);
    const gasolina = parseFloat(gasolinaValue);

    if (alcool && gasolina) {
      const ratio = alcool / gasolina;

      if (ratio < 0.7) {
        setResultado('Abasteça com Álcool');
      } else {
        setResultado('Abasteça com Gasolina');
      }
    } else {
      setResultado('Insira valores válidos');
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.appName}>Combustivel APP</Text>
        <Text style={styles.label}>Valor do litro do Álcool:</Text>
        <TextInput
          mode="outlined"
          keyboardType="numeric"
          value={alcoolValue}
          onChangeText={text => setAlcoolValue(text)}
          style={styles.input}
        />

        <Text style={styles.label}>Valor do litro da Gasolina:</Text>
        <TextInput
          mode="outlined"
          keyboardType="numeric"
          value={gasolinaValue}
          onChangeText={text => setGasolinaValue(text)}
          style={styles.input}
        />

        <Button mode="contained" onPress={handleCalcular} style={styles.button}>
          Calcular
        </Button>

        <Text style={styles.resultado}>{resultado}</Text>
        <Text style={styles.aluno}>Desenvolvido por Leandro Ferreira de Jesus</Text>
        <Text style={styles.matricula}>Matrícula: 2020101253</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  resultado: {
    marginTop: 32,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aluno: {
    marginTop: 32,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  matricula: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

export default CombustivelApp;
