/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
import store from '../store'
export default [
  {
    path: '*',
    meta: {
      name: '',
      requiresAuth: false
    },
    redirect: {
      path: '/dashboard'
    }
  },
  // This  allows you to have pages apart of the app but no rendered inside the dash
  {
    path: '/',
    meta: {
      name: '',
      requiresAuth: false
    },
    
    component: () =>
      import(/* webpackChunkName: "routes" */ `@/views/LoginHome.vue`),
    // redirect if already signed in
    beforeEnter: (to, from, next) => {
      if (store.getters.authorized) {
        next('/dashboard')
  
      }
      
      else {
          next('/dashboard')
      }
    },
    children: [
      {
        path: '/',
        component: () => import(`@/components/LoginForm.vue`)
      }
    ]
  },
  // add any extra routes that you want rendered in the dashboard as a child below. Change toolbar names here
  {
    path: '/dashboard',
    meta: {
      name: 'Dashboard View',
      requiresAuth: false
    },
    component: () => import(`@/views/DashboardView.vue`),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import(`@/components/DashViews/Dashboard.vue`)
      },
      {
        path: 'user-profile',
        meta: {
          name: 'User Profile',
          requiresAuth: false
        },
        component: () => import(`@/components/DashViews/UserProfile.vue`)
      },
      {
        path: 'table-list',
        meta: {
          name: 'Table List',
          requiresAuth: false
        },
        component: () => import(`@/components/DashViews/SimpleTables.vue`)
      },
      {
        path: 'user-tables',
        meta: {
          name: 'User Table',
          requiresAuth: false
        },
        component: () => import(`@/components/DashViews/UsersTable.vue`)
      },
      {
        path: 'tablestest',
        meta: {
          name: 'Complex Tables test',
          requiresAuth: false
        },
        component: () => import(`@/components/DashViews/TableList.vue`)
      },
      {
        path: 'typography',
        meta: {
          name: 'Typography',
          requiresAuth: false
        },
        component: () => import(`@/components/DashViews/Typography.vue`)
      },
      {
        path: 'icons',
        meta: {
          name: 'Icons',
          requiresAuth: false
        },
        component: () => import(`@/components/DashViews/Icons.vue`)
      },
      
      {
        path: 'notifications',
        meta: {
          name: 'Notifications',
          requiresAuth: false
        },
        component: () => import(`@/components/DashViews/Notifications.vue`)
      },
      {
        path: 'messages',
        meta: {
          name: 'Messages',
          requiresAuth: false
        },
        component: () => import(`@/components/DashViews/Messages.vue`)
      },
      {
        path: 'rejected',
        meta: {
          name: 'Rejected',
          requiresAuth: false
        },
        component: () => import(`@/components/DashViews/Rejected.vue`)
      },
      {
        path: 'logout',
        meta: {
          name: 'Log out',
          requiresAuth: false
        },
        component: () => import(`@/components/LoginForm.vue`)
      }
    ]
  }

  
]
