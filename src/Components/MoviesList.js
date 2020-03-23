import React from 'react';
import { List, Datagrid, TextField, DateField, NumberField, EditButton } from 'react-admin';

const MoviesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <NumberField source="avg_score" />
      <TextField source="movie_img" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <EditButton />
    </Datagrid>
  </List>
);

export default MoviesList
