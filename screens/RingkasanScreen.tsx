import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dataMataKuliah, MataKuliah } from '../data/matakuliah';
import MatkulCard from '../components/MatkulCard';
import DetailPanel from '../components/DetailPanel';
import SplitLayout from '../components/SplitLayout';
import { Colors, Spacing, Fonts, SpineColors, SPLIT_BREAKPOINT } from '../constants/theme';
import { useTheme } from '../context/ThemeContext';

export default function RingkasanScreen() {
  const [selected, setSelected] = useState<MataKuliah | null>(null);
  const { width } = useWindowDimensions();
  const isWide = width >= SPLIT_BREAKPOINT;
  const { isDarkMode, toggleDarkMode, colors } = useTheme();
  const styles = createStyles(colors);

  const totalSks = dataMataKuliah.reduce((sum, mk) => sum + mk.sks, 0);

  // Mobile Drilldown to Detail screen when selected
  if (!isWide && selected) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top']}>
        <View style={styles.detailScreenContainer}>
          <View style={styles.detailHeader}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setSelected(null)}
              activeOpacity={0.7}
            >
              <Feather name="arrow-left" size={20} color={colors.accentGold} />
              <Text style={styles.backText}>Kembali</Text>
            </TouchableOpacity>
          </View>
          <DetailPanel matkul={selected} />
        </View>
      </SafeAreaView>
    );
  }

  const masterContent = (
    <FlatList
      data={dataMataKuliah}
      keyExtractor={(item) => item.kode}
      renderItem={({ item, index }) => (
        <MatkulCard
          matkul={item}
          isActive={isWide && selected?.kode === item.kode}
          onPress={() => setSelected(item)}
          spineColor={SpineColors[index % SpineColors.length]}
        />
      )}
      ListHeaderComponent={
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.titleRow}>
              <Feather name="bookmark" size={20} color={colors.accentGold} />
              <Text style={styles.title}>Ringkasan Mata Kuliah</Text>
            </View>
            <TouchableOpacity
              onPress={toggleDarkMode}
              style={styles.themeToggle}
              activeOpacity={0.7}
            >
              <Feather
                name={isDarkMode ? 'sun' : 'moon'}
                size={18}
                color={colors.accentGold}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>
            {dataMataKuliah.length} Mata Kuliah · {totalSks} SKS Total
          </Text>
        </View>
      }
      style={styles.flatList}
      contentContainerStyle={styles.flatListContent}
      showsVerticalScrollIndicator={false}
    />
  );

  const detailContent = selected ? <DetailPanel matkul={selected} /> : null;

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

const createStyles = (colors: any) => StyleSheet.create({
  flatList: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flatListContent: {
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xxl,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
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
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
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
  detailScreenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  detailHeader: {
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
    color: colors.accentGold,
  },
});
