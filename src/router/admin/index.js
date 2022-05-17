export default{
    path:'/admin',
    component : () => import('@/views/Admin'),
    children:[
        {
            path:'users',
            component:() => import('@/views/Admin/users.vue')
        },
        {
            path:'logistics',
            component:() => import('@/views/Admin/logistics.vue')
        },
        {
            path:'/admin',
            redirect:'users'
        }
    ]
}