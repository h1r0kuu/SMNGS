import AddOrEdit from "../../../../components/AddOrEdit/AddOrEdit";
import {BreadcrumbItem, Button, Col, FormGroup, FormLabel} from "react-bootstrap";
import FormGroupController from "../../../../components/Form/FormGroup/FormGroupController";
import {useForm} from "react-hook-form";
import Page from "../../../../components/Page/Page";
import React, {useState} from "react";
import {BookCategoryRequest} from "../../../../types/bookCategory";
import {CategoryService} from "../../../../services/categoryService";

const AddCategory = () => {

    const {control, register, handleSubmit, formState: {errors}} = useForm<BookCategoryRequest>()

    const onSubmit = (data: BookCategoryRequest) => {
        CategoryService.create(data).then(res => {
            console.log(res)
        })
    }

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Category</BreadcrumbItem>
                <BreadcrumbItem active>Add Category</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Add Category"} breadcrumbs={breadCrumbs()}>
            <AddOrEdit handleSubmit={handleSubmit(onSubmit)}>
                <Col xs={12}>
                    <h5 className="form-title"><span>Category Information</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.title}
                        name={"title"}
                        title={"Category Title"}
                    />
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default AddCategory