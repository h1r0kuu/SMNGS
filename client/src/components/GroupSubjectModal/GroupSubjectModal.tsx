import React, {FC, ReactElement} from "react";
import {Autocomplete, Box, Modal, TextField} from "@mui/material";
import {Button, Col, FormGroup, FormLabel} from "react-bootstrap";
import AddOrEdit from "../AddOrEdit/AddOrEdit";
import {useFetchSubjects} from "../../hooks/subjects/useFetchSubjects";
import {useFetchTeachers} from "../../hooks/teachers/useFetchTeachers";
import {useForm} from "react-hook-form";

import {SubjectService} from "../../services/subjectService"
import {TeacherSubjectRequest} from "../../types/subject";

interface GroupSubjectModalProps {
    open: boolean,
    onClose: () => void,
}

const GroupSubjectModal: FC<GroupSubjectModalProps> = ({ open,  onClose}): ReactElement => {
    const {subjects} = useFetchSubjects()
    const {teachers} = useFetchTeachers()

    const {handleSubmit, setValue} = useForm<TeacherSubjectRequest>()

    const onSubmit = (data: TeacherSubjectRequest) => {
        SubjectService.createTeacherSubject(data).then(res => {
            console.log(res)
        })
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={"modal-tab"}>
                <AddOrEdit handleSubmit={handleSubmit(onSubmit)}>
                    <Col xs={12}>
                        <h5 className="form-title"><span>Add group subject</span></h5>
                    </Col>
                    <Col xs={12} sm={6}>
                        <FormGroup className="form-group">
                            <FormLabel>Subjects</FormLabel>
                                <Autocomplete
                                    id="tags-outlined"
                                    options={subjects}
                                    getOptionLabel={(subject) => subject.subjectName}
                                    onChange={(e, options) => setValue('subjectId', Number(options?.id))}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Subjects"
                                            placeholder="Subject Name"
                                        />
                                    )}
                                />
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6}>
                        <FormGroup className="form-group">
                            <FormLabel>Teachers</FormLabel>
                            <Autocomplete
                                id="tags-outlined"
                                options={teachers}
                                getOptionLabel={(teacher) => teacher.firstName + " " + teacher.lastName}
                                onChange={(e, options) => setValue('teacherId', Number(options?.id))}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Teachers"
                                        placeholder="Teacher Name"
                                    />
                                )}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        <Button type="submit">Submit</Button>
                    </Col>
                </AddOrEdit>
            </Box>
        </Modal>
    )
}

export default GroupSubjectModal