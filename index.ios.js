/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
// IOS ish?
var I18n = require('react-native-i18n');
// fallback on diffrent langs

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

var ReactProject = React.createClass({
    render: function() {
        return (
          <View style = {styles.container}>
              <Text style={styles.welcome}>
                {I18n.t("greeting")}
                </Text>
              <Text style = {styles.goodbye}>
                {I18n.t("goodbye")}
              </Text>

            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

I18n.fallbacks = true;

I18n.translations = {
    en: {
        greeting: "Hello",
        goodbye: "Bye"
    },
    fr: {
        greeting: "Bonjour",
        goodbye: "Au Revoir"
    },
    es: {
        greeting: "Hola",
        goodbye: "Adios"
    }
}


AppRegistry.registerComponent('ReactProject', () => ReactProject);
