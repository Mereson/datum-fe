import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ReactPaginate from 'react-paginate';

export const ListPagination = ({ totalPages, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={<MdKeyboardArrowLeft className='mx-1 py-1 w-[32px] h-[32px] flex text-center cursor-pointer border font-bold border-[#D0D4E7] rounded-lg' />}
      nextLabel={<MdKeyboardArrowRight className='mx-1 py-1 w-[32px] h-[32px] flex text-center cursor-pointer text-white bg-[#132985] border font-bold border-[#D0D4E7] rounded-lg' />}
      breakLabel={"..."}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={(data) => onPageChange(data.selected + 1)}
      containerClassName={"flex items-center gap-1 justify-end "}
      pageClassName={"mx-1 py-1 w-[32px] h-[32px] flex text-center cursor-pointer border font-bold border-[#D0D4E7] rounded-lg"}
      pageLinkClassName={"w-[32px] h-[32px] rounded-lg text-[#132985]"}
      activeClassName={" bg-[#D0D4E7] text-white"}
      previousClassName={"mx-1 h-[32px] cursor-pointer"}
      nextClassName={"mx-1 h-[32px] cursor-pointer"}
      breakClassName={"mx-1"}
      breakLinkClassName={"px-3 text-gray-700"}
    />
  );
};
