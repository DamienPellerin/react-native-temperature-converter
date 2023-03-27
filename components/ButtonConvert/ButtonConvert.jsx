import { s } from "./ButtonConvert.style.js";
import { TouchableOpacity, Text } from "react-native";

export function ButtonConvert({ onPress, unit }) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  );
}
