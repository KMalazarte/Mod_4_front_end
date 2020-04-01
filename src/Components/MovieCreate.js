import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin';

const movieDefaultValue = { created_at: new Date(), updated_at: new Date() };

const MovieCreate = props => (
    <Create {...props} title="Create a Movie">
      <SimpleForm initialValues={movieDefaultValue}>
        <TextInput source="title" />
        <TextInput multiline source="description" />
        <NumberInput source="avg_score" />
        <TextInput source="movie_img" />
        <TextInput source="user_comment" />
        <TextInput source="user_score" />
        <DateInput source="created_at" />
        <DateInput source="updated_at" />
      </SimpleForm>
    </Create>
);

export default MovieCreate
