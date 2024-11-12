import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  header: {
    marginVertical: 36,
  },
  headerImage: {
    width: 80,
    height: 80,
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 36,
  },
  title: {
    fontSize: 33,
    fontWeight: "900",
    color: "#e8ecf4",
    marginBottom: 6,
    textAlign: "center",
  },
  titleDrop: {
    fontSize: 33,
    fontWeight: "900",
    color: "#8518d3",
    marginBottom: 6,
    textAlign: "center",
  },
  form: {
    flex: 1,
    marginBottom: 24,
  },
  signUpButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    right: 0,
    bottom: 0,
    left: 0,
    flex: 1,
  },
  signUpText: {
    fontWeight: "400",
    fontSize: 15,
    color: "#fff",
  },
})
