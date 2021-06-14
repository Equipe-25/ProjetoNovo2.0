const routes = [
  {
    path: '/',
    component: () => import('../layouts/SecondLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'cadastro', name: 'cadastro', component: () => import('pages/Cadastro.vue') },
      { path: 'esqueceu-a-senha', name: 'esqueceu-a-senha', component: () => import('pages/EsqueceuSenha.vue') }
      // { path: '', name: 'login', component: () => import('pages/login/login.vue') },
      // { path: 'cadastrar', name: 'signUp', component: () => import('pages/sign-up.vue') },
      // { path: 'esqueci-senha', name: 'forgotPassword', component: () => import('pages/forgot-password.vue') },
      // { path: 'resetar-senha', name: 'resetPassword', component: () => import('pages/reset-password.vue') },
      // { path: 'sair', name: 'logout', component: () => import('pages/sign-out.vue') },
      // { path: 'home', name: 'home', component: () => import('pages/home.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'home', component: () => import('pages/Home.vue') },
      { path: 'fale-conosco', name: 'fale-conosco', component: () => import('pages/FaleConosco.vue') },
      { path: 'sobre-nos', name: 'sobre-nos', component: () => import('pages/SobreNos.vue') },
      { path: 'perfil', name: 'perfil', component: () => import('pages/Perfil.vue') },
      { path: 'comunidade', name: 'comunidade', component: () => import('pages/Comunidade.vue') },
      { path: 'configuracoes', name: 'configuracoes', component: () => import('pages/Configuracoes.vue') }
    ]
  },
  // {
  //   path: '/',
  //   component: () => import('src/pages/Login.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // },
  // {
  //   path: '*',
  //   component: () => import('layouts/Feed.vue')
  // },
  // {
  //   path: '/',
  //   component: () => import('src/pages/Cadastro.vue')
  // },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
