import {useForm} from "react-hook-form";
import {BreadcrumbItem, Button, Col} from "react-bootstrap";
import Page from "../../../../components/Page/Page";
import AddOrEdit from "../../../../components/AddOrEdit/AddOrEdit";
import FormGroupController from "../../../../components/Form/FormGroup/FormGroupController";
import React from "react";
import {BookAuthorRequest} from "../../../../types/bookAuthor";
import {AuthorService} from "../../../../services/authorService";

const AddAuthor = () => {
    const {control, register, handleSubmit, formState: {errors}} = useForm<BookAuthorRequest>()

    const onSubmit = (data: BookAuthorRequest) => {
        AuthorService.create(data).then(res => {
            console.log(res)
        })
    }

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Author</BreadcrumbItem>
                <BreadcrumbItem active>Add Author</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Add Author"} breadcrumbs={breadCrumbs()}>
            <AddOrEdit handleSubmit={handleSubmit(onSubmit)}>
                <Col xs={12}>
                    <h5 className="form-title"><span>Author Information</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.firstName}
                        name={"firstName"}
                        title={"First Name"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.lastName}
                        name={"lastName"}
                        title={"Last Name"}
                    />
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default AddAuthor