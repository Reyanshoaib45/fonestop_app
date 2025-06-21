"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, StatusBar } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "Arabic", flag: "🇸🇦" },
    { code: "es", name: "Spanish", flag: "🇪🇸" },
]

export default function Header() {
    const [showLanguageModal, setShowLanguageModal] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

    const handleLanguageSelect = (language: (typeof languages)[0]) => {
        setSelectedLanguage(language)
        setShowLanguageModal(false)
    }

    return (
        <View style={styles.header}>
            <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

            <View style={styles.headerContent}>
                <Text style={styles.logo}>Fonespot</Text>

                <View style={styles.headerActions}>
                    <TouchableOpacity style={styles.headerButton}>
                        <Text style={styles.headerButtonText}>Settings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.headerButton}>
                        <Text style={styles.headerButtonText}>Profile</Text>
                    </TouchableOpacity>

                    {/* Language Selector */}
                    <TouchableOpacity
                        style={[styles.headerButton, styles.languageButton]}
                        onPress={() => setShowLanguageModal(true)}
                    >
                        <Text style={styles.flagText}>{selectedLanguage.flag}</Text>
                        <Ionicons name="chevron-down" size={14} color="#ffffff" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Language Modal */}
            <Modal
                visible={showLanguageModal}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowLanguageModal(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setShowLanguageModal(false)}
                >
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Language</Text>
                        <FlatList
                            data={languages}
                            keyExtractor={(item) => item.code}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.languageItem}
                                    onPress={() => handleLanguageSelect(item)}
                                >
                                    <Text style={styles.flagText}>{item.flag}</Text>
                                    <Text style={styles.languageName}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#1a1a2e",
        paddingTop: StatusBar.currentHeight || 44,
        paddingBottom: 16,
        paddingHorizontal: 20,
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
    },
    headerActions: {
        flexDirection: "row",
        gap: 12,
        alignItems: 'center',
    },
    headerButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    headerButtonText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "500",
    },
    languageButton: {
        paddingHorizontal: 12,
    },
    flagText: {
        fontSize: 18,
        color: '#ffffff',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        width: 256,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 16,
        color: '#1a1a2e',
    },
    languageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
    languageName: {
        fontSize: 16,
        color: '#1a1a2e',
    },
})