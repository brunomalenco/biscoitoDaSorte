import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
      

//       <Image style={styles.img} source={require('./src/img/biscoito.png')} />

//       <Text style={styles.textoFrase}>"Alguma frase aqui"</Text>

//       <TouchableOpacity style={styles.botao}>
//         <View style={styles.btnArea}>
//           <Text style={styles.btnTexto}>Quebrar biscoito</Text>
//         </View>
//       </TouchableOpacity>


//       <StatusBar style="auto" />
//     </View>
//   );
// }

class App extends Component{

  constructor(props){
    super(props)
    this.state ={
      textoFrase: '',
      img: require('./src/img/biscoito.png')
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
          "A persistência é o caminho do êxito",
          "Quando você vive o nós, o seu eu é recompensado",
          "Os problemas são oportunidades para se mostrar o que sabe",
          "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente",
          "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos"
  ]
  }

  quebraBiscoito() {
    let numAleatorio = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: this.frases[numAleatorio],
      img: require('./src/img/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View style={styles.container}>
      

      <Image style={styles.img} source={this.state.img} />

      <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img:{
    height: 250,
    width: 250
  },

  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center'
  },

  botao:{
    width: 230,
    height:50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 20
  },

  btnArea:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center'
  },

  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold'
  }
});
