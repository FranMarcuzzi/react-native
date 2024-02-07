import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity, FlatList } from 'react-native';
import Usuario from './src/Usuario';
import imagen from './assets/cart-icon-28356.png'
import { useState } from 'react';

export default function App() {
  bd = [
    {"name": "Smartphone", "id": 1},
    {"name": "Apple Watch", "id": 2},
    {"name": "Tablet", "id": 3},
    {"name": "Laptop", "id": 4},
    {"name": "Smart TV", "id": 5},
    {"name": "Refrigerador inteligente", "id": 6},
    {"name": "Lavadora de carga frontal", "id": 7},
    {"name": "Secadora de ropa", "id": 8}
    ]
    const [inputValue,setInputValue]= useState('');
    const handleInputChange= (value) => setInputValue(value);
    const [cartItems,setCartItems]=useState(bd);
    const addItem= ()=>{
      const newItem = {
        name:inputValue,
        id:new Date().getTime()
      }
      setCartItems([...cartItems,newItem])
    }
    //Para eliminar un elemento primero debes presionar y luego mantener presionado
    const eliminarItem = () => {
      if (seleccionado !== null) {
        const nuevosDatos = cartItems.filter(item => item.id !== seleccionado);
        setCartItems(nuevosDatos);
        setSeleccionado(null); // Restablecer el elemento seleccionado
      }
    };
    const [seleccionado, setSeleccionado] = useState(null);
    const seleccionarItem = (id) => {
      setSeleccionado(id);
    };
    const renderItem = ({ item }) => (
      <TouchableOpacity  onLongPress={eliminarItem} 
      onPress={() => seleccionarItem(item.id)} style={{ padding: 10, backgroundColor: seleccionado === item.id ? 'skyblue' : 'transparent' }}>
        <Text style={style.items}>{item.name}</Text>
      </TouchableOpacity>
    );
  
  return (
   <View style={style.container}>
    <View style={style.titulo}>
      <Text>MyStore</Text>
      <Image source={imagen} style={style.img}></Image>
    </View>
    <View style={{flexDirection:"row"}}>
      <TextInput value={inputValue} onChangeText={handleInputChange} placeholder='Busqueda' style={style.search}/>
          <TouchableOpacity onPress={addItem}>
            <Text style={{fontSize:50, marginLeft:10}}>+</Text>
          </TouchableOpacity>
    </View>
    <View style={style.lista}>
    <Text style={style.items}>{inputValue}</Text>
    <FlatList data={cartItems} renderItem={renderItem} 
    KeyExtractor={(item)=> item.id}/>
    </View >
   </View>
  );
};


const style= StyleSheet.create({
  container:{
    flex:1
  },
  titulo:{
    flexDirection:'row',
     justifyContent:'center', 
    gap:8,alignItems:'center',
     marginTop:'10%'
  },
  img:{
    width:50, 
    height:50
  },
  search: {borderColor:"grey",
  borderWidth:1,
  paddingVertical:10,
   paddingHorizontal:20,
   borderRadius:5,
   marginTop:10,
   marginBottom:10,
   width:"85%"},
   lista:{
    alignItems:'center'
  },
  items:{
    fontWeight:'bold',
    fontSize:16,
    padding:5
  }

})