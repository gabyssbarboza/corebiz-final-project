import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagebanner from '../../images/bannerimage.png';
import imagebannermobile from '../../images/bannerimagemobile.png';
import {TitleBanner, SubtitleBanner} from './BannerElements'


const Banner = ({title, subtitle}) => {
    return (
        <Carousel>
            <Carousel.Item>
            {window.innerWidth > 991 &&
         <img
         className="d-block w-100"
         src={imagebanner}
         alt="First"
       />
      }
       {window.innerWidth < 991 &&
         <img
         className="d-block w-100"
         src={imagebannermobile}
         alt="First"
       />
      }
   
    <Carousel.Caption>
      <TitleBanner>{title}</TitleBanner>
      <SubtitleBanner>{subtitle}</SubtitleBanner>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  {window.innerWidth > 991 &&
         <img
         className="d-block w-100"
         src={imagebanner}
         alt="First"
       />
      }
       {window.innerWidth < 991 &&
         <img
         className="d-block w-100"
         src={imagebannermobile}
         alt="First"
       />
      }
    <Carousel.Caption>
    <TitleBanner>{title}</TitleBanner>
      <SubtitleBanner>{subtitle}</SubtitleBanner>
    </Carousel.Caption>
  </Carousel.Item>

  </Carousel>
    
    )
}

export default Banner
