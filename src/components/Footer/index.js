import React from 'react';
import {FooterContainer, FooterWrapper, About, AboutInfos, AboutInfosLi, AboutInfosTitle, ButtonsContainer, AllButtons, MadeByContainer, MadeByInfos} from './FooterElements'
import corebiz from '../../icons/corebiz.png';
import vtex from '../../icons/logovtex.png';
import headphone from '../../icons/icoheadphone.png';
import icoemail from '../../icons/icoemail.png';

function Footer() {
    return (
    <>
    
    <FooterContainer>
        <FooterWrapper>
            <About>
                <AboutInfosTitle>
                    Localização
                </AboutInfosTitle>
                <AboutInfos>
                    <AboutInfosLi>
                        Avenida Andrômeda, 2000. Bloco 6 e 8
                    </AboutInfosLi>
                    <AboutInfosLi>
                         Alphavile SP
                    </AboutInfosLi>
                    <AboutInfosLi>
                        <a href="brasil@corebiz.ag">brasil@corebiz.ag</a>
                    </AboutInfosLi>
                    <AboutInfosLi>
                    <a href="tel:0551130901039">+55 11 3090 1039</a>
                    </AboutInfosLi>
                </AboutInfos>
            </About>
            <ButtonsContainer>
                <AllButtons>
                <img src={icoemail} alt="CorebizLogo"/>
                <span>Entre em contato</span> 
                </AllButtons>
                <AllButtons>
                     <img src={headphone} alt="CorebizLogo"/>
                     <span>Fale com o nosso consultor online</span>
                    </AllButtons>
            </ButtonsContainer>
            <MadeByContainer>
                <MadeByInfos>
                    Created By
                    <img src={corebiz} alt="CorebizLogo"/>
                </MadeByInfos>
                <MadeByInfos>
                    Powered By
                    <img src={vtex} alt="VtexLogo"/>
                </MadeByInfos>
            </MadeByContainer>
        </FooterWrapper>
    </FooterContainer>
    </>
    )
}

export default Footer