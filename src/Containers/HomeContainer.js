import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Touchable,
} from 'react-native'
import { useTheme } from '@/Hooks'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/Entypo'
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { navigate } from '@/Navigators/utils'
import { ScrollView } from 'react-native-gesture-handler'

const HomeContainer = ({navigation}) => {
  const { Layout, Fonts, Images, Gutters, Colors } = useTheme()
  return (
    <ScrollView>
      <View style={[Colors.white, { backgroundColor: '#fff' }]}>
        {/* Heading */}
        <Text
          style={[
            Gutters.largeLMargin,
            Gutters.largeTMargin,
            Fonts.titleSmall,
            Fonts.textJustify,
          ]}
        >
          Find Best Recipe
        </Text>
        <Text
          style={[Gutters.largeLMargin, Fonts.titleSmall, Fonts.textJustify]}
        >
          For Cooking
        </Text>
        {/* Search */}
        <View
          style={[
            Layout.row,
            Gutters.largeTMargin,
            Gutters.largeLMargin,
            { marginLeft: 40 },
          ]}
        >
          <Icon name="ios-search-outline" size={40} color="grey" />

          <TextInput
            style={[
              Fonts.textSmall,
              {
                height: 50,
                width: 220,
                backgroundColor: '#fff',
                marginLeft: 10,
                fontSize: 20,
              },
            ]}
            placeholder="Search Destination"
            placeholderTextColor={'grey'}
          />

          <TouchableOpacity
            style={[
              Layout.center,
              {
                height: 65,
                width: 70,
                backgroundColor: '#cffae7',
                borderRadius: 20,
                marginBottom: -40,
                marginVertical: -10,
              },
            ]}
          >
            <View style={[Layout.rowCenter]}>
              <Icons name="arrow-right" size={20} color={Colors.button} />
            </View>
            <View style={[Layout.rowCenter]}>
              <Icons name="arrow-left" size={20} color={Colors.button} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[Layout.center, Gutters.largeTMargin]}>
            <TouchableOpacity
              style={[
                Layout.center,
                {
                  height: 60,
                  width: 120,
                  backgroundColor: Colors.button,
                  borderRadius: 20,
                  marginLeft: 30,
                },
              ]}
            >
              <Text
                style={[
                  Fonts.textJustify,
                  { fontWeight: 'bold', color: Colors.white, fontSize: 20 },
                ]}
              >
                All
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[Layout.center, Gutters.largeTMargin, Gutters.largeLMargin]}
          >
            <TouchableOpacity
              style={[
                Layout.center,
                {
                  height: 70,
                  width: 140,
                  backgroundColor: Colors.white,
                  borderRadius: 20,
                  marginLeft: -30,
                },
              ]}
            >
              <Text
                style={[Fonts.textJustify, { color: 'grey', fontSize: 20 }]}
              >
                Sushi
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[Layout.center, Gutters.largeTMargin, Gutters.largeLMargin]}
          >
            <TouchableOpacity
              style={[
                Layout.center,
                {
                  height: 70,
                  width: 140,
                  backgroundColor: Colors.white,
                  borderRadius: 20,
                  marginLeft: -50,
                },
              ]}
            >
              <Text
                style={[Fonts.textJustify, { color: 'grey', fontSize: 20 }]}
              >
                Burger
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* image */}
        <TouchableOpacity onPress={()=>navigation.navigate('Product')}>
          <ImageBackground
            style={{ width: 300, height: 350, marginTop: 20, marginLeft: 50 }}
            source={Images.food}
            imageStyle={{borderRadius:30}}
            resizeMode="cover"
          >
            <TouchableOpacity>
              <View
                style={[
                  Layout.center,
                  {
                    height: 75,
                    width: 70,
                    backgroundColor: '#947465',
                    borderRadius: 20,
                    marginLeft: 220,
                    marginTop: 20,
                  },
                ]}
              >
                <MIcons name="bookmark-minus" size={45} color={Colors.white} />
              </View>
            </TouchableOpacity>
            <Text
              style={[
                Fonts.textRegular,
                Fonts.textCenter,
                {
                  marginTop: 110,
                  fontSize: 34,
                  fontWeight: 'bold',
                  marginRight: 50,
                },
              ]}
            >
              Salmon Sushi
            </Text>
            <Text
              style={[
                Fonts.textRegular,
                Fonts.textCenter,
                { fontSize: 34, fontWeight: 'bold', marginRight: 140 },
              ]}
            >
              Matcha
            </Text>
            <Text
              style={[
                Fonts.textSmall,
                Fonts.textCenter,
                {
                  marginTop: 13,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: Colors.white,
                  marginRight: 70,
                },
              ]}
            >
              12 Ingridients | 40 Min
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default HomeContainer
