export default [
  {
    path: '/',
    name: 'Home',
    redirect: {name: "Dashboard"},
    component: () => import('@/views/Index'),
  },
  {
    path: '/dashboard',
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/pages/blank',
        name: 'Blank',
        component: () => import('@/views/pages/Blank.vue'),
      },

      {
        path: '/profile',
        name: "Profile",
        component: () => import('@/views/Profile.vue'),
      },
      {
        path: '/profile',
        name: "Profile",
        component: () => import('@/views/Profile.vue'),
      },
      {
        path: '/schedule',
        name: "Schedule",
        component: () => import('@/views/Schedule.vue'),
      },
      {
        path: '/voting',
        name: "Voting",
        component: () => import('@/views/Voting.vue'),
      },
      {
        path: '/services',
        name: "Services",
        component: () => import('@/views/Services.vue'),
      },
      
    ],
  },

  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/layouts/AuthenticationLayout.vue'),
    children: [
      {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/views/auth/Login.vue'),
      },
      {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/auth/Register.vue'),
      },
      {
        path: '/auth/forgot-password',
        name: 'ForgotPassword',
        component: () => import('@/views/auth/ForgotPassword.vue'),
      },
      {
        path: '/auth/reset-password',
        name: 'ResetPassword',
        component: () => import('@/views/auth/ResetPassword.vue'),
      },
      {
        path: '/auth/confirm-password',
        name: 'ConfirmPassword',
        component: () => import('@/views/auth/ConfirmPassword.vue'),
      },
      {
        path: '/auth/verify-email',
        name: 'VerifyEmail',
        component: () => import('@/views/auth/VerifyEmail.vue'),
      },
    ],
  },
]
