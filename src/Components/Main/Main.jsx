import React, {useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'

import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora bora',
    location: 'New Zealand',
    grade: 'CULTURAL Relax',
    fees: '$700',
    description: 'The Bora Bora island is one of the most popular islands in The Islands of Tahiti. One of nine islands within the Society Islands, Bora Bora was formed over seven million years ago by a volcano. Like most of the islands of French Polynesia, Bora Bora is surrounded by a ring of coral reef, also known as an atoll.'
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL Relax',
    fees: '$600',
    description: 'Machu Picchu stands 2,430 m above sea-level, in the middle of a tropical mountain forest, in an extraordinarily beautiful setting. It was probably the most amazing urban creation of the Inca Empire at its height; its giant walls, terraces and ramps seem as if they have been cut naturally in the continuous rock escarpments. The natural setting, on the eastern slopes of the Andes, encompasses the upper Amazon basin with its rich diversity of flora and fauna.'
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL Relax',
    fees: '$700',
    description: "The Great Barrier Reef is the world's largest coral reef system, composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres over an area of approximately 344,400 square kilometres"
  },
  {
    id:4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL Relax',
    fees: '$800',
    description:'Cappadocia, a semi-arid region in central Turkey, is known for its distinctive “fairy chimneys,” tall, cone-shaped rock formations clustered in Monks Valley, Göreme and elsewhere. Other notables sites include Bronze Age homes carved into valley walls by troglodytes (cave dwellers) and later used as refuges by early Christians. The 100m-deep Ihlara Canyon houses numerous rock-face churches'
  },
  {
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL Relax',
    fees: '$1100',
    description:"Guanajuato is a city in central Mexico. It's known for its silver mining history and colonial architecture. Its network of narrow streets, alleyways and tunnels is typified by the Callejón del Beso (Alley of the Kiss), so named because the balconies are close enough for a couple to reach across and kiss. In a former granary, the Alhóndiga de Granaditas is an art and local history museum with pre-Columbian exhibits"
  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL Relax',
    fees: '$840',
    description:'Cinque Terre is a string of centuries-old seaside villages on the rugged Italian Riviera coastline. In each of the 5 towns, colorful houses and vineyards cling to steep terraces, harbors are filled with fishing boats and trattorias turn out seafood specialties along with the Liguria region’s famous sauce, pesto. The Sentiero Azzurro cliffside hiking trail links the villages and offers sweeping sea vistas.'
  },
  {
    id:7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL Relax',
    fees: '$790',
    description:'Angkor Wat is a temple complex in Cambodia, located on a site measuring 162.6 hectares. The Guinness World Records considers it as the largest religious structure in the world'
  },
  {
    id:8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL Relax',
    fees: '$900',
    description:'The Taj Mahal is located on the right bank of the Yamuna River in a vast Mughal garden that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh. It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD, with the mosque, the guest house and the main gateway on the south, the outer courtyard and its cloisters were added subsequently and completed in 1653 AD. The existence of several historical and Quaranic inscriptions in Arabic script have facilitated setting the chronology of Taj Mahal. For its construction, masons, stone-cutters, inlayers, carvers, painters, calligraphers, dome builders and other artisans were requisitioned from the whole of the empire and also from the Central Asia and Iran. Ustad-Ahmad Lahori was the main architect of the Taj Mahal.'
  },
  {
    id:9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL Relax',
    fees: '$500',
    description:'Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast'
  },
]

const Main = () => {


  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle ,location, grade, fees, description})=>{
              return(
                <div key={id} data-aos="fade-up" className="singleDestination">

                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>              

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade} <small>+1</small> </span>
                      </div>

                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className='icon'/>
                    </button>
                  </div>
                </div>
              )
          })
        }
      </div>
    </section>
  )
}

export default Main
