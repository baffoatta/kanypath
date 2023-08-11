import {Home, AboutUs, Blog, ForEmployers, 
    ForWorkers, ContactUs} from '../pages/index'



    export const routes = [
        // Home Page
        {
            path: '/',
            exact: true,
            main: () => <Home />,
        },
        // About Page
        {
            path: '/about-us',
            main: () => <AboutUs />,
        },
        //Blog page
        {
            path: '/blog',
            main: () => <Blog />,
        },
        //For Employers page
        {
            path: '/for-employers',
            main: () => <ForEmployers />,
        },
        //For Workers page
        {
            path: '/for-workers',
            main: () => <ForWorkers />,
        },
        //Contact Us page
        {
            path: '/contact',
            main: () => <ContactUs />,
        }
    ]



