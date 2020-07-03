import React from 'react';
import { FiPlusCircle as Add, FiTrash2 } from 'react-icons/fi'

import './styles.css'

const ProductRegistration = () => {
    return (
        <div className="product-registration-page">
            <div className="company-apresentation">
                <header>
                    <div className="txt">
                        <h1>Restaurante do seu Zé</h1>
                        <p>Especialista em bucho de vaca e fígado de bode</p>
                    </div>

                </header>

                <div className="content">
                    <h2>Produtos</h2>
                    <p>*Nós precisamos dessas informações para indicar você para mais pessoas</p>

                    <h3>Quais comidas são servidas em seu estabelecimento?</h3>

                    <div className="food">
                        <h2>Pratos</h2>
                        <form action="">
                            <div className="file">
                                <input type="file" name="uploadImage" id="" />
                            </div>
                            <div className="food-information">
                                <div className="formOne">
                                    <input type='text' name="" id="name" placeholder='Nome do prato' />
                                    <textarea name="" id="description" cols="30" rows="10" placeholder='Exemplo: Caldo de cebola, alho, tomate, arroz cozido, cupim, azeitona' ></textarea>
                                </div>
                                <div className="formTwo">
                                    <div className="price">
                                        <label htmlFor="">Preço</label>
                                        <input type="text" name="" id="price" placeholder='R$' />
                                    </div>

                                    <button>Adicionar <Add /></button>

                                </div>
                            </div>
                        </form>

                        <div className="food-added">
                            <div>
                                <div className="food-content">
                                    <img src={'https://i.ytimg.com/vi/-ulllKDfYL0/maxresdefault.jpg'} alt="" />
                                    <div className="informations">
                                        <div><h3>Fígado de Bode Cozido</h3> <FiTrash2 /></div>
                                        <p>Figado de bode, pimenta, cebola, moss se eu tô dizendo que o espaço tá pequeno é pq o espaço tá pequeno doido mds véi cara prego, parecendo jordão</p>
                                        <p id='price' >R$ 6,50</p>
                                    </div>


                                </div>
                                <div className="line"></div>

                            </div>
                        </div>


                    </div>



                    <div className="drink">
                        <h2>Bebidas</h2>
                        <form action="" className="drink-informations">
                            <input className='file' type="file" name="" id="" />

                            <div className="drink-content">
                                <div className="name">
                                    <input type="text" name="nameOfDrink" id="" placeholder='Nome da bebida' />
                                </div>
                                <div className="priceAndAdd">
                                    <div>
                                        <label htmlFor="">Preço</label>
                                        <input type="text" name="" id="price" placeholder='R$' />
                                    </div>

                                    <button>Adicionar <Add /></button>

                                </div>
                            </div>

                        </form>

                        <div className="drink-added">
                            <div> 
                                <div className="drink">
                                    <div className="left">
                                        <img src={'https://img2.gratispng.com/20180131/uew/kisspng-coca-cola-soft-drink-diet-coke-coca-cola-transparent-png-5a7236079d2795.0146902515174343756437.jpg'} alt=""/>
                                        <h3>Coca cola</h3>
                                    </div>
                                    <div className="right">
                                        <p>R$ 6,70</p>
                                        <FiTrash2/>
                                    </div>

                                </div>
                                <div className='line' ></div>

                            </div>
                            
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default ProductRegistration