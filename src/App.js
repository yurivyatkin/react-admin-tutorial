import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit } from './posts';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
