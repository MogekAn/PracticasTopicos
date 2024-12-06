import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-1">
      {/* Container */}
      <div className="max-w-1xl mx-auto">
        {/* Flex Layout */}
        <div className="flex justify-between mb-10">
          {/* HStack / Row */}
          
          <div className="flex flex-col space-y-1">
          <div className="flex space-x-1">
            <div className="bg-blue-300 p-1 w-80 text-center rounded"><div className="aspect-w-16 aspect-h-9 mb-1">
              <img 
                className="w-80 h-60 object-cover" 
                src="https://personaspain.es/wp-content/uploads/2024/08/Sonic3LaPelicula_1.png" 
                alt="Viktor"
              />
            </div></div>
          </div>
          <div className="flex space-x-20">
            <div className="bg-blue-300 p-5 w-32 text-center rounded">SONIC</div>
            <div className="bg-red-400 p-5 w-32 text-center rounded">SHADOW</div>
            
          </div>
          </div>

          {/* AspectRatio */}

          <div className="aspect-w-16 aspect-h-9 mb-1">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/0CYfRc0wjiE?si=DfP9XyddFZyycwMV"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        
          {/* VStack / Column */}
          <div className="flex space-x-1">
          <div className="flex flex-col space-y-1">
            <div className="bg-green-300 p-1 text-center rounded"><div className="aspect-w-16 aspect-h-9 mb-1">
              <img 
                className="w-50 h-80 object-cover" 
                src="https://preview.redd.it/s2-spoilers-victor-rn-v0-iooa8dir3wzd1.png?width=1320&format=png&auto=webp&s=066cbbff2f0dd68ecb0bca83397cac0d0064b2a1" 
                alt="Viktor"
              />
            </div></div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="bg-green-300 p-14 w-15 h-35 text-center rounded">VIKTOR</div>
            <div className="bg-green-300 p-14 w-15 h-40 text-center rounded">JESUS</div>
          </div>
          </div>


        </div>


        {/* AspectRatio */}
        
        
        <div className="flex space-x-1">
            <div className="bg-orange-100 p-1 w-50 text-center rounded"><div className="aspect-w-16 aspect-h-9 mb-1">
          <img 
            className="w-50 h-100 object-cover" 
            src="https://media.tenor.com/rI_0O_9AJ5sAAAAj/nyan-cat-poptart-cat.gif" 
            alt="Descripción del GIF"
          />
        </div></div>
            <div className="bg-orange-100 p-1 w-50 text-center rounded"><div className="aspect-w-16 aspect-h-9 mb-1">
          <img 
            className="w-50 h-100 object-cover" 
            src="https://media.tenor.com/rI_0O_9AJ5sAAAAj/nyan-cat-poptart-cat.gif" 
            alt="Descripción del GIF"
          />
          
        </div></div>
        <div className="bg-orange-100 p-1 w-50 text-center rounded"><div className="aspect-w-16 aspect-h-9 mb-1">
          <img 
            className="w-50 h-100 object-cover" 
            src="https://media.tenor.com/rI_0O_9AJ5sAAAAj/nyan-cat-poptart-cat.gif" 
            alt="Descripción del GIF"
          />
        </div></div>
        <div className="bg-orange-100 p-1 w-50 text-center rounded"><div className="aspect-w-16 aspect-h-9 mb-1">
          <img 
            className="w-50 h-100 object-cover" 
            src="https://media.tenor.com/rI_0O_9AJ5sAAAAj/nyan-cat-poptart-cat.gif" 
            alt="Descripción del GIF"
          />
        </div></div>
        <div className="bg-orange-100 p-1 w-50 text-center rounded"><div className="aspect-w-16 aspect-h-9 mb-1">
          <img 
            className="w-50 h-100 object-cover" 
            src="https://media.tenor.com/rI_0O_9AJ5sAAAAj/nyan-cat-poptart-cat.gif" 
            alt="Descripción del GIF"
          />
        </div></div>
        <div className="bg-orange-100 p-1 w-50 text-center rounded"><div className="aspect-w-16 aspect-h-9 mb-1">
          <img 
            className="w-50 h-100 object-cover" 
            src="https://media.tenor.com/rI_0O_9AJ5sAAAAj/nyan-cat-poptart-cat.gif" 
            alt="Descripción del GIF"
          />
        </div></div>
          </div>
        

        


        {/* Box */}
        <div className="bg-pink-400 p-6 rounded-lg mb-10">
          <h2 className="text-white text-lg">Skibidi Sigma Pomni Digital Fortnite Chamba</h2>
          <p className="text-white">
            Free Gigachad Rizz Ohmygodfloo XXXTentacion
            Hotmail Lionel Ronaldo Junior Mewing Tercero
            Chiki Ibai Xocas Ete Sech Golden Toy Puppet
            Ohio Rubén Tuesta YouTubeproinsano
            Globodetexto51 Decadencia777
            Desde la distancias me voy acercando soy una sombra y tu no te das cuenta, hola que tal, date la vuelta, BUM!</p>
        </div>

        {/* Center */}
        <div className="flex justify-center items-center h-64 bg-gray-300 mb-10">
          <div className="bg-red-400 p-5 text-center rounded-lg">Centered Box</div>
        </div>

        {/* Stack */}
        <div className="space-y-5">
          <div className="bg-yellow-300 p-5 rounded">Stack permite organizar componentes en un solo eje, ya sea vertical u horizontal</div>
          <div className="bg-yellow-300 p-5 rounded">Con un espaciado consistente entre ellos</div>
          <div className="bg-yellow-300 p-5 rounded">Esto simplifica la creación de listas y agrupaciones de elementos</div>
        </div>

        {/* ZStack */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="relative p-10 bg-blue-500 text-white text-center">
            ZStack - Contenido sobre el fondo
          </div>
          <div className="relative p-10 bg-blue-500 text-white text-center">
          	ZStack permite superponer componentes uno sobre otro, creando una "pila" de elementos 
          </div>
        </div>
      </div>
    </div>
  );
}
