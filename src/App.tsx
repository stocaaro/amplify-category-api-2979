import { useState } from 'react'
import './App.css'
import { Amplify } from 'aws-amplify';
import config from '../amplify_outputs.json'
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../amplify/data/resource';

Amplify.configure(config)

const client = generateClient<Schema>();

function App() {
  const [count, setCount] = useState(0)

  const func = async () => {
    console.log('test')
    const { data } = await client.queries.listCommits();
    console.log(data)
  }

  return (
    <>
      <button onClick={func}>Test button</button>
    </>
  )
}

export default App
