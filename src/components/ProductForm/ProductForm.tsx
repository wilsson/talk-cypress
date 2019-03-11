import * as React from 'react';
import axios from 'axios';
import { Image } from 'react-feather';

import {
    Wrapper,
    Form,
    Input,
    ButtonFile,
    InputFile,
    PictureBox,
    Picture,
    Button,
    Box
} from './styled';

const { useState, useRef } = React;

const serviceUpload = async (file, cb) => {
    let form = new FormData();
    form.append('file', file);
    const response = await axios.post('http://localhost:3000/upload', form);
    console.log('response image', response.data.data.name);
    cb('http://localhost:3000/' + response.data.data.name);
};

const service = async (data) => {
    const response = await axios.post('http://localhost:3000/create', data);
    console.log('response', response);
};

export const ProductForm = () => {
    const nameRef = useRef(null);
    const [ picture, setPicture ] = useState(null);
    const handleClick = (e) => {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            picture: 'http://localhost:3000/' + picture
        }
        console.log('data', data);
        service(data);
    };
    const handleChangeImage = (e) => {
        const [ file ] = e.target.files;
        console.log(file);
        serviceUpload(file, setPicture);
    };
    return(
        <Wrapper>
            <Box>
                <Form>
                    <h1 style={{textAlign: 'center'}}>Formulario</h1>
                    <Input type="text" data-test="name" ref={nameRef}/>
                    <ButtonFile>
                        Subir imagen
                        <Image style={{ marginLeft: 10 }} />
                        <InputFile type="file" data-test="image" onChange={handleChangeImage}/>
                    </ButtonFile>
                    { picture && 
                        <PictureBox>
                            <Picture src={picture} data-test="image-src" />
                        </PictureBox>
                    }
                    <Button data-test="button-create" onClick={handleClick}>Crear</Button>
                </Form>
            </Box>
        </Wrapper>
    )
};