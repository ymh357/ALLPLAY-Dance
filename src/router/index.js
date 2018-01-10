import Vue from 'vue'
import Router from 'vue-router'
import HomeContent from '../components/HomeContent.vue'
import MapPage from '../components/MapPage.vue'
import CoursePage from '../components/CoursePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeContent',
      component: HomeContent
    },
      {
        path: '/map',
          name: 'Map',
          component: MapPage
      },
      {
        path: '/course',
          name: 'Course',
          component: CoursePage,
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
