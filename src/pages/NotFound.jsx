import React from 'react';
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <div >
        <Text fontSize='6xl'>Sorry, no such page</Text>
        <Link to="/content">search again</Link>
    </div>
  );
}

export default NotFound;
