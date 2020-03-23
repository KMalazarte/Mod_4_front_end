import React from 'react';
import { List, Datagrid, TextField, DateField, NumberField, ReferenceField, EditButton } from 'react-admin';

const ReviewsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="r_comment" />
      <NumberField source="r_score" />
      <ReferenceField source="movie_id" reference="movies"><TextField source="title" /></ReferenceField>
      <ReferenceField source="user_id" reference="users"><TextField source="user_id"/></ReferenceField>
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <EditButton />
    </Datagrid>
  </List>
);

export default ReviewsList
