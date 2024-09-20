// import React from 'react'
import Portfolio from '../../components/portfolio/Portfolio'
import Img from '../../assets/churrasco.png'
import './home.css'
import About from '../../components/about/About'
import Carousel from '../../components/carousel/Carousel'
import Testimonials from '../../components/testimonials/Testimonials'

function Home() {
    return (
        <>
            <div>
                <div className="sessao">
                    <div className='p-text'>
                        <p className="p">
                            CONHEÇA O MELHOR <br /><span className='span'>CHURRASCO</span>
                        </p>
                        <p className='p-2'>
                            A carne mais saborosa que você irá provar!!
                        </p>
                        <button className="cta">
                            <span>Saiba Mais</span>
                        </button>

                    </div>
                    <img className='img' src={Img} alt="" />
                </div>
            </div>
            <Portfolio />
            <Carousel />
            <About />
            <Testimonials />
        </>
    )
}

export default Home