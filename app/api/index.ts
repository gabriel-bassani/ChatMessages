import axios from 'axios';

// Crie uma instância do axios com a configuração base
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // URL do backend vinda do .env
  timeout: 5000, // Tempo limite para requisições (opcional)
});

// Interceptores de requisição (opcional)
// Aqui você pode adicionar headers ou autenticação, por exemplo:
// api.interceptors.request.use(
//   (config) => {
    // Adicionar tokens de autenticação se necessário
    // config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Interceptores de resposta (opcional)
// Aqui você pode lidar com erros de forma centralizada
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error('API Error:', error.response);
//     return Promise.reject(error);
//   }
// );

// Função para enviar mensagem XMPP
// export const sendMessage = async (to, message) => {
//   try {
//     const response = await api.post('/xmpp/send', { to, message });
//     return response.data;
//   } catch (error) {
//     console.error('Error sending message:', error);
//     throw error;
//   }
// };

// Outras funções da API podem ser adicionadas aqui
// Exemplo de uma requisição GET (se precisar no futuro):
// export const fetchData = async () => {
//   try {
//     const response = await api.get('/some-endpoint');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

export default api;
