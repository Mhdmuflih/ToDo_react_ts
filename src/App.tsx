import { useState } from 'react';
import './App.css';
import { ImageHeader } from './components/ImageHeader';
import Input from './components/Input';
import Button from './components/Button';
import { type Items } from './types/utils';
import ItemList from './components/ItemList';



function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<Items[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setItems((prev) => [...prev, { title: inputValue, id: Date.now().toString() }]);
    setInputValue("");
  }



  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <ImageHeader />

      <div className='w-[350px]'>
        <form className='mb-5 flex space-x-2' onSubmit={handleSubmit}>
          <Input inputValue={inputValue} setInputValue={setInputValue} />
          <Button className='bg-gray-500 text-white font-bold py-2 px-4 rounded' > Add </Button>
        </form>
        <div className=' h-52 overflow-y-auto'>
          <ItemList items={items} setItems={setItems} />
        </div>
      </div>

    </div>
  )
}

export default App;
