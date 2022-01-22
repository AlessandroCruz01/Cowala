function validade(data, periodo){
    let arrayData = data.split('-');

    //para pegar os campos separadamente
    let campoDia = parseInt(arrayData[2]); 
    let campoMes = parseInt(arrayData[1]); 
    let campoAno = parseInt(arrayData[0]);

    //Pegar a string de dias e transformar em number
    periodo = Number(periodo)

    let dataUser = new Date();
    dataUser.setDate(campoDia);
    dataUser.setMonth(campoMes -1);
    dataUser.setFullYear(campoAno);
 
    let dataLimite = new Date();
    dataLimite.setDate(dataLimite.getDate() + periodo);
 
    if(dataUser.getTime() <= dataLimite.getTime()){
    	return true;
    }else{
    	return false;
    }
}

console.log(validade("2021-11-17T20:40:09.503Z", "10"))
console.log(validade("2021-12-10T00:00:00.000Z", "180"))


// let d = new Date("2021-11-17T20:40:09.503Z");
// console.log(d);