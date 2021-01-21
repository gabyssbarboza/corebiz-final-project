import React, {useState} from 'react';
import {ProductContainer, ProductSale, ProductImg, ProductInfos, ProductPrices, ProductTitle, ProductParcels, ProductWrapper, ProductBuy, TitleProduct} from './ProductsElements';
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

const Products = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            }]
      };


      const ratingStarsStatic = {
        size: 30,
        value: 2,
        edit: false
      };

 const [products, setProducts] = useState([]);
    
  const getProducts = async () => {
    const prods = await fetch(`https://corebiz-test.herokuapp.com/api/v1/products`);
    const body = await prods.json();
    setProducts(body);
    console.log(body)
};
  
    React.useEffect(() => {
      // se o fetch estivesse fora do useEffect, toda vez que o componente
      // fosse atualizado, o mesmo seria executado
      getProducts();
        
    }, []);

    

    return (
        <>
         <TitleProduct >
            Mais Vendidos
        </TitleProduct>  
        <ProductWrapper>
        <Slider {...settings}>
        {products.map(product => (
           
          <ProductContainer>

              <ProductImg src={product.imageUrl} />
              <ProductInfos>
                  <ProductTitle key={product.productId} >
                    {product.productName}
                  </ProductTitle>
                  <ReactStars
                  size= {15}
                  value= {product.stars}
                  edit= {false}
                  activeColor="#F8475F"
                    />
                  <ProductPrices>
                  {product.listPrice &&
                    <ProductSale>
                       de {((product.listPrice / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))}
                    </ProductSale>
                    }
                    <br></br>
                    {((product.price / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))}
                      <br></br>
                      <ProductParcels>
                      ou em 4x de {((product.price / 100) / 4).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                      </ProductParcels>
                    {/* {(product.price).toFixed(4).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} */}
                  </ProductPrices>
                  <ProductBuy>
                      Comprar
                  </ProductBuy>
              </ProductInfos>
        </ProductContainer>
       
      ))}
       </Slider>
      </ProductWrapper>

        

        
        
      
        </>
    )
}

export default Products
