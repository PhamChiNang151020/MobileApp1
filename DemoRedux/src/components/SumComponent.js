import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styleSumComponent from '../styles/StyleSumComponent';
import { connect } from 'react-redux';

class SumComponent extends Component
{
  constructor(props){
    super(props);
    this.state={
        num1: 0, 
        num2: 0
    };
    this.tinhTong = this.tinhTong.bind(this);
}
tinhTong() {
    const {num1, num2} = this.state;
    this.props.dispatch({
        num1, 
        num2, 
        type: 'SUM'
    });
}
  render(){
    return(
      <View>
        <View style={styleSumComponent.container}>
          <TextInput style={styleSumComponent.num} placeholder="0" onChangeText={num1=>this.setState({num1})}/>
          <Text style={styleSumComponent.add}> + </Text>
          <TextInput style={styleSumComponent.num} placeholder="0" onChangeText={num2=>this.setState({num2})}/>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styleSumComponent.btnAdd} onPress={(this.tinhTong)}>
            <Text style={styleSumComponent.text}>Tính Tổng</Text>
            </TouchableOpacity>
          <View style={styleSumComponent.kq}>
            
          </View>
        </View>
    
      </View>

    );
  }
}
export default connect()(SumComponent);