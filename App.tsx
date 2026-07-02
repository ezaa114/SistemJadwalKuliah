import React from 'react';
import { ActivityIndicator, View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons } from '@expo/vector-icons';
import {
  useFonts,
  JetBrainsMono_400Regular,
  JetBrainsMono_500Medium,
  JetBrainsMono_700Bold,
} from '@expo-google-fonts/jetbrains-mono';

import RingkasanScreen from './screens/RingkasanScreen';
import PertemuanScreen from './screens/PertemuanScreen';
import JadwalScreen from './screens/JadwalScreen';
import SplashScreen from './screens/SplashScreen';
import { Colors } from './constants/theme';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const Tab = createBottomTabNavigator();

function AppContent() {
  const [fontsLoaded] = useFonts({
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
    JetBrainsMono_700Bold,
    ...Feather.font,
    ...Ionicons.font,
  });

  const [splashFinished, setSplashFinished] = React.useState(false);
  const { isDarkMode, colors } = useTheme();

  const MD3NavTheme = {
    ...DefaultTheme,
    dark: isDarkMode,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.accent,
      background: colors.background,
      card: colors.tabBarBackground,
      text: colors.textPrimary,
      border: colors.border,
      notification: colors.accent,
    },
  };

  const styles = createStyles(colors);

  if (!splashFinished) {
    return <SplashScreen onAnimationFinish={() => setSplashFinished(true)} />;
  }

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.accent} />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={colors.background} />
      <NavigationContainer theme={MD3NavTheme}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.accent,
            tabBarInactiveTintColor: colors.tabBarInactive,
            tabBarStyle: {
              backgroundColor: colors.tabBarBackground,
              borderTopColor: colors.border,
              borderTopWidth: 1,
              paddingBottom: 8,
              paddingTop: 8,
              height: 72,
              elevation: 0,
              shadowOpacity: 0,
            },
            tabBarLabelStyle: {
              fontFamily: 'JetBrainsMono_500Medium',
              fontSize: 11,
              marginTop: 2,
            },
          }}
        >
          <Tab.Screen
            name="Ringkasan"
            component={RingkasanScreen}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <View style={[styles.tabIconContainer, focused && styles.tabIconContainerActive]}>
                  <Feather name="book-open" size={20} color={color} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Pertemuan"
            component={PertemuanScreen}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <View style={[styles.tabIconContainer, focused && styles.tabIconContainerActive]}>
                  <Feather name="calendar" size={20} color={color} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Jadwal"
            component={JadwalScreen}
            options={{
              tabBarLabel: 'Jadwal',
              tabBarIcon: ({ color, size, focused }) => (
                <View style={[styles.tabIconContainer, focused && styles.tabIconContainerActive]}>
                  <Feather name="clock" size={20} color={color} />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const createStyles = (colors: typeof Colors) => StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  tabIconContainer: {
    width: 64,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  tabIconContainerActive: {
    backgroundColor: colors.accentTransparent,
  },
});
