import React from 'react';
import {
    AppRegistry,
    TextInput,
    View,
    StyleSheet,
    Text,
    Animated,
    TouchableOpacity
} from 'react-native';

// *Utilización de react navigation
import { withNavigation } from 'react-navigation';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correo: '',
            pass: '',
            fadeAnim: new Animated.Value(-400)
        };
    }

    // Ejecutar al montar el componente
    componentDidMount() {
        Animated.timing(this.state.fadeAnim, {
            toValue: 0,
            duration: 1000
        }).start();
    }

    login() {
        this.props.navigation.navigate('App');
    }

    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.View style={{ right: fadeAnim }}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputText}
                        value={this.correo}
                        placeholder='Correo'
                        onChangeText={text => this.setState({ correo: text })}
                    />
                    <TextInput
                        style={styles.inputText}
                        value={this.pass}
                        placeholder='Contraseña'
                        onChangeText={text => this.setState({ pass: text })}
                        secureTextEntry={true}
                    />
                    <Text>{this.state.correo}</Text>
                    <TouchableOpacity
                        style={{
                            width: 170,
                            height: 60,
                            backgroundColor: '#50c8e0',
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => this.login()}
                    >
                        <Text style={{ color: 'white', fontSize: 18 }}>
                            Iniciar Sesión
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    inputText: {
        height: 50,
        width: 300,
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20,
        marginTop: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    container: {
        height: 300,
        width: '100%',
        flex: 1,
        alignItems: 'center'
    }
});

AppRegistry.registerComponent('InstagramClone', () => Login);

export default withNavigation(Login);
