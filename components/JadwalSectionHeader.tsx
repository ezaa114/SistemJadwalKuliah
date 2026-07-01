import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, Fonts } from '../constants/theme';
import { useTheme } from '../context/ThemeContext';

interface JadwalSectionHeaderProps {
  title: string;
}

export default function JadwalSectionHeader({ title }: JadwalSectionHeaderProps) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const dayIcons: Record<string, string> = {
    Senin: '1',
    Selasa: '2',
    Rabu: '3',
    Kamis: '4',
    Jumat: '5',
  };

  return (
    <View style={styles.container}>
      <View style={styles.dayBadge}>
        <Text style={styles.dayNumber}>{dayIcons[title] ?? '?'}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
}

const createStyles = (colors: typeof Colors) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface, // MD3 surface container
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm + 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: Spacing.md,
  },
  dayBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.accent, // Solid purple
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayNumber: {
    fontFamily: Fonts.bold,
    fontSize: 13,
    color: '#FFFFFF', // White text contrast
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: colors.accent,
    letterSpacing: 0.5,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
    marginLeft: Spacing.sm,
  },
});
