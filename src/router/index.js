import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import MapPage from '../pages/MapPage.vue'
import CoursePage from '../pages/ClassPage.vue'

import Class1 from '../components/Class1.vue'
import Class2 from '../components/Class2.vue'
import Class3 from '../components/Class3.vue'
import ClassOverview from '../components/ClassOverview.vue'

import PointImg1 from '../components/PointImg1.vue'
import PointImg2 from '../components/PointImg2.vue'
import PointImg3 from '../components/PointImg3.vue'

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
          component: MapPage,
          children: [
              {
                  path: '1',
                  component: PointImg1
              },
              {
                  path: '2',
                  component: PointImg2
              },
              {
                  path: '3',
                  component: PointImg3
              }
          ]
      },
      {
        path: '/class',
          name: 'Class',
          component: CoursePage,
          children: [
              {
                path: '1',
                  component: Class1
              },
              {
                  path: '2',
                  component: Class2
              },
              {
                  path: '3',
                  component: Class3
              },
              {
                path: '',
                  component:ClassOverview
              }
          ]
      }
  ]
})
