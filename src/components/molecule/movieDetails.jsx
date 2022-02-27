import React from 'react'
import styled from 'styled-components'
import BackButton from '../atom/BackButton';
import TitleComponent, {Title} from '../atom/NewTitle';


const Image = styled.img`
    width:500px;
    height:300px;
`;

const Container = styled.div`
    display: flex;
    gap:20px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`


const Subtitle = styled(Title)`
    font-size: 14px;
`

const Description = styled.div`
    font-size:12px;
    text-align: left;
`

const MovieDetails = ({movie}) => {
    return (
        <Container>
            <Image src={movie.movie_banner}></Image>
            <Wrapper>
                <TitleComponent title={movie.title}/>
                <Subtitle>{movie.original_title}</Subtitle>
                <Subtitle>{movie.release_date}</Subtitle>
                <Description>{movie.description}</Description>
                <BackButton/>
            </Wrapper>
        </Container>
        
    )
}

export default MovieDetails