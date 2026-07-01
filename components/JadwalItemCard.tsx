import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { JadwalItem } from '../data/jadwal';
import { Colors, Spacing, BorderRadius } from '../constants/theme';
import { useTheme } from '../context/ThemeContext';

interface JadwalItemCardProps {
  item: JadwalItem;
}

export default function JadwalItemCard({ item }: JadwalItemCardProps) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.card}>
      <View style={styles.leftAccent} />
      <View style={styles.content}>
        <Text style={styles.nama} numberOfLines={1}>
          {item.matkulNama}
        </Text>

        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Feather name="clock" size={13} color={colors.accent} />
            <Text style={styles.metaText}>
              {item.jamMulai} — {item.jamSelesai}
            </Text>
          </View>

          <View style={styles.metaItem}>
            <Feather name="map-pin" size={13} color={colors.accent} />
            <Text style={styles.metaText}>{item.ruangan}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const createStyles = (colors: typeof Colors) => StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    marginHorizontal: Spacing.lg,
    marginVertical: Spacing.xs,
    borderRadius: BorderRadius.card,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    
    // Soft elegant shadow
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  leftAccent: {
    width: 4,
    backgroundColor: colors.accent,
  },
  content: {
    flex: 1,
    padding: Spacing.lg,
  },
  nama: {
    fontFamily: 'JetBrainsMono_700Bold',
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: Spacing.md,
  },
  metaContainer: {
    flexDirection: 'row',
    gap: Spacing.xl,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  metaText: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 12,
    color: colors.textSecondary,
  },
});
