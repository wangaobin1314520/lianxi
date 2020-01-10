import Login from "../views/Login/Login.js";
import Home from "../views/Home/Home.js";
import Tab1 from "../views/Home/Pages/Tab1.js";
import Tab2 from "../views/Home/Pages/Tab2.js";
import Tab3 from "../views/Home/Pages/Tab3.js";

const routes = [
    {
        path:"/",
        redirect:"/login"
    },
    {
        path:"/login",
        component: Login
    },
    {
        path:"/home",
        component: Home,
        children:[
            {
                path:"/home",
                redirect:"/home/tab1"
            },
            {
                path:"/home/tab1",
                component:Tab1
            },
            {
                path:"/home/tab2",
                component:Tab2
            },
            {
                path:"/home/tab3",
                component:Tab3
            }
        ]
    }
]

export default routes