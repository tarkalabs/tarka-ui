import { ReactNode } from "react";
import {
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
} from "@mui/material";

interface PropsSectionProps {
    typeDescs: Array<object>;
    muiRef: string;
}

export default function PropsSection({ typeDescs, muiRef }: PropsSectionProps) {
    function generateRows(data: Array<object>): ReactNode {
        return data
            ? data.map((rowData: object, index) => (
                  <TableRow key={index}>
                      {Object.entries(rowData).map(([key, value]) => (
                          <TableCell key={key}>{value}</TableCell>
                      ))}
                  </TableRow>
              ))
            : null;
    }

    return (
        <section className='props-section'>
            <h2>Props</h2>
            <Table
                sx={{
                    minWidth: "100%",
                    backgroundColor: "transparent",
                    borderRadius: 10,
                    '& .MuiTableCell-root': {
                        color: '#f5f2ff',
                        padding: '16px 0',
                        borderColor: '#2a233f'
                    },
                    '& .MuiTableRow-root': {
                        borderWidth: '0 0 1px 0',
                    }
                }}
            >
                <TableHead
                    sx={{
                        '& .MuiTableCell-head': {
                            fontWeight: 'bold',
                            borderBottom: '1px solid #2a233f',
                        },
                    }}
                >
                    <TableRow>
                        {["Name", "Type", "Default", "Description"].map(
                            (header) => (
                                <TableCell key={header}>{header}</TableCell>
                            )
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {generateRows(typeDescs)}
                </TableBody>
            </Table>
            <p>Remaining props inherited from <a href={muiRef} target="_blank" className="external">MUI</a></p>
        </section>
    );
}
