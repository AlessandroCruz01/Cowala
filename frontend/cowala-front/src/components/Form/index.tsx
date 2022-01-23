import { Container, InputMax, InputPro, InputPho, Button, ButtonFinish, Forms, InputMyIp, LabNome, LabPro, LabPhon, LabMyip } from './styles';
import api from '../../services/index'

const Form:React.FC = () => {
  const getData = async () => {
    const res = await api.get('ip/')
    console.log(res.data)
  }
  return (
    <Container>
      <Forms>

        <LabNome>Nome</LabNome>
        <InputMax id='label' type="text"/>

        <LabPro>Profissão</LabPro>
        <InputPro id='profissao' type="text" />

        <LabPhon>Celular</LabPhon>
        <InputPho className='tel' name='phone' pattern='[0-9]{2}-[0-9]{5}-[0-9]{4}' required/>
      
        <LabMyip>Meu IP</LabMyip>
        <InputMyIp type="text" />

        <Button onClick={getData}>ENCONTRAR IP</Button>

      </Forms>
      <div>
        <ButtonFinish>SALVAR</ButtonFinish>
        <ButtonFinish>LIMPAR</ButtonFinish>
      </div>
    </Container>
  );
};

export default Form;
