import LogoMercalista from './assets/MercalistaLogo.png';
import ImgVerduras from './assets/ImgVerduras.jpeg';

export function SectionLeft() {
    return (
        <>
            <header className='header-mercalista-register'>
                <img src={LogoMercalista} alt="Mercalista" className="Logo-Mercalista" />
                
            </header>
            <h1 className="Title-CrearCuenta-Mercalista">
                    Completa los datos para <br />crear tu cuenta
            </h1>
            <div className="Div-ImgVerduras">
                <img src={ImgVerduras} alt="Verduras" className="ImgVerduras" />
            </div>
        </>
    );
}