'use client';
import Image from 'next/image';
import { Card } from 'flowbite-react';
import logo from '../../../public/logo/Logo.jpeg';
import TableData from './TableData';

const VotingData = () => {
  return (
    <div className='mt-10'>
      <div className='flex gap-5'>
        <Image
          src={logo}
          className='ml-4 rounded-md'
          height={200}
          width={200}
          alt='School Logo'
        />
        <div className='flex gap-5'>
          <div>
            <Card href='#' className='max-w-sm'>
              <h2 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Election Commision
              </h2>
              <h3 className='font-normal text-xl text-gray-700 dark:text-gray-400'>
                Rojavanam International School
              </h3>
            </Card>
          </div>
          <div>
            <Card href='#' className='max-w-sm'>
              <h2 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Electronic Voting Machine
              </h2>
              <h3 className='font-normal text-xl text-gray-700 dark:text-gray-400'>
                Admin Portal
              </h3>
            </Card>
          </div>
        </div>
      </div>
      <TableData />
    </div>
  );
};

export default VotingData;
