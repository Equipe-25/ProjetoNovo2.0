const rota = [
  {
    path: '/',
    component: () => import('layouts/Cadastro.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }

]

export default rota
