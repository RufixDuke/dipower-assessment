import { ActivityIndicator } from "react-native";
import React from "react";

const LoadingIndicator = ({ size, color }) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default LoadingIndicator;
