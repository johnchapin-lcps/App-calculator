import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
   state = {
        teamOneScore: 0,
        teamTwoScore: 0,
        first:0,
        second:0,
        total:0,
    }

    teamOneTouchdown = () => {
        // update teamOneScore by 7
        this.setState({
            teamOneScore: this.state.teamOneScore + 7,
        })
    }

    teamOneFieldGoal = () => {
        // update teamOneScore by 3
        this.setState({
            teamOneScore: this.state.teamOneScore + 3,
        })
    }

    teamTwoTouchdown = () => {
        // update teamTwoScore by 7
        this.setState({
            teamTwoScore: this.state.teamTwoScore + 7,
        })
    }

    teamTwoFieldGoal = () => {
        // update teamTwoScore by 3
        this.setState({
            teamTwoScore: this.state.teamTwoScore + 3,
        })
    }

    allClear = () => {
        // update teamTwoScore by 3
        this.setState({
            teamTwoScore: this.state.teamTwoScore + 3,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Calculator
                </Text>

                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                        this.allClear();
                    }}
                    >
                        <Text style={styles.buttonText}>
                            AC
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                        this.teamOneFieldGoal();
                    }}
                    >
                        <Text style={styles.buttonText}>
                            TEAM 1 FIELD GOAL!
                        </Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                        this.teamTwoTouchdown();
                    }}
                    >
                        <Text style={styles.buttonText}>
                            TEAM 2 TOUCHDOWN!
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                        this.teamTwoFieldGoal();
                    }}
                    >
                        <Text style={styles.buttonText}>
                            TEAM 2 FIELD GOAL!
                        </Text>
                    </TouchableHighlight>
                </View>

                <Text style={styles.paragraph}>
                    total:{this.state.total}
                </Text>

                <Text style={styles.paragraph}>
                    first:{this.state.first}
                </Text>

                <Text style={styles.paragraph}>
                    second:{this.state.second}
                </Text>

            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    paragraph: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',

    },
    button: {
        height: 50,
        width: 80,
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 10,
    },
});
