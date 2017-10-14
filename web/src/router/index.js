import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'
import Event from '@/components/Event'
import History from '@/components/History'
import Members from '@/components/Members'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/event',
      name: 'Event',
      component: Event
    }, {
      path: '/history',
      name: 'History',
      component: History
    }, {
      path: '/members',
      name: 'Members',
      component: Members
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
