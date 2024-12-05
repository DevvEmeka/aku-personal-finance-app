import { useState } from "react";
import ReactPaginate from "react-paginate";

type Bill = {
  id: number;
  title: string;
  transactionDate: string;
  amount: number;
  category: string;
};

type TransactionTableProps = {
  bills: Bill[];
  error: string | null;
  loading: boolean;
  values: string;
  selectedOption: string;
};

const TransactionTable: React.FC<TransactionTableProps> = ({
  bills,
  error,
  loading,
  values,
  selectedOption,
}) => {
  // search logic
  const filteredBills = bills.filter((item) =>
    values.toLowerCase() === ""
      ? true
      : item.title?.toLowerCase().includes(values.toLowerCase())
  )

  // sort logic
  .sort((a, b) => {
    switch (selectedOption) {
      case "Oldest":
        return new Date(a.transactionDate).getTime() -
               new Date(b.transactionDate).getTime();
      case "Newest":
        return new Date(b.transactionDate).getTime() -
               new Date(a.transactionDate).getTime();
      case "A to Z":
        return a.title.localeCompare(b.title);
      case "Z to A":
        return b.title.localeCompare(a.title);
      case "Highest":
        return b.amount - a.amount;
      case "Lowest":
        return a.amount - b.amount;
      default:
        return 0;
    }
  });
  // switch (selectedOption) {
  //   case "Oldest":
  //     return [...bills].sort(
  //       (a, b) =>
  //         new Date(a.transactionDate).getTime() -
  //         new Date(b.transactionDate).getTime()
  //     );
  //   case "A to Z":
  //     return [...bills].sort((a, b) => a.title.localeCompare(b.title));
  //   case "Z to A":
  //     return [...bills].sort((a, b) => b.title.localeCompare(a.title));
  //   case "Highest":
  //     return [...bills].sort((a, b) => b.amount - a.amount);
  //   case "Lowest":
  //     return [...bills].sort((a, b) => a.amount - b.amount);
  //   default:
  //     return bills;
  // }

  // pagination logic
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 7;
  const totalPages = Math.ceil(bills.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredBills.slice(offset, offset + itemsPerPage);

  return (
    <div className="mt-5">
      <table className="min-w-full">
        <thead>
          <tr className="text-[#696868] font-normal text-left text-xs font-public_sans">
            <th className="pb-4">Receipt / Sender</th>
            <th>Category</th>
            <th>Transaction</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4} className="text-center text-4xl py-4">
                Loading transactions...
              </td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan={4} className="text-center py-4 text-red-500">
                Error: {error}
              </td>
            </tr>
          ) : (
            currentItems.map((bill: Bill) => (
              <tr key={bill.id} className="border-t border-[#F2F2F2] h-[20px] ">
                <td className="py-5">
                  <div className="flex items-center gap-2">
                    <div>Icon</div>
                    <span>{bill.title}</span>
                  </div>
                </td>
                <td className="py-2">
                  <div className="flex items-center gap-2">
                    {bill.category}
                    <div>Icon</div>
                  </div>
                </td>
                <td className="py-2">
                  <div className="flex items-center gap-2">
                    {bill.transactionDate}
                    <div>Icon</div>
                  </div>
                </td>
                <td className="py-2">{Number(bill.amount).toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        containerClassName="flex justify-between items-center mt-4"
        pageClassName="py-2 px-4 mx-1 font-[px] text-sm border text-[#201F24] bg-[#FFFFFF] rounded-lg cursor-pointer hover-gray-100"
        breakLabel={<span className="">...</span>}
        activeClassName="text-white bg-black"
        nextLabel={
          <span className="flex gap-4 items-center py-2 px-4 rounded-lg border border-[#98908B] bg-[#FFFFFF] text-[#98908B]">
            <div>Next</div>
            <i className="ph ph-caret-right"></i>
          </span>
        }
        previousLabel={
          <span className="flex gap-4 items-center py-2 px-4 rounded-lg border border-[#98908 bg-[#FFFFFF] text-[#98908B]">
            <i className="ph ph-caret-left"></i>
            <div>Prev</div>
          </span>
        }
        previousClassName="mr-auto"
        nextClassName="ml-auto"
      />
    </div>
  );
};

export default TransactionTable;
