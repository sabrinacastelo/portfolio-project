// import React from 'react'
import Portfolio from '../../components/portfolio/Portfolio'
import './home.css'

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
                    <img className='img' src="src/assets/churrasco.png" alt="" />
                </div>
            </div>
            <Portfolio />
        </>
    )
}

export default Home