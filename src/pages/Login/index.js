import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'

import api from '../../services/api'

import './styles.css'

function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        
        const data = {
            email,
            password
        }


        try{
            const response = await api.get('login', data)
            console.log(response.data.name)

        }catch(err) {
            alert('eae us cara')
        }        
    }



    return (
        <>
            <Header />
            <div className="login-page">
                <div className="container">
                    <main className="login-view">

                        <form onSubmit={handleSubmit} >
                            <input type="text"
                                className="userInfo"
                                placeholder="Usuário" onChange={e=> setEmail(e.target.value)} />
                            <input type="password" className="userInfo" placeholder="Senha" onChange={e=> setPassword(e.target.value)} />

                            <div className="keep-connected">
                                <input type="checkbox" name="keep-connected" id="keep-connected" />
                                <label> Mantenha-me conectado</label>
                            </div>

                            <button type="submit" className="button">Entrar</button>

                        </form>
                        <span></span>
                    </main>

                    <aside className="signin-view">
                        <div id='title' >
                            <h2>Não tem uma conta?</h2>
                        </div>

                        <p>Crie uma agora mesmo e se comunique com seus clientes de uma maneira mais fácil e ágil!</p>
                        <button type="submit" className="button">Cadastrar-se</button>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default LoginPage;