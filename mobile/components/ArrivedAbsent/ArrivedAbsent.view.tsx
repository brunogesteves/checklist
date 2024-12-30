import { useInfo } from "@/contexts/context";
import React from "react";
import { Text, View } from "react-native";

export const ArrivedAbsent = () => {
  const { totalGuests, hasArrivedGuestNumber } = useInfo();
  return (
    <View className="bg-[#353ca6] px-2">
      <View className="bg-[#1d206f] my-3 flex flex-row justify-center items-center w-full h-28 rounded-3xl">
        <View className="w-1/2 flex justify-center items-center flex-col">
          <Text className="text-2xl font-bold  text-white">Arrived</Text>
          <Text className="text-xl text-white">Guests</Text>
          <Text className="text-3xl  font-bold  text-white">
            {hasArrivedGuestNumber}
          </Text>
        </View>
        <View className="w-[1px] bg-white my-9 opacity-20"></View>
        <View className="w-1/2 flex justify-center items-center flex-col">
          <Text className="text-2xl font-bold  text-white">Absent</Text>
          <Text className="text-xl  text-white">Guests</Text>
          <Text className="text-3xl  font-bold  text-white">
            {totalGuests - hasArrivedGuestNumber}
          </Text>
        </View>
      </View>
    </View>
  );
};
