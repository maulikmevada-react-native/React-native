import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';
import * as AppConstants from './AppConstants';
import NetInfo from "@react-native-community/netinfo";
import styles from './OfflineNoticeStyle';
import LinearGradient from 'react-native-linear-gradient'

const Images = {
    Antenna: 'noconnection'
}
console.disableYellowBox = true; 
class OfflineNotice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: true,
            isCurrantlatlong: true
        };
    }
    componentDidMount() {
       
        // this.handleConnectivityChange();
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }
    componentWillUnmount() {
        this.setState({ isConnected: false });
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }
    handleConnectivityChange=()=> {
        console.log('enter intrenet')
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            if (connectionInfo.type == 'wifi' || connectionInfo.type == 'cell' || connectionInfo.type == 'cellular') {
                global.isConnected = true;  
                this.setState({ isConnected: true });
              
            }
            else {
                global.isConnected = false;
                this.setState({ isConnected: false });
              
            }
        });
    };

    render() {
        return !this.state.isConnected ? (
            <View style={styles.mainContainer} pointerEvents={this.state.isLoading ? 'none' : 'auto'}>
                <View style={styles.logoContainer}>
                    <Image style={styles.img} source={{ uri: Images.Antenna }} resizeMode={"contain"}></Image>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt1}>No Connection</Text>
                    <Text style={styles.txt2}>Please check your internet connection and try again</Text>
                </View>
                <View style={styles.btnVisitFuzzyBunterContainer}>
                    <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#fff59a', '#d6b469', '#d6b469',]} style={styles.btnVisitFuzzyBunter}>
                        <TouchableOpacity onPress={() => { this.handleConnectivityChange() }}>
                            <Text style={styles.txtVisitFuzzyBunter}>Retry</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        ) : null;
    }
}
export default OfflineNotice;