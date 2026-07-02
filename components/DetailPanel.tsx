import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MataKuliah } from '../data/matakuliah';
import { dataPertemuan } from '../data/pertemuan';
import { Colors, Spacing, BorderRadius, Fonts } from '../constants/theme';
import { useTheme } from '../context/ThemeContext';

interface DetailPanelProps {
  matkul: MataKuliah;
}

export default function DetailPanel({ matkul }: DetailPanelProps) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const pertemuanList = dataPertemuan.filter(
    (p) => p.matkulKode === matkul.kode
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.headerSection}>
        <View style={styles.kodeBadge}>
          <Text style={styles.kodeText}>{matkul.kode}</Text>
        </View>
        <Text style={styles.nama}>{matkul.nama}</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <View style={styles.sksBadge}>
              <Text style={styles.sksText}>{matkul.sks} SKS</Text>
            </View>
          </View>
          <View style={styles.metaItem}>
            <View style={styles.semesterBadge}>
              <Text style={styles.sksText}>Semester {matkul.semester}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Dosen */}
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Feather name="user" size={16} color={colors.accent} />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Dosen Pengampu</Text>
            <Text style={styles.infoValue}>{matkul.dosen}</Text>
          </View>
        </View>
      </View>

      {/* Deskripsi */}
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Feather name="file-text" size={16} color={colors.accent} />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Deskripsi</Text>
            <Text style={styles.deskripsi}>{matkul.deskripsi}</Text>
          </View>
        </View>
      </View>

      {/* Daftar Pertemuan */}
      <View style={styles.sectionHeader}>
        <Feather name="calendar" size={16} color={colors.accent} />
        <Text style={styles.sectionTitle}>
          Daftar Pertemuan ({pertemuanList.length})
        </Text>
      </View>

      {pertemuanList.length === 0 ? (
        <View style={styles.emptyPertemuan}>
          <Text style={styles.emptyText}>Belum ada data pertemuan</Text>
        </View>
      ) : (
        pertemuanList.map((p) => (
          <View key={p.id} style={styles.pertemuanCard}>
            <View style={styles.pertemuanNumber}>
              <Text style={styles.pertemuanNumberText}>{p.pertemuanKe}</Text>
            </View>
            <View style={styles.pertemuanContent}>
              <Text style={styles.pertemuanTopik}>{p.topik}</Text>
              <Text style={styles.pertemuanTanggal}>{p.tanggal}</Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const createStyles = (colors: typeof Colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: Spacing.xl,
    paddingBottom: 40,
  },
  headerSection: {
    marginBottom: Spacing.xl,
  },
  kodeBadge: {
    backgroundColor: colors.accentTransparent,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    alignSelf: 'flex-start',
    marginBottom: Spacing.md,
  },
  kodeText: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    color: colors.accentGoldText,
  },
  nama: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    color: colors.textPrimary,
    marginBottom: Spacing.md,
  },
  metaRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sksBadge: {
    backgroundColor: colors.surfaceLow,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  semesterBadge: {
    backgroundColor: colors.surfaceLow,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sksText: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    color: colors.textSecondary,
  },
  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: BorderRadius.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    color: colors.textSecondary,
    marginBottom: Spacing.xs,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  infoValue: {
    fontFamily: Fonts.bold,
    fontSize: 15,
    color: colors.textPrimary,
  },
  deskripsi: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 22,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginTop: Spacing.lg,
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: colors.textPrimary,
  },
  emptyPertemuan: {
    padding: Spacing.xl,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
  },
  pertemuanCard: {
    backgroundColor: colors.surface,
    borderRadius: BorderRadius.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  pertemuanNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.accentTransparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pertemuanNumberText: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: colors.accentGoldText,
  },
  pertemuanContent: {
    flex: 1,
  },
  pertemuanTopik: {
    fontFamily: Fonts.medium,
    fontSize: 13,
    color: colors.textPrimary,
    marginBottom: 2,
  },
  pertemuanTanggal: {
    fontFamily: Fonts.regular,
    fontSize: 11,
    color: colors.textSecondary,
  },
});
