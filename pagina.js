function carregar(){
    let msg = window.document.getElementById('msg');
    let f1 = window.document.getElementById('frase');
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    
    if (hora >= 0 && hora < 12){
        msg.innerHTML =    'Bom dia, agora são ' + hora + ':' + min + ':' + sec
        document.body.style.background ='#ffd500'
       f1.innerHTML = '"Nunca é perda de tempo se você consegue aprender algo."'
        
    }else if (hora >= 12 && hora <= 18){
        msg.innerHTML = 'Boa tarde, agora são ' + hora + ':' + min + ':' + sec
        document.body.style.background ='#a9d8d1'
        f1.innerHTML = '"O tempo vai passando e soprando coragem para enfrentar os novos caminhos que a vida traça."'
       
    }else{
        msg.innerHTML = 'Boa noite, agora são ' + hora + ':' + min + ':' + sec
        document.body.style.background = '#190e28'
        f1.innerHTML = '"Se tudo tem seu tempo, certamente seus problemas também já estão com os dias contados."'
        
    }
    }
    

