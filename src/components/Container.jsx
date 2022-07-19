const Container = ({ children }) => {
  //grid grid-cols-11 grid-rows-[repeat(20,_minmax(0,_1fr))]
  return (
    <div className='flex flex-row flex-wrap min-w-80 w-80 border-t border-l border-black'>
      {children}
    </div>
  );
};
export default Container;
