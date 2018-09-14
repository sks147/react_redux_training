import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class HarryPotter extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'Harry'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.state.name} : {this.props.summary}
        </Text>
        <Image style={styles.logo} source={require("../assets/harry-potter.png")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
