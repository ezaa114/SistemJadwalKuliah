import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Pertemuan } from '../data/pertemuan';
import { Colors, Spacing, BorderRadius, Fonts } from '../constants/theme';
import { useTheme } from '../context/ThemeContext';

interface PertemuanItemProps {
  pertemuan: Pertemuan;
  onPress?: () => void;
  isActive?: boolean;
}

export default function PertemuanItem({
  pertemuan,
  onPress,
  isActive,
}: PertemuanItemProps) {
  const [pressed, setPressed] = useState(false);
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        styles.pressable,
        pressed && {
          transform: [{ scale: 0.98 }]
        }
      ]}
    >
      <View
        style={[
          styles.container,
          isActive && styles.containerActive,
        ]}
      >
        <View style={styles.content}>
          <View style={styles.topRow}>
            <Text style={styles.matkulNama} numberOfLines={1}>
              {pertemuan.matkulNama}
            </Text>
            <View style={[styles.badge, isActive && styles.badgeActive]}>
              <Text style={[styles.badgeText, isActive && styles.badgeTextActive]}>#{pertemuan.pertemuanKe}</Text>
            </View>
          </View>

          <Text style={styles.topik} numberOfLines={2}>
            {pertemuan.topik}
          </Text>

          <View style={styles.bottomRow}>
            <Feather name="calendar" size={12} color={colors.textSecondary} />
            <Text style={styles.tanggal}>{pertemuan.tanggal}</Text>
            <Text style={styles.kodeSeparator}>·</Text>
            <Text style={styles.kode}>{pertemuan.matkulKode}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const createStyles = (colors: typeof Colors) => StyleSheet.create({
  pressable: {
    marginHorizontal: Spacing.lg,
    borderRadius: BorderRadius.card,
  },
  container: {
    backgroundColor: colors.surface,
    borderRadius: BorderRadius.card,
    borderWidth: 1,
    borderColor: colors.border,
    
    // Soft shadow
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  containerActive: {
    backgroundColor: colors.accentTransparent, // Lavender tonal surface
    borderColor: colors.accent,
    borderWidth: 1.5,
  },
  content: {
    flex: 1,
    padding: Spacing.lg,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
    gap: Spacing.sm,
  },
  matkulNama: {
    fontFamily: Fonts.bold,
    fontSize: 15,
    color: colors.textPrimary,
    flex: 1,
  },
  badge: {
    backgroundColor: colors.surfaceLow,
    paddingHorizontal: Spacing.md,
    paddingVertical: 2,
    borderRadius: BorderRadius.badge,
  },
  badgeActive: {
    backgroundColor: colors.accent,
  },
  badgeText: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    color: colors.textSecondary,
  },
  badgeTextActive: {
    color: '#FFFFFF', // High contrast badge text
  },
  topik: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: colors.textPrimary,
    marginBottom: Spacing.md,
    lineHeight: 19,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  tanggal: {
    fontFamily: Fonts.regular,
    fontSize: 11,
    color: colors.textSecondary,
  },
  kodeSeparator: {
    color: colors.textSecondary,
    marginHorizontal: 2,
  },
  kode: {
    fontFamily: Fonts.regular,
    fontSize: 11,
    color: colors.textSecondary,
  },
});
