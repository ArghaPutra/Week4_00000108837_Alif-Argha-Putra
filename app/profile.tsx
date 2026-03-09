import { Link, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export default function Profile() {

  const { userName, email, photo } =
    useLocalSearchParams<{
      userName: string;
      email: string;
      photo: string;
    }>();

  const imageMap: any = {
    "alpat.jpg": require("../assets/images/alpat.jpg"),
    "hanif.jpg": require("../assets/images/hanif.jpg"),
    "isan.jpg": require("../assets/images/isan.jpg"),
    "pais.jpg": require("../assets/images/pais.jpg"),
    "pp.jpg": require("../assets/images/alip.jpg"),
    "theo.jpg": require("../assets/images/theo.jpg"),
  };

  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center", gap:10 }}>

      <Avatar.Image
        size={100}
        source={imageMap[photo]}
      />

      <Text>{userName}'s Profile</Text>
      <Text>{email}</Text>

      <Link href="/home" push asChild>
        <Button title="Go to Home Screen" />
      </Link>

    </View>
  );
}