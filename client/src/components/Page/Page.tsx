import React, {FC, ReactElement} from "react";
import Header from "../Header/Header";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import PageHeader from "../PageHeader/PageHeader";
import {BreadcrumbItem} from "react-bootstrap";
import Footer from "../Footer/Footer";

interface PageProps {
    title: string,
    breadcrumbs: ReactElement | ReactElement[],
    children: ReactElement | ReactElement[]
}

const Page: FC<PageProps> = ({title, breadcrumbs, children}): ReactElement => {
    return (
        <div className="main-wrapper">
            <Header/>
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
        </div>
    )
}

export default Page;