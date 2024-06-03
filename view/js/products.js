document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Produto 1",
            description: "Talco meu Pet Genial Premium - Banho Seco",
            price: 34.90,
            discount: "20% OFF",
            installments: "Ou em 12x de R$3,40",
            weight: "100g",
            image: "./images/produto-1.png"
        },
        {
            name: "Produto 2",
            description: "Ração Premium para Gatos Adultos",
            price: 89.90,
            discount: "15% OFF",
            installments: "Ou em 12x de R$7,49",
            weight: "2kg",
            image: "./images/produto-2.png"
        },
        {
            name: "Produto 3",
            description: "Brinquedo Mordedor para Cães",
            price: 19.90,
            discount: "10% OFF",
            installments: "Ou em 12x de R$1,66",
            weight: "250g",
            image: "./images/produto-3.png"
        },
        {
            name: "Produto 4",
            description: "Shampoo para Pets - Neutro",
            price: 24.90,
            discount: "5% OFF",
            installments: "Ou em 12x de R$2,08",
            weight: "500ml",
            image: "./images/produto-4.png"
        },
        {
            name: "Produto 5",
            description: "Arranhador para Gatos",
            price: 129.90,
            discount: "25% OFF",
            installments: "Ou em 12x de R$10,83",
            weight: "3kg",
            image: "./images/produto-5.png"
        }
    ];

    const productsContainer = document.querySelector('.favorite-products__cards');

    products.forEach(product => {
        const productCard = `
            <div class="card">
                <img src="${product.image}" class="img-produto" alt="${product.name}" />
                <div class="sobre-card">
                    <div class="info-card">
                        <div class="sobre-produto">${product.description}</div>
                        <div class="preco">
                            <p class="parcelas">${product.installments}</p>
                            <p class="preco-avista">R$${product.price.toFixed(2)}</p>
                        </div>
                        <div class="desconto">${product.discount}</div>
                        <div class="peso">Peso: ${product.weight}</div>
                    </div>

                    <div class="add" id="infoCarrinho">
                        <div class="botoes">
                            <button class="btn-carr-mais" id="addCarrinho">Colocar no Carrinho</button>
                            <a href="detalhes-produto.php" class="btn-carr-mais">Mais Detalhes</a>
                        </div>
                    </div>
                </div>

                <div class="adicionar-produto">
                    <div class="escolha">
                        <div class="nome-produto">
                            <h3>${product.description}</h3>
                        </div>
                        <div class="tamanho">
                            <h2>Tamanho</h2>
                            <form>
                                <label>
                                    <input type="radio" name="tamanho" value="Pequeno" />
                                    <span class="btn">Pequeno</span>
                                </label>
                                <label>
                                    <input type="radio" name="tamanho" value="Médio" />
                                    <span class="btn">Médio</span>
                                </label>
                                <label>
                                    <input type="radio" name="tamanho" value="Grande" />
                                    <span class="btn">Grande</span>
                                </label>
                            </form>
                        </div>
                        <div class="quantidade">
                            <h2>Quantidade</h2>
                            <div class="quantity">
                                <button class="btn-quantity" data-action="decrease">-</button>
                                <input class="input-quantity" type="number" min="1" value="1" />
                                <button class="btn-quantity" data-action="increase">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="confirmar-pedido">
                        <div class="decide-pedido">
                            <button class="btn-pedido cancelar-compra">Cancelar</button>
                            <button class="btn-pedido confirmar-compra">Pronto</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        productsContainer.insertAdjacentHTML('beforeend', productCard);
    });
});
