export default [
    { path: '', name: 'home', component: () => import('./Home.vue') },
    { path: 'fale-conosco', name: 'fale-conosco', component: () => import('./FaleConosco.vue') },
    { path: 'sobre-nos', name: 'sobre-nos', component: () => import('./SobreNos.vue') },
    { path: 'perfil', name: 'perfil', component: () => import('./Perfil.vue') },
    { path: 'comunidade', name: 'comunidade', component: () => import('./Comunidade.vue') },
    { path: 'configuracoes', name: 'configuracoes', component: () => import('./Configuracoes.vue') },
    { path: 'redefinir-senha', name: 'redefinir-senha', component: () => import('./RedefinirSenha.vue') },
    { path: 'dicas', name: 'dicas', component: () => import('./Dicas.vue') },
];
    