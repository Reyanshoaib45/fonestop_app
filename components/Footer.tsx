import { View, Text, StyleSheet } from "react-native"

export default function Footer() {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
                © {new Date().getFullYear()} POS System. All rights reserved.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#1a1a2e",
        borderTopWidth: 1,
        borderTopColor: "rgba(255, 255, 255, 0.1)",
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    footerText: {
        textAlign: "center",
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.7)",
    },
})