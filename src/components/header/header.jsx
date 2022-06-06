import React,{useEffect} from 'react';
import hoverEffect from 'hover-effect';
import './header.styles.scss';
import Button from '../button/button';

import {ReactComponent as ArrowSvg} from '../../assets/icons/link-arrow.svg'

import img1a from '../../assets/images/header-img-1.png';
import img1b from '../../assets/images/header-distort-img-1.png';

import img2a from '../../assets/images/header-img-2.png';
import img2b from '../../assets/images/header-distort-img-2.png';

import img3a from '../../assets/images/header-img-3.png';
import img3b from '../../assets/images/header-distort-img-3.png';

import img4a from '../../assets/images/header-img-4.png';
import img4b from '../../assets/images/header-distort-img-4.png';

import img5a from '../../assets/images/header-img-5.png';
import img5b from '../../assets/images/header-distort-img-6.png';

import distortionImg from '../../assets/images/header-distort-img-5.png'; 


const Header = () => {
  
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(`.header__main--img-container-new`),
      intensity: .3,
      image1: img1a,
      image2: img1b,
      displacementImage: distortionImg,
      // imagesRatio: 380 / 300,
      
    });
  },[])

  useEffect(() => {
    const imgArr = [ [img2a,img2b],[img3a,img3b],[img3a,img3b],[img4a,img4b], [img5a, img5b]];
  


    for(let i = 0; i <  imgArr.length ;i++){
      const item = imgArr[i];

      new hoverEffect({
        parent: document.querySelector(`.header__main--img-container-${i + 1}`),
        intensity: .3,
        image1: item[0],
        image2: item[1],
        displacementImage: distortionImg,
        imagesRatio: 380 / 300,
        
      });

    }

  },[]);


  return (
    <div className='header'>
      <div className="header__contents">

        <h2 className="header__contents--title">
        Discover and collect from the best NFT marketplace.
        </h2>
        <p className="header__contents--text">Create trading guides, follow and trade with smarth money. Seek alpha and ave trading fees built  for millions of defi, gameFi and NFT communities</p>



        <div className='header__contents--btns'>
          <Button text="Twitter" bgColor={'#0088C2'}  iconType={'twitter'}/>
          <Button text="Discord" iconType={'discord'} bgColor={'#242424'} />
        </div>

        <button className='header__link-btn'>
          <span>
          Join our slack community
          </span>
          <ArrowSvg/>
        </button>

      </div>

      <div className="header__main">

        <div className='header__main--img-container header__main--img-container-new'>
        </div>

        <div className= 'header__main--img-container-1 header__main--img-container'>
        </div>
        <div className='header__main--img-container-2 header__main--img-container'>
        </div>
        <div className='header__main--img-container-3 header__main--img-container'>
        </div>
        <div className='header__main--img-container-4 header__main--img-container'>
        </div>
        <div className='header__main--img-container-5 header__main--img-container'>
        </div>


      </div>

    </div>
  )
}

export default Header;