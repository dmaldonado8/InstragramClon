import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Post from '../components/Post';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }

    componentDidMount() {
        var myHeaders = new Headers();
        var myInit = {
            method: 'GET',
            headers: myHeaders
        };
        fetch(
            'https://api.unsplash.com/photos/?client_id=2d2b08bc89657eb946c1dba29696c63921d06d8d267d7881f8e1f5d703916ef1'
        )
            .then(response => response.json())
            .then(data => {
                this.setState({ images: data });
            });
    }

    _keyExtractor = (item, index) => item.id;

    _renderPost = ({ item }) => (
        <Post
            image={item.urls.regular}
            username={item.user.username}
            profileImage={item.user.profile_image.small}
            meGusta={item.user.total_likes}
            descripcion={item.alt_description}
        />
    );

    render() {
        if (this.state.images.length == 0) {
            return null;
        }
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.nav}>
                    <View>
                        <Image
                            source={require('../assets/camera.png')}
                            style={styles.icon}
                        />
                    </View>
                    <Text
                        style={{
                            fontFamily: 'Satisfy-Regular',
                            fontSize: 29,
                            color: 'black'
                        }}
                    >
                        Clonegram
                    </Text>
                    <View>
                        <Image
                            source={require('../assets/direct.png')}
                            style={styles.icon}
                        />
                    </View>
                </View>
                <ScrollView>
                    <FlatList
                        data={this.state.images}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderPost}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nav: {
        width: '100%',
        height: 55,
        borderStyle: 'solid',
        borderColor: '#c2c4c6',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    icon: {
        width: 30,
        height: 30
    }
});
