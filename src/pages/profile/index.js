import React from 'react';
import { FiTrash2 } from 'react-icons/fi'
import  './styles.css'


export default function Profile() {
    return (
        <div className='profile'>
            <header>
                <h1>Restaurante do seu Zé</h1>
                <p>Especialista em bucho de vaca e fígado de bode</p>
            </header>
            <main>
                <div className="header">
                    <div className="on-off">
                        <h1>Estabelecimento</h1>
                        <div className="lever">
                            <div className="one"></div>
                            <div className="two"></div>
                        </div>
                    </div>
                    <div className="demand">
                        <button>Pedidos <div className="status"><p>5</p></div></button>

                    </div>
                </div>

                <div className="main-content">
                    <div className="items">
                        <div>
                            <div className="item">
                                <div className="left">
                                    <img src={'https://img2.gratispng.com/20180131/uew/kisspng-coca-cola-soft-drink-diet-coke-coca-cola-transparent-png-5a7236079d2795.0146902515174343756437.jpg'} alt="" />
                                    <h3>Coca cola</h3>
                                </div>
                                <div className="right">
                                    <p>R$ 6,70</p>
                                    <FiTrash2 />

                                </div>
                                <div className="lever">
                                    <div className="one"></div>
                                    <div className="two"></div>
                                </div>
                            </div>
                            <div className='line' ></div>

                        </div>

                    </div>

                    <div className="items">
                        <div>
                            <div className="item">
                                <div className="left">
                                    <img src={'https://img2.gratispng.com/20180131/uew/kisspng-coca-cola-soft-drink-diet-coke-coca-cola-transparent-png-5a7236079d2795.0146902515174343756437.jpg'} alt="" />
                                    <h3>Coca cola</h3>
                                </div>
                                <div className="right">
                                    <p>R$ 6,70</p>
                                    <FiTrash2 />

                                </div>
                                <div className="lever">
                                    <div className="one"></div>
                                    <div className="two"></div>
                                </div>

                            </div>
                            <div className='line' ></div>

                        </div>

                    </div>

                </div>

                {/**Se vc estiver se perguntando pq tem um Footer dentro de um main, a resposta é clara, é um footer do main kkkkkkkk */}
                <footer>
                    <p className='msg2' >Olá, Restaurante do seu Zé</p>
                    <p className='txt' >Esta é a página por onde você comandará seu Restaurante</p>
                    <button>Turorial</button>
                </footer>
            </main>

        </div>
    )
}