import {View, Text, Image} from "react-native";
import tw from 'tailwind-react-native-classnames';
import  foto  from '../../public/placeholder.jpg';



export const Navigation = (props) => {
  return (
    <View style={tw `h-full w-full top-0 left-0 bg-red-600`}>
        <nav >
        <View style={tw `flex flex-row w-full max-w-7xl mx-auto  pl-4 pr-0 lg:pr-4 font-sans bg-purple-500`}>

            <View style={tw `bg-green-500`}>
                <Image source={foto} style={{
                    width: 80,
                    height: 75,
                    resizeMode: 'center',
                }}/>
            </View>

            <View style={tw `flex flex-1 justify-center  items-end px-10 bg-blue-500`}>
            <ul style={tw `flex flex-row `}>
                <li>
                <a style={tw `px-4  `}>
                    Features
                </a>
                </li>
                <li>
                <a style={tw `px-4`}>
                    About
                </a>
                </li>
                <li>
                <a style={tw `px-4`}>
                    Services
                </a>
                </li>
                <li>
                <a style={tw `px-4`}>
                    Gallery
                </a>
                </li>
                <li>
                <a style={tw `px-4`}>
                    Testimonials
                </a>
                </li>
                <li>
                <a style={tw `px-4`}>
                    Team
                </a>
                </li>
                <li>
                <a style={tw `px-4`}>
                    Contact
                </a>
                </li>
            </ul>
            </View>
        </View>
        </nav>
    </View>
  );
};