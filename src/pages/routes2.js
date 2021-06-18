export default [
    { path: 'cadastro', name: 'cadastro', component: () => import('./Cadastro.vue') },
    { path: 'login', name: 'login', component: () => import('./auth/pages/Login.vue') },
    { path: 'esqueceu-a-senha', name: 'esqueceu-a-senha', component: () => import('./EsqueceuSenha.vue') },
]