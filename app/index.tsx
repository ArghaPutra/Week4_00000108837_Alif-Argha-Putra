import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Card, Avatar, Text } from "react-native-paper";
import userData from "./data.json";
import styles from "./styles/AppStyles";

export default function App() {
  // mapping image lokal
  const imageMap: any = {
    "alpat.jpg": require("../assets/images/alpat.jpg"),
    "hanif.jpg": require("../assets/images/hanif.jpg"),
    "isan.jpg": require("../assets/images/isan.jpg"),
    "pais.jpg": require("../assets/images/pais.jpg"),
    "pp.jpg": require("../assets/images/pp.jpg"),
    "theo.jpg": require("../assets/images/theo.jpg"),
  };

  return (
    <>
      <Stack.Screen options={{ title: "User List" }} />

      <ScrollView>
        {userData.map((users, index) => (
          <View style={styles.container} key={index}>
            <Card style={styles.card}>
              <Card.Content
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
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
            </Card>
          </View>
        ))}
      </ScrollView>
    </>
  );
}