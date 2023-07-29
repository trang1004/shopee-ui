import { Component } from "react";

//layouts
import { HeaderOnly } from "~/components/Layout";

//Page
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";


//public static
const publicRoutes=[
    { path:'/' , Component: Home },
    { path:'/following' , Component: Following },
    { path:'/profile' , Component: Profile ,layout: HeaderOnly},
    { path:'/upload' , Component: Upload, layout: HeaderOnly },
    { path:'/search' , Component: Search, layout: null },
]
const privateRoutes=[

]

export { publicRoutes, privateRoutes}