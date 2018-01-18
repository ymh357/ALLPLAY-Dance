import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import MapPage from '../pages/MapPage.vue'
import CoursePage from '../pages/CoursePage.vue'


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
          component: CoursePage
          /*children: [
              {
                path: 'course1',
                  component: CourseVideo
              },
              {
                  path: '',
                  component: CourseOverview
              }
          ]*/
      }
  ]
})
