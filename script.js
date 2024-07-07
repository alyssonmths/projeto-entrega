// Criando um array que vai receber as variaveis nome, telefone, endereço e bairro

function capturarDados(nome, tel, rua, numero, bairro) {

    let preco_km = 2

    if (nome == '') {
        nome = 'pessoa'
    }

    switch (bairro) {
        case 'centro':
            quilometros = 5
            valor = quilometros*preco_km
            tempo = 50
            break;
        case 'sao-sebastiao':
            quilometros = 1
            valor = quilometros*preco_km
            tempo = 15
            break;
        case 'sao-jose':
            quilometros = 3
            valor = quilometros*preco_km
            tempo = 30
            break;
        case 'cabaceira':
            quilometros = 4
            valor = quilometros*preco_km
            tempo = 35
            break;
        case 'coqueiro':
            quilometros = 1
            valor = quilometros*preco_km
            tempo = 15
            break;
        default:
            valor = 0
            tempo = 0
            break;
    }

    if (document.getElementById('opa')) {
        document.getElementById('opa').remove()
        let div = document.createElement('div')
        div.className = 'alerta'
        div.id = 'opa'
        div.innerHTML = `Olá, ${nome}! Sua entrega ficará R$${valor}. Estimativa de entrega: ${tempo} minutos`
        document.body.appendChild(div)
    }
    else {
        let div = document.createElement('div')
        div.className = 'alerta'
        div.id = 'opa'
        div.innerHTML = `Olá, ${nome}! Sua entrega ficará R$${valor}. Estimativa de entrega: ${tempo} minutos`
        document.body.appendChild(div)
    }
    
    let dados = [nome, tel, rua, numero, bairro]
    console.log(dados);
}