import React, { useState} from 'react'
import { View } from 'react-native'

import { Feather } from '@expo/vector-icons'

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';

import {Text, Image } from 'react-native'
import api from '../../services/api';

function TeacherList() {

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [teachers, setTeachers] = useState([]);

    const [favorites, setFavorites] = useState<number[]>([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites () {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.user_id
                });

                setFavorites(favoritedTeachersIds);
            }
        })
    }



    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible);
    }


    async function handleFiltersSubmit() {

        loadFavorites();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        console.log(response.data);

        setTeachers(response.data);
        setIsFiltersVisible(!isFiltersVisible);
    }

    return ( 
        <View style={styles.container}>
            <PageHeader 
                title='Proffys disponíveis' 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name='filter' size={25} color='#FFF' />
                    </BorderlessButton>
                )}
                >
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)} 
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
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput 
                                    style={styles.input} 
                                    placeholder='Qual horário?'
                                    placeholderTextColor='#c1bccc'
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                />
                            </View>
                        </View>

                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>

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

                {teachers.map((teacher: Teacher) => {
                    return(
                        <TeacherItem favorited={favorites.includes(teacher.user_id)} key={teacher.user_id} teacher={teacher}/>
                    )
                        
                        
                }
                )}
                    
            </ScrollView>
        </View> 
    )
}

export default TeacherList;