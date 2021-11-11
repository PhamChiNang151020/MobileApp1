import React,{Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import styles from "./Styles1"

export default Screen1 = props => {
    setTimeout(() => {
      props.navigation.replace("Home");
    }, 2000);
    return(
        <View style={styles.container}>
          <Text style={styles.text}>
            Splash screen
          </Text>
          <View >
            <Text style={{fontSize: 18}}>
              Logo
            </Text>
          </View>
        </View>
    )
}
