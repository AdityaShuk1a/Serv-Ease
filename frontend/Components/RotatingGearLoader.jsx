import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
const {height} = Dimensions.get("window").height;
const {width} = Dimensions.get("window").width;

const RotatingGearLoader = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startRotation = () => {
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    };

    startRotation();
  }, []);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const rotateInterpolateInverse = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["360deg", "0deg"],
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white", 
      height: height,width:width
     }}>
      <View style={styles.container}>
        <Animated.View style={{ transform: [{ rotate: rotateInterpolateInverse }], bottom: 20, left:0, position: "absolute"}}>
          <Icon name='gear' size={70} color={"black"} />
        </Animated.View>
        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }], top: 30, right:-30, position: "absolute" }}>
          <Icon name='gear' size={100} color={"grey"} />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    backgroundColor: "purple",
    height: 200,
    position: "relative",
  },
};

export default RotatingGearLoader;

