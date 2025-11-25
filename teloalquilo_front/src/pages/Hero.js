import {View, StyleSheet, Text, Image} from "react-native";
import tw from 'tailwind-react-native-classnames';
import  foto  from '../../public/Berserk.jpg';

export const Hero = (props) => {
  return (
    <View style={tw `w-full h-full  font-sans bg-purple-500`}>
                
                <View style={tw ` w-full h-full   `}>
                    <Image source={foto} style={tw `
                    w-full h-full`
                    }/>
                    <View style={tw `flex float-center items-center justify-center Z-20 `}>

                      <View style={tw `  `}>
                        <Text>We are a Landing Page</Text>
                    </View>

                    <View style={tw `  `}>
                      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</Text>
                    </View>

                    <View style={tw `  `}>
                    </View>

                    </View>
                </View>
    </View>
    );
  };
