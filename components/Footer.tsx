import Center from './UI/Center';

function Footer() {
  return (
    <footer className='bg-black border-t border-gray-800'>
      <Center>
        <div className=' py-12 md:flex md:items-center md:justify-between lg:px-8'>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-gray-500'>
              &copy; 2023 Ali Sultani. All rights reserved.
            </p>
          </div>
        </div>
      </Center>
    </footer>
  );
}

export default Footer;
