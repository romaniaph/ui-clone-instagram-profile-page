import React from 'react';
import { Text, Image, FlatList } from 'react-native';

import HeadInfo from '../../components/HeadInfo'
import Icons from '../../components/Icons'

import json from '../../../server.json';

import { Container, Head, Avatar, Info, TextName, TextType, Posts, PostImage } from './styles';

export default function Profile() {

    return (
        <Container>
            <Head>
                <Avatar source={{ uri: json.author.avatar }} />
                <HeadInfo value="20" wvalue="Posts" />
                <HeadInfo value={json.author.followers} wvalue="Followers" />
                <HeadInfo value={json.author.following} wvalue="Following" />
            </Head>
            <Info>
                <TextName>{json.author.name}</TextName>
                <TextType>{json.author.type}</TextType>
                <Text>{json.author.about}</Text>
            </Info>
            <Posts>
                <Icons />
                <FlatList 
                scrollEnabled="false"
                key="list"
                data={json.feed}
                numColumns="3"
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                    <PostImage source={{ uri: item.image }} />
                )}
                />
            </Posts>
        </Container>
    );
}

