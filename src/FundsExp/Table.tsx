import { data } from "./data";
import React, { useState } from "react";
import { TablePagination } from "@material-ui/core";
// import * as dataservice from "./services/dataservice";
// import useTable from "./useTable";

const TableResult = () => {
  // const [records, setRecords] = useState(dataservice.getAllEmployees());
  // const { TblContainer } = useTable();

  const pages = [2, 4];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };
  const recordsAfterPagination = () => {
    return data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  return (
    //     <table>
    //       <tbody>
    //         {records.map((item) => (
    //           <td key={item.id}>
    //             <tr>{item.type}</tr>
    //             <tr>{item.token}</tr>
    //           </td>
    //         ))}
    //       </tbody>
    //     </table>
    //   );
    // };
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Token</th>
            <th scope="col">Asset</th>
            <th scope="col">Reason</th>
            <th scope="col">Type</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {recordsAfterPagination().map((data: any, key: any) => {
            return (
              <tr key={key}>
                <td>{data.token}</td>
                <td>{data.asset}</td>
                <td>{data.reason}</td>
                <td>{data.type}</td>
                <td>{data.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <TablePagination
        component="div"
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={data.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TableResult;
