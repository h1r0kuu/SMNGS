import {BreadcrumbItem, Button, Col} from "react-bootstrap";
import React from "react";
import AddOrEdit from "../../../../components/AddOrEdit/AddOrEdit";
import FormGroupController from "../../../../components/Form/FormGroup/FormGroupController";
import Page from "../../../../components/Page/Page";
import {useForm} from "react-hook-form";
import {BookGenreRequest} from "../../../../types/bookCategory";
import {BookPublisherRequest} from "../../../../types/bookPublisher";
import {CategoryService} from "../../../../services/categoryService";
import {PublisherService} from "../../../../services/publisherService";

const AddPublisher = () => {
    const {control, register, handleSubmit, formState: {errors}} = useForm<BookPublisherRequest>()

    const onSubmit = (data: BookPublisherRequest) => {
        PublisherService.create(data).then(res => {
            console.log(res)
        })
    }

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Publisher</BreadcrumbItem>
                <BreadcrumbItem active>Add Publisher</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Add Publisher"} breadcrumbs={breadCrumbs()}>
            <AddOrEdit handleSubmit={handleSubmit(onSubmit)}>
                <Col xs={12}>
                    <h5 className="form-title"><span>Publisher Information</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.title}
                        name={"title"}
                        title={"Publisher Title"}
                    />
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default AddPublisher