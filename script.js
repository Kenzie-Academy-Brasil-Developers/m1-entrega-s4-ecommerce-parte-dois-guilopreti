const vitrine = document.querySelector("section")
console.log(vitrine)

function criarCard(){
    for(let i = 0; i < 6; i++){
        let cardInfo = document.createElement("div")
        cardInfo.className = "produtos-info"

        let quadroImagem = document.createElement("div")
        let figura = document.createElement("figure")
        let imagem =  document.createElement("img")
        let legenda = document.createElement("figcaption")

        imagem.src = "imgs/Men-Jacket-Front-Black__15466 1.png"
        imagem.alt = "Jaqueta Preta Masculina"
        legenda.innerText = "Jaqueta Preta Masculina"

        figura.appendChild(imagem)
        figura.appendChild(legenda)

        quadroImagem.appendChild(figura)

        let quadroDescrição = document.createElement("div")
        quadroDescrição.className = "produtos-info-descricao"

        let blocoTipo = document.createElement("div")
        let produtoTipo = document.createElement("span")
        produtoTipo.innerText = "Camisetas"
        blocoTipo.appendChild(produtoTipo)

        let produtoTitulo = document.createElement("h2")
        produtoTitulo.innerText = "Lightweight Jacket"

        let produtoDescrição = document.createElement("p")
        produtoDescrição.innerText = "Adicione um pouco de energia ao seu garda-roupa de inverno com essa jaqueta vibrante..."

        let produtoPreço = document.createElement("span")
        produtoPreço.innerText = "R$ 100.00"

        let adicionarCarrinho = document.createElement("button")
        adicionarCarrinho.type = "button"
        adicionarCarrinho.innerText = "Adicionar ao carrinho"

        quadroDescrição.appendChild(blocoTipo)
        quadroDescrição.appendChild(produtoTitulo)
        quadroDescrição.appendChild(produtoDescrição)
        quadroDescrição.appendChild(produtoPreço)
        quadroDescrição.appendChild(adicionarCarrinho)

        cardInfo.appendChild(quadroImagem)
        cardInfo.appendChild(quadroDescrição)

        vitrine.appendChild(cardInfo)
        
        if(i === 1){
            imagem.src = "imgs/Black-Hat.png"
            imagem.alt = "Touca Preta"
            legenda.innerText = "Touca Preta"
            produtoTipo.innerText = "Acessórios"
            produtoTitulo.innerText = "Black Hat"
            produtoDescrição.innerText = "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que..."
            produtoPreço.innerText = "R$ 100.00"
        } else if(i === 2){
            imagem.src = "imgs/Surgical-Mask-Black__89554 1.png"
            imagem.alt = "Máscara Preta"
            legenda.innerText = "Máscara Preta"
            produtoTipo.innerText = "Acessórios"
            produtoTitulo.innerText = "Mask"
            produtoDescrição.innerText = "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas..."
            produtoPreço.innerText = "R$ 40.00"
        } else if(i === 3){
            imagem.src = "imgs/Men-TShirt-Black-Front__70046 1.png"
            imagem.alt = "T-Shirt Preta"
            legenda.innerText = "T-Shirt Preta"
            produtoTipo.innerText = "Camisetas"
            produtoTitulo.innerText = "T-Shirt"
            produtoDescrição.innerText = "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de..."
            produtoPreço.innerText = "R$ 100.00"
        } else if(i === 4){
            imagem.src = "imgs/White-T-Shirt.png"
            imagem.alt = "T-Shirt Branca"
            legenda.innerText = "T-Shirt Branca"
            produtoTipo.innerText = "Camisetas"
            produtoTitulo.innerText = "Short-Sleeve T-Shirt"
            produtoDescrição.innerText = "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso..."
            produtoPreço.innerText = "R$ 100.00"
        } else if(i === 5){
            imagem.src = "imgs/champion-jacket.png"
            imagem.alt = "Jaqueta Champion Preta"
            legenda.innerText = "Jaqueta Champion Preta"
            produtoTipo.innerText = "Camisetas"
            produtoTitulo.innerText = "Champion Packable Jacket"
            produtoDescrição.innerText = "Proteja-se dos elementos com essa jaqueta embalável Champion. Esta jaqueta de poliést..."
            produtoPreço.innerText = "R$ 100.00"
        }

    }
}

criarCard()