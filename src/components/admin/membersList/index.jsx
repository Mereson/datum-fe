import { useState } from "react";
import { DynamicTable } from "../dynamicTable";
import { ListPagination } from "../pagination";

export const MembersList = ({ data, people, title = true }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <section>
      {title ? (
        <p className="text-sm text-[#6270AE] pb-4">
          Showing {startItem} - {endItem} of {totalItems} {people}
        </p>
      ) : ("")}
      <DynamicTable data={data} currentPage={currentPage} itemsPerPage={itemsPerPage} />

      {totalPages == 1 ? ("") : (
        <div className="mt-10">
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </section>
  )
}