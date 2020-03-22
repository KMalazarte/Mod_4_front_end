import React from 'react';
import { List, Datagrid, TextField, DateField, NumberField } from 'react-admin';

const MoviesList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <NumberField source="avg_score" />
      <TextField source="movie_img" />
      <TextField source="user_comment" />
      <TextField source="user_score" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);

export default MoviesList
