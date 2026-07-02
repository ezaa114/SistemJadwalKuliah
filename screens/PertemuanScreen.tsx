import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dataPertemuan, Pertemuan } from '../data/pertemuan';
import PertemuanItem from '../components/PertemuanItem';
import SplitLayout from '../components/SplitLayout';
import { Colors, Spacing, BorderRadius, Fonts, SPLIT_BREAKPOINT } from '../constants/theme';
import { useTheme } from '../context/ThemeContext';

export default function PertemuanScreen() {
  const [selected, setSelected] = useState<Pertemuan | null>(null);
  const { width } = useWindowDimensions();
  const isWide = width >= SPLIT_BREAKPOINT;
  const { isDarkMode, toggleDarkMode, colors } = useTheme();
  const styles = createStyles(colors);

  // --- FlatList required components ---

  const ListHeaderComponent = () => (
    <View style={styles.listHeader}>
      <View style={styles.headerTop}>
        <View style={styles.titleRow}>
          <Feather name="calendar" size={20} color={colors.accent} />
          <Text style={styles.title}>Daftar Pertemuan</Text>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity
            onPress={toggleDarkMode}
            style={styles.themeToggle}
            activeOpacity={0.7}
          >
            <Feather
              name={isDarkMode ? 'sun' : 'moon'}
              size={18}
              color={colors.accent}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subtitle}>
        Total {dataPertemuan.length} pertemuan · Semester Ganjil
      </Text>
    </View>
  );

  const ItemSeparatorComponent = () => <View style={styles.separator} />;

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyIconContainer}>
        <Feather name="inbox" size={48} color={colors.border} />
      </View>
      <Text style={styles.emptyTitle}>Belum Ada Data Pertemuan</Text>
      <Text style={styles.emptySubtitle}>
        Data pertemuan akan muncul di sini setelah dosen menambahkan jadwal
        pertemuan.
      </Text>
    </View>
  );

  // --- Detail content for split view ---
  const detailContent = selected ? (
    <View style={styles.detailContainer}>
      <View style={styles.detailHeader}>
        <View style={styles.detailKodeBadge}>
          <Text style={styles.detailKodeText}>{selected.matkulKode}</Text>
        </View>
        <Text style={styles.detailNama}>{selected.matkulNama}</Text>
      </View>

      <View style={styles.detailCard}>
        <View style={styles.detailRow}>
          <Feather name="hash" size={16} color={colors.accent} />
          <View style={styles.detailRowContent}>
            <Text style={styles.detailLabel}>Pertemuan</Text>
            <Text style={styles.detailValue}>
              Pertemuan ke-{selected.pertemuanKe}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.detailCard}>
        <View style={styles.detailRow}>
          <Feather name="book" size={16} color={colors.accent} />
          <View style={styles.detailRowContent}>
            <Text style={styles.detailLabel}>Topik Pembahasan</Text>
            <Text style={styles.detailValue}>{selected.topik}</Text>
          </View>
        </View>
      </View>

      <View style={styles.detailCard}>
        <View style={styles.detailRow}>
          <Feather name="calendar" size={16} color={colors.accent} />
          <View style={styles.detailRowContent}>
            <Text style={styles.detailLabel}>Tanggal</Text>
            <Text style={styles.detailValue}>{selected.tanggal}</Text>
          </View>
        </View>
      </View>
    </View>
  ) : null;

  const masterContent = (
    <FlatList
      data={dataPertemuan}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PertemuanItem
          pertemuan={item}
          isActive={isWide && selected?.id === item.id}
          onPress={() => setSelected(item)}
        />
      )}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListEmptyComponent={ListEmptyComponent}
      style={styles.flatList}
      contentContainerStyle={styles.flatListContent}
      showsVerticalScrollIndicator={false}
    />
  );

  // Mobile Drilldown to Detail screen when selected
  if (!isWide && selected) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top']}>
        <View style={styles.detailScreenContainer}>
          <View style={styles.detailScreenHeader}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setSelected(null)}
              activeOpacity={0.7}
            >
              <Feather name="arrow-left" size={20} color={colors.accent} />
              <Text style={styles.backText}>Kembali</Text>
            </TouchableOpacity>
          </View>
          {detailContent}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top']}>
      <SplitLayout
        masterContent={masterContent}
        detailContent={detailContent ?? <View />}
        showDetail={selected !== null}
      />
    </SafeAreaView>
  );
}

const createStyles = (colors: typeof Colors) => StyleSheet.create({
  flatList: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flatListContent: {
    paddingBottom: Spacing.xxl,
  },
  listHeader: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.lg,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    color: colors.textPrimary,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  themeToggle: {
    padding: Spacing.sm,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceLow,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: 28,
  },
  toggleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    backgroundColor: colors.accentTransparent,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: 8,
  },
  toggleText: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    color: colors.accentGoldText,
  },
  separator: {
    height: 1,
    backgroundColor: colors.border,
    marginHorizontal: Spacing.lg,
    marginVertical: Spacing.sm,
  },
  emptyContainer: {
    alignItems: 'center',
    padding: Spacing.xxl,
    paddingTop: 60,
  },
  emptyIconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
  },
  emptyTitle: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  emptySubtitle: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: Spacing.xl,
    maxWidth: 300,
  },
  emptyButton: {
    backgroundColor: colors.accentTransparent,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.accent,
  },
  emptyButtonText: {
    fontFamily: Fonts.medium,
    fontSize: 13,
    color: colors.accentGoldText,
  },
  // Detail styles
  detailContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: Spacing.xl,
  },
  detailHeader: {
    marginBottom: Spacing.xl,
  },
  detailKodeBadge: {
    backgroundColor: colors.accentTransparent,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.badge,
    alignSelf: 'flex-start',
    marginBottom: Spacing.md,
  },
  detailKodeText: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    color: colors.accent,
  },
  detailNama: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    color: colors.textPrimary,
  },
  detailCard: {
    backgroundColor: colors.surface,
    borderRadius: BorderRadius.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  detailRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  detailRowContent: {
    flex: 1,
  },
  detailLabel: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    color: colors.textSecondary,
    marginBottom: Spacing.xs,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  detailValue: {
    fontFamily: Fonts.bold,
    fontSize: 15,
    color: colors.textPrimary,
  },
  detailScreenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  detailScreenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.surfaceLow,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  backText: {
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: colors.accent,
  },
});
