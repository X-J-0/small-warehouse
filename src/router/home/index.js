export default{ 
    path:'/home',
    component : () => import('@/views/Home'),
    children:[
        {
            path:'findpassword',
            component:()=>import('@/components/FindPassword')
        },
        {
            path:'findpasswords',
            component:()=>import('@/components/FindPasswords')
        },
        {
            path:'login',
            component:()=>import('@/components/Login')
        },
        {
            path:'register',
            component:()=>import('@/components/Register')
        },
        {
            path:'registers',
            component:()=>import('@/components/Registers')
        },
    ]
}