/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ Component } from 'react'

export class Home extends Component {
render(){
return(

<div className="low-screen-settings">

  {/* Sayfa isimleri */}
  
<input type="hidden" id="headerval" value="Oyun Önerileri | Oyun İnceleme ve Öneri Platformu"></input>


  

  <section className="breadcrumb1-area bg-img "  style={{backgroundImage: 'url(img/home/Main_Page_Wallpaper.jpg)'}}>

                    <div>  &nbsp;  </div>
                                    <div>  &nbsp;  </div>
                    <div>  &nbsp;  </div>
                                    <div>  &nbsp;  </div>
                    <div>  &nbsp;  </div>
                                    <div>  &nbsp;  </div>
                    <div>  &nbsp;  </div>
                                    <div>  &nbsp;  </div>
                    <div>  &nbsp;  </div>
                                    <div>  &nbsp;  </div>
                    <div>  &nbsp;  </div>
                                    <div>  &nbsp;  </div>
                   
                   {/* Breadcrumb Text */}
                <div className="text-center">
                     <div className="breadcrumb-text">
                         <h1>Oyun İnceleme ve Öneri Platformu</h1>
                    </div>
               </div>
  </section>

<section className="testimonials text-center bg-light">
   <div className="button-size">        
  <div className="games-area section-padding-100-0">
    <div className="container">
      <div className="row">
        {/* Oyun Kategorileri Logosu */}
        <div className="col-12 col-md-4">
          <div className="single-games-area text-center mb-100 wow fadeInUp" data-wow-delay="100ms">
          <a href="/gameCategories"><img src="img/home/Game_Categories_Logo.png" alt="Oyun Kategorileri Logosu" /></a>
            <a href="/gameCategories"   className="btn egames-btn mt-30">Oyun Kategorileri</a>
          </div>
        </div>
        {/* Metacritic Sıralaması */}
        <div className="col-12 col-md-4">
          <div className="single-games-area text-center mb-100 wow fadeInUp" data-wow-delay="300ms">
          <a href="/metacritic"><img src="img/home/Metacritic_Logo.png" alt="Metacritic Logosu" /></a>
            <a href="/Metacritic"   className="btn egames-btn mt-30">Metacritic Sıralaması</a>
          </div>
        </div>
        {/* Anime Tavsiyeleri */}
        <div className="col-12 col-md-4">
          <div className="single-games-area text-center mb-100 wow fadeInUp" data-wow-delay="500ms">
          <a href="/anime"><img src="img/home/Anime_Logo.png" alt="Anime Tavsiyeleri Logosu" /></a>
            <a href="/Anime"   className="btn egames-btn mt-30">Anime Tavsiyeleri</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  <a name="Recently_Viewed_Games"> </a>
  </section>



       <section className="breadcrumb-area bg-img " style={{backgroundImage: 'url(img/home/Recently_Viewed_Games.jpg)'}}>

                    <div>  &nbsp;  </div>
                                    <div>  &nbsp;  </div>
                    <div>  &nbsp;  </div>
                                    <div>  &nbsp;  </div>

                   {/* Breadcrumb Text */}
                <div className="text-center">
            <div className="breadcrumb-text">
                         <h2>Son İncelenen Oyunlar</h2>
           </div>
               </div>
      </section>

      
    
        
       <section className="testimonials text-center bg-light">
               <div>  &nbsp;  </div>
               <section className="page-section review-page spad">
        <div className="container">
        <div className="row">   
    
      


                {/* Son incelenen oyunlar */}


        <div className="col-md-3">
        <div className="review-item">
          <div className="text-center">
            <div className="review-cover set-bg">
            <div class="zoom">
                         
            <center> <img src="img/categories/Darksiders2.jpg" alt="Darksiders II Deathinitive Edition" /></center>
                                             <div class="item-overlay top"></div>
                                                
           </div>           
           
            
            <div className="score darkblue">72</div>
            </div>
            <div className="review-text">
              <h4>Darksiders II Deathinitive Edition</h4>
            
              <h5 ><a  style={{color: '#33989b'}} href="/Darksiders_Castlevania_Darksiders2_Vikingswolvesofmidgard#Darksiders2" target="_blank" rel="noopener noreferrer">Bu oyun için inceleme ve öneriler sayfasına git.</a></h5>
           
             
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="review-item">
          <div className="text-center">
            <div className="review-cover set-bg">
                        <div class="zoom">
                         
                        <center> <img src="img/categories/Attack_on_Titan2.jpg" alt="Attack on Titan 2" /></center>
                                                          <div class="item-overlay top"></div>
                                                
                        </div>           
           
            
              <div className="score green">78</div>
            </div>
            <div className="review-text">
              <h4>Attack on Titan 2</h4>
            
              <h5 ><a  style={{color: '#33989b'}} href="/Sunsetoverdrive_Justcause3_Aot2#Attack_on_Titan2" target="_blank" rel="noopener noreferrer">Bu oyun için inceleme ve öneriler sayfasına git.</a></h5>
           
             
            </div>
          </div>
        </div>
      </div>

 

      <div className="col-md-3">
        <div className="review-item">
          <div className="text-center">
            <div className="review-cover set-bg">
            <div class="zoom">
                         
            <center> <img src="img/categories/RUINER.jpg" alt="Ruiner" /></center>
                              <div class="item-overlay top"></div>
                                                
           </div>           
           
            
            <div className="score pink">75</div>
            </div>
            <div className="review-text">
              <h4>Ruiner</h4>
            
              <h5 ><a  style={{color: '#33989b'}} href="/Hotlinemiami_Ruiner_Mrshifty#Ruiner" target="_blank" rel="noopener noreferrer">Bu oyun için inceleme ve öneriler sayfasına git.</a></h5>
           
             
            </div>
          </div>
        </div>
      </div>

 

      <div className="col-md-3">
        <div className="review-item">
          <div className="text-center">
            <div className="review-cover set-bg">
            <div class="zoom">
                         
            <center> <img src="img/categories/Metro_2033.jpg" alt="Metro 2033 Redux" /></center>
                                       <div class="item-overlay top"></div>
                                                
           </div>           
           
            
            <div className="score red">90</div>
            </div>
            <div className="review-text">
              <h4>Metro 2033 Redux</h4>
            
              <h5 ><a  style={{color: '#33989b'}} href="/Halflife2_Metro2033_Metrolastlight#Metro_2033" target="_blank" rel="noopener noreferrer">Bu oyun için inceleme ve öneriler sayfasına git.</a></h5>
           
             
            </div>
          </div>
        </div>
      </div>
        

        </div>
        </div>
        </section>
        </section>



                                    {/*  Ayın Oyunu */}
                                  <a name="Metro_2033_Redux"> </a>
                                                          {/*  Ayın Oyunu Resim */}

                         <section className="breadcrumb-area bg-img " style={{backgroundImage: 'url(img/home/Game_of_the_Month.jpg)'}}>

                                              <div>  &nbsp;  </div>
                                                              <div>  &nbsp;  </div>
                                              <div>  &nbsp;  </div>
                                                              <div>  &nbsp;  </div>

                         {/*  Oyun adı büyük başlık */}
                      

                        </section>


            {/* Arka plana mavi kaplama */}
<section className="testimonials  bg-light">

                   {/* Blok resimler ve büyük resim  */}
  <section className="single-game-review-area section-padding-100">
    <div className="container">
    <div className="row">
        <div className="col-12">
          <div className="single-game-img-slides">
            <div id="gameSlides" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="img/home/Metro_2033_1.jpg" alt="Metro 2033 Redux" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="img/home/Metro_2033_2.jpg" alt="Metro 2033 Redux" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="img/home/Metro_2033_3.jpg" alt="Metro 2033 Redux" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="img/home/Metro_2033_4.jpg" alt="Metro 2033 Redux" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="img/home/Metro_2033_5.jpg" alt="Metro 2033 Redux" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="img/home/Metro_2033_6.jpg" alt="Metro 2033 Redux" />
                </div>
              
               
              </div>
              <ol className="carousel-indicators">
                <li data-target="#gameSlides" data-slide-to={0} className="active" style={{backgroundImage: 'url(img/home/Metro_2033_1.jpg)'}} />
                <li data-target="#gameSlides" data-slide-to={1} style={{backgroundImage: 'url(img/home/Metro_2033_2.jpg)'}} />
                <li data-target="#gameSlides" data-slide-to={2} style={{backgroundImage: 'url(img/home/Metro_2033_3.jpg)'}} />
                <li data-target="#gameSlides" data-slide-to={3} style={{backgroundImage: 'url(img/home/Metro_2033_4.jpg)'}} />
                <li data-target="#gameSlides" data-slide-to={4} style={{backgroundImage: 'url(img/home/Metro_2033_5.jpg)'}} />
                <li data-target="#gameSlides" data-slide-to={5} style={{backgroundImage: 'url(img/home/Metro_2033_6.jpg)'}} />
               
              </ol>
            </div>
          </div>
        </div>
      </div>

                        <div>  &nbsp;  </div>

                 {/* Oyun Adı ve İnceleme Puanları */}
    <div className="row align-items-center">
   
                   <div className="col-md-3">
                     <div className="review-item">
                        <div className="text-center">  


                           <div className="review-cover set-bg">
                           <div class="zoom">
                         
                         <center> <img src="img/categories/Metro_2033.jpg" alt="Metro 2033 Redux" /></center>
                                                      <div class="item-overlay top"></div>                                                            
                        </div>  
                                      <div className="score red">90</div>
                          </div>

                          <div className="review-text">
                             <h4>Metro 2033 Redux</h4>
                          </div>
                                           <center><p><strong>Metacritic Puanı: 90</strong></p></center>
                                           <center><p><strong>Steam İnceleme Puanı: %84 Olumlu</strong></p></center>


                       </div>
                    </div>
                  </div>
       
               {/* Oyun inceleme Alanı */}
  <div className="col-12 col-md-6">
    <div className="single-game-review-area style-2 mt-70">
      <div className="game-content">
        <center className="game-title">Metro 2033 Redux</center>
        
                       <center><p><strong>Çıkış Tarihi: 26 Ağustos 2014</strong></p></center>
        
      
                       <p> <strong>  &nbsp; &nbsp;Metro serisi hem hikayesiyle hem atmosferi ile oldukça başarılı bir seridir.
          Oyunun büyük bir kısmı metrolarda geçmektedir. Bu evrende sizi mutasyona uğramış yaratıklar,
          gizemli varlıklar ve metrolardaki acımasız insan grupları bekliyor olacaktır.
          Bu yapımı benim gözümde cazip kılan etkili atmosferidir. O evrendeki çaresizliği
          oyunculara sonuna kadar hissettirebilen bir yapımdır. Metro 2033, etrafta bulunan herkese şarjör boşaltarak ilerleyebileceğiniz
          bir oyun değildir. Yeri geldiği zaman hiç çatışmaya bile girmeden sıvışabilmeniz gerekmektedir.
          Post-apokaliptik bir evrende bir merminin bile büyük değeri vardır. Bu yüzden mühimmatlarınızı idareli 
          kullanmazsanız yaratıklarla hoş olmayacak bir şekilde göz göze gelebilirsiniz.
          Hikayesi kesinlikle ortalama bir hikayeden fazlasını oyunculara sunmaktadır. Yapacağınız seçimlerin oyunun 
          sonuna etki ettiğini söylemem gerekir. Oyunun içerisinde korku oyunlarına taş çıkarır
          cinsten gerilim sahneleri yaşayacağınızın garantisini verebilirim.
          Steam logosuna tıklayarak bu oyuna ulaşabilir, dilerseniz aşağıda bulunan oyun ile ilgili Youtube videolarına da göz atabilirsiniz.
          </strong></p>
  
                                                 

        {/* Steam sayfası yönlendirme butonu */}
    
              <div className="text-center">       
                <div className="download-rating-area">
                    <div className="download-area">
  <a href="https://store.steampowered.com/app/286690/Metro_2033_Redux/"  target="_blank" rel="noopener noreferrer nofollow" ><img src="img/core-img/steamlogo.png"  alt="" /></a>  
                   </div>
               </div>
             </div>

                                   <div>  &nbsp;  </div>
                        <div>  &nbsp;  </div>
                                  <div>  &nbsp;  </div>
                      <div>  &nbsp;  </div>
                               
       
      </div>
    </div>
  </div>
  {/* İnceleme alanı */}
    <div className="col-xl-3 col-lg-4 col-md-5 sidebar game-page-sideber">
     <div id="stickySidebar">
             <div classname="widget-item">
                <div classname="rating-widget">
                <div>  &nbsp;  </div>
                                     <div>  &nbsp;  </div>
              
                                    
                        <h4 style={{color: '#33989b'}}> &nbsp; Oyun Süresi</h4>
                        <div>  &nbsp;  </div>
                             <ul>
                                   <h5> &nbsp;  Ana Hikaye: 9 Saat</h5>
                                   <h5> &nbsp;  Ek İçerikler: 3 Saat</h5>  
                                   <h5> &nbsp;  Toplanabilirler: 11 Saat</h5>
                                   <h5> &nbsp;  Toplam Süre: 23 Saat</h5>
                             </ul>
                                       <div>  &nbsp;  </div>

                        <h4 style={{color: '#33989b'}}> &nbsp; Yazarın Puanı</h4>
                                        <div>  &nbsp;  </div>
                              <ul>
                                   <h5> &nbsp;  Hikaye - 9/10</h5>
                                   <h5> &nbsp;  Grafikler - 9/10</h5>
                                   <h5> &nbsp;  Oynanış - 8/10</h5>
                                   <h5> &nbsp;  Atmosfer - 10/10</h5>
   
   
                              </ul>
                                       <div>  &nbsp;  </div>
                                       
      {/* Sonuç kararını daire içine puan alma komutu */}                                  
  <div className="text-center">
      <div className="row">
         <div classname="rating">
           <div className="row">

               <div className="size"> <h3 style={{color: '#ad0000'}}>  &nbsp; &nbsp;  Sonuç</h3> </div>

                   <div class="sidebar-option">
                     <div class="best-of-post">
                       <div className="bp-item">
                         <div className="bp-loader">
                           <div className="loader-circle-wrap">
                              <div className="loader-circle">
                                 <div className="review-point"> 9</div>
                             </div>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>

           </div>
       </div>
     </div>
 </div>
                </div>
            </div>
    </div>
   </div>
</div>

    </div>
  </section>
  


  <div className="egames-video-area section-padding-10 bg-pattern2">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="egames-nav-btn">
            <div className="nav flex-column" id="video-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="video1" data-toggle="pill" href="#video-1" role="tab" aria-controls="video-1" aria-selected="true">
                {/* Video önizleme */}
                <div className="single-video-widget d-flex wow fadeInUp" data-wow-delay="100ms">
                  <div className="video-thumbnail">
                    <img src="img/home/Metro_2033_2.jpg" alt="" />
                  </div>
                  <div className="video-text">
                    <p className="video-title mb-0">Metro Redux - Launch Trailer </p>
                    <span>Pc, PS4, XBox One</span>
                  </div>
                  <div className="video-rating"> 2dk22sn </div>
                </div>
              </a>
              <a className="nav-link" id="video2" data-toggle="pill" href="#video-2" role="tab" aria-controls="video-2" aria-selected="false">
                {/* Video önizleme */}
                <div className="single-video-widget d-flex wow fadeInUp" data-wow-delay="200ms">
                  <div className="video-thumbnail">
                    <img src="img/home/Metro_2033_5.jpg" alt="" />
                  </div>
                  <div className="video-text">
                    <p className="video-title mb-0">Metro Redux Gameplay Trailer   </p>
                    <span>Pc, PS4, XBox One</span>
                  </div>
                  <div className="video-rating">5dk56sn</div>
                </div>
              </a>
              <a className="nav-link" id="video3" data-toggle="pill" href="#video-3" role="tab" aria-controls="video-3" aria-selected="false">
                {/* Video önizleme */}
                <div className="single-video-widget d-flex wow fadeInUp" data-wow-delay="300ms">
                  <div className="video-thumbnail">
                    <img src="img/home/Metro_2033_1.jpg" alt="" />
                  </div>
                  <div className="video-text">
                    <p className="video-title mb-0">Metro 2033 Redux - 15 Minutes of Gameplay</p>
                    <span>Pc, PS4, XBox One</span>
                  </div>
                  <div className="video-rating">15dk29s</div>
                </div>
              </a>
         
           
            </div>
          </div>
        </div>
         {/*Buton video uzantı */}
        <div className="col-12 col-md-6 col-lg-8">
          <div className="tab-content" id="video-tabContent">

            <div className="tab-pane fade show active" id="video-1" role="tabpanel" aria-labelledby="video1">
            <div class="video-container">
              <iframe className="youtube"  src="https://www.youtube.com/embed/rUOCBCTRNl0" allowfullscreen="true" class="youtube-video"> </iframe>
            </div>
            </div>

            <div className="tab-pane fade " id="video-2" role="tabpanel" aria-labelledby="video2">
            <div class="video-container">
              <iframe className="youtube"  src="https://www.youtube.com/embed/w1YdnuQYWJ0" allowfullscreen="true" class="youtube-video"> </iframe>
            </div>
            </div>

            <div className="tab-pane fade" id="video-3" role="tabpanel" aria-labelledby="video3">
            <div class="video-container">
              <iframe className="youtube"  src="https://www.youtube.com/embed/SAp8zKQk1h8" allowfullscreen="true" class="youtube-video"> </iframe>
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
                          <div>  &nbsp;  </div>  {/*  1.oyun videolar ile başlık arası boşluk*/}
  </div>
  <a name="About_Me"> </a>
  </section>


 
 <section className="section-padding-100-0 bg-img bg-pattern bg-fixed" style={{backgroundImage: 'url(img/home/code1.jpg)'}}>
 
  <div className="container">
    <div className="row">
      {/* Hakkımda Kısmı Arkaplanı */}
      <div className="col-12 col-lg-5">
        <div className="article-thumbnail mb-100">

        <div>  &nbsp;  </div> 
                        <div>  &nbsp;  </div> 
        <div>  &nbsp;  </div> 
                        <div>  &nbsp;  </div> 

            {/* İletişim Bilgileri */}

          <img src="img/home/Furkan_Salmanli.png" alt="" />

          <div>  &nbsp;  </div> 

                  
          <div className="col-12 col-lg-8">
  <div className="contact-content mb-100">
  
    <div className="single-contact-info d-flex align-items-center">
      <div className="title">
        <p>E-mail</p>
      </div>
      <p  style={{color: '#fff'}} >salmanli.furkan@gmail.com</p>

    </div>
    <div>  &nbsp;  </div> 
  
    <div className="row">
     
            <div>  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp;  </div> 
            
                   
  <a href="https://steamcommunity.com/profiles/76561198118128376/"  target="_blank" rel="noopener noreferrer nofollow" ><img src="img/home/Steam_Logo.png"  alt="" /></a>  
                   

             <div>  &nbsp;  &nbsp;  </div> 
            
  <a href="https://www.instagram.com/furkansalmanli/"  target="_blank" rel="noopener noreferrer nofollow" ><img src="img/home/Instagram_Logo.png"  alt="" /></a>  
            

             <div>  &nbsp;   &nbsp; </div> 
          

  <a href="https://twitter.com/furkansalmanli"  target="_blank" rel="noopener noreferrer nofollow" ><img src="img/home/Twitter_Logo.png"  alt="" /></a>  
           

             <div>  &nbsp;  &nbsp; </div> 
                
            
  <a href="https://www.facebook.com/profile.php?id=100015651365065"  target="_blank" rel="noopener noreferrer nofollow" ><img src="img/home/Facebook_Logo.png"  alt="" /></a>  
        
  </div>
         

  </div>
</div>



        </div>
      </div>
    
      {/* Hakkımda Kısmı */}
      <div className="col-12 col-lg-6">
        <div className="article-content mb-100">
          <p className="post-title">Hakkımda</p> 

          
         
          <h5 style={{color: '#fff'}}>Merhaba, ben Furkan SALMANLI. Kütahya Dumlupınar Üniversitesi
          Bilgisayar Mühendisliği bölümünden yeni mezun oldum. Herkes gibi ben de küçük yaşlarımdan itibaren 
          bilgisayar oyunlarıyla büyüdüm. Oyunların kaliteli hikayeleri ve etkileyici atmosferleri,
          yıllar geçmesine rağmen bu evrenlere olan ilgimi her zaman taze tutmamı sağladı.
          Sizlere 200 küsur oynadığım oyun arasından benim ilgimi çekebilmiş, 
          denenmesi gerektiğini düşündüğüm yapımları dilim döndüğünce aktarmaya çalışacağım.
          Kendim de dahil olmak üzere insanların çoğu uzun yazılar okumadan, istedikleri bilgilere kısa ve öz bir şekilde ulaşmak ister.
          Bu durumdan yola çıkarak, kendi web sitemde bulunan incelemelerimi oldukça kısa tutmaya ve gerekli bilgileri sizlere aktarmaya çalıştım.
          Bu web siteyi oluşturma amacım; oynanış ve oyun türü açısından birbirine benzer oyunları
          sizlere aktarabilmektir. Bunlara ek olarak; web sayfamda anime tavsiyelerime ve oynadığım oyunların
          Metacritic sıralamasına göz atabilirsiniz.</h5>
         


        </div>
      </div>
    </div>
  </div>
</section>
  
</div>









)

}

}
export default Home
