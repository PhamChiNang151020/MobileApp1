import { StyleSheet } from "react-native";
const styleSumComponent = StyleSheet.create({
    num: {
        backgroundColor: '#a6a2a2',
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        height: 40,
        width: 100,
    },
    container:{
        flexDirection: 'row'
    },
    add:{
        fontSize: 30,
        justifyContent: 'center',
        color: 'black',
        marginRight: 20,
        marginLeft: 20,
    },
    btnAdd:{
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#a6a2a2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 30,
        width: 130,
    },
    text:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#a6a2a2',
    },
    kq:{
      width: 100,
    },
});
export default styleSumComponent;