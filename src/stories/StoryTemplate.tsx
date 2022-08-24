import { ReactNode } from "react";
//import './story-template.scss';
import {
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
} from "@mui/material";
import { Type } from "typescript";

interface StoryTemplateProps {
    type: Type;
    typeDescs: Array<object>;
}

export default function StoryTemplate({ type, typeDescs }: StoryTemplateProps) {
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
        <div className="story-template">
            <Table
                sx={{
                    minWidth: "100%",
                    backgroundColor: "transparent",
                    borderRadius: 10,
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
        </div>
    );
}
