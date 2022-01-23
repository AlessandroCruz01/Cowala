import styled from 'styled-components';

export const Container = styled.div`
    height: 121px;
    background: ${props => props.theme.colors.primary};
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
`;

export const DivImg = styled.div`
    @media (max-width: 688px){
        box-sizing: border-box; 
        overflow-y: auto;
    }
`
export const Img = styled.img`
    @media (max-width: 688px){
        width: 30%;
        display: flex;
        align-items: stretch;
    }
`
