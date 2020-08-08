import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import GifCards from './Components/GifCards/GifCards';
import PaginationComponent from './Components/PaginationComponent/PaginationComponent';
import getGifsByPage, { GifItem } from './api/gifsearch';
import Tags from './Components/Tags/Tags';
import getShuffledTags from './helpers/shuffleTags';
import Copyright from './Components/Copyright/Copyright';
import { Container } from '@material-ui/core';


function App() {
  const [userInput, setUserInput] = useState<string>('');
  const [items, setItems] = useState<Array<GifItem>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(10);
  const shuffledTags = getShuffledTags();

  useEffect(() => {
    if (userInput === '') {
      setItems([]);
    }

    if (userInput.length < 3) {
      return;
    }

    (async () => {
      const gifs = await getGifsByPage(userInput, currentPage);

      setItems(gifs.items);
      setTotalPages(gifs.pagination.totalPages);
    })();
  }, [userInput, currentPage]);

  return (
    <div className="App">
      <Container>
        <SearchBar
          setUserInput={(value: string) => setUserInput(value)}
          onReset={() => {
            setUserInput('');
            setItems([]);
          }}
          userInput={userInput}
        />
        {!userInput && <Tags
          shuffledTags={shuffledTags}
          onClick={(tag:string) => setUserInput(tag)}
        />}
        {userInput && <GifCards
          items={items}
        />}
        {items.length > 0 && totalPages > 1 && <PaginationComponent
          page={currentPage}
          pages={totalPages}
          onChange={(page: number) => setCurrentPage(page)}
        />}
        <Copyright/>
      </Container>
    </div>
  );
}

export default App;
