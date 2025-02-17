import { Provider } from 'react-redux';
import { setupStore } from '@/_stores/store';
import { Card } from '@/_components/ui/card';

const store = setupStore();

export default function Home() {
  return (
    <main>
      <Provider store={store}>
        <Card />
      </Provider>
    </main>
  );
}
