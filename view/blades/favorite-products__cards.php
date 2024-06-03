<div class="favorite-products">
  <div class="title-about">
    <div class="dashed-title"></div>
    <h1>Discover the <span>favorite products of our customers</span></h1>
    <p>and make your pet happier than ever!</p>
  </div>

  <!-- css - 0.7.1 -->
  <div class="favorite-products__cards amareloOuro">
    <div class="card">
      <img src="./images/produto-6.png" class="img-produto" alt="" />
      <div class="sobre-card">
        <div class="info-card">
          <div class="sobre-produto">
            Dreamies Snack for Adult Cats Cheese Flavor
          </div>
          <div class="preco">
            <p class="parcelas">Or in 12 installments of $3.40</p>
            <p class="preco-avista">$32.00</p>
          </div>
          <div class="desconto">20% OFF</div>
        </div>

        <div class="add" id="infoCarrinho">
          <div class="botoes">
            <button class="btn-carr-mais" id="addCarrinho">
              Add to Cart
            </button>
            <a href="detalhes-produto.php" class="btn-carr-mais">More Details</a>
          </div>
        </div>
      </div>

      <div class="adicionar-produto">
        <div class="escolha">
          <div class="nome-produto">
            <h3>Dreamies Snack for Adult Cats Cheese Flavor</h3>
          </div>

          <div class="tamanho">
            <h2>Size</h2>
            <form>
              <label>
                <input type="radio" name="tamanho" value="40g" />
                <span class="btn">40g</span>
              </label>

              <label>
                <input type="radio" name="tamanho" value="80g" />
                <span class="btn">80g</span>
              </label>

              <label>
                <input type="radio" name="tamanho" value="140g" />
                <span class="btn">140g</span>
              </label>
            </form>
          </div>

          <div class="quantidade">
            <h2>Quantity</h2>
            <div class="quantity">
              <button class="btn-quantity" data-action="decrease">-</button>
              <input class="input-quantity" type="number" min="1" value="1" />
              <button class="btn-quantity" data-action="increase">+</button>
            </div>
          </div>
        </div>

        <div class="confirmar-pedido">
          <div class="decide-pedido">
            <button class="btn-pedido cancelar-compra">Cancel</button>
            <button class="btn-pedido confirmar-compra">Ready</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>