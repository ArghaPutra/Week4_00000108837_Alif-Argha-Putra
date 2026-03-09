import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Email() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Email List Page</Text>

      <Link href={"/home" as any} push asChild>
        <Button title="Go to Home Screen" />
      </Link>
    </View>
  );
}