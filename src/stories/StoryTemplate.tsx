import React, { ReactNode } from "react";
import {
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
} from "@mui/material";

interface StoryTemplateProps<T> {
    type?: T | undefined;
    typeDescs?: Array<TypeDesc<T>> | undefined;
}

type TypeDesc<T> = {
    name: keyof T;
    desc: string;
}

export default function StoryTemplate<T>({ type, typeDescs }: StoryTemplateProps<T>) {
    return (
        <Table sx={{ minWidth: "100%" }}>
            <TableHead>
                <TableRow>
                    {["Name", "T", "Default", "Description"].map(
                        (header) => (
                            <TableCell key={header}>{header}</TableCell>
                        )
                    )}
                </TableRow>
            </TableHead>
            <TableBody>
                { 
                    typeDescs ? typeDescs.map((typeDesc) => (
                    <TableRow>
                        <TableCell>{typeDesc.name as ReactNode}</TableCell>
                        <TableCell>{type[typeDesc.name] as Node}</TableCell>
                    </TableRow>
                )) : null }
            </TableBody>
        </Table>
    );
}
