import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text>Navigation List</Text>

      <Link href={"/userList" as any} push asChild>
        <Button title="Go to User List Page" />
      </Link>

      <Link href={"/email" as any} push asChild>
        <Button title="Go to Email Screen" />
      </Link>
    </View>
  );
}