/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from  'react'
/* import { render } from '@testing-library/react' */
/* import  {NavLink} from 'react-router-dom' */


export class Navbar extends Component{

    render() {
   return (
  
<div>
   {/* Üst tarafta bulunan menü çubuğu ayarları */}
   <header class="header-area wow fadeInDown" data-wow-delay="300ms">
   <div className="sticky-bar" >
<nav className="navbar navbar-expand-md navbar-dark ">
          <div className="dropdown-logo">    
             <a href="/"><img src="white_logo.png" alt="Oyun Önerileri"  width={245} height={30} /> </a>
               <div className="dropdown-content-logo">
                 <img src="main_logo.png" alt="Oyun Önerileri" width={330} height={200} />
                  <center><img src="black_logo.png" alt="Oyun Önerileri" width={240} height={150} /></center>
              </div>
         </div>



 
   
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
      <span className="navbar-toggler-icon" />
    </button>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

     <ul className="navbar-nav ml-auto">
         <li className="nav-item active ">
          <a className="nav-link" className="navbar-brand" href="/">Ana Sayfa &nbsp; &nbsp; </a>
        </li>


        <li className="nav-item active dropdown ">
          <a className="nav-link dropdown-toggle" className="navbar-brand" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">Oyun Kategorileri &nbsp; &nbsp;  </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item " href="/gameCategories#Open_World_Sword_Action">Açık dünya - Kılıç Aksiyon</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="/gameCategories#Open_World_Gun_Action">Açık dünya - Silah Aksiyon</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="/gameCategories#Online_Games">Online</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="/gameCategories#Fps_Gun_Action">Fps - Silah Aksiyon</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="/gameCategories#Hack_and_Slash">Hack and Slash - Saf Aksiyon</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="/gameCategories#Lineer_Action">Lineer - Çizgisel Aksiyon</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="/gameCategories#Lineer_Gun_Action">Lineer - Çizgisel Silah Aksiyon</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="/gameCategories#Episodic_Games">Episodic - Seçim Tabanlı</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="/gameCategories#Indie_Games">Indie - Bağımsız Yapımcı</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="/gameCategories#Horror_Games">Korku-Gerilim</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="/gameCategories#Two_Player_Games">Co-op - İki Oyunculu</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="/gameCategories#Lord_of_the_Rings_Games">The Lord of the Rings Oyunları</a>
          </div>
        </li>
        <li className="nav-item active ">
          <a className="nav-link" className="navbar-brand" href="/metacritic">Metacritic Sıralaması &nbsp; &nbsp;   </a>
        </li>
        <li className="nav-item active ">
          <a className="nav-link" className="navbar-brand" href="/anime">Anime Tavsiyeleri  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </a>
        </li>
  


        
          {/* 
                       Boşluk bırakmamızın sebebi yazıları ekranın ortasına hizalayabilmek.                   
                       mx komutu ortalar barı, ml komutu en sağa yapıştırmayı sağlar                         */}
    
      </ul>
      <div className="navbar-nav ml-auto">

      <a className="navbar-brand" href="/#About_Me">  İletişim</a>
        </div>
    </div>

  
  </nav>
  </div>
  </header>


</div>


       
   )

    }

}

export default Navbar