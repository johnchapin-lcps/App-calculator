import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
   state = {
        teamOneScore: 0,
        teamTwoScore: 0,
        current:0,
        prev:0,
        total:0,
        decimalFlag: false,
        operator: 'divide'
    }



    allClear = () => {
        // update teamTwoScore by 3
        this.setState({
            current: 0,
            prev: 0,
            total: 0,
        })
    }

    reverseSign = () => {
        // update teamTwoScore by 3
        this.setState({
            current: this.state.current * -1,
        })
    }

    percentage = () => {
        // update teamTwoScore by 3
        this.setState({
            current: this.state.current * .01,
        })
    }

    divide = () => {

        this.setState({
            operator: 'divide',
            prev: this.state.current,
            current: this.state.prev,
        })

    }


    mult = () => {
      this.setState({
          operator: 'mult',
          prev: this.state.current,
          current: this.state.prev,
      })
    }

    minus = () => {
      this.setState({
          operator: 'minus',
          prev: this.state.current,
          current: this.state.prev,
      })
    }

    plus = () => {
        // update teamTwoScore by 3
        this.setState({
            operator: 'plus',
            prev: this.state.current,
            current: this.state.prev,
        })
    }


    eq = () => {
        // update teamTwoScore by 3
        switch(this.state.operator){
          case 'divide':
            this.setState({
                current: this.state.prev / this.state.current,
            });
            break;
          case 'plus':
            this.setState({
                current: this.state.prev + this.state.current,
            });
            break;
          case 'minus':
            this.setState({
                current: this.state.prev - this.state.current,
            });
            break;
          case 'mult':
            this.setState({
                current: this.state.prev * this.state.current,
            });
            break;
          default:
            this.setState({
                current: 1000,
            });
        }
        this.setState({
            prev: 0,
        });
    }

    addDigit = (digit) => {
        // update teamTwoScore by 3
        if (this.state.current >= 0)
          this.setState({
            current: this.state.current *10 + digit,
          })
        else {
          this.setState({
            current: this.state.current *10 - digit,
          })
        }
    }


    addDecimal = (digit) => {
        // update teamTwoScore by 3
        this.setState({
            decimalFlag: true,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Calculator
                </Text>
{/*ROW 0 */}
            <View style={styles.top}>
                 <View style={styles.mainNumberView}>

                         <Text style={styles.mainNumber}>
                             {this.state.current}
                         </Text>

                 </View>
              </View>
 {/*ROW 1 */}
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
                        this.reverseSign();
                    }}
                    >
                        <Text style={styles.buttonText}>
                            +/-
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                        this.percentage();
                    }}
                    >
                        <Text style={styles.buttonText}>
                            %
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.buttonOperator}
                        onPress={() => {
                        this.divide();
                    }}
                    >
                        <Text style={styles.buttonText}>
                            /
                        </Text>
                    </TouchableHighlight>
                </View>
 {/*ROW 2 */}
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                        this.addDigit(7);
                    }}
                    >
                        <Text style={styles.buttonText}>
                            7
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                        this.addDigit(8);
                    }}
                    >
                        <Text style={styles.buttonText}>
                            8
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                        this.addDigit(9);
                    }}
                    >
                        <Text style={styles.buttonText}>
                            9
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.buttonOperator}
                        onPress={() => {
                        this.mult();
                    }}
                    >
                        <Text style={styles.buttonText}>
                            X
                        </Text>
                    </TouchableHighlight>
                </View>



  {/*ROW 3 */}
                 <View style={styles.buttonContainer}>
                     <TouchableHighlight
                         style={styles.button}
                         onPress={() => {
                         this.addDigit(4);
                     }}
                     >
                         <Text style={styles.buttonText}>
                             4
                         </Text>
                     </TouchableHighlight>

                     <TouchableHighlight
                         style={styles.button}
                         onPress={() => {
                         this.addDigit(5);
                     }}
                     >
                         <Text style={styles.buttonText}>
                             5
                         </Text>
                     </TouchableHighlight>

                     <TouchableHighlight
                         style={styles.button}
                         onPress={() => {
                         this.addDigit(6);
                     }}
                     >
                         <Text style={styles.buttonText}>
                             6
                         </Text>
                     </TouchableHighlight>

                     <TouchableHighlight
                         style={styles.buttonOperator}
                         onPress={() => {
                         this.minus();
                     }}
                     >
                         <Text style={styles.buttonText}>
                             -
                         </Text>
                     </TouchableHighlight>
                 </View>

    {/*ROW 4 */}
                  <View style={styles.buttonContainer}>
                      <TouchableHighlight
                          style={styles.button}
                          onPress={() => {
                          this.addDigit(1);
                      }}
                      >
                          <Text style={styles.buttonText}>
                              1
                          </Text>
                      </TouchableHighlight>

                      <TouchableHighlight
                          style={styles.button}
                          onPress={() => {
                          this.addDigit(2);
                      }}
                      >
                          <Text style={styles.buttonText}>
                              2
                          </Text>
                      </TouchableHighlight>

                      <TouchableHighlight
                          style={styles.button}
                          onPress={() => {
                          this.addDigit(3);
                      }}
                      >
                          <Text style={styles.buttonText}>
                              3
                          </Text>
                      </TouchableHighlight>

                      <TouchableHighlight
                          style={styles.buttonOperator}
                          onPress={() => {
                          this.plus();
                      }}
                      >
                          <Text style={styles.buttonText}>
                              +
                          </Text>
                      </TouchableHighlight>
                  </View>
  {/*ROW 5 */}
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.buttonDouble}
                        onPress={() => {
                        this.addDigit(0);
                    }}
                    >
                        <Text style={styles.buttonText}>
                            0
                        </Text>
                    </TouchableHighlight>


                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                        this.addDecimal();
                    }}
                    >
                        <Text style={styles.buttonText}>
                            .
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.buttonOperator}
                        onPress={() => {
                        this.eq();
                    }}
                    >
                        <Text style={styles.buttonText}>
                            =
                        </Text>
                    </TouchableHighlight>
                </View>

                <Text style={styles.paragraph}>
                    total:{this.state.total}
                </Text>

                <Text style={styles.paragraph}>
                    prev:{this.state.prev}
                </Text>

                <Text style={styles.paragraph}>
                    current:{this.state.current}
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
    top: {
        flexDirection: 'row',
    },
    mainNumberView: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: 'grey',
        height: 50,
        width: 320,
    },

    mainNumber: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
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

    buttonDouble: {

        height: 50,
        width: 160,
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonOperator: {
        height: 50,
        width: 80,
        backgroundColor: 'goldenrod',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: 'white',
        fontSize: 15,
    },
});
