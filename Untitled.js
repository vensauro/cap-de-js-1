import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Container from '../../layout/Container';


import inputs from './inputs';
import axios from 'axios';
import { baseURL } from '../../api';

export default function Login({ history }) {

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  let inputRef = {}

  async function submit(event) {
    event.preventDefault()
    setLoading(true)
    setError(false)

    const values = {}
    Object.keys(inputRef).forEach(input => {
      values[input] = inputRef[input].value
    })

    axios.post(baseURL + '/login', values, { withCredentials: true })
      .then(res => {
        window.location = baseURL + '/panel/dashboard' /////////////////////////////////////
      })
      .catch(err => {
        setError(true)
        // console.log('catched: ', err)
      })
      .finally(() => setLoading(false))
  }

  // useEffect(() => {
  //   axios.get(baseURL + '/logged-user', { withCredentials: true })
  //     .then(res => {
  //       if(res.data.email)
  //         window.location = baseURL + '/panel/dashboard'
  //     })
  // })

  return (
    <Container complement="login">
      {loading ? <Loading /> : (
        <form className="center gt-form text-left" onSubmit={submit} style={{ width: '80%' }}>
          {inputs.map(
            (input, index) =>
              <Input key={index}
                {...input}
                ref={node => {
                  inputRef[input.name] = node
                }}
                onInvalid={(e) => e.target.type === "email" ? e.target.setCustomValidity("Digite um email válido") : e.target.setCustomValidity("Campo obrigatório")}
                onInput={(e) => e.target.setCustomValidity("")}
              />
          )}
          {error && <span className="error-message">Essas credenciais não correspondem aos nossos registros.</span>}
          <Input type="submit" value="Entrar" className="btn info full" />
          <Link to="/register" className="btn full info text-center text-white">Ainda não tem conta? Crie Agora!</Link>
          <Button onClick={history.goBack} complement="btn full send-forms text-center" >Voltar</Button>
        </form>
      )}
    </Container>
  );
}
