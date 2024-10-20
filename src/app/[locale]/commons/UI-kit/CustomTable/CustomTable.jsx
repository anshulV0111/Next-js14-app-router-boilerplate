/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react';
import './CustomTableStyle.scss';
import { PaginationComponent } from '../../Pagination';

function CustomTable({
  headers,
  data,
  totalPages,
  tableContainerClass,
  tableHeaderClass,
  tableBodyClass,
  tableHeadElementClass,
  tableRowClass,
  tableDataClass,
}) {
  return (
    <>
      <table className={tableContainerClass || 'custom-table'}>
        <thead className={tableHeaderClass || 'custom-table-header'}>
          <tr>
            {headers?.map((item) => (
              <th key={item?.id} className={tableHeadElementClass || 'custom-table-header-th'}>
                {item?.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className={tableBodyClass || 'custom-table-body'}>
          {data?.length ? (
            data?.map((row, index) => (
              <tr key={`id-${index}`} className={tableRowClass || 'custom-table-body-tr'}>
                {headers?.map((header) => (
                  <td className={tableDataClass || 'custom-table-body-td'} key={`id-${header?.id}`}>
                    {header?.accessor(row)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className={tableRowClass || 'custom-table-body-tr'}>
              <td className={tableDataClass || 'custom-table-body-td'} colSpan={10}>
                <h1 className="no-data-text">No Data</h1>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Suspense>
        {totalPages && <PaginationComponent pageCount={totalPages} />}
      </Suspense>
    </>
  );
}

export default CustomTable;
