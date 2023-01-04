import {Controller, useForm} from "react-hook-form";
import {BreadcrumbItem, Button, Col, Form, FormGroup, FormLabel} from "react-bootstrap";
import React from "react";
import Page from "../../../../components/Page/Page";
import AddOrEdit from "../../../../components/AddOrEdit/AddOrEdit";
import FormGroupController from "../../../../components/Form/FormGroup/FormGroupController";
import {BookRequest, BookResponse} from "../../../../types/book";
import {useFetchAuthors} from "../../../../hooks/library/authors/useFetchAuthors";
import {useFetchCategories} from "../../../../hooks/categories/useFetchCategories";
import {Autocomplete, TextField} from "@mui/material";
import {BookService} from "../../../../services/bookService";
import {useFetchPublishers} from "../../../../hooks/publishers/useFetchPublishers";

const AddBook = () => {
    const {authors} = useFetchAuthors()
    const {categories} = useFetchCategories()
    const {publishers} = useFetchPublishers()

    const {control, register, handleSubmit, formState: {errors}} = useForm<BookRequest>()

    const onSubmit = (data: BookRequest) => {
        if(data.frontPicture !== undefined)
            data.frontPicture = data.frontPicture[0]

        BookService.create(data).then(res => {
            console.log(res)
        })
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
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.title}
                        name={"title"}
                        title={"Book title"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"file"}
                        register={register}
                        control={control}
                        error={errors.frontPicture}
                        name={"frontPicture"}
                        title={"Book picture"}
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
                                    getOptionLabel={(author) => `${author?.firstName} ${author.lastName}`}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Author"
                                            placeholder="Author"
                                        />
                                    )}
                                    isOptionEqualToValue={(opt, value) => opt.id === value.id}
                                    onChange={(event, values, reason) => {
                                        const authorIds = values.map(author => author.id);
                                        onChange(authorIds);
                                    }}
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
                            name={"genres"}
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
                                    isOptionEqualToValue={(opt, value) => opt.id === value.id}
                                    onChange={(event, values, reason) => {
                                        const categoriesId = values.map(genre => genre.id);
                                        onChange(categoriesId);
                                    }}
                                />
                            )}
                        />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Publisher</FormLabel>
                        <Form.Select className="form-control" {...register("publisher")}>
                            {publishers.map(publisher => (
                                <option value={publisher.id}>{publisher.title}</option>
                            ))}
                        </Form.Select>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default AddBook