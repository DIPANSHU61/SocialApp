import React, {Component} from 'react'
import {StyleSheet, Text, Image, ImageBackground, View, Dimensions, TouchableHighlight} from 'react-native';
import styles from './styles'
import {Button, SocialIcon} from 'react-native-elements'
import {colors} from "../../assests/colors/colors";

const windows = Dimensions.get('window');

export default class AlreadyAccountScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={{
                        height: windows.height, width: windows.width,
                        background: 'transparent'
                    }}
                    source={require("../../assests/images/main_bg.jpg")}
                >
                    <View
                        style={{marginTop: (windows.height * 30 / 100), flex: 1}}
                    >
                        <TouchableHighlight
                            underlayColor={'transparent'}
                            style={styles.btn_login}
                            onPress={() => this.checkValidations()}
                        >
                            <Text style={{
                                color: colors.orange,
                                alignSelf: 'center',
                                alignItems: 'center',

                                fontSize: 14
                            }}>Create an Account</Text>
                        </TouchableHighlight>

                        <View style={styles.circle_view}

                        >
                            <Text style={{
                                color: 'white',
                                alignSelf: 'center',
                                alignItems: 'center',

                                fontSize: 14
                            }}>Or</Text>
                        </View>

                        <View
                        style={{flexDirection:'row',justifyContent:'center',marginTop:10}}
                                                >
                            <View>
                                <SocialIcon
                                    type='facebook'
                                />

                            </View>

                            <View>
                                <SocialIcon
                                    onPress={() => this.checkValidations()}
                                    type='twitter'
                                />

                            </View>
                            <View>
                                <SocialIcon
                                    type='google'
                                />

                            </View>

                        </View>

                    </View>
                </ImageBackground>


            </View>
        )
    }

    checkValidations() {
        alert("clicked")
    }


}

