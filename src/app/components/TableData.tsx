'use client';

import { useEffect, useState } from 'react';

import { Table, Spinner } from 'flowbite-react';

function TableData() {
  const [list, setList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await fetch(
        'https://ris-evm-3o-default-rtdb.firebaseio.com/.json'
      );

      const response = await data.json();

      if (response) {
        setIsLoading(false);
        setList(response);
      }
    };

    getData();
  }, []);

  console.log(list);

  const nameList = Object.keys(list).map((data) => {
    return { id: data, userDetails: list[data] };
  });

  console.log(nameList);

  return (
    <div>
      {isLoading ? (
        <Spinner size='xl' className='w-[50%] mt-10 ml-[19rem] text-2xl' />
      ) : (
        <Table className='mt-6'>
          <Table.Head>
            <Table.HeadCell className='text-xl'>Candidate</Table.HeadCell>
            <Table.HeadCell className='text-xl'>Votes</Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {nameList?.map((data) => (
              <Table.Row
                key={data.id}
                className='bg-white dark:border-gray-700 dark:bg-gray-800'
              >
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  {data.userDetails.name}
                </Table.Cell>
                <Table.Cell className='text-xl font-semibold'>
                  {data.userDetails.value}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </div>
  );
}

export default TableData;
