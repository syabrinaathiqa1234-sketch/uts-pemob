import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status === 'selesai';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View
        style={[
          styles.badge,
          isSelesai ? styles.badgeSelesai : styles.badgeProses,
        ]}
      >
        <Text style={styles.badgeText}>
          {isSelesai ? 'Selesai' : 'Proses'}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  badgeSelesai: { backgroundColor: '#2e7d32' },
  badgeProses: { backgroundColor: '#ef6c00' },
  badgeText: { color: '#fff', fontWeight: '600', fontSize: 12 },
  button: {
    backgroundColor: '#1976d2',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});