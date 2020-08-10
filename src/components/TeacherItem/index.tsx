import React from 'react'

import {View, Image, Text} from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function TeacherItem(){
    return (
    
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQHoMvNdpMP41w/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=gcv5Aq5TDxV-O5KNpjfOLID6XWT9Xb6-G73wgulc-F4'}}     
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Henrique Pires</Text>
                    <Text style={styles.subject}>Física</Text>
                </View>

            </View>

            <Text style={styles.bio}>
            Desenvolvedor Javascript, especializado em construção de aplicações web.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon}/> */}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>



        </View>
    )
}

export default TeacherItem;