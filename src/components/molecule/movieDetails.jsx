import React from 'react'
import styled from 'styled-components'
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

`


const Subtitle = styled(Title)`
    font-size: 14px;
`

const MovieDetails = ({movie}) => {
    return (
        <Container>
            <Image src={movie.movie_banner}></Image>
            <Wrapper>
                <TitleComponent title={movie.title}/>
                <Subtitle>{movie.original_title}</Subtitle>
                <div>{movie.description}</div>
            </Wrapper>
        </Container>
        
    )
}

export default MovieDetails