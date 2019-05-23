import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Post extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View
                        style={{
                            paddingLeft: 10,
                            paddingRight: 10,
                            alignItems: 'center',
                            height: '100%',
                            flexDirection: 'row'
                        }}
                    >
                        <View
                            style={{
                                height: 32,
                                width: 32,
                                borderRadius: 50,
                                marginRight: 10,
                                overflow: 'hidden',
                                borderStyle: 'solid',
                                borderWidth: 2
                            }}
                        >
                            <Image
                                source={{ uri: this.props.profileImage }}
                                style={{ height: '100%', width: '100%' }}
                                resizeMode='cover'
                            />
                        </View>
                        <Text
                            style={{
                                fontSize: 16,
                                color: 'black',
                                fontWeight: 'bold'
                            }}
                        >
                            {this.props.username}
                        </Text>
                    </View>
                </View>
                <Image
                    source={{ uri: this.props.image }}
                    style={{ height: 400, width: '100%' }}
                />
                <View>
                    <View style={{ height: 50, padding: 12 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.icon}
                                source={{
                                    uri:
                                        'https://image.flaticon.com/icons/png/512/20/20119.png'
                                }}
                            />
                            <Image
                                style={styles.icon}
                                source={{
                                    uri:
                                        'http://chittagongit.com/images/instagram-comment-icon-png/instagram-comment-icon-png-6.jpg'
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ height: 16, paddingLeft: 15 }}>
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold'
                            }}
                        >
                            {this.props.meGusta} me gusta
                        </Text>
                    </View>
                    <View
                        style={{
                            height: 60,
                            paddingTop: 12,
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                color: 'black'
                            }}
                        >
                            <Text style={{ fontWeight: 'bold' }}>
                                {this.props.username}
                            </Text>{' '}
                            {this.props.descripcion}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    postContainer: {
        padding: 10,
        height: 'auto',
        width: 'auto'
    },
    header: {
        height: 52
    },
    icon: {
        height: 30,
        width: 30,
        marginRight: 10
    }
});
