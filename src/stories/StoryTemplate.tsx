import React, { ReactNode } from "react";
import {
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
} from "@mui/material";

interface StoryTemplateProps<T> {
    type: T;
    typeDescs: Array<TypeDesc<T>>;
}

type TypeDesc<T> = {
    name: keyof T;
    type: string;
    default: any;
    desc: string;
}

export default function StoryTemplate<T>({ type, typeDescs }: StoryTemplateProps<T>) {
    return (
        <Table sx={{ minWidth: "100%" }}>
            <TableHead>
                <TableRow>
                    {["Name", "Type", "Default", "Description"].map(
                        (header) => (
                            <TableCell key={header}>{header}</TableCell>
                        )
                    )}
                </TableRow>
            </TableHead>
            <TableBody>
                { 
                    (type && typeDescs) ? typeDescs.map((typeDesc) => (
                    <TableRow>
                        <TableCell>{typeDesc.name as ReactNode}</TableCell>
                        <TableCell>{(type[typeDesc.name] as unknown) as ReactNode}</TableCell>
                        <TableCell>{typeDesc.default as ReactNode}</TableCell>
                        <TableCell>{typeDesc.desc as ReactNode}</TableCell>
                    </TableRow>
                )) : null }
            </TableBody>
        </Table>
    );
}
