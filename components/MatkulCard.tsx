import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MataKuliah } from '../data/matakuliah';
import { Colors, Spacing, BorderRadius, Fonts } from '../constants/theme';
import { useTheme } from '../context/ThemeContext';

interface MatkulCardProps {
  matkul: MataKuliah;
  onPress: () => void;
  isActive?: boolean;
}

export default function MatkulCard({ matkul, onPress, isActive }: MatkulCardProps) {
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
          styles.card,
          isActive && styles.cardActive,
        ]}
      >
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <Text style={styles.nama} numberOfLines={1}>
              {matkul.nama}
            </Text>
            <View style={[styles.sksBadge, isActive && styles.sksBadgeActive]}>
              <Text style={[styles.sksText, isActive && styles.sksTextActive]}>{matkul.sks} SKS</Text>
            </View>
          </View>
          <Text style={styles.kode}>{matkul.kode}</Text>
        </View>

        <View style={styles.dosenRow}>
          <Feather name="user" size={14} color={colors.textSecondary} />
          <Text style={styles.dosenText}>{matkul.dosen}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const createStyles = (colors: typeof Colors) => StyleSheet.create({
  pressable: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    borderRadius: BorderRadius.card,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: BorderRadius.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: Spacing.lg,
    
    // Soft Elegant Shadow
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardActive: {
    backgroundColor: colors.accentTransparent, // Accent overlay
    borderColor: colors.accent,
    borderWidth: 1.5,
  },
  header: {
    marginBottom: Spacing.md,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xs,
    gap: Spacing.sm,
  },
  nama: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: colors.textPrimary,
    flex: 1,
  },
  sksBadge: {
    backgroundColor: colors.surfaceLow,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.badge,
  },
  sksBadgeActive: {
    backgroundColor: colors.accent,
  },
  sksText: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    color: colors.textSecondary,
  },
  sksTextActive: {
    color: '#FFFFFF', // Clean high contrast contrast for badge
  },
  kode: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: Spacing.xs,
  },
  dosenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  dosenText: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
  },
});
