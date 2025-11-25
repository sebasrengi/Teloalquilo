import {View, StyleSheet, Text, Image} from "react-native";
import tw from 'tailwind-react-native-classnames';
import  foto  from '../../public/placeholder.jpg';

export const Navigation = (props) => {
  return (
    <View className="navbar" style={
        tw `fixed block top-0 left-0 w-full bg-white h-16 bg-red-500`}
        >
            
        <View style={tw `w-full h-full mx-auto flex  flex-row  pl-4 pr-0 lg:pr-4 font-sans bg-purple-500`}>
            
            <View style={tw ` flex bg-green-500 items-left `}>
                <Image source={foto} style={{
                    width: 60,
                    height: 55,
                }}/>
            </View>
            
            <View style={tw `flex flex-1 justify-center  items-end px-10 bg-blue-500`}>
            <ul style={tw `flex flex-row `}>
                <li>
                <a style={styles.naVar}>
                    Features
                </a>
                </li>
                <li>
                <a style={styles.naVar}>
                    About
                </a>
                </li>
                <li>
                <a style={styles.naVar}>
                    Services
                </a>
                </li>
                <li>
                <a style={styles.naVar}>
                    Gallery
                </a>
                </li>
                <li>
                <a style={styles.naVar}>
                    Testimonials
                </a>
                </li>
                <li>
                <a style={styles.naVar}>
                    Team
                </a>
                </li>
                <li>
                <a style={styles.naVar}>
                    Contact
                </a>
                </li>
            </ul>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  naVar: {
    
    flex: 1,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 18,

    
    
  },
});