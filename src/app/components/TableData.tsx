'use client';

import { useEffect, useState } from 'react';

import useSWR from 'swr';

import { Table, Spinner } from 'flowbite-react';
import { fetcher } from '@/api';

function TableData() {
  const { data, error, isLoading } = useSWR('/.json', fetcher);

  let nameList;

  if (data) {
    nameList = Object.keys(data).map((value) => {
      return { id: data, userDetails: data[value] };
    });
  }

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
