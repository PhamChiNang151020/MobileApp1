import React, { Component } from "react";
import {Text, View, StyleSheet} from 'react-native';
// import SumComponent from './components/SumComponent';
import { connect } from 'react-redux';


class Nang extends Component {
    render(){
        return(
            <Text style={styles.text}>
                { this.props.myValue }
            </Text>
        )
    }
}

function stateToProps(state){
    return { myValue: state.value };
}

export default connect(stateToProps)(Nang);

const styles = StyleSheet.create({
    text: {
        fontSize: 50, 
        fontWeight: 'bold', 
        color: 'black',
        textAlign: 'center',
    },
})