import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import MapPage from '../pages/MapPage.vue'
import CoursePage from '../pages/ClassPage.vue'

import Class1 from '../components/Class1.vue'
import ClassOverview from '../components/ClassOverview.vue'

import PointImg0_0 from '../components/PointImg0_0.vue'
import PointImg0_1 from '../components/PointImg0_1.vue'
import PointImg0_2 from '../components/PointImg0_2.vue'
import PointImg1_0 from '../components/PointImg1_0.vue'
import PointImg1_1 from '../components/PointImg1_1.vue'
import PointImg1_2 from '../components/PointImg1_2.vue'
import PointImg1_3 from '../components/PointImg1_3.vue'
import PointImg1_4 from '../components/PointImg1_4.vue'
import PointImg1_5 from '../components/PointImg1_5.vue'
import PointImg1_6 from '../components/PointImg1_6.vue'
import PointImg1_7 from '../components/PointImg1_7.vue'
import PointImg1_8 from '../components/PointImg1_8.vue'
import PointImg2_0 from '../components/PointImg2_0.vue'
import PointImg3_0 from '../components/PointImg3_0.vue'
import PointImg4_0 from '../components/PointImg4_0.vue'
import PointImg4_1 from '../components/PointImg4_1.vue'
import PointImg4_2 from '../components/PointImg4_2.vue'
import PointImg5_0 from '../components/PointImg5_0.vue'
import PointImg5_1 from '../components/PointImg5_1.vue'
import PointImg5_2 from '../components/PointImg5_2.vue'
import PointImg6_0 from '../components/PointImg6_0.vue'

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
                  path: '0_0',
                  component: PointImg0_0
              },
              {
                  path: '0_1',
                  component: PointImg0_1
              },
              {
                  path: '0_2',
                  component: PointImg0_2
              },
              {
                  path: '1_0',
                  component: PointImg1_0
              },
              {
                  path: '1_1',
                  component: PointImg1_1
              },
              {
                  path: '1_2',
                  component: PointImg1_2
              },
              {
                  path: '1_3',
                  component: PointImg1_3
              },
              {
                  path: '1_4',
                  component: PointImg1_4
              },
              {
                  path: '1_5',
                  component: PointImg1_5
              },
              {
                  path: '1_6',
                  component: PointImg1_6
              },
              {
                  path: '1_7',
                  component: PointImg1_7
              },
              {
                  path: '1_8',
                  component: PointImg1_8
              },
              {
                  path: '2_0',
                  component: PointImg2_0
              },
              {
                  path: '3_0',
                  component: PointImg3_0
              },
              {
                  path: '4_0',
                  component: PointImg4_0
              },
              {
                  path: '4_1',
                  component: PointImg4_1
              },
              {
                  path: '4_2',
                  component: PointImg4_2
              },
              {
                  path: '5_0',
                  component: PointImg5_0
              },
              {
                  path: '5_1',
                  component: PointImg5_1
              },
              {
                  path: '5_2',
                  component: PointImg5_2
              },
              {
                  path: '6_0',
                  component: PointImg6_0
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
                path: '',
                  component:ClassOverview
              }
          ]
      }
  ]
})
