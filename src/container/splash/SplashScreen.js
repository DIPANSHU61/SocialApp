import React, {Component} from 'react'
import {AsyncStorage, Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ActionConst, Actions} from 'react-native-router-flux';
import styles from './styles'

const windows = Dimensions.get('window');
var Status = 0;
/**
 * @author john
 * @version 1.2
 *
 */
export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

            userId: '',


        };


    }


    componentWillMount() {
        // windows.setTimeout(function(){
        //     Actions.login_screen()
        // },3000);
        AsyncStorage.getItem('userId', (err, result) => {
            this.setState({userId: result});
            /*alert(this.state.userId)*/
        });


        setTimeout(() => {
            debugger;

            Actions.already_account({type: ActionConst.RESET});
            if (this.state.userId == null) {

            } else {

                // Actions.tabbar({type: ActionConst.RESET});
            }

        }, 2000)


    }

    /*   componentDidMount() {
     debugger
     if (Status < 3) {
     var Status = Status + 1
     AsyncStorage.setItem('Status', Status + "");
     }
     }*/

    render() {
        return (
            <View style={styles.container}>
                <Text style={{alignSelf: 'flex-end'}}>
                    V 0.31
                </Text>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexDirection: 'column',
                    }}
                >

                    <Image
                        style={{
                            height: windows.height, width: windows.width,
                        }}
                        source={require("../../assests/images/splash.jpg")}
                    >

                    </Image>

                </View>


            </View>

        )
    }

}
