import React, { useState } from 'react'
import Accordion from './components/widgets/Accordion'
import Search from './components/widgets/Search';
import Dropdown from './components/widgets/Dropdown';
import Translate from './components/widgets/Translate';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import { items, options } from './data/widget-data';
import SongsApp from './components/songs-redux/App';
import CounterApp from './components/counter/App';
import BlogPostApp from './components/blog-posts/App';
import TodoApp from './components/todo-list/App';

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      <Header />
      <div className='ui grid container'>
        <div className='ui row'>
          <Route path='/accordion'>
            <Accordion items={items} />
          </Route>
          <Route path='/list'>
            <Search />
          </Route>
          <Route path='/dropdown'>
            <Dropdown
              label='Select a Color'
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
            />
          </Route>
          <Route path='/translate'>
            <Translate />
          </Route>
          <Route path='/songs-redux'>
            <SongsApp />
          </Route>
          <Route path='/counter'>
            <CounterApp />
          </Route>
          <Route path='/blog-post'>
            <BlogPostApp />
          </Route>
          <Route path='/todo-list'>
            <TodoApp />
          </Route>
        </div>
      </div>
    </>
  )
}

export default App