import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../../constants/colors';
import CustomHeader from '../../../components/customHeader/customHeader';

type FundItem = {}; // Define your prop types here if needed

const FundItem: React.FC<FundItem> = ({ item }: { item: Fund }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>{item.name}</Text>
                <View style={styles.returnContainer}>
                    <Text style={[styles.returnText, item.last_year_return > 0 ? styles.positiveReturn : styles.negativeReturn]}>
                        {item.last_year_return > 0 ? `↑ ${item.last_year_return}%` : `↓ ${item.last_year_return}%`}
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FundItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
        padding: 16,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    returnContainer: {
        borderRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    returnText: {
        fontSize: 14,
        fontWeight: '600',
    },
    positiveReturn: {
        color: '#28A745',
    },
    negativeReturn: {
        color: '#DC3545',
    },
    detailsButton: {
        marginTop: 16,
        backgroundColor: '#EDEDED',
        padding: 10,
        borderRadius: 6,
        alignItems: 'center',
    },
    detailsText: {
        color: '#007BFF',
        fontWeight: '600',
    },
});
