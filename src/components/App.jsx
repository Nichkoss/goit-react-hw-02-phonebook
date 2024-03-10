import { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import {Filter} from './Filter/Filter'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(this.state.name);
  };

  handleBtnSubmit = e => {
    e.preventDefault();
    const { name, contacts, number } = this.state;

    const findContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (findContact) {
      alert(`${name} is already in contact.`);
      return;
    }

    const id = nanoid();
    const newContact = { id, name, number };
    const updatedContacts = [...contacts, newContact];
    this.setState({
      contacts: updatedContacts,
      name: '',
      number: '',
    });
  };

  filterContacts = () => {
    const getFiltered = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return this.state.filter === '' ? this.state.contacts : getFiltered;
  }

  render() {
  
    return (
      <div className={css.container}>
        <Form
          onChange={this.handleChange}
          onSubmit={this.handleBtnSubmit}
          nameValue={this.state.name}
          telValue={this.state.number}
        />

        <Filter onChange={this.handleChange} />
        <h3>Contacts</h3>
        <ul>
          {this.filterContacts().length>0?(this.filterContacts().map(el => (
            <li key={el.id}>
              {el.name}: {el.number}
            </li>
          ))): <p>There are not contacts...</p>}
          {}
        </ul>
      </div>
    );
  }
}
