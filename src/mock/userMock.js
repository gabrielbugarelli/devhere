import mock from '../utils/mock';

mock.onPost('/api/home/login').reply((config) => {

  const { email, password } = JSON.parse(config.data);

  if (email !== 'gabrielfonsecaoficial@gmail.com' || password !== '123') {
    return [400, { message: 'Seu email ou senha estão incorretos!' }]
  }

  const user = {
    id: 1,
    name: 'Gabriel Fonseca',
    username: 'gabrielfonseca',
    email: 'gabrielfonsecaoficial@gmail.com',
    avatar: '/images/avatars/avatar_gabriel.jpg'
  }

  return [200, { user }]
})