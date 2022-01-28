import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from 'react-native'
import { useTheme } from '@/Hooks'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import { navigate } from '@/Navigators/utils'


const Info = ({ height, width, mode,navigation }) => {
  const { Layout, Fonts, Images, Gutters, Colors } = useTheme()

  return (
    <View style={{ height, width }}>
      <ImageBackground
        style={Layout.fullSize}
        source={Images.start}
        resizeMode={mode}
      >
        <Text
          style={[Fonts.titleRegular, Fonts.textCenter, { marginTop: '90%' }]}
        >
          Cooking Expereince Like a Chef
        </Text>
        <Text
          style={[
            Fonts.textRegular,
            Fonts.textCenter,
            Gutters.LargeBPadding,
            { marginTop: '10%' },
          ]}
        >
          Let's make a delicious dish with the best recipe for the family
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Main')}
          style={[
            Gutters.largeTMargin,
            Layout.center,
            Gutters.largeLMargin,
            {
              height: 80,
              width: 280,
              backgroundColor: Colors.button,
              marginLeft: 50,
              marginTop: '10%',
              borderRadius: 50,
            },
          ]}
        >
          <View style={[Layout.rowCenter]}>
            <View
              style={[
                Layout.center,
                {
                  width: 70,
                  height: 70,
                  borderRadius: 70 / 2,
                  backgroundColor: Colors.white,
                  marginLeft: -40,
                },
              ]}
            >
              <Icon name="arrow-right" size={30} color={Colors.button} />
            </View>
            <Text style={[Fonts.textRegular, { marginLeft: 20 }]}>
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

Info.propTypes = {
  height: PropTypes.string,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.string,
  navigation:PropTypes.any
}

Info.defaultProps = {
  height: '100%',
  mode: 'cover',
  width: '100%',

}
export default Info
