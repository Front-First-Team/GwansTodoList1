import React from "react"
import { Outlet, useLocation } from "react-router-dom"

const LAYOUT_METADATE = {
    "/": {
        header: true,
        footer: true,
    },
    "/todo": {
        header: false,
        footer: true,
    },
};

function dynamicLayoutMetadata(pathname) {
    console.log(pathname.split("/"));
    const basePath = pathname.split("/").slice(0, 2).join('/');
    return LAYOUT_METADATE[basePath];
}

const RootLayout = () => {
    const location = useLocation();
    console.log(location.pathname)
    const metadata = dynamicLayoutMetadata(location.pathname);
    console.log(metadata)


    //Outlet
    return <>
        {metadata.header && <header>header</header>}
        <Outlet>
            {/**원래는 여기에 Main 이랑 Todo가 와야한다 */}
        </Outlet>
        {metadata.footer && <footer>footer</footer>}
    </>
}
export default RootLayout