import { Pressable, Text } from "react-native";

interface ButtonsProps {
  action: () => void;
  text: string;
}

export const Buttons = ({ action, text }: ButtonsProps) => {
  return (
    <Pressable
      onPress={action}
      className="bg-green-400 border border-gray-300 text-gray-900 text-sm flex justify-center rounded-lg h-auto w-28"
    >
      <Text className="text-center text-black font-bold">{text}</Text>
    </Pressable>
  );
};
