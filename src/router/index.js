import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import MapPage from '../pages/MapPage.vue'
import CoursePage from '../pages/CoursePage.vue'

import Course1 from '../components/Course1.vue'
import Course2 from '../components/Course2.vue'
import Course3 from '../components/Course3.vue'
import CourseOverview from '../components/CourseOverview.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },{
          path: '/home',
          name: 'HomePage',
          component: HomePage
      },
      {
        path: '/videotour',
          name: 'VideoTour',
          component: MapPage
      },
      {
        path: '/course',
          name: 'Course',
          component: CoursePage,
          children: [
              {
                path: '1',
                  component: Course1
              },
              {
                  path: '2',
                  component: Course2
              },
              {
                  path: '3',
                  component: Course3
              },
              {
                path: '',
                  component:CourseOverview
              }
          ]
      }
  ]
})
