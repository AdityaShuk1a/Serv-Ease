import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const primaryColor = "#84B138";
const secondaryColor = "white";
const tertiaryColor = "white";
const fourthColor = "grey";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
  overlay: {
    position: "absolute",
    top: "10%",
    padding: 20, // Fixed incorrect string value
    alignItems: "flex-start",
  },
  title: {
    color: tertiaryColor,
    fontSize: 50,
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: 21,
    marginTop: -6,
    fontWeight: "500",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: secondaryColor,
    height: height * 0.62, // 72% of screen height
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  innerContainer: {
    width: "90%",
    paddingTop: 35,
  },
  loginText: {
    color: primaryColor,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  FormText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    color: "black",
    width: "100%",
    padding: 18,
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 15,
    fontSize: 16,
    borderColor: "grey",
    borderWidth: 1,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: primaryColor,
    fontSize: 12,
    marginBottom: 20,
  },
  signupText: {
    alignSelf: "flex-end",
    color: primaryColor,
    fontSize: 15,
    marginTop: 18,
  },
  loginButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    borderRadius: 40,
    backgroundColor: primaryColor,
  },
  loginButtonText: {
    color: tertiaryColor,
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  orText: {
    marginHorizontal: 10,
    color: fourthColor,
  },
  buttonContainer: {
    padding: 20,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    bottom: 40,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: primaryColor,
  },
  buttonText: {
    color: tertiaryColor,
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledText: {
    color: fourthColor,
  },
});
