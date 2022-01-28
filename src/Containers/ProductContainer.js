import React, { useState } from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Touchable,
  Image,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { Appbar } from 'react-native-paper'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/Entypo'
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { navigate } from '@/Navigators/utils'
import { ScrollView } from 'react-native-gesture-handler'
import { Dropdown } from 'react-native-element-dropdown'
import AntDesign from 'react-native-vector-icons/AntDesign'
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
]

const ProductContainer = ({ navigation }) => {
  const _goBack = () => navigation.goBack()
  const [value, setValue] = useState(null)
  const { Layout, Fonts, Images, Gutters, Colors } = useTheme()
  return (
    <ScrollView style={{ backgroundColor: Colors.white }}>
      {/* header */}

      <View
        style={[Layout.rowCenter, Gutters.LargeBMargin, { marginVertical: 40 }]}
      >
        <View style={{ marginRight: 30 }}>
          <TouchableOpacity onPress={_goBack}>
            <Icon name="arrow-back" size={30} color="grey" />
          </TouchableOpacity>
        </View>
        <Text
          style={[
            Fonts.textCenter,
            {
              fontSize: 30,
              color: Colors.text,
              fontWeight: 'bold',
              marginRight: 50,
            },
          ]}
        >
          Salmon Sushi
        </Text>
        <Icons name="dots-three-horizontal" size={30} color="grey" />
      </View>

      {/* Image */}
      <ImageBackground
        style={{ width: 340, height: 250, marginTop: -10, marginLeft: 35 }}
        source={Images.food}
        imageStyle={{ borderRadius: 30 }}
        resizeMode="cover"
      >
        <TouchableOpacity>
          <View
            style={[
              Layout.center,
              {
                height: 70,
                width: 70,
                backgroundColor: '#947465',
                borderRadius: 70 / 2,
                marginLeft: 130,
                marginTop: 80,
              },
            ]}
          >
            <MIcons name="play" size={45} color={Colors.white} />
          </View>
        </TouchableOpacity>
      </ImageBackground>
      {/* Ingridents */}
      <View style={[Layout.rowCenter, { marginVertical: 20 }]}>
        <Text
          style={[
            Fonts.textCenter,
            {
              fontSize: 26,
              color: '#11265e',
              fontWeight: 'bold',
              marginLeft: 10,
            },
          ]}
        >
          Ingridients(12)
        </Text>
        <Dropdown
          style={[
            {
              height: 60,
              width: 120,
              marginLeft: 40,
              backgroundColor: Colors.button,
              borderRadius: 20,
            },
          ]}
          placeholderStyle={[
            Layout.center,
            { fontSize: 20, fontWeight: 'bold', marginLeft: 10, color: '#fff' },
          ]}
          //iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="1 Serving"
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value)
          }}
        />
      </View>
      {/* products */}
      <View style={[Layout.rowCenter, { marginVertical: 10 }]}>
        <TouchableOpacity
          style={[
            {
              width: 330,
              height: 80,
              backgroundColor: '#faf8f7',
              borderRadius: 30,
            },
          ]}
        >
          <View style={[Layout.rowCenter, { marginVertical: 3 }]}>
            <TouchableOpacity>
              <View
                style={[
                  Layout.center,
                  {
                    height: 70,
                    width: 70,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    marginRight: 20,
                  },
                ]}
              >
                <Image
                  style={{
                    width: 60,
                    height: 180,
                    // marginTop: -10,
                    marginLeft: 20,
                    borderRadius: 5,
                  }}
                  source={Images.matcha}
                  imageStyle={{ borderRadius: 50 }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <Text
              style={[
                Fonts.textCenter,
                {
                  fontSize: 25,
                  color: Colors.text,
                  fontWeight: 'bold',
                  marginRight: 50,
                },
              ]}
            >
              Matcha
            </Text>
            <Text
              style={[
                Fonts.textCenter,
                {
                  fontSize: 20,
                  color: 'grey',
                  fontWeight: 'bold',
                  //marginRight: 50,
                },
              ]}
            >
              1 teaspoon
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[Layout.rowCenter, { marginVertical: 10 }]}>
        <TouchableOpacity
          style={[
            {
              width: 330,
              height: 80,
              backgroundColor: '#faf8f7',
              borderRadius: 30,
            },
          ]}
        >
          <View style={[Layout.rowCenter, { marginVertical: 3 }]}>
            <TouchableOpacity>
              <View
                style={[
                  Layout.center,
                  {
                    height: 70,
                    width: 70,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    marginRight: 20,
                    marginVertical: 10,
                  },
                ]}
              >
                <Image
                  style={{
                    width: 60,
                    height: 180,
                    marginTop: -10,
                    marginLeft: 10,
                    borderRadius: 5,
                  }}
                  source={Images.rice}
                  imageStyle={{ borderRadius: 50 }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <Text
              style={[
                Fonts.textCenter,
                {
                  fontSize: 25,
                  color: Colors.text,
                  fontWeight: 'bold',
                  marginRight: 70,
                },
              ]}
            >
              Rice bowl
            </Text>
            <Text
              style={[
                Fonts.textCenter,
                {
                  fontSize: 20,
                  color: 'grey',
                  fontWeight: 'bold',
                  marginRight: 5,
                },
              ]}
            >
              200 gr
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[Layout.rowCenter, { marginVertical: 10 }]}>
        <TouchableOpacity
          style={[
            {
              width: 330,
              height: 80,
              backgroundColor: '#faf8f7',
              borderRadius: 30,
              marginVertical: 10,
            },
          ]}
        >
          <View style={[Layout.rowCenter, { marginVertical: 3 }]}>
            <TouchableOpacity>
              <View
                style={[
                  Layout.center,
                  {
                    height: 70,
                    width: 70,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    marginRight: 20,
                  },
                ]}
              >
                <Image
                  style={{
                    width: 60,
                    height: 180,
                    // marginTop: -10,
                    marginLeft: 20,
                    borderRadius: 5,
                  }}
                  source={Images.salmon}
                  imageStyle={{ borderRadius: 50 }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <Text
              style={[
                Fonts.textCenter,
                {
                  fontSize: 25,
                  color: Colors.text,
                  fontWeight: 'bold',
                  marginRight: 90,
                },
              ]}
            >
              Salmon
            </Text>
            <Text
              style={[
                Fonts.textCenter,
                {
                  fontSize: 20,
                  color: 'grey',
                  fontWeight: 'bold',
                  //marginRight: 50,
                },
              ]}
            >
              400 gr
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* button */}
      <View style={[Layout.rowCenter, { marginVertical: 10 }]}>
        <TouchableOpacity
          style={[
            Layout.rowCenter,
            {
              width: 300,
              height: 80,
              backgroundColor: '#141414',
              borderRadius: 30,
              marginVertical: 10,
              marginLeft: 30,
            },
          ]}
        >
          <Text
            style={[
              Fonts.textCenter,
              {
                fontSize: 28,
                color: Colors.white,
                fontWeight: 'bold',
              },
            ]}
          >
            Start Cook !
          </Text>
          <View style={{ marginLeft: 30 }}>
            <Icon name="arrow-forward" size={30} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ProductContainer
