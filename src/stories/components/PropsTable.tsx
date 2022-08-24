import { ReactNode } from "react";
import {
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
} from "@mui/material";
import { Type } from "typescript";

interface PropsTableProps {
    type: Type;
    typeDescs: Array<object>;
}

export default function PropsTable({ type, typeDescs }: PropsTableProps) {
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
        <>
            <Table
                sx={{
                    minWidth: "100%",
                    backgroundColor: "transparent",
                    borderRadius: 10,
                    '& .MuiTableCell-root': {
                        color: '#fff',
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
        </>
    );
}
