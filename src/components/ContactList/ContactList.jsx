import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../Redux/operations.js';
import { editContact } from '../../Redux/operations.js';
import { useEffect, useState } from 'react';
import editIcon from './../../images/edit.png';
import { selectFilteredContacts } from './../../Redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToEdit, setContactToEdit] = useState([]);

  const handleOpen = contact => {
    setContactToEdit({
      id: contact.id,
      name: contact.name,
      number: contact.number,
    });
    setIsModalOpen(true);
  };
  const handleClose = () => setIsModalOpen(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const refreshContact = e => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;
    const editedContact = { id: contactToEdit.id, name, number };
    dispatch(editContact(editedContact));
    handleClose();
  };

  return (
    <>
      {isModalOpen && (
        <div
          className={css.overlay}
          data-name="overlay"
          visible={isModalOpen.toString()}
          onClick={e => {
            if (e.target.dataset.name === 'overlay') {
              handleClose();
            }
          }}
        >
          <div className={css.modal} visible={isModalOpen.toString()}>
            <p className={css.label}>
              <b>Edit name</b>
            </p>
            <form onSubmit={e => refreshContact(e)}>
              <input
                type="text"
                name="name"
                className={css.input}
                defaultValue={contactToEdit.name}
              />
              <p className={css.label}>
                <b>Edit number</b>
              </p>
              <input
                type="tel"
                name="number"
                className={css.input}
                defaultValue={contactToEdit.number}
              />

              <button
                type="submit"
                name="close-button"
                className={css.close__button}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
      <div className={css.contacts}>
        <ul className={css.list}>
          {filteredContacts &&
            filteredContacts.map(contact => {
              return (
                <li className={css.li} key={contact.id}>
                  <div>
                    <span className={css.name}>{contact.name}</span>
                    <span className={css.number}>{contact.number}</span>
                  </div>
                  <div className={css.icons}>
                    <img
                      src={editIcon}
                      className={css.edit}
                      alt="edit"
                      width="16px"
                      onClick={() => handleOpen(contact)}
                    />
                    <button
                      type="button"
                      className={css.delete}
                      onClick={() => handleDeleteContact(contact.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
