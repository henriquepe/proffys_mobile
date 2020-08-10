import React, { useState } from 'react'
import { View } from 'react-native'

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import {Text } from 'react-native'

function TeacherList() {

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);


    return ( 
        <View style={styles.container}>
            <PageHeader title='Proffys disponíveis'>
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder='Qual a matéria?'
                            placeholderTextColor='#c1bccc'
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput 
                                    style={styles.input} 
                                    placeholder='Qual o dia?'
                                    placeholderTextColor='#c1bccc'
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput 
                                    style={styles.input} 
                                    placeholder='Qual horário?'
                                    placeholderTextColor='#c1bccc'
                                />
                            </View>
                        </View>

                    </View>
                )}
            </PageHeader>
            
            
            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24
                }}
            >
                    <TeacherItem/>
                    <TeacherItem/>
                    <TeacherItem/>
                    <TeacherItem/>
            </ScrollView>
        </View> 
    )
}

export default TeacherList;