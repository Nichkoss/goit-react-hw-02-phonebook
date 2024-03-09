import { Component } from "react"
import css from './Form.module.css'

export class Form extends Component {
  render() {
    const { onChange, onSubmit, nameValue} = this.props;

    return (
      <form onSubmit={onSubmit} className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <input
            className={css.input}
            type="text"
            name="name"
            value={nameValue}
            onChange={onChange}
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}