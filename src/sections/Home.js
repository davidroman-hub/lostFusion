import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';
import serpiente from './serpiente.mp3'
import Logo from '../images/Logo.png'
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import {audioList1} from './audioList'

import NavBar from './NavBar'
//Music Reproductor functions
//https://github.com/lijinke666/react-music-player/blob/master/example/example.js

const Home = () => {
 

const options = { 
  audioLists: audioList1,
  remove: false,
  showDownload: false,
}



return (
  <Fragment>
{/* <NavBar/> */}
  {/* HEADER */}
 
<header className="header-content "  id="header-content">
     
 
            {/* <div className="figure text-center"/>     */}
       
            <br/>
            <img className='Logo2' 
             height="200px"
             width="400px"
           // style={{maxHeight:''}} 
            src={Logo}
            alt='Header Logo'
         />
         
   
</header>

     {/* ABOUT */}

 <div>
   
           <div className="desc container text-center">
          <br/>
          <br/>
          <br/>
                    <span className='animation'>Lost Fusión</span> es un proyecto musical independiente que surge de la <span className='animation'>CDMX</span>, han logrado mezclar y conectar bastos panoramas musicales dando como resultado el sonido propio y fresco que los 
                       caracteriza con su estilo único <span className="animation">"Urban Latin Beat".</span>
                      <br/>
                      <br/> 
                       La amplia gama de sonidos que surgen de sus instrumentos han electrizado desde CDMX, Mazunte, Jalisco, Toluca, Puerto Vallarta, Edo. De México, hasta Michoacán, Puebla, Veracruz y próximamente 
                       Sudamérica y Europa; con orgullo siempre poniendo en alto el nombre de México. 
                      <br/>
                      <br/> 
                       Precursores del <span className='animation'>sonido ecléctico</span> que los caracteriza, han logrado conectar con un público extenso gracias a los géneros y ambientes que aborda su música, desde el Rock, Funk, Reggae, 
                       Disco, Hip Hop, hasta un sonido más urbano y latino, dando como resultado una experiencia musical variada para todos los gustos y frescura que incita a bailar a todo aquel que los escucha. 
                       <br/>
                       <br/> 
                       <span className='animation' style={{fontSize:'30px'}}>Lost Fusión</span> <span style={{fontSize:'30px'}} >es:</span>
                       <br/>
                       <br/> 
                         • MAYRA GARCÍA - Voz y Teclado 
                         <br/>
                         • <span>INDIRA VALDELAMAR </span>- Voz y Guitarra 
                         <br/>
                         • MIGUEL OVIEDO - Voz y Percusión 
                         <br/>
                         • ALBERTO PERALTA - Bajo 
                         <br/>
                         • MARCO FIGUEROA - Batería 
                         <br/>
                         <br/>
                         <span className='grey1'>Los cinco músicos indican cuando comienza la fusión</span> 
                         <ReactJkMusicPlayer {...options} />
                   </div>

                   <div className='band-1 text-center'>
         <img className='img img-fluid'
          style={{maxHeight:''}} 
          src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590638872/lost%20Fusion/foto2-removebg-preview_yaqcwb.png'
          alt='band-1'
          />
          </div>
</div> 

  {/* PRENSA SECTION */}

  <div className="prensa">
     <div className='prensa1'>
       <img className='img img-fluid'
        style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630752/lost%20Fusion/02_er5hap.png'
        alt='prensa1'
       />
     </div>
     <div className="prensa2">
      <h2 className="titles-desc">
       PRENSA
      </h2>
     </div>
     <div className='prensa1'>
       <img className='img img-fluid'
         style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630749/lost%20Fusion/03_j4jzke.png'
         alt='prensa2'
        />
      </div>
     </div>
     <div className="desc container text-center">
          <br/>
          <br/>
          <br/> 
                      “Estos jovenes vienen directo desde Xochimilco para presentar su música con amor y locura,
                       se vale cantar, bailar y sobre todo disfrutar esta mezcla exquisita de ritmos. Comparten canciones de libertad y nos reunimos en este camino del guerrero."
                       <br/> 
                       <span className='animation'style={{fontSize:'20px'}}>Montserrat Muñoz, Radio UNAM 96.1FM </span>
                      <br/>
                      <br/> 
                      “Son jóvenes con un camino extenso por delante, son entregados y transmiten toda su energía a través de sus canciones llenas de sentimientos y texturas." 
                      <br/>
                      <span className='animation'style={{fontSize:'20px'}}> Ricardo Raphael, Canal ONCE</span> 

                      <br/>
                      <br/> 
                      "La dualidad entre sus sonidos electrónicos y acústicos crean una atmosfera ideal para percibir su música llena de tintes y emociones.
                       Verlos en vivo es la mejor forma de disfrutarlos por toda la buena energía que te transmiten." 
                       <br/>
                       <span className='animation'style={{fontSize:'20px'}}>Sofía Navarro, UAM Radio 94.1FM </span>
                       <br/>
                       <br/>  
                       
                   </div>

    {/* PREMIOS */}
    <div>
    <div className='titles-descP text-center'> PREMIOS </div>
    </div>

    <div className="prensa">
     <div className='prensa1'>
       <img className='img img-fluid'
        style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630746/lost%20Fusion/04_panhsd.png'
        alt='prensa1'
       />
     </div>
     <div className="premios2">
      {/* <h2 className="titles-descP">
       PREMIOS
      </h2> */}
       <img className='img img-fluid'
        style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630743/lost%20Fusion/05_cbcwj6.png'
        alt='prensa1'
       />
     </div>
     <div className='prensa1'>
       <img className='img img-fluid'
         style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630740/lost%20Fusion/06_zzodq6.png'
         alt='prensa2'
        />
      </div>
     </div>

    <div className='spacer'>
      
      </div>
    
     <div className="desc container text-center">
          <br/>
          <br/>
          <br/> 
          <i class="fas fa-trophy" style={{color:'#ceb916'}}/> Ganadores del concurso  <span className='animation'>“Coyote Sounds”</span> de los “Músicos de José” (2018) 
          <br/>
          <br/>
          <i class="fas fa-trophy" style={{color:'#ceb916'}}/> Ganadores en los Premios ETV" de <span className='animation'>“EvoluciónTV” </span> en la categoría “Fusión" (2018) 
          <br/>
          <br/>
          <i class="fas fa-trophy" style={{color:'#ceb916'}}/> Ganadores del concurso  <span className='animation'>"La Música Nos Une”</span> de la delegación Tlalpan (2017) 
          <br/>
          <br/>
          <i class="fas fa-trophy" style={{color:'#ceb916'}}/> Ganadores del concurso  <span className='animation'>"El Sur Hace Ruido"</span>  de la delegación Xochimilco (2017)
          <br/>        
          <br/>                   
      </div>

     
      <div className="prensa">
     <div className='prensa1'>
       <img className='img img-fluid'
        style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630770/lost%20Fusion/10_qj9asb.png'
        alt='prensa1'
       />
     </div>
     <div className="premios2">
      {/* <h2 className="titles-descP">
       PREMIOS
      </h2> */}
      <div className='titles-descH text-center'> HIGHLIGHTS </div>
    
     </div>
     <div className='prensa1'>
       <img className='img img-fluid'
         style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630776/lost%20Fusion/08_nwadem.png'
         alt='prensa2'
        />
      </div>
     </div>

     <div className="desc container text-center">
          <br/>
          <br/>
          <br/> 
                      Festival Multicultural de Globos de Cantoya tocando frente a más de 
                      <span className='animation-l'> 5,000 personas</span>, Edo. de Méx. (2015)                        
                      <br/>
                      <br/> 
                      Presentación del disco "Del Tingo Al Tango" en Sala Julián Carrillo para <span className='animation-l'>Radio UNAM</span> , con mas de 300 copias vendidas el mismo dia. (2018) 
                      <br/>
                      <br/> 
                      Teloneros en el “Coyote Sounds Party" de los <span className='animation-l'>“Músicos de José" </span> en el 
                      Salón Los Ángeles, CDMX. (2018) 
                       <br/>
                       <br/>  
                       Presentación en televisión nacional para <span className='animation-l'>Canal ONCE</span> durante el programa “Calle 11 
                       con Ricardo Raphael" (2019) 
                       <br/>
                       <br/>
                       Presentación en el Festival Internacional de Jazz de Mazunte presentandose junto con Los Músicos 
                       de José, La Ronda Bogotá y <span className='animation-l'>Rubén Albarran de Café Tacvba. </span> Muzunte, Oaxaca. (2019) 
                       <br/>
                       <br/>
                       • Presentación en la FILIJ 39 dentro del CENART, compartiendo escenario con <span className='animation-l'>Caloncho.</span> 
                      CDMX (2019) 
                      <br/>
                      <br/>
                      • Reconocimiento por el Festival Artes y Raíces en las ediciones 2016, 2017 y 2019. 
                      Compartiendo escenario con <span className='animation-l'>Chino de Los Victorios y Flor Amargo. </span> Edo. de Méx. 
                      <br/>
                      <br/>
                      • Festival Skite donde igualmente tuvo lugar las presentaciones de <span className='animation-l'> La Tremenda korte, Lengualerta, </span> Yucatán A Gogo y Heavy Nopal. CDMX (2019) 
                      <br/>
                      <br/>
                      • Teloneros de <span className='animation-l'>Tex Tex</span> en evento privado. (2018) 
                      <br/>
                      <br/>
                      • Teloneros del grupo costaricense <span className='animation-l'> Fuerza Dread </span> en el Festival Internacional Barranca del Cupatitzio. Uruapan, Michoacán. (2018) 
                      <br/>
                      <br/>
                      • Presentación en el Festival Internacional Cinco de Mayo, compartiendo cártel con <span className='animation-l'>Los Amigos Invisibles y Jarabe de Palo. </span> Puebla (2018) 
                      <br/>
                      <br/>
                     
                   </div>


{/* <div className="services" id='skills'>
        <br/>
        <h4 className='text-center mb-4'>FRAMEWORKS AND PLATFORMS SKILLS</h4> 
         */}
        {/* <div className='figure2'/>
        <div className="Hobbies-icon">
            <p className='H-icons'>
              <i className="frame fab fa-react"></i>
                <h5 className="text-center">React</h5>
            </p>
            <p className='H-icons'>
              <i className="frame fab fa-node-js"></i>
              <h5 className="text-center">Node JS</h5>
            </p>
           
            <p className='H-icons'>
              <i className="frame fab fa-digital-ocean ml-4"></i>
              <h5 className="text-center">Digital Ocean</h5>
            </p>
            <p className='H-icons '>
              <i className="frame fab fa-aws"></i>
              <h5 className="text-center">Amazon Web S.</h5>
            </p> 
            <p className='H-icons'>
              <i className="frame fab fa-sass"></i>
              <h5 className="text-center">Sass</h5>
            </p>
            <br/>
        
        </div> */}
{/* </div>  */}


{/* PORTFOLIO */}


{/* <div className="portfolio" id='projects'>
<hr/>
<h4 className="text-center">PROJECTS</h4> 
<div className='figure2'/>
<div className="Hobbies-icon">       
<div className='container-card'>
   <div className="card">
      <img src='' alt='/'/>
              <h6 className="mb-1 mt-2">Restaurant Mar y sol</h6>
              <div className="figure2"/>
               <p className="description-t mb-2">E-commerce MERN App, using Bootstrap 4, React JS , MongoDB, Express , Node JS, Sass , Google auth & Sendgrid service. Hosting on Digital Ocean.</p>
                <a href="http://134.122.119.185/" target='_blank' rel='noopener noreferrer' >Read more</a>
    </div>
</div>

<div className='container-card'>
   <div className="card">
      <img src='' alt='/' />
      <h6 className="mb-1 mt-2">Roger & Paq</h6>
              <div className="figure2"/>
              <p className="description-t mb-2">E-commerce MERN App, using Bootstrap 4, React JS , MongoDB, Express , Node JS, Sass & BRAINTREE service. Hosting on Digital Ocean.</p>
                <a href="http://68.183.135.73/shop" target='_blank' rel='noopener noreferrer'>Read more</a>
    </div>
</div>

<div className='container-card'>
   <div className="card">
      <img src='' alt='/' />
      <h6 className="mb-1 mt-2">Ultimate Auth</h6>
              <div className="figure2"/>
              <p className="description-t mb-1">MERN-application for login , with account activation using sendgrid, google, facebook,Bootstrap 4, React JS , MongoDB, Express , Node JS & Sass. </p>
                <a href="http://206.189.227.84/" target='_blank' rel='noopener noreferrer'>Read more</a>
    </div>
</div>
<div className='container-card'>
   <div className="card">
      <img src='' alt='/' />
      <h6 className="mb-1 mt-2">Simple E-commerce</h6>
              <div className="figure2"/>
              <p className="description-t mb-1">E-commerce MERN App, using Bootstrap 4, React JS , MongoDB, Express , Node JS, Sass & BRAINTREE service. </p>
                <a href="https://github.com/davidroman-hub/ecommerce-front" target='_blank' rel='noopener noreferrer'>Read more</a>
    </div>
</div>
<div className='container-card'>
   <div className="card">
      <img src='' alt='/' />
      <h6 className="mb-1 mt-2">My Personal page</h6>
              <div className="figure2"/>
              <p className="description-t mb-5">A React JS App using Bootstrap 4, Sass, Netlify and Node Js  </p>
                <a href="https://github.com/davidroman-hub/Real-portafolio" target='_blank' rel='noopener noreferrer'>Read more</a>
    </div>
</div>

<div className='container-card'>
   <div className="card">
      <img src='' alt='/' />
      <h6 className="mb-1 mt-2">Contemporary Artist Blog</h6>
              <div className="figure2"/>
              <p className="description-t mb-5">A React JS App using Sass & Netlify</p>
                <a href="https://romantic-sammet-63ec69.netlify.app/" target='_blank' rel='noopener noreferrer'>Read more</a>
    </div>
</div>
</div>
</div>         */}

    {/* RESUME */}


  {/* Contact */}



</Fragment>
)




  // return (
  //   <Fragment>
  //   <header className='header-content'>
  //     <div className='header-photo'>
  //       {/* <img className='img img-fluid'
  //        style={{maxHeight:''}} 
  //        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630526/lost%20Fusion/01_kijq3s.png' alt="Logo-principal"/> */}
  //     </div>
  //     </header>

  //     <main>
  //     <div className='header-logo'>
  //       <img className=''
  //        style={{maxHeight:''}} 
  //        src={Logo}
  //        alt='Header Logo'
  //        />
  //     </div>
  //     <div className='figure text-center'/>
      
  //     <div className='text-center'>
  //       <br/>
  //      <ReactJkMusicPlayer {...options} />

  //     </div>
  //     {/* <p className="titulo-naranja-neon texto-regular text-center">
  //       Official
  //     </p> */}
      
      
  //         <div className="desc container text-center">
          
  //           <span className='animation'>Lost Fusión</span> es un proyecto musical independiente que surge de la <span className='animation'>CDMX</span>, han logrado mezclar y conectar bastos panoramas musicales dando como resultado el sonido propio y fresco que los 
  //             caracteriza con su estilo único <span className="animation">"Urban Latin Beat".</span>
  //             <br/>
  //             <br/> 
  //             La amplia gama de sonidos que surgen de sus instrumentos han electrizado desde CDMX, Mazunte, Jalisco, Toluca, Puerto Vallarta, Edo. De México, hasta Michoacán, Puebla, Veracruz y próximamente 
  //             Sudamérica y Europa; con orgullo siempre poniendo en alto el nombre de México. 
  //             <br/>
  //             <br/> 
  //             Precursores del <span className='animation'>sonido ecléctico</span> que los caracteriza, han logrado conectar con un público extenso gracias a los géneros y ambientes que aborda su música, desde el Rock, Funk, Reggae, 
  //             Disco, Hip Hop, hasta un sonido más urbano y latino, dando como resultado una experiencia musical variada para todos los gustos y frescura que incita a bailar a todo aquel que los escucha. 
  //             <br/>
  //             <br/> 
  //               <span className='animation' style={{fontSize:'30px'}}>Lost Fusión</span> <span style={{fontSize:'30px'}} >es:</span>
  //             <br/>
  //             <br/> 
  //               • MAYRA GARCÍA - Voz y Teclado 
  //               <br/>
  //               • <span>INDIRA VALDELAMAR </span>- Voz y Guitarra 
  //               <br/>
  //               • MIGUEL OVIEDO - Voz y Percusión 
  //               <br/>
  //               • ALBERTO PERALTA - Bajo 
  //               <br/>
  //               • MARCO FIGUEROA - Batería 
  //               <br/>
  //               <br/>
  //               <span className='grey1'>Los cinco músicos indican cuando comienza la fusión</span> 
  //         </div>
  //     </main>
  //     <div className='band-1'>
  //       <img className='img img-fluid'
  //        style={{maxHeight:''}} 
  //        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590638872/lost%20Fusion/foto2-removebg-preview_yaqcwb.png'
  //        alt='band-1'
  //        />
  //     </div>
  //     <div className="prensa">
  //     <div className='prensa1'>
  //       <img className='img img-fluid'
  //        style={{maxHeight:''}} 
  //        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630752/lost%20Fusion/02_er5hap.png'
  //        alt='prensa1'
  //        />
  //     </div>
  //     <div className='prensa1'>
  //       <img className='img img-fluid'
  //        style={{maxHeight:''}} 
  //        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630749/lost%20Fusion/03_j4jzke.png'
  //        alt='prensa2'
  //        />
  //     </div>
  //     </div>
  //         <h1> cualquier cosa</h1>
    
  
  // </Fragment>
  // )
  
}

export default Home;
