import * as React from 'react';
import { Image, FlatList } from 'react-native';

import { Text, View } from '../../components/Themed';
import styles from './styles';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* List of categories */}
        <FlatList
            data={categories.items}
            renderItem={({item}) => <HomeCategory category={item} />}
        />
    </SafeAreaView>
  );
}

export default HomeScreen;
