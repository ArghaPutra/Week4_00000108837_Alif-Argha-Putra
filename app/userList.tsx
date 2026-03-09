import { Link } from "expo-router";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { Card, Avatar, Text } from "react-native-paper";
import userData from "./data.json";
import styles from "./styles/AppStyles";

const imageMap: any = {
  "alpat.jpg": require("../assets/images/alpat.jpg"),
  "hanif.jpg": require("../assets/images/hanif.jpg"),
  "isan.jpg": require("../assets/images/isan.jpg"),
  "pais.jpg": require("../assets/images/pais.jpg"),
  "pp.jpg": require("../assets/images/alip.jpg"),
  "theo.jpg": require("../assets/images/theo.jpg"),
};

export default function UserList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userData.map((users, index) => (
        <Card key={index} style={styles.card}>

          <Link
            href={{
              pathname: "/profile",
              params: {
                userName: users.name,
                email: users.email,
                photo: users.photo_url,
              },
            }}
            push
            asChild
          >
            <TouchableOpacity>

              <Card.Content
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  paddingVertical: 14
                }}
              >
                <Avatar.Image
                  size={60}
                  source={imageMap[users.photo_url]}
                />

                <View>
                  <Text variant="titleMedium">{users.name}</Text>
                  <Text variant="bodyMedium">{users.email}</Text>
                </View>

              </Card.Content>

            </TouchableOpacity>
          </Link>

        </Card>
      ))}
    </ScrollView>
  );
}