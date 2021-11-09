import React, {Component} from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'


export default Screen1 = props => {
    setTimeout(() => {
      props.navigation.replace("Home");
    }, 2000);
    return(
        <SafeAreaView style={{height: '100%', width: '100%', backgroundColor: '#baffec'}}>
          <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: '30%', width: '100%', justifyContent: 'flex-end', alignItems: 'center'}}>
              <Text style={{fontSize: 18}}>
                Splash screen
              </Text>
            </View>
            <View style={{height: '40%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <View  style={{height: 150, width: 150, borderRadius: 150,
              borderWidth: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 18}}>
                  Logo
                </Text>
              </View>
            </View>
            <View style={{height: '30%', width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
              <Text style={{fontSize: 18}}>
                Demo App
              </Text>
            </View>
          </View>   
        </SafeAreaView>
    )
}
