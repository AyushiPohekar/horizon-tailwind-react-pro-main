import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import React, { useMemo,useState } from "react";
import ModalComponent from "./Modal";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

const ColumnsTable = (props) => {
  const { columnsData, tableData,labelvalue } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;
  const [isModalOpen, setModalOpen] = useState(false);
  const [leadsData, setLeadsData] = useState('');
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  function get_filter_type(){

  }

  function loadremaining(rev_data) {
    setLeadsData(rev_data)
    openModal();
  
  }

  return (
    <Card extra={"w-full pb-10 p-4 h-full"}>
      <header className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
        <span class="block text-[18px] font-[600]">{labelvalue}
                <span class="ml-1  h-5 w-5 items-center justify-center rounded bg-gray-500 bg-opacity-70 text-sm font-semibold text-white">
                <>{tableData?.length}</>
                </span></span>
        
        </div>

        {/* <CardMenu /> */}
      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-14 pb-[10px] dark:!border-navy-700"
                  >
                    <div className="flex w-full font-bold justify-between pr-10 text-md tracking-wide text-gray-800">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data;
                    if (cell.column.Header === "Type") {
                      data = (
                        <p className="text-sm text-gray-600 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "Name") {
                      data = (
                        <p className="mr-[10px]  text-sm text-gray-600  dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "ContactNumber") {
                      data = (
                        <p className="mr-[10px] text-sm text-gray-600  dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "Email_Id") {
                      data = (
                        <p className="mr-[10px] text-sm text-gray-600 dark:text-white">
                          {cell.value}
                        </p>
                      );} else if (cell.column.Header === "Date") {
                        data = (
                          <p className=" mr-[10px]  text-sm text-gray-600 dark:text-white">
                            {cell.value}
                          </p>
                        ); 
                    // }else if (cell.column.Header === "Update") {
                    //         data = (
                    //             <div className="w-25 mr-[10px]  rounded-xl border !border-gray-200 px-3 text-sm text-gray-600  outline-none dark:!border-none dark:bg-navy-700 ">
                    //             <select
                    //               onChange={get_filter_type}
                    //               name="search_by"
                    //               id="search_by"
                    //               defaultValue={"enquires"}
                    //               className="h-[45px] w-full rounded-xl text-sm text-gray-600 outline-none dark:bg-navy-700 "
                    //             >
                    //                 <option value="" >
                    //                 Status
                    //                 </option>
                    //               <option value="enquires" class="">
                    //               Consult Booked
                    //               </option>
                    //               <option value="newlead" class="">
                    //                 New Lead
                    //               </option>
                    //               <option value="" class="">
                    //               Existing Patient
                    //               </option>
                            
                               
                    //             </select>
                    //           </div>
                    //         );
                        } else if (cell.column.Header === "Status") {
                                data = (
                                    
                                  <p className={`text-sm  ${cell.value=="booked"?"text-green-600":"text-indigo-600"} items-center justify-center  dark:text-white`}>
                                    {cell.value}
                                  </p>
                                );} else if (cell.column.Header === "Review") {
                                    data = (
                                        <div class="flex mr-[10px] mr-[10px]  flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                                    <div class="w-full">
                                     
                                      {cell.value != '' &&
                                      cell.value.length > 14 ? (
                                        <>
                                          {/* <span>
                                            {cell.value.substring(0, 30)} ...
                                          </span> */}
                                          <a
                                            href="#!"
                                            title="View More"
                                            onClick={() =>
                                              loadremaining(cell.value)
                                            }
                                          >
                                            <i class="fa-solid fa-eye text-black-500"></i>

                                     
                                          </a>
                                        </>
                                      ) : (
                                        <>
                                          {cell.value != '' ||
                                          cell.value == ' ' ||
                                          cell.value == '-' ? (
                                            <>
                                              <span>---</span>
                                            </>
                                          ) : (
                                            <>
                                              <span>{cell.value} </span>
                                            </>
                                          )}
                                        </>
                                      )}
                                    </div>
                                  </div>
                                   
                                    );
                    }
                    return (
                      <td
                        className="pt-[14px] pb-[20px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <ModalComponent isOpen={isModalOpen} onClose={closeModal} leadsData={leadsData}/> 
      </div>
    </Card>
     
  );
};

export default ColumnsTable;
