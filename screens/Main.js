import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Animated
} from 'react-native';
import Login from '../components/Login';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginForm: false,
            xPosition: new Animated.Value(0)
        };
    }
    static navigationOptions = {
        title: 'Main'
    };

    showForm() {
        Animated.timing(this.state.xPosition, {
            toValue: -400,
            duration: 1000
        }).start();
        this.setState({ showLoginForm: true });
    }

    render() {
        let { pos } = this.state;
        const btn = (
            <Animated.View style={{ left: pos }}>
                <TouchableOpacity
                    style={{
                        width: 170,
                        height: 60,
                        backgroundColor: '#50c8e0',
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => this.showForm()}
                >
                    <Text style={{ color: 'white', fontSize: 18 }}>
                        Continuar
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        );
        return (
            <View style={styles.main}>
                <ImageBackground
                    source={require('../assets/house-background.jpg')}
                    style={{ width: '100%', height: '100%' }}
                />
                <Text
                    style={{
                        fontFamily: 'Satisfy-Regular',
                        zIndex: 100,
                        position: 'absolute',
                        color: 'white',
                        fontSize: 60,
                        width: '100%',
                        textAlign: 'center',
                        top: 50
                    }}
                >
                    Clonegram
                </Text>
                <Text
                    style={{
                        position: 'absolute',
                        zIndex: 100,
                        fontSize: 15,
                        width: '100%',
                        textAlign: 'center',
                        paddingLeft: '15%',
                        paddingRight: '15%',
                        top: 145,
                        color: 'white'
                    }}
                >
                    Clon de instagrama para pruebas de react-native
                </Text>
                <View
                    style={{
                        position: 'absolute',
                        zIndex: 100,
                        width: '100%',
                        alignItems: 'center',
                        top: 220
                    }}
                >
                    <View>{this.state.showLoginForm ? <Login /> : btn}</View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        height: 100,
        backgroundColor: 'black'
    }
});
