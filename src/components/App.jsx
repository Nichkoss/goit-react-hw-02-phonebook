import { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  handleChange = event => {
    this.setState({
      name: event.target.value,
    });
    // console.log(this.state.name);
  };

  handleBtnSubmit = (e) => {
    e.preventDefault();

    const { name, contacts } = this.state;

    // const filter = contacts.find(
    //   contact =>
    //     contact.name.toLowerCase() === name.toLowerCase() ||
    //     contact.number === number
    // );
    const findContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findContact) {
      alert(`${name} is already in contact.`);
      return;
    }

    const id = nanoid();
    const newContact = { id, name }; 
    const updatedContacts = [...contacts, newContact]; 
    this.setState({
      contacts: updatedContacts, 
      name: '',
    });
  };

  render() {
    return (
      <div className={css.container}>
        <Form onChange={this.handleChange} onSubmit={this.handleBtnSubmit} nameValue={this.state.name} />
        <h3>Contacts</h3>
        <ul>
          {this.state.contacts.map(el => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
