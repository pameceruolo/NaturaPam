const products = [
  {
    title: "Crema Nutritiva Tododia Hojas de Limón y Guanábana 400 ml",
    price: "$15.000",
    desc: `Cuidado inteligente y aroma refrescante.
            • Acción prebiótica: mantiene el equilibrio natural de la flora de la piel
            • Nutrición personalizada: estimula la reposición de nutrientes según cada tipo de piel
            • Nutrición profunda: piel saludable en todas las capas
            • 94% de ingredientes naturales: mayor afinidad con tu piel
            • Piel suave y protegida: fácil de esparcir y rápida absorción
            • Fragancia que sorprende: revitalizante y fresca, con notas aromáticas y cremosas`,
    images: ["TododiaLimonyGuanabana03.jpg", "TododiaLimonyGuanabana02.jpg", "TododiaLimonyGuanabana01.jpg"],
    available: true
  },
  {
    title: "Crema Hidratante Corporal Ekos Estoraque 250 ml",
    price: "$10.000",
    desc: `Cuida e Hidrata tu piel
            .
            Disfrutá de un ritual de bienestar con la línea Ekos Estoraque. Estimula 2 veces la producción de colágeno en la piel y brinda 72 horas de hidratación para complementar tu ritual de bienestar.
            Ritual de cuidado Ekos Estoraque en 3 pasos:

            1. Limpieza: Limpia sin resecar manteniendo el pH natural de la piel
            2. Hidratación: Hidrata tu cuerpo, manos y labios.
            3. Perfumación: Fragancia fresca que viene del bosque verde y húmedo, combina la frescura revitalizante verde aromático del estoraque con toques florales. Una fragancia con ingredientes de la biodiversidad amazónica extraído de la hierba del estoraque.
            Hecho en Brasil. Vegano.`,
    images: ["PulpaEstoraque01.jpg", "PulpaEstoraque02.jpg"],
    available: true
  },
  {
    title: "Aceite Corporal Ekos Pitanga Preta 100 ml",
    price: "$5.000",
    desc: `Brillo natural y sensación de frescura

            Es un tratamiento trifásico que:

            • combina aceites vegetales con agua
            • ofreciendo una hidratación profunda y una fragancia envolvente
            • su fórmula emoliente y ligera se activa al agitar el envase
            • permitiendo una rápida absorción sin dejar sensación grasosa
            • ideal para todo tipo de piel
            • deja la piel suave, luminosa y delicadamente perfumada
            • manteniendo su elasticidad
            • con notas florales de pitanga negra
            • libre de ingredientes nocivos`,
    images: ["AceitePitangaPreta01.jpg", "AceitePitangaPreta02.jpg"],
    available: true
  },
  {
    title: "Tododia Mango Rosa y Agua de Coco Body Splash 200 ml",
    price: "$10.000",
    desc: `Perfumación ligera y refrescante hecha especialmente para el verano.
            • Tododia busca inspiración en la combinación de notas sorprendentes, traducidas en fragancias irresistibles
            • Sensación de frescura y ligereza que da el toque final al cuidado de cada día
            • Hidratación ligera de la piel: mantiene la hidratación de la piel a lo largo del día
            • Fragancia refrescante y alegre con notas frutales.
            
            Cómo usar:
            Rociá el body splash en abundancia para revivir la sensación agradable del baño. aplicá en muñecas, cuello, escote, detrás de las orejas y donde más desees, excepto en el rostro.`,
    images: ["TododiaMangoCocoBS01.jpg", "TododiaMangoCocoBS02.jpg", "TododiaMangoCocoBS03.jpg"],
    available: true
  },
  {
    title: "Pulpa Hidratante Corporal Ekos Castaña 400 ml",
    price: "$18.000",
    desc: `Revitalizá tu piel con el poder de la castaña

            • con acción anti resequedad, deja tu piel restaurada y nutrida
            • mayor concentración de aceite crudo de castaña
            • revitaliza la piel
            • mejora visiblemente la textura
            • producto vegano: con ingredientes de origen natural y vegetal de la Amazonía
            • fórmulas biocompatibles con la piel y altamente biodegradables
            • sin parabenos, siliconas ni aceites minerales
            *las imágenes son ilustrativas, este producto está en una posición cenital. el contenido de cada producto es el indicado en su descripción`,
    images: ["PulpaEkosCastanha01.jpg", "PulpaEkosCastanha02.jpg", "PulpaEkosCastanha03.jpg", "PulpaEkosCastanha04.jpg"],
    available: true
  },
  {
    title: "Caja Crema Hidratante",
    price: "$15.000",
    desc: `Crema hidratante de alta calidad para el cuidado de la piel.`,
    images: ["CajaCremaHidratante01.jpg"],
    available: true
  },
  {
    title: "Nectar Hidratante para Manos Maracuyá 40gr",
    price: "$4.000",
    desc: `Un regalo de la naturaleza para tus manos

            • fragancia fresca y delicada
            • antiestrés cutáneo
            • calma y protege la piel
            • hidratación intensa que forma una película protectora
            • uñas y cutículas con aspecto saludable
            • base vegetal biocompatible con la piel
            • altamente biodegradable
            • libre de ingredientes potencialmente perjudiciales para vos y para el medio ambiente`,
    images: ["NectarMaracuja01.jpeg", "NectarMaracuja02.jpg", "NectarMaracuja03.jpg"],
    available: true
  },
  {
    title: "Crema Hidratante Manos Tukuma",
    price: "$7.000",
    desc: `Crema hidratante para manos con la esencia de Tukuma.`,
    images: ["CremaHidratanteManosTukuma01.jpeg"],
    available: true
  },
  {
    title: "Ekos Crema Cuerpo Tukuma",
    price: "$12.000",
    desc: `Crema corporal Ekos con la suavidad de Tukuma para hidratar todo el cuerpo.`,
    images: ["EkosCremaCuerpoTukuma01.jpeg", "EkosCremaCuerpoTukuma02.jpeg"],
    available: false
  },
  {
    title: "Perfume Beijo De Humor Masculino",
    price: "$30.000",
    desc: `¡una fragancia exclusiva que despierta las ganas de besar!


            Descripción:

            • fragancia ligera y relajada
            • combinación vibrante de notas amaderadas y cálidas
            • ingredientes de la biodiversidad amazónica
            • aroma de larga duración
            • ideal para ocasiones casuales y momentos relajados
            • notas de salida (topo): piña, cardamomo, nuez moscada, manzana, lavanda, mandarina, canela, priprioca*
            • notas de corazón (cuerpo): jazmín, geranio, ciruela
            • notas de fondo (base): sándalo, cashmeran, musgo, patchouli, acorde “calienta el beso”, haba tonka, cacao, cumarú*
            • concentración: eau de toilette
            • gota olfativa: amaderada
            • subfamilia: frutal
            • apto para: uso diario, salir
            • cruelty free
            • vegano
            *Natura accedió al conocimiento tradicional asociado al patrimonio genético de la priprioca a través de los asociados de la asociación de herbolarios del ver-o-peso y de la asociación de productores de boa vista (APOBV).`,
    images: ["BeijoDeHumorMasculino01.jpeg", "BeijoDeHumorMasculino02.jpeg"],
    available: false
  },
  {
    title: "Kriska Perfume",
    price: "$30.000",
    desc: `Dulzura y sofisticación para momentos especiales

            • Fragancia dulce, cálida y femenina
            • De larga duración
            • Perfecta para quienes disfrutan de aromas con personalidad
            • Notas orientales envolventes que crean un aura sofisticada
            • Ideal para los días más frescos o para la noche`,
    images: ["KriskaPerfume01.jpeg", "KriskaPerfume02.jpeg", "KriskaPerfume03.jpg"],
    available: true
  },
  {
    title: "Protector Solar 50 Facial Hidratación",
    price: "$15.000",
    desc: `Protector solar SPF 50 para rostro con propiedades hidratantes.`,
    images: ["ProtectorSolar50FacialHidratacion01.jpeg"],
    available: false
  },
  {
    title: "Protector Solar 70 Facial Hidratación",
    price: "$15.000",
    desc: `Protector solar SPF 70 para rostro con máxima protección e hidratación.`,
    images: ["ProtectorSolar70FacialHidratacion01.jpeg"],
    available: false
  },
  {
    title: "Protector Solar Facial Oleosidad",
    price: "$15.000",
    desc: `Protector solar para rostro con control de oleosidad.`,
    images: ["ProtectorSolarFacialOleosidad01.jpeg"],
    available: false
  }
];
