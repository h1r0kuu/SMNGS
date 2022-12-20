import {BreadcrumbItem} from "react-bootstrap";
import Page from "../../../../components/Page/Page";
import TeacherList from "../../../../components/List/TeacherList/TeacherList";
import React from "react";
import {useFetchGroupTeachers} from "../../../../hooks/groups/useFetchGroupTeachers";
import {useCurrentUser} from "../../../../context/UserContext";
import {useFetchSingleStudent} from "../../../../hooks/students/useFetchSingleStudent";

const StudentTeacherList = () => {

    const {currentUser} = useCurrentUser()
    const {student} = useFetchSingleStudent(currentUser.id);
    console.log(student)
    const {teachers, pagination, isLoading} = useFetchGroupTeachers(student?.group.id || 0)

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Teachers</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Teachers"} breadcrumbs={breadCrumbs()}>
            <TeacherList teachers={teachers} pagination={pagination} isLoading={isLoading} />
        </Page>
    )
}

export default StudentTeacherList