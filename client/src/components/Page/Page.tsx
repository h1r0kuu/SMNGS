import React, {FC, ReactElement, useState} from "react";
import Header from "../Header/Header";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import PageHeader from "../PageHeader/PageHeader";
import Footer from "../Footer/Footer";

interface PageProps {
    title: string,
    breadcrumbs: ReactElement | ReactElement[],
    children: ReactElement | ReactElement[]
}

const Page: FC<PageProps> = ({title, breadcrumbs, children}): ReactElement => {
    const [mobileNav, setMobileNav] = useState(false)

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav)
    }

    return (
        <div className={`main-wrapper ${mobileNav ? "slide-nav" : ""}`}>
            <Header openMobileNav={toggleMobileNav}/>
            <SidebarMenu/>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <PageHeader title={title}>
                        {breadcrumbs}
                    </PageHeader>
                    {children}
                </div>
                <Footer/>
            </div>
            {mobileNav &&
                <div className="sidebar-overlay opened" onClick={() => toggleMobileNav()}></div>
            }
        </div>
    )
}

export default Page;