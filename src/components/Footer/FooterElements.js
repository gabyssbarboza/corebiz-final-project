import styled from 'styled-components';


export const FooterContainer = styled.section`
    width: 100%;
    height: 100%;
    background: #000;
    color: white; 
    display: flex;
    flex-direction: space-around;
    font-family: 'Nunito', sans-serif;
    margin-top: 4rem;


    @media(min-width: 767px) {
             height: 213px;
        }

`

export const FooterWrapper = styled.main`
    max-width: 1080px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding-top: 25px;

    @media(min-width: 767px) {
            flex-direction: row;
            width: 80%;
            height: 213px;
        }
    
`

export const About = styled.div`
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media(max-width: 991px) {
                padding-top: 27px;
                width: 90%;
            }
`

export const AboutInfos = styled.ul`
        list-style: none;
        margin-bottom: 0;
        padding: 0;
` 

export const AboutInfosTitle = styled.p`
        color: white;
        margin-bottom: 10px;
         font-size: 13px;
         margin: 0;
                font-size: 18px;

                @media(min-width: 767px) {
                    font-size: 20px;
                }

                &::after {
                    content: "";
                    margin: 16px 0;
                    width: 45px;
                    height: 5px;
                    background-color: #fff;
                    display: block;
                }

`

export const AboutInfosLi = styled.li`
        color: white;
        margin-bottom: 10px;
         font-size: 13px;

         a{
             color: #fff;
             text-decoration: none;
         }

` 


export const ButtonsContainer = styled.div`
         display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 30px 0;
            
`

export const AllButtons = styled.button`
                width: 195px;
                height: 38px;
                display: flex;
                border-radius: 5px;
                background-color: #fff;
                border: 0;
                font-weight: 600;
                margin-bottom: 10px;
                text-transform: uppercase;
                line-height: 16.37px;
                font-size: 12px;
                font-family: 'Nunito', sans-serif;
                align-items: center;
                justify-content: space-around;

                span{
                    width: 120px;
                }

` 


export const MadeByContainer = styled.div`
            display: flex;
            width: auto;
            flex-direction: row;
            justify-content: space-around;
            width: 100%;
            padding-bottom: 1rem;

            @media(min-width: 767px) {
                padding-bottom: 0rem;
                display: flex;
                flex-direction: row;
                width: 200px;
            }

`

export const MadeByInfos = styled.span`
                font-size: 10.36px;
                display: flex;
                font-family: 'Nunito', sans-serif !important;
                flex-direction: column;
               

                img{
                    max-width: 73px;
                }

` 
