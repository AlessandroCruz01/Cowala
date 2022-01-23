import { Container, InputMax, InputPro, InputPho, Button, ButtonFinish, Forms, InputMyIp, LabNome, LabPro, LabPhon, LabMyip } from './styles';
import axios from 'axios';

import { useCallback, useState } from 'react';

const Form:React.FC = () => {
  
  interface Props{
    name: string;
    profissao: string;
    phone: string;
    ip: string
  }
  
  const [data, setData] = useState<Props>({
    name:'',
    profissao: '',
    phone: '',
    ip: ''
  })
  
  const getData = useCallback(async (data: Props) => {
      const res = await axios.get('https://ip-fast.com/api/ip/')
      setData({
        ...data, ip: res.data
      })
  }, [])

  const clear = useCallback(() => setData({
    name:'',
    profissao: '',
    phone: '',
    ip: ''
  }), [])

  const save = useCallback(async (data: Props) => {
    await localStorage.setItem('data', JSON.stringify(data))
    alert('Save')
  }, [])

  const phoneMask = (v: string) => {

    let r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
  
    if (r.length > 11) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 7) {
      r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else if (v.trim() !== "") {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }

  return (
    <Container>
      <Forms>

        <LabNome id='labNome'>Nome</LabNome>
        <InputMax 
          name="name" 
          value={data.name}
          onChange={({target}) => setData({...data, name: target.value})}
          id='label' 
          type="text"
        />

        <LabPro>Profissão</LabPro>
        <InputPro 
          name="profissao" 
          value={data.profissao}
          onChange={({target}) => setData({...data, profissao: target.value})}
          id='profissao' 
          type="text" 
        />

        <LabPhon>Celular</LabPhon>
        <InputPho 
          name='phone'
          value={data.phone}
          onChange={({target}) => {
            setData({...data, phone: phoneMask(target.value)})
          }}
          type="text"
          maxLength={15}
        />
      
        <LabMyip>Meu IP</LabMyip>
        <InputMyIp 
          name="ip"
          value={data.ip}
          onChange={({target}) => setData({...data, ip: target.value})}
          type="text"
          disabled
        />

        <Button 
          type='button'
          onClick={() => getData(data)}
        > 
          ENCONTRAR IP
        </Button>

      </Forms>

      <div>
        <ButtonFinish
          type='button'
          onClick={() => save(data)}
        >
          SALVAR
        </ButtonFinish>

        <ButtonFinish
          type='button'
          onClick={() => clear()}
        >
          LIMPAR
        </ButtonFinish>
      </div>

    </Container>
  );
};

export default Form;
