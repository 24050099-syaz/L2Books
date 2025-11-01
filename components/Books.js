import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";


const Book = ({bookname,description,photo,icon_name}) => {
    return (
        <View>
            <View style={styles.header}>
                <FontAwesome6 name={icon_name} size={30} color="#B23B23" />
                <Text style={styles.BookName}>{bookname}</Text>
            </View>
            <Text style={styles.descriptionStyle}>
                {description}
            </Text>
            <Image source ={photo} width={250} height={500} />
        </View>
    )
}

export const AllBooks = () => {
    return (
        <View>
            <Book bookname="No Longer Human"
                  description="No Longer Human is a novel written by a Japanese Author Osamu Dazai.
                  It tells a story of a trouble man incapable of revealing his true self to others
                  and instead maintains a facade of holly jocularity.
                  I like this novel as it potrays trauma and sufferring really well.
                  Although the writing may not be praised as much, the rawness and emotion the novel conveys is truly something."
                  photo={require("../img/nlh.jpg")}
                  icon_name="book" />
            <Book bookname="Omniscient Reader's Viewpoint Voulme 1"
                  description="As you can see on this app,
                  I am truly in love with this creative writing piece.
                  Omniscient Reader's Viewpoint(ORV) was written by authors singNsong.
                  Words can't express my love for this series.
                  The first volume features the beginning of the story where
                  a fictional world becomes reality and the only reader knows how it ends"
                  photo={require("../img/orv_1.jpg")}
                  icon_name="book" />
            <Book bookname="The World After The Fall Volume 1"
                  description="The World After The Fall is another series made by authors singNsong
                  It features the protaganist Jaehwan.
                  In his world, humanity is trapped in dealdy tower trials.
                  Jaehwan refuses to return to a simulated world.
                  He alone clears the tower and enters a strange world outside
                  and wants to uncover the truth and what it means to keep fighting."
                  photo={require("../img/twaf.jpg")}
                  icon_name="book" />
            <Book bookname="Omniscient Reader's Viewpoint Volume 3"
                  description="The Volume 3 shown here is the webtoon version of the novel.
                  Seeing the characters visually in colour brings a whole new feeling to the world.
                  Volume 3 features Jung Heewon as the main drive of the story.
                  It uncovers her tragic past and shows how her character develops into
                  her role as the sword of Kim Dokja's Company."
                  photo={require("../img/orv_3.jpg")}
                  icon_name="book" />
            <Book bookname="Omniscient Reader's Viewpoint Voulme 2"
                  description="In volume 2, disasters escalate and Dokja,the reader, confronts growing suspicion
                  from others. With his interferance to the story, new plot deviations are caused.
                  Tensions between him and the main protaganist of the story deepns as they clash with their
                  separate ideologies."
                  photo={require("../img/orv_2.jpg")}
                  icon_name="book" />
            <Book bookname="The Setting Sun"
                  description="The Setting Sun is a novel written by a Japanese Author Osamu Dazai.
                  It is about a young woman,Kazuko,who witness her once-noble family crumble after
                  the World War. It depicts her struggles with poverty, societal change and personal despair.
                  This novel is amazing as it really tells the battle she had to redifine her life and identity."
                  photo={require("../img/tss.jpg")}
                  icon_name="book" />
        </View>
    );
};

const styles= StyleSheet.create({
    header:{
        paddingTop:35,
        flexDirection: "row",
    },
    BookName:{
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
        backgroundColor:"oldlace",
    },
    descriptionStyle:{
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:"white",
        color: "black",
        fontFamily:"serif",
        textAlign:"left",
        lineHeight:24,
    },
});
export default Book;