import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import InfoCard from './src/components/InfoCard';
import DirektoriMahasiswa from './src/screens/DirektoriMahasiswa';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Daftar Tugas</Text>

      <InfoCard
        title="Laporan Praktikum Pemrograman Mobile"
        status="selesai"
        onPress={() => Alert.alert('Detail', 'Laporan praktikum sudah selesai')}
      />
      <InfoCard
        title="Project Akhir Aplikasi Mobile"
        status="proses"
        onPress={() => Alert.alert('Detail', 'Project masih dikerjakan')}
      />

      <DirektoriMahasiswa />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
});