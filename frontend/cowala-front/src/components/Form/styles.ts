import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    margin: auto;
    margin-top: 5%;

    color: ${props => props.theme.colors.text};
    
    background-color: ${props => props.theme.colors.container};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    flex-wrap: wrap;
    
    box-shadow: -2px 2px 5px #444;
    
    padding-top: 4%;
    padding-bottom: 4%;
    box-sizing: border-box; 
    overflow-y: auto;
`;

//div do form
export const Forms = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
        "LabNome LabNome " 
        "Nome Nome"
        "LabPro LabPhon"
        "Pro Phon"
        "LabMyip labMyip"
        "Myip Mybutton"
    ;
    gap:10px;
    position: relative;


    @media(max-width:597px ){
        grid-template-columns: 1fr;
        grid-template-areas: 
        "LabNome"
        "Nome"
        "LabPro"
        "Pro"
        "LabMyip"
        "Myip";
    }
`;

//labels
export const LabNome = styled.label`
    position: relative;
    grid-area: LabNome;
	margin-bottom: 0.2em;
`;

export const LabPro = styled.label`
    grid-area: LabPro;
    margin-bottom: 0.2em;    
`;

export const LabPhon = styled.label`
    grid-area: LabPhon;
    margin-bottom: 0.2em;    
`;

export const LabMyip = styled.label`
    grid-area: LabMyip;
    margin-bottom: 0.2em;   
`;

//inputs
export const InputMax = styled.input`
    grid-area: Nome;
	padding: 0.5em;
	border: none;
	border-radius: 3px;
	width: 52vh;
    height: 44px;
	margin-bottom: 0.5em;

`;

export const InputPro = styled.input`
    grid-area: Pro;
    padding: 0.5em;
	border: none;
	border-radius: 3px;
	width: 25vh;
    height: 44px;
	margin-bottom: 0.5em;
`;

export const InputPho = styled.input`
    grid-area: Phon;
    margin: auto;
    padding: 0.5em;
	border: none;
	border-radius: 3px;
	width: 25vh;
    height: 44px;
	margin-bottom: 0.5em;
`;

export const InputMyIp = styled.input`
    grid-area: Myip;
	padding: 0.5em;
	border: none;
	border-radius: 3px;
	width: 25vh;
    height: 44px;
	margin-bottom: 0.5em;
`;


//buttons
export const Button = styled.button`
    grid-area: Mybutton;
	padding: 0.5em;
    background: #00D9D0;
    font-weight: bold;
	color: #0A1633;
	border: none;
	border-radius: 3px;
	width: 25vh;
    height: 44px;
	margin-bottom: 0.5em;
    cursor: pointer;
    :hover{
        opacity: 16%;
        transition: 0.4s;
        transform: translateY(1vh);

    }
`;

export const ButtonFinish = styled.button`
    grid-area: Mybutton;
	padding: 0.5em;
    background: ${props => props.theme.colors.primary};
    font-weight: bold;
	color: #fff;
	border: none;
	border-radius: 3px;
	width: 100px;
    height: 44px;
    margin: 20px;
    cursor: pointer;
    :hover{
        opacity: 16%;
        transition: 0.4s;
        transform: translateY(1vh);

    }
`;


