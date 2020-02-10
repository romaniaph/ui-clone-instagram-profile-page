import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    border-top-color: lightgrey;
    border-top-width: 0.2px;
`;

export const Head = styled.View`
    margin: 1%;
    margin-left: 5%;
    margin-bottom: 0;
    width: 100%;
    height: 100px;
    flex-direction: row;
    align-items: center;  
`;

export const Avatar = styled.Image`
    width: 85px;
    height: 85px;
    border-radius: 999px;
    resizeMode: contain;
`;

export const Info = styled.View`
    padding: 0 16px 16px 16px;
`;

export const TextName = styled.Text`
    font-weight: 700;
`;

export const TextType = styled.Text`
    color: grey;
`;

export const Posts = styled.View`
    margin-top: 21px;
    border-top-color: lightgrey;
    border-top-width: 0.2px;
    width: 100%;
`;

export const PostImage = styled.Image`
    width: 32.8%;
    height: 124px;
    margin: 1px;
`;
