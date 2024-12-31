import React from "react";
import { useInfo } from "@/contexts/context";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Buttons } from "@/utils/buttons";
import MoreOptionsMOdal from "../modals/moreFilters";
import GuestProfileMOdal from "../modals/guestProfile";
import InfoGuestMOdal from "../modals/guestProfile";

export const GuestList = () => {
  const { setSearch, guests, setSkip, skip, setInfoUniqueGuest, guestChecked } =
    useInfo();

  return (
    <>
      <View className="flex-1 px-2 bg-[#353ca6] pb-2  overflow-y-auto ">
        <TextInput
          onChangeText={(e) => setSearch(e)}
          placeholder="Find a guest"
          className="mb-3 h-10 w-full border border-gray-300 placeholder:text-white text-white text-zxl rounded-lg focus:ring-primary-500 focus:border-primary-500  pl-4 p-2  placeholder:bg-[#1d206f]"
        />

        <ScrollView className="flex-1 flex  mb-3 px-3 bg-[#1d206f] rounded-3xl p-2">
          {guests.map((guest, i) => (
            <View
              key={i}
              className="w-full justify-between items-center flex-row  h-16"
            >
              <Pressable
                className="w-2/3 flex flex-row"
                onPress={() => setInfoUniqueGuest(guest)}
              >
                <Text className="text-start text-white text-2xl w-1/2">
                  {guest.firstName}
                </Text>
                <Text className="text-start text-white text-2xl w-1/2">
                  {guest.lastName}
                </Text>
              </Pressable>

              <Buttons
                action={() => guestChecked(guest.id)}
                text={guest.check ? "Check-In" : "Check-Out"}
              />
            </View>
          ))}
        </ScrollView>
        <View className="flex flex-row justify-between px-1">
          <Buttons action={() => setSkip(skip - 1)} text="Preview" />
          <View>
            <MoreOptionsMOdal />
            <View>
              <InfoGuestMOdal />
            </View>
          </View>
          <Buttons action={() => setSkip(skip + 1)} text="Next" />
        </View>
      </View>
    </>
  );
};
