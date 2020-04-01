import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin';
import Button from '@material-ui/core/Button';
import { TopToolbar, ShowButton } from 'react-admin';

const EditMovieTitle = ({ record }) => {
  return <span>Editing: {record ? `${record.title}` : ''}</span>;
};

let customAction = (resource, params) => {
  console.log("Submitted");
}


const PostEditActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <ShowButton basePath={basePath} record={data} />
    <Button color="primary" onClick={customAction}>Custom Action</Button>
  </TopToolbar>
);

const MovieEdit = props => (
  <Edit {...props} title={<EditMovieTitle/>} actions={<PostEditActions />}>
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
