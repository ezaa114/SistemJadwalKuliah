import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MataKuliah } from '../data/matakuliah';
import { Colors, Spacing, Fonts } from '../constants/theme';
import { useTheme } from '../context/ThemeContext';

interface MatkulCardProps {
  matkul: MataKuliah;
  onPress: () => void;
  isActive?: boolean;
  spineColor: string;
}

export default function MatkulCard({ matkul, onPress, isActive, spineColor }: MatkulCardProps) {
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
        {/* Spine bar */}
        <View style={[styles.spine, { backgroundColor: spineColor }]} />

        {/* Content columns */}
        <View style={styles.mainContent}>
          <Text style={styles.kode}>{matkul.kode}</Text>
          <Text style={styles.nama} numberOfLines={2}>
            {matkul.nama}
          </Text>
          <View style={styles.dosenRow}>
            <Feather name="user" size={12} color={colors.textSecondary} />
            <Text style={styles.dosenText} numberOfLines={1}>
              {matkul.dosen}
            </Text>
          </View>
        </View>

        {/* SKS Badge */}
        <View style={styles.rightContent}>
          <View style={styles.sksBadge}>
            <Text style={styles.sksNumber}>{matkul.sks}</Text>
            <Text style={styles.sksLabel}>sks</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  pressable: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    borderRadius: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    paddingLeft: Spacing.lg + 6,
    position: 'relative',
    overflow: 'hidden',
  },
  cardActive: {
    backgroundColor: colors.surfaceLow,
    borderColor: colors.accentGold,
  },
  spine: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
  },
  mainContent: {
    flex: 1,
    marginRight: Spacing.md,
  },
  kode: {
    fontFamily: Fonts.regular,
    fontSize: 11,
    textTransform: 'uppercase',
    color: colors.textSecondary,
    marginBottom: 2,
  },
  nama: {
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: colors.text,
    marginBottom: Spacing.xs,
  },
  dosenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  dosenText: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
    flex: 1,
  },
  rightContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sksBadge: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1.5,
    borderColor: colors.accentGold,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sksNumber: {
    fontFamily: Fonts.bold,
    fontSize: 13,
    color: colors.accentGoldText,
    lineHeight: 14,
  },
  sksLabel: {
    fontFamily: Fonts.regular,
    fontSize: 8,
    color: colors.accentGoldText,
    lineHeight: 8,
    marginTop: -2,
  },
});
