import React,  {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'

import api from '../../services/api'

import './styles.css'

function LoginPage() {

    const history = useHistory();

    async function handleSubmit(event) {

        event.preventDefault();

        history.push('/home')
    }

    useEffect(()=> {
        api.get('drink').then(response => {
            console.log(response)
        })
    }, [])



    return (
        <>
            <Header />
            <div className="login-page">
                <div className="container">
                    <main className="login-view">

                        <form onSubmit={handleSubmit}>
                            <input type="text" className="userInfo" placeholder="Usuário" />
                            <input type="password" className="userInfo" placeholder="Senha" />

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
                        <button type="submit" onClick={() => { history.push('/register') }} className="button">Cadastrar-se</button>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default LoginPage;