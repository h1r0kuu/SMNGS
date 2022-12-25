import {Controller, useForm} from "react-hook-form";
import {BreadcrumbItem, Col, FormGroup, FormLabel} from "react-bootstrap";
import React from "react";
import Page from "../../../../components/Page/Page";
import AddOrEdit from "../../../../components/AddOrEdit/AddOrEdit";
import FormGroupController from "../../../../components/Form/FormGroup/FormGroupController";
import {BookResponse} from "../../../../types/book";
import {useFetchAuthors} from "../../../../hooks/library/authors/useFetchAuthors";
import {useFetchCategories} from "../../../../hooks/categories/useFetchCategories";
import {Autocomplete, TextField} from "@mui/material";

const AddBook = () => {
    const {authors} = useFetchAuthors()
    const {categories} = useFetchCategories()

    const {control, register, handleSubmit, formState: {errors}} = useForm<BookResponse>()

    const onSubmit = (data: BookResponse) => {
        console.log(data)
    }

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Books</BreadcrumbItem>
                <BreadcrumbItem active>Add Book</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Add Book"} breadcrumbs={breadCrumbs()}>
            <AddOrEdit handleSubmit={handleSubmit(onSubmit)}>
                <Col xs={12}>
                    <h5 className="form-title"><span>Book Information</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"file"}
                        register={register}
                        control={control}
                        error={errors.title}
                        name={"title"}
                        title={"Book title"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Authors</FormLabel>
                        <Controller
                            control={control}
                            name={"authors"}
                            render={({ field: { onChange, value } }) => (
                                <Autocomplete
                                    multiple
                                    id="tags-outlined"
                                    options={authors}
                                    getOptionLabel={(author) => `${author?.firstName} - ${author.lastName}`}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Author"
                                            placeholder="Author"
                                        />
                                    )}
                                    onChange={(event, values, reason) => onChange(values)}
                                />
                            )}
                        />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Category</FormLabel>
                        <Controller
                            control={control}
                            name={"category"}
                            render={({ field: { onChange, value } }) => (
                                <Autocomplete
                                    multiple
                                    id="tags-outlined"
                                    options={categories}
                                    getOptionLabel={(category) => category.title}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Category"
                                            placeholder="Category"
                                        />
                                    )}
                                    onChange={(event, values, reason) => onChange(values)}
                                />
                            )}
                        />
                    </FormGroup>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default AddBook