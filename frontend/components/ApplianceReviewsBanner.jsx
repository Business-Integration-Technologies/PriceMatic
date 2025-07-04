import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";

const ApplianceReviewsBanner = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Ionicons name="chatbubble-ellipses-outline" size={42} color={theme.colors.primary} style={styles.mainIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Appliance Reviews</Text>
          <Text style={styles.subtitle}>
            See what users say about their appliances. Real feedback, real insights.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/applianceReviews")}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>View All</Text>
            <Ionicons
              name="arrow-forward"
              size={18}
              color="#fff"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ApplianceReviewsBanner;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(5),
    marginVertical: hp(2),
  },
  banner: {
    flexDirection: "row",
    backgroundColor: "#FDF6F0",
    borderRadius: theme.radius.xl,
    padding: hp(2),
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F2DFD0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  mainIcon: {
    marginRight: wp(4),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: hp(2.1),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
    marginBottom: hp(0.5),
  },
  subtitle: {
    fontSize: hp(1.7),
    color: theme.colors.textLight,
    marginBottom: hp(1.5),
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    borderRadius: theme.radius.md,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: hp(1.9),
    fontWeight: theme.fonts.semibold,
  },
  arrowIcon: {
    marginLeft: wp(2),
  },
});
