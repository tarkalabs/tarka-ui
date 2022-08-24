import { ReactNode } from "react";
import {
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
} from "@mui/material";
import { Type } from "typescript";

interface PropsSectionProps {
    type: Type;
    typeDescs: Array<object>;
}

export default function PropsSection({ type, typeDescs }: PropsSectionProps) {
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
                        borderColor: '#584491',
                    },
                }}
            >
                <TableHead
                    sx={{
                        '& .MuiTableCell-head': {
                            fontWeight: 'bold',
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
        </section>
    );
}
