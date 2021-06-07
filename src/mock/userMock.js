import mock from '../utils/mock';

mock.onPost('/api/home/login').reply(200, {
  'id': 1,
  'username': 'gabrielfonseca',
  'email': 'gabrielfonsecaoficial@gmail.com'
})