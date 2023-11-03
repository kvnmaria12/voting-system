'use client';

import { useEffect, useState } from 'react';

import { Table } from 'flowbite-react';

function TableData() {
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        'https://ris-evm-3o-default-rtdb.firebaseio.com/.json'
      );

      const response = await data.json();

      setList(response);
    };

    getData();
  }, []);

  console.log(list);

  const nameList = Object.keys(list).map((data) => {
    return { id: data, userDetails: list[data] };
  });

  console.log(nameList);

  return (
    <Table className='mt-6'>
      <Table.Head>
        <Table.HeadCell className='text-xl'>Candidate</Table.HeadCell>
        <Table.HeadCell className='text-xl'>Votes</Table.HeadCell>
      </Table.Head>
      <Table.Body className='divide-y'>
        {nameList?.map((data, index) => {
          return (
            <Table.Row
              key={index}
              className='bg-white dark:border-gray-700 dark:bg-gray-800'
            >
              <Table.Cell
                key={index}
                className='whitespace-nowrap font-medium text-gray-900 dark:text-white'
              >
                {data.userDetails.name}
              </Table.Cell>
              <Table.Cell key={index} className='text-xl font-semibold'>
                {data.userDetails.value}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default TableData;
