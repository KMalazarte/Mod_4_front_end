import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin';

const EditMovieTitle = ({ record }) => {
  return <span>Editing: {record ? `${record.title}` : ''}</span>;
};

const MovieEdit = props => (
  <Edit {...props} title={<EditMovieTitle/>}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <NumberInput source="avg_score" />
      <TextInput source="movie_img" />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
    </SimpleForm>
  </Edit>
);

export default MovieEdit
