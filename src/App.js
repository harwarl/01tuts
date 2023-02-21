import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Shopping List')) || [])
  const [search, setSearch] = useState('');

  // useEffect(()=>{
  //   console.log('render');
  // })

  // useEffect(()=>{
  //   console.log('loadTime')
  // }, [])

  // useEffect(()=>{
  //   console.log('Items State')
  // }, [items])

  //using use Effect to save to local storage upon change in items

  useEffect(()=>{
    localStorage.setItem('Shopping List', JSON.stringify(items));
  }, [items])

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems);
  }

  const addItem = (item) =>{
    const id = items.length? items[items.length - 1].id + 1: 1;
    const myNewItem = {id: id, checked: false, item: item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">

      <Header title='Shopping List' />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem 
      search={search}
      setSearch={setSearch}
      />

      <Content
        items={(items.filter(item => (item.item.toLowerCase()).includes(search.toLowerCase())))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer
        length={items.length}
      />

    </div>
  );
}

export default App;
