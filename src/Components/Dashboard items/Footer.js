import React from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'name', label: 'CLIENT', minWidth: 170 },
    // { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'AMOUNT',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'STATUS',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'DATE',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, population, size, density };
}

const rows = [
    createData('Chandler Jacobi', '25', '$ 989.4','primary'),
    createData('Monserrat Marquardt', 1403500365, '$ 471.44','danger'),
    createData('Lonie Wyman', 60483973, '$ 934.24', 'success'),
    createData('Corine Abernathy', 327167434, '$ 351.28', 'warning'),
    createData('Lorenz Botsford', 37602103, '$ 355.3', 'neutral'),
    createData('Everette Botsford', 25475400, '$ 525.42', 'success'),
    createData('Marilou Beahan', 83019200, '$ 414.99', 'success'),
    createData('Ceasar Sauer', 4857000, '$ 488', 'primary'),
    createData('Rae McDermot', 126577691, '	$ 502.69', 'danger'),
    createData('Mable Steuber', 126317000, '$ 911.09', 'danger'),
    createData('Julian Glover', 67022000, '$ 656.94', 'danger'),
    createData('Duncan Toy', 67545757, '$ 120.78', 'danger'),
    createData('Blanche Friesen', 146793744, '$ 676.95', 'danger'),
    createData('Orion Koepp', 200962417, '$ 447.56', 'danger'),
    createData('Lily Collier', 210147125, '	$ 765.22', 'danger'),
];

export default function Footer() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}