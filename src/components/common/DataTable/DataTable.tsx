
import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
interface DataTableProps {
    columns:  GridColDef<(typeof rows)[number]>[] ;
    rows: object[]; 
  }
const DataTable = ({
    rows,
    columns,
}:DataTableProps) => {

    return (
        <DataGrid 
            rows={rows}
            columns={columns}
        />
    );
};

export default DataTable