import { useState } from "react";
import { Record } from "../type";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TimezoneRecord() {
  const [records, setRecords] = useState<Record[]>([
    {
      id: "1",
      name: "First",
      city: "Dhaka",
      timezone: "Asia/Dhaka",
      currentTime: "",
      diffGMT: "",
      creator: "user-1",
    },
    {
      id: "2",
      name: "Second",
      city: "Dubai",
      timezone: "Asia/Dubai",
      currentTime: "",
      diffGMT: "",
      creator: "user-2",
    },
  ]);
  const timezoneToCurrentTime = (timezone: string) => {
    let date = new Date();
    let strTime = date.toLocaleString("en-US", { timeZone: `${timezone}` });
    console.log(timezone, strTime);
    return strTime;
  };
  return (
    <div>
      Record
      <TableContainer
        component={Paper}
        sx={{ width: 1200, marginTop: 10, marginLeft: 50 }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Timezone</TableCell>
              <TableCell align="right">Current Time</TableCell>
              <TableCell align="right">Difference to GMT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.timezone}</TableCell>
                <TableCell align="right">
                  {/* {timezoneToCurrentTime(row.timezone)} */}
                </TableCell>
                <TableCell align="right">{row.timezone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
