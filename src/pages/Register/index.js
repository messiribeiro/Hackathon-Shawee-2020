import React from 'react'
import { Link } from 'react-router-dom'

import "./styles.css"

import Header from '../../components/Header'

function SignInPage() {

    return (
        <>
            <Header />
            
            <div className="register-interface">
                <p>Já tem uma conta? Clique aqui</p>
                <form action="">
                    <input type="text" name="name" id="name" placeholder="Nome da empresa"/>
                    <div className="formTwo">
                        <input type="email" name="email" id="email" placeholder='Email'/>
                        <input type="tel" name="phone" id="phone" placeholder='Telefone'/>
                        <input type="password" name="password" id="password" placeholder='Senha'/>
                        <input type="password" name="password" id="password" placeholder='Repetir senha'/>
                    </div>
                    
                    <h3>Identidade da empresa</h3>

                    <div className="company-identity">
                        <textarea placeholder='Descreva seu estabelecimento' name="" id="" cols="30" rows="10"></textarea>
                        <input type="file" name="" id=""/>

                    </div>

                    <h3>Localização</h3>

                    <div className="location">

                            <select name="city" id="city">
                                <option value="Cidade">Cidade</option>
                            </select>

                            <select name="uf" id="uf">
                                <option value="uf">UF</option>
                            </select>
                    </div>
                </form>

                <input className='submit' type="submit" value="Criar conta"/>
            </div>      
        </>
    )
}

export default SignInPage;