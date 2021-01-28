import * as React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './users';
import { PostList } from './posts';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={EditGuesser} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
