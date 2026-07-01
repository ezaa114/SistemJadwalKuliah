import React from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dataJadwal } from '../data/jadwal';
import JadwalSectionHeader from '../components/JadwalSectionHeader';
import JadwalItemCard from '../components/JadwalItemCard';
import { Colors, Spacing, Fonts, BorderRadius } from '../constants/theme';
import { useTheme } from '../context/ThemeContext';

export default function JadwalScreen() {
  const totalKelas = dataJadwal.reduce((sum, s) => sum + s.data.length, 0);
  const { isDarkMode, toggleDarkMode, colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top']}>
      <SectionList
        sections={dataJadwal}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <JadwalSectionHeader title={section.title} />
        )}
        renderItem={({ item }) => <JadwalItemCard item={item} />}
        stickySectionHeadersEnabled={true}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <View style={styles.headerTop}>
              <View style={styles.titleRow}>
                <Feather name="clock" size={20} color={colors.accent} />
                <Text style={styles.title}>Jadwal Mingguan</Text>
              </View>
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
            <Text style={styles.subtitle}>
              {dataJadwal.length} Hari · {totalKelas} Kelas · Semester Ganjil
            </Text>
          </View>
        }
        SectionSeparatorComponent={() => <View style={styles.sectionSeparator} />}
        style={styles.sectionList}
        contentContainerStyle={styles.sectionListContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const createStyles = (colors: typeof Colors) => StyleSheet.create({
  sectionList: {
    flex: 1,
    backgroundColor: colors.background,
  },
  sectionListContent: {
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
  themeToggle: {
    padding: Spacing.sm,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: 28,
  },
  sectionSeparator: {
    height: Spacing.md,
  },
});
