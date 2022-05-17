export default{
    path:'/order',
    component : () => import('@/views/Order'),
    children:[
        {
            path:'all',
            component:()=>import('@/components/All')
        },
        {
            path:'unpaid',
            component:()=>import('@/components/Unpaid')
        },
        {
            path:'finish',
            component:()=>import('@/components/Finish')
        },
        {
            path:'/order',
            redirect:'all'
        }
    ]
}