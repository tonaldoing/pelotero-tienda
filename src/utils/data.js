const productos = [
    {
        title : 'Pelota De Futbol Adidas Club Al Rihla Numero 5 Blanca',
        price : 10999,
        image : 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-futbol-adidas-club-al-rihla-numero-5-blanca-100040h57786001-1.jpg',
        short_description: 'Escribí tu propia historia futbolística con esta pelota resistente. ',
        description: 'Escribí tu propia historia futbolística con esta pelota resistente. La pelota es solo el comienzo. El resto de tu historia futbolística aún no está escrito. Inspirada en el diseño de la pelota oficial de la copa mundial de la FIFA™, esta pelota Al Rihla Club está cosida a máquina para una mayor fiabilidad. Su cámara de butilo la mantiene inflada por más tiempo, sin importar si estás en el campo de entrenamiento o en el parque. Exterior cosido a máquina. Cámara de butilo. Logo estampado de la Copa Mundial de la FIFA™.',
        category: 'F11',
        brand: 'Adidas',
        stock: 100,
        id: 1
    },
    {
        title : 'Pelota De Futbol Adidas FIFA UCL League Void Numero 5 Blanca',
        price : 14900,
        image : 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-futbol-adidas-fifa-ucl-league-void-numero-5-blanca-100040he3771001-1.jpg',
        short_description: 'Una pelota de entrenamiento de alta calidad diseñada para ayudarte a brillar en la cancha.',
        description: 'Una pelota de entrenamiento de alta calidad diseñada para ayudarte a brillar en la cancha. En la oscuridad del espacio las estrellas brillan aún más.   Inspirada en las profundidades más oscuras del universo, esta pelota de fútbol ADIDAS UCL League se inspira en la pelota oficial para partidos de la UEFA Champions League.Su estructura TSBE ofrece una superficie sin costuras para jugadas predecibles. Su cámara de butilo la mantiene inflada por más tiempo. El sello de calidad FIFA Quality demuestra que puedes confiar en ella en el campo de entrenamiento y en el día del partido. IMPORTANTE: El balón debe ser inflado con la presión que indica en el panel cercano a la válvula.',
        category: 'F11',
        brand: 'Adidas',
        stock: 6,
        id: 2
    },
    {
        title : 'Pelota De Futbol Adidas AFA Gotan Argentum Numero 5 Blanca',
        price : 12200,
        image : 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-futbol-adidas-afa-gotan-argentum-blanco-100040he3791001-1.jpg',
        short_description: 'Una pelota de entrenamiento de alta calidad diseñada para ayudarte a brillar en la cancha.',
        description: 'Una pelota de entrenamiento de alta calidad diseñada para ayudarte a brillar en la cancha. En la oscuridad del espacio las estrellas brillan aún más. Inspirada en las profundidades más oscuras del universo, esta pelota de fútbol ADIDAS UCL League se inspira en la pelota oficial para partidos de la UEFA Champions League. Su estructura TSBE ofrece una superficie sin costuras para jugadas predecibles. Su cámara de butilo la mantiene inflada por más tiempo. El sello de calidad FIFA Quality demuestra que puedes confiar en ella en el campo de entrenamiento y en el día del partido. IMPORTANTE: El balón debe ser inflado con la presión que indica en el panel cercano a la válvula',
        category: 'F11',
        brand: 'Adidas',
        stock: 20,
        id: 3
    },
    {
        title : 'Pelota De Futbol Puma Orbita Serie A Numero 5 Amarilla',
        price : 13900,
        image : 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-futbol-puma-orbita-seria-a-numero-5-amarilla-51440988-640040084008001-1.jpg',
        short_description: 'Presentamos nuestra réplica del balón de entrenamiento de la Serie A de Italia',
        description: 'Presentamos nuestra réplica del balón de entrenamiento de la Serie A de Italia: cosido a máquina y diseñado para brindar a los profesionales el entrenamiento que necesitan para lograr el máximo rendimiento en el campo. Tamaño Nº5. IMPORTANTE: El balón debe ser inflado con la presión que indica en el panel cercano a la válvula.',
        category: 'F11',
        brand: 'Puma',
        stock: 20,
        id: 4
    },
    {
        title : 'Pelota De Futbol Adidas Club Al Rihla Numero 5 Blanca',
        price : 10999,
        image : 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-futbol-adidas-club-al-rihla-numero-5-blanca-100040h57786001-1.jpg',
        short_description: 'Escribí tu propia historia futbolística con esta pelota resistente. ',
        description: 'Escribí tu propia historia futbolística con esta pelota resistente. La pelota es solo el comienzo. El resto de tu historia futbolística aún no está escrito. Inspirada en el diseño de la pelota oficial de la copa mundial de la FIFA™, esta pelota Al Rihla Club está cosida a máquina para una mayor fiabilidad. Su cámara de butilo la mantiene inflada por más tiempo, sin importar si estás en el campo de entrenamiento o en el parque. Exterior cosido a máquina. Cámara de butilo. Logo estampado de la Copa Mundial de la FIFA™.',
        category: 'F11',
        brand: 'Adidas',
        stock: 100,
        id: 5
    },
    {
        title : 'Pelota De Futbol Adidas FIFA UCL League Void Numero 5 Blanca',
        price : 14900,
        image : 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-futbol-adidas-fifa-ucl-league-void-numero-5-blanca-100040he3771001-1.jpg',
        short_description: 'Una pelota de entrenamiento de alta calidad diseñada para ayudarte a brillar en la cancha.',
        description: 'Una pelota de entrenamiento de alta calidad diseñada para ayudarte a brillar en la cancha. En la oscuridad del espacio las estrellas brillan aún más.   Inspirada en las profundidades más oscuras del universo, esta pelota de fútbol ADIDAS UCL League se inspira en la pelota oficial para partidos de la UEFA Champions League.Su estructura TSBE ofrece una superficie sin costuras para jugadas predecibles. Su cámara de butilo la mantiene inflada por más tiempo. El sello de calidad FIFA Quality demuestra que puedes confiar en ella en el campo de entrenamiento y en el día del partido. IMPORTANTE: El balón debe ser inflado con la presión que indica en el panel cercano a la válvula.',
        category: 'Sala',
        brand: 'Adidas',
        stock: 6,
        id: 6
    },
    {
        title : 'Pelota De Futbol Adidas AFA Gotan Argentum Numero 5 Blanca',
        price : 12200,
        image : 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-futbol-adidas-afa-gotan-argentum-blanco-100040he3791001-1.jpg',
        short_description: 'Una pelota de entrenamiento de alta calidad diseñada para ayudarte a brillar en la cancha.',
        description: 'Una pelota de entrenamiento de alta calidad diseñada para ayudarte a brillar en la cancha. En la oscuridad del espacio las estrellas brillan aún más. Inspirada en las profundidades más oscuras del universo, esta pelota de fútbol ADIDAS UCL League se inspira en la pelota oficial para partidos de la UEFA Champions League. Su estructura TSBE ofrece una superficie sin costuras para jugadas predecibles. Su cámara de butilo la mantiene inflada por más tiempo. El sello de calidad FIFA Quality demuestra que puedes confiar en ella en el campo de entrenamiento y en el día del partido. IMPORTANTE: El balón debe ser inflado con la presión que indica en el panel cercano a la válvula',
        category: 'Sala',
        brand: 'Adidas',
        stock: 20,
        id: 7
    },
    {
        title : 'Pelota De Futbol Puma Orbita Serie A Numero 5 Amarilla',
        price : 13900,
        image : 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-futbol-puma-orbita-seria-a-numero-5-amarilla-51440988-640040084008001-1.jpg',
        short_description: 'Presentamos nuestra réplica del balón de entrenamiento de la Serie A de Italia',
        description: 'Presentamos nuestra réplica del balón de entrenamiento de la Serie A de Italia: cosido a máquina y diseñado para brindar a los profesionales el entrenamiento que necesitan para lograr el máximo rendimiento en el campo. Tamaño Nº5. IMPORTANTE: El balón debe ser inflado con la presión que indica en el panel cercano a la válvula.',
        category: 'Sala',
        brand: 'Puma',
        stock: 20,
        id: 8
    },
    {
        title : 'Pelota De Futbol Puma Orbita Serie A Numero 5 Amarilla',
        price : 13900,
        image : 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-futbol-puma-orbita-seria-a-numero-5-amarilla-51440988-640040084008001-1.jpg',
        short_description: 'Presentamos nuestra réplica del balón de entrenamiento de la Serie A de Italia',
        description: 'Presentamos nuestra réplica del balón de entrenamiento de la Serie A de Italia: cosido a máquina y diseñado para brindar a los profesionales el entrenamiento que necesitan para lograr el máximo rendimiento en el campo. Tamaño Nº5. IMPORTANTE: El balón debe ser inflado con la presión que indica en el panel cercano a la válvula.',
        category: 'Mini',
        brand: 'Puma',
        stock: 20,
        id: 9
    },
    {
        title : 'Pelota De Futbol Puma Orbita Serie A Numero 5 Amarilla',
        price : 13900,
        image : 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-futbol-puma-orbita-seria-a-numero-5-amarilla-51440988-640040084008001-1.jpg',
        short_description: 'Presentamos nuestra réplica del balón de entrenamiento de la Serie A de Italia',
        description: 'Presentamos nuestra réplica del balón de entrenamiento de la Serie A de Italia: cosido a máquina y diseñado para brindar a los profesionales el entrenamiento que necesitan para lograr el máximo rendimiento en el campo. Tamaño Nº5. IMPORTANTE: El balón debe ser inflado con la presión que indica en el panel cercano a la válvula.',
        category: 'Mini',
        brand: 'Puma',
        stock: 20,
        id: 10
    },
  ]

  export default productos;