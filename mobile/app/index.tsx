import { Text, View } from "react-native";
import { Image } from "expo-image";

import React from "react";
import { ArrivedAbsent } from "@/components/ArrivedAbsent/ArrivedAbsent.view";
import { GuestList } from "@/components/GuestList/GuestList.view";
import { useInfo } from "@/contexts/context";

export default function Index() {
  const { timeNow, totalGuests } = useInfo();

  return (
    <>
      <View className="bg-[#353ca6]  pt-5 text-center h-auto">
        <Text className="text-center text-white text-3xl mb-5 ">
          CheckList Events
        </Text>

        <View className="relative h-auto bg-black ">
          <Image
            source={require("../assets/party.png")}
            style={{ width: "100%", height: 100, opacity: 0.5 }}
          />

          <Text className="absolute bottom-1 right-2 text-white font-bold text-xl">
            {timeNow}
          </Text>
        </View>
        <View className="flex flex-row justify-center my-3 items-center gap-x-2 w-full">
          <Text className=" text-white text-lg font-bold  ">
            You are expecting
          </Text>
          <Text className="text-xl text-white font-extrabold">
            {totalGuests}
          </Text>
          <Text className=" text-white text-lg font-bold  ">
            {totalGuests > 1 ? "guests" : "guest"} in total!
          </Text>
        </View>
      </View>
      <ArrivedAbsent />
      <GuestList />
    </>
  );
}
