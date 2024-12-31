import { Modal, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Buttons } from "@/utils/buttons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useInfo } from "@/contexts/context";

export default function InfoGuestMOdal() {
  const {
    openGuestProfileModal,
    setOpenGuestProfileModal,
    infoUniqueGuest,
    allEvents,
  } = useInfo();

  for (let index = 0; index < allEvents.length; index++) {
    if (allEvents[index].invitationCode == infoUniqueGuest.invitation) {
      infoUniqueGuest.invitation = allEvents[index].name;
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={openGuestProfileModal}
        >
          <View className="flex-1 flex justify-center bg-[#1d206f] mx-7 my-80  rounded-3xl border-2 border-white p-7">
            <Ionicons
              className="absolute top-1 right-1"
              name={"close-circle-outline"}
              size={32}
              color="white"
              onPress={() => setOpenGuestProfileModal(false)}
            />
            <Text className="text-white text-3xl">
              Firstname: {infoUniqueGuest.firstName}
            </Text>
            <Text className="text-white text-3xl">
              Lastname: {infoUniqueGuest.lastName}
            </Text>
            <Text className="text-white text-3xl">
              Company: {infoUniqueGuest.companyName}
            </Text>
            <Text className="text-white text-3xl">
              Event:{infoUniqueGuest.invitation}
            </Text>
            <Text className="text-white text-3xl">
              Role: {infoUniqueGuest.role}
            </Text>
            <Text className="text-white text-3xl">
              Status: {infoUniqueGuest.check ? "Check-In" : "Check-Out"}
            </Text>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
