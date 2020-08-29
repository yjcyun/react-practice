import React, { useState } from 'react'
import Accordion from './components/widgets/Accordion'
import Search from './components/widgets/Search';
import Dropdown from './components/widgets/Dropdown';
import Translate from './components/widgets/Translate';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import { items, options } from './data/widget-data';


const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      <Header />
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
    </>
  )
}

export default App