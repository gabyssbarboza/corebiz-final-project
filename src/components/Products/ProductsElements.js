import styled from 'styled-components';

export const TitleProduct = styled.section `
     font-family: 'Nunito';
font-size: 20px;
font-style: normal;
font-weight: 900;
line-height: 27px;
letter-spacing: 0em;
max-width: 1080px;
    margin: 0 auto;
text-align: left;
margin-top: 1.5625rem;

@media(max-width: 991px) {
          
            width: 80%;
    
        }

            &::after {
                    content: "";
                    margin: 16px 0;
                    width: 45px;
                    height: 5px;
                    background-color: #C0C0C0;
                    display: block;
                }

`



export const ProductWrapper = styled.section `
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       max-width: 1080px;
    margin: 0 auto;
    @media(max-width: 991px) {
          
          width: 80%;
  
      }
`





export const ProductContainer = styled.div `
        padding-bottom:1rem;
        width: 216px;
        background: #fff;
        border-radius: 0px;
        display: flex;
        flex-direction: column;
        font-family: 'Nunito';
        transition: 0.2s all ease-in-out;
        align-items: center;

        @media(min-width: 991px) {
            padding-bottom:1rem;
            
  
      }

       
`

export const ProductImg = styled.img `
        max-width: 100%;
        margin: 0 auto;
      
`


export const ProductInfos = styled.div `
       /* background: #E6E8EA; */
       display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.2s all ease-in-out;
    &:hover{
            background-color: #E6E8EA;
            transition: 0.2s all ease-in-out;
        }
`

export const ProductSale = styled.span `
       font-family: 'Nunito';
       text-decoration: line-through;
       font-style: normal;
       font-weight: 400;
       color: #7A7A7A;
       line-height: 16px;
       letter-spacing: 0em;
       text-align: center;
       font-size: 12px;


`

export const ProductBuy = styled.button `
      height: 32px;
      width: 125px;
      font-family: 'Nunito';
      border-radius: 5px;
      margin: 0 auto;
      border: 0;
      background: #000;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;
      opacity: 0;
      margin-bottom: 14px;
      transition: 0.2s all ease-in-out;
      @media(max-width: 991px) {
          opacity: 1;
  
      }
      
      ${ProductInfos}:hover & {
        opacity: 1;
        transition: 0.2s all ease-in-out;
  }
`

export const ProductTitle = styled.p `
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 16px;
letter-spacing: 0em;
color:  #7A7A7A;
text-align: center;
/* min-height: 32px; */
font-family: 'Nunito';
margin-top: 1rem;
display: flex;
align-items: baseline;
justify-content: center;
overflow: unset;

`

export const ProductPrices = styled.p `
     font-family: 'Nunito';
     font-size: 18px;
     font-style: normal;
     font-weight: 700;
     line-height: 25px;
     letter-spacing: 0em;
     color: black;
     margin-bottom: 8px;
     text-align: center;

`

export const ProductStars = styled.span `
     font-family: 'Nunito';
     font-size: 18px;
     font-style: normal;
     text-align: center;

`

export const ProductParcels = styled.span `
      font-family: 'Nunito';
      font-size: 11px;
      font-style: normal;
      line-height: 15px;
      letter-spacing: 0em;
      text-align: center;
      color: #7a7a7a;      
      font-weight: 400;

`