import Header from '@/shared/Header/Header';
import Form from '@/widget/ui/Form/Form';
import TodoList from '@/widget/ui/TodoList/TodoList';
import { View } from 'react-native';

import store from '../entities/redux/store/store';
import { Provider } from 'react-redux';

export default function index() {
  return (
    <Provider store={store}>
      <View>
        <Header title="Клинкар TODO"></Header>
        <Form />
        <TodoList />
      </View>
    </Provider>
  );
}
