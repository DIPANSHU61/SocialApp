import { StyleSheet } from 'react-native';
import {colors} from "../../assests/colors/colors";
const React = require("react-native");
const { Dimensions, Platform } = React;
const windows = Dimensions.get('window');
export default StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    btn_login: {
        width: windows.width - 45,
        height: 40,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 2,
        borderRadius: 2,
        alignSelf:'center',
        borderColor:'white',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    circle_view: {
        height: 40,
        width: 40,
        borderRadius: 60,
        borderWidth:2,
        marginTop: 15,
        borderColor: "white",
        justifyContent: 'center',
        alignSelf:'center'
    },
});


