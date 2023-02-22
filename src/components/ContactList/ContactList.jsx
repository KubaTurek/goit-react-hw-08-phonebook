import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../Redux/operations.js';
import { useEffect, useState } from 'react';
import editIcon from './../../images/edit.png';
import { selectFilteredContacts } from './../../Redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isModalOpen && (
        <div
          className={css.overlay}
          data-name="overlay"
          visible={isModalOpen}
          onClick={e => {
            if (e.target.dataset.name === 'overlay') {
              handleClose();
            }
          }}
        >
          <div className={css.modal} visible={isModalOpen}>
            <p className={css.label}>
              <b>Edit name</b>
            </p>
            <input type="text" name="name" className={css.input} />
            <p className={css.label}>
              <b>Edit number</b>
            </p>
            <input type="tel" name="number" className={css.input} />
            <button
              type="button"
              name="close-button"
              className={css.close__button}
              onClick={() => handleClose()}
            >
              Save
            </button>
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
                      onClick={() => handleOpen()}
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
