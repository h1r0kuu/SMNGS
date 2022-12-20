import {BreadcrumbItem} from "react-bootstrap";
import Page from "../../../../components/Page/Page";
import React from "react";
import SubjectList from "../../../../components/List/SubjectList/SubjectList";
import {useFetchGroupSubjects} from "../../../../hooks/groups/useFetchGroupSubjects";
import {useCurrentUser} from "../../../../context/UserContext";
import {useFetchSingleStudent} from "../../../../hooks/students/useFetchSingleStudent";

const StudentSubjectList = () => {
    const {user} = useCurrentUser()
    const {student} = useFetchSingleStudent(user.id)
    const {subjects, pagination, isLoading} = useFetchGroupSubjects(student?.group.id || 0)

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Subjects</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Teachers"} breadcrumbs={breadCrumbs()}>
            <SubjectList subjects={subjects} pagination={pagination} isLoading={isLoading} />
        </Page>
    )
}

export default StudentSubjectList