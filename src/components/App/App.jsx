import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import styles from './App.module.css';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.subtitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Provider>
  );
}

export default App;