import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors, Spacing, Fonts } from '../constants/theme';

interface SplashScreenProps {
  onAnimationFinish: () => void;
}

export default function SplashScreen({ onAnimationFinish }: SplashScreenProps) {
  const logoScale = useRef(new Animated.Value(0.3)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const glowScale = useRef(new Animated.Value(0.8)).current;
  const glowOpacity = useRef(new Animated.Value(0.15)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(20)).current;
  const screenOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // 1. Logo Scale and Opacity
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.spring(logoScale, {
        toValue: 1,
        friction: 6,
        tension: 30,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // 2. Text Fade in & Slide up
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // 3. Keep showing for a moment, then fade out screen
        setTimeout(() => {
          Animated.timing(screenOpacity, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }).start(() => {
            onAnimationFinish();
          });
        }, 1200); // 1.2s delay to display splash contents nicely
      });
    });

    // Logo Glow Pulsing Animation
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(glowOpacity, {
            toValue: 0.45,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(glowScale, {
            toValue: 1.2,
            duration: 1500,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(glowOpacity, {
            toValue: 0.15,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(glowScale, {
            toValue: 0.8,
            duration: 1500,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, [logoOpacity, logoScale, textOpacity, textTranslateY, screenOpacity, glowOpacity, glowScale, onAnimationFinish]);

  return (
    <Animated.View style={[styles.container, { opacity: screenOpacity }]}>
      <View style={styles.centerContainer}>
        {/* Glow Background behind logo */}
        <Animated.View
          style={[
            styles.glowRing,
            {
              opacity: glowOpacity,
              transform: [{ scale: glowScale }],
            },
          ]}
        />

        {/* Logo Container */}
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: logoOpacity,
              transform: [{ scale: logoScale }],
            },
          ]}
        >
          <Feather name="calendar" size={56} color={Colors.accent} />
        </Animated.View>

        {/* Title and Subtitle */}
        <Animated.View
          style={[
            styles.textContainer,
            {
              opacity: textOpacity,
              transform: [{ translateY: textTranslateY }],
            },
          ]}
        >
          <Text style={styles.title}>JadwalMK</Text>
          <Text style={styles.subtitle}>Sistem Manajemen Jadwal Kuliah</Text>
        </Animated.View>
      </View>

      {/* Loading Indicator at bottom */}
      <View style={styles.footer}>
        <ActivityIndicator size="small" color={Colors.accent} style={styles.loader} />
        <Text style={styles.footerText}>Memuat Data & Font...</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  glowRing: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: Colors.accent,
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 30,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 32,
    color: Colors.textPrimary,
    letterSpacing: 1.5,
    textShadowColor: 'rgba(103, 80, 164, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
    letterSpacing: 0.5,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  loader: {
    marginBottom: Spacing.xs,
  },
  footerText: {
    fontFamily: Fonts.regular,
    fontSize: 11,
    color: Colors.textSecondary,
    opacity: 0.7,
  },
});
