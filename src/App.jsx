import { useEffect, useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';

// const getLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     list = JSON.parse(list);
//   } else {
//     list = [];
//   }
//   return list;
// };

const setLocalStorage = items => {
  localStorage.setItem('list', JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = itemName => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success(`${newItem.name} added`);
  };

  const removeItem = (itemId, itemName) => {
    const newItems = items.filter(item => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success(`${itemName} deleted`);
  };

  const editItem = itemId => {
    const newItems = items.map(item => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  // useEffect(() => {
  //   const storedList = localStorage.getItem('list');
  //   if (storedList) {
  //     setItems(JSON.parse(storedList));
  //   }
  // }, []);

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
