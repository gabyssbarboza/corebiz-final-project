import React from 'react';
import logoCorebiz from '../../icons/logocorebiz.png';
import user from '../../icons/user.png';
import cart from '../../icons/cart.png';
import {FaBars} from 'react-icons/fa';
import {HeaderContainer, HeaderMain, HeaderLogo, MobileIcon, HeaderSearch, HeaderSearchInput, HeaderLoginCart, HeaderItemLogin, HeaderItemCart, HeaderMainMobile, HeaderMainMobileContainer} from './HeaderElements'


const Header = () => {
    return (
        <>
        <HeaderContainer>
            <HeaderMain>
            <HeaderLogo>       
                <img src={logoCorebiz} alt="LogoCorebiz" />
            </HeaderLogo>
          <HeaderSearch>
                <HeaderSearchInput  placeholder="O que você está buscando?"/>
              </HeaderSearch>  
             <HeaderLoginCart>
             <HeaderItemLogin>
             <img src={user} alt="LogoCorebiz" />
             Minha Conta
             </HeaderItemLogin>
             <HeaderItemCart>
             <img src={cart} alt="LogoCorebiz" />
             </HeaderItemCart>
             </HeaderLoginCart>

             </HeaderMain>

             <HeaderMainMobile>
                 <HeaderMainMobileContainer>
            
                  <FaBars />
               
            <HeaderLogo>       
                <img src={logoCorebiz} alt="LogoCorebiz" />
            </HeaderLogo>
             <HeaderLoginCart>
             <HeaderItemCart>
             <img src={cart} alt="LogoCorebiz" />
             </HeaderItemCart>
             </HeaderLoginCart>
             </HeaderMainMobileContainer>
             <HeaderSearch>
                <HeaderSearchInput  placeholder="O que você está buscando?"/>
              </HeaderSearch>  
             </HeaderMainMobile>

        </HeaderContainer>   
        </>
    )
}

export default Header
