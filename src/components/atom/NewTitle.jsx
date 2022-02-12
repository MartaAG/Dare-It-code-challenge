import React from 'react'
import styled from 'styled-components'

export const Title = styled.span`
    font-size: 16px;
    font-weight: 500;
    font-face: Arial;
    padding:10px;
`
const TitleComponent = ({title}) => {
    return (
        <Title>{title}</Title>
    )
}

export default TitleComponent;