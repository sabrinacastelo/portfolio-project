import Chef from '../../assets/man-cooking.jpg'
import Vaca from '../../assets/steak.png'
import Porco from '../../assets/chop.png'
import Frango from '../../assets/chicken-leg.png'
import Linguica from '../../assets/salsicha.png'
import './about.css'

function About() {
    return (
        <div className='all'>
            <div className="information">
                <p className="title-1">ALGUMA INFORMAÇÃO SOBRE MEU TRABALHO</p>
                <br />
                <p className="ps">Uma breve descrição sobre o que tenho a falar do meu trabalho como churrasqueiro com o decorrer do tempo</p>
                <br />
                <div className="litle">
                    <div className="one">
                        <p className='meat'><img src={Vaca} alt="" /> Carne Bovina</p>
                        <p className='meat'><img src={Porco} alt="" /> Carne Suína</p>
                    </div>
                    <div className="two">
                        <p className='meat'><img src={Frango} alt="" /> Carne de Aves</p>
                        <p className='meat'><img src={Linguica} alt="" /> Outras Carnes</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <img src={Chef} alt="" />
            </div>


        </div>
    )
}

export default About