import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin';

const MovieEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <NumberInput source="avg_score" />
      <TextInput source="movie_img" />
      <TextInput source="user_comment" />
      <TextInput source="user_score" />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
    </SimpleForm>
  </Edit>
);

export default MovieEdit
