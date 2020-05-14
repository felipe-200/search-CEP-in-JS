function searchzp(){
    let cep = window.document.getElementById("search-cep") //recebendo o cep digitado
    if(cep.value.length == 0 || cep.value.length < 8){ //validação do cep
        window.alert("Digite um CEP valido")
    } else {
            const requireURL = `https://cep.awesomeapi.com.br/json/${Number(cep.value)}` //url da API com o cep
            const res = window.document.getElementById("res")
            res.innerHTML = ""
            function showzp(url){
                const require = new XMLHttpRequest() //criando a requisição API 
                require.open("GET", url)
                require.onreadystatechange = function(){ 
                    if(this.status == 200 && this.readyState == 4){ //Verificando se a url é valida
                        let reqResult = JSON.parse(this.responseText) //passando o resultado da requisição pra JSON
                        res.innerHTML = `CIDADE: ${reqResult.city} <br> ` //adicionando o resultado a tela
                        res.innerHTML += `ESTADO: ${reqResult.state} <br>`
                        res.innerHTML += `DDD: ${reqResult.ddd} <br> `
                        res.innerHTML += `Latidute: ${reqResult.lat} <br>`
                        res.innerHTML += `Longitude: ${reqResult.lng}`
                    }else{
                        res.innerHTML = "CEP Não encontrado ..." 
                    }
                }
                require.send() //Enviando a requisição
            }
        showzp(requireURL) //Passando a url pra função showzp
    } 
}
