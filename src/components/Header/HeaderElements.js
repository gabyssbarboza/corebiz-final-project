import styled from 'styled-components';
import searchicon from '../../images/searchinput.png';

export const HeaderContainer = styled.nav`
        width: 100%;
        height: 80px;
        /* max-width: 1366px; */
        display: flex;
    align-items: center;
    justify-content: space-around;
        background-color: #fff;

`

export const HeaderMain = styled.main`
        width: 80%;
        display: flex;
    align-items: center;
    justify-content: space-evenly;
        background-color: #fff;
        @media screen and (max-width: 991px){
           display: none;
    }


`

export const HeaderMainMobile = styled.main`
        display: none;
        @media screen and (max-width: 991px){
            width: 100%;
        display: flex;
    align-items: center;
    justify-content: space-evenly;
        background-color: #fff;
        display: flex;
        flex-direction: column;
    }

`

export const HeaderMainMobileContainer = styled.main`
        display: none;
        @media screen and (max-width: 991px){
           flex-direction: row;
        display: flex;
    align-items: center;
    /* justify-content: space-evenly; */
        background-color: #fff;
        width:90%;
        
    justify-content: space-between;

       
    }

`


export const HeaderLogo = styled.div`
        width: 15%;
        @media screen and (max-width: 991px){
            width: unset;

            img{
                width: 102px;

            }
           
        
    }

`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        /* position: absolute; */
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        color: #000;
        cursor: pointer;
    }
`

export const HeaderSearch = styled.div`
        width: 50%;
    
        @media screen and (max-width: 991px){
            width: 90%;
            margin-top: 15px;
    }
`

export const HeaderSearchInput = styled.input `
    border: 1px solid red;
    width: 100%;
    height: 55px;
    border: 0;
    background-image: url(${searchicon});
    background-repeat: no-repeat;
    background-position: right;
    border-bottom: 1px solid #7A7A7A;
 
    @media screen and (max-width: 991px){
        height: 25px;
    }

`

export const HeaderLoginCart = styled.div`
    font-size: 13px;
    font-weight: 400px;
    color: #7A7A7A;
    width: 140px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 991px){
            width: unset;

           
           
        
    }

`

export const HeaderItemLogin = styled.span`
    color: #7a7a7a;
    display: block;
    cursor: pointer;

@media screen and (max-width: 768px){
    display: none;
}
    
    img{
        margin-right: 5px;
    }

`

export const HeaderItemCart = styled.span`
    color: #7a7a7a;
    cursor: pointer;

    img{
        margin-right: 5px;
    }

    &:after{
        content: "2";
        width: 14px;
        height: 14px;
        background: #F8475F;
         display: inline-flex;
         align-items: center;
         justify-content: center;
         color: #fff;
        border-radius: 50%;

    }

`