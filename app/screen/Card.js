import { StyleSheet, View, Image } from "react-native";
import AppText from "../config/AppText";
import colors from '../config/colors';
import ListItem from './ListItem';
function Card({title, subTitle, image}){
    return <View styles={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            <View style={styles.userContainer}>
                <ListItem image={require('../assets/favicon.png')} title="Wendy" subTitle="5 listings" />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:'white',
        marginBottom: 20
    },
    image: {
        width: "100%",
        height: 200
    },
    detailContainer: {
        padding:20
    },
    userContainer: {
        marginVeritical: 40
    },
    title: {
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
        marginVertical:10
    }
})

export default Card;