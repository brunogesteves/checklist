import { Modal, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Buttons } from "@/utils/buttons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MoreOptionsMOdal() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [numberOfGuests] = useState<number[]>([5, 10, 20, 50, 100]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View className="flex-1 bg-white m-7 mb-10  rounded-3xl">
            <Ionicons
              className="absolute top-1 right-1"
              name={"close-circle-outline"}
              size={32}
              color="black"
              onPress={() => setModalVisible(false)}
            />
            <Text>modal Options mais filteros</Text>
          </View>
        </Modal>

        <Buttons action={() => setModalVisible(true)} text="More Options" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
