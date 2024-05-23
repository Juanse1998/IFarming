import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 10,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
  },
  linksContainer: {
    flexDirection: 'row',
  },
  navLink: {
    paddingHorizontal: 10,
  },
  navText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});