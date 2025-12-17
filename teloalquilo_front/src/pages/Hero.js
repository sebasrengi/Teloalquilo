import {View, StyleSheet, Text, Image, ImageBackground} from "react-native";
import tw from 'tailwind-react-native-classnames';
import  foto  from '../../public/Berserk.jpg';

export const Hero = (props) => {
  return (
<View className=" w-full h-full  font-sans bg-purple-500">
  <View className= "w-full h-full">
    <ImageBackground source={foto} resizeMode="cover" style={styles.image}>
          <View className="grid grid-rows h-full   Z-10" >

            <View style={tw ` items-center justify-center `}>
              {/* corregir el tamaño de las letras, esto debe estar en un stylesheet y no con tailwind */}
              <Text style={tw ` text-4xl text-red-600 `}>We are a Landing Page</Text>
            </View>

            <View style={tw ` flex flex-col-10 paddin: 20px 0px 0px 0px  items-center justify-center text-8xl bg-yellow-300 `}>
              <Text style={tw ` text-xl`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</Text>
            </View>

            <View style={tw `  `}>
            </View>

          </View>
    </ImageBackground>

  </View>
</View>
  );
};


  const styles = StyleSheet.create({
    image: {
      flex: 1,
      
  }
});