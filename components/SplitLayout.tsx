import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { Colors, Spacing, Fonts, SPLIT_BREAKPOINT } from '../constants/theme';
import { useTheme } from '../context/ThemeContext';

interface SplitLayoutProps {
  masterContent: React.ReactNode;
  detailContent: React.ReactNode;
  showDetail: boolean;
}

export default function SplitLayout({
  masterContent,
  detailContent,
  showDetail,
}: SplitLayoutProps) {
  const { width } = useWindowDimensions();
  const isWide = width >= SPLIT_BREAKPOINT;
  const { colors } = useTheme();
  const styles = createStyles(colors);

  if (!isWide) {
    return (
      <View style={styles.container}>
        {masterContent}
      </View>
    );
  }

  return (
    <View style={styles.splitContainer}>
      <View style={styles.masterPanel}>{masterContent}</View>
      <View style={styles.divider} />
      <View style={styles.detailPanel}>
        {showDetail ? (
          detailContent
        ) : (
          <View style={styles.emptyDetail}>
            <Text style={styles.emptyIcon}>📋</Text>
            <Text style={styles.emptyText}>Pilih item di sebelah kiri</Text>
            <Text style={styles.emptySubtext}>
              Detail akan ditampilkan di sini
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const createStyles = (colors: typeof Colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  splitContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.background,
  },
  masterPanel: {
    flex: 2,
    borderRightWidth: 0,
  },
  divider: {
    width: 1,
    backgroundColor: colors.border,
  },
  detailPanel: {
    flex: 3,
  },
  emptyDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xxl,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: Spacing.lg,
  },
  emptyText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  emptySubtext: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    opacity: 0.8,
  },
});
