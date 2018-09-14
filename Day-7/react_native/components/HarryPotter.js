import * as React from 'react';
import { Text, View, StyleSheet, Image, Switch } from 'react-native';

export default class HarryPotter extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'Harry',
      showName: false
    }
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(value){
    this.setState({
      showName: value
    })
  }
  
  render() {
    let name = this.state.showName ? this.state.name: 'Guest';
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.state.name} : {this.props.summary}
        </Text>
        <Switch value= {this.state.showName} onValueChange={(value) => this.onChange(value)}/>
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
