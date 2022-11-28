import React, {FC, ReactElement, useState} from "react";
import Header from "../Header/Header";
import PageHeader from "./PageHeader/PageHeader";
import Footer from "../Footer/Footer";
import TeacherSidebar from "../SidebarMenu/TeacherSidebar";
import {UserRole} from "../../enums/userRole";
import StudentSidebar from "../SidebarMenu/StudentSidebar";
import AdminSidebar from "../SidebarMenu/AdminSidebar";
import {useCurrentUser} from "../../context/UserContext";

interface PageProps {
    title: string,
    breadcrumbs: ReactElement | ReactElement[],
    children: ReactElement | ReactElement[]
}

const Page: FC<PageProps> = ({title, breadcrumbs, children}): ReactElement => {
    const [mobileNav, setMobileNav] = useState(false)
    const user = useCurrentUser()

    const sidebar = () => {
        if(user.role === UserRole.ADMIN) {
           return <AdminSidebar />
        } else if(user.role === UserRole.TEACHER) {
            return <TeacherSidebar />
        } else if(user.role === UserRole.STUDENT) {
            return <StudentSidebar />
        } else if(user.role=== UserRole.HELPER) {
            return <></>
        } else {
            return <></>
        }
    }

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav)
    }

    return (
        <div className={`main-wrapper ${mobileNav ? "slide-nav" : ""}`}>
            <Header openMobileNav={toggleMobileNav}/>
            {sidebar()}
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