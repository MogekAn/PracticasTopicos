import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Flex Layout */}
        <div className="flex justify-between mb-10">
          {/* HStack / Row */}
          <center>
          <div className="flex space-x-4">
            <div className="bg-blue-300 p-5 w-32 text-center rounded">HStack organiza componentes en una fila horizontal</div>
            <div className="bg-blue-300 p-5 w-32 text-center rounded">Permitiendo un alineamiento sencillo y efectivo</div>
          </div></center>
          {/* AspectRatio */}
        <div className="aspect-w-16 aspect-h-9 mb-10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
          {/* VStack / Column */}
          <div className="flex flex-col space-y-4">
            <div className="bg-green-300 p-5 w-32 text-center rounded">VStack organiza componentes en una columna vertical</div>
            <div className="bg-green-300 p-5 w-32 text-center rounded">Permitiendo que los elementos se apilen uno sobre el otro</div>
            
          </div>
        </div>

        

        {/* Box */}
        <div className="bg-blue-400 p-6 rounded-lg mb-10">
          <h2 className="text-white text-lg">Box</h2>
          <p className="text-white">Este es un componente de caja simple con relleno y esquinas redondeadas.</p>
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
