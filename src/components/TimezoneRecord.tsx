import { useEffect, useState } from "react";
import { RecordType } from "../type";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import CurrentTime from "./CurrentTime";

export default function TimezoneRecord() {
  const [records, setRecords] = useState<RecordType[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/records", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZDczYWE0MTllZTFkZDgyNTEwZjUiLCJuYW1lIjoiYWRtaW4xIiwiZW1haWwiOiJhZG1pbjFAeWFob28uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjcwODUzNjkzLCJleHAiOjE2NzA4NjA4OTN9.qDkEvEk8tJlNeKsgtXjp0SLy73ZUukgNSc5w_ziToYE",
        },
      })
      .then((response) => {
        setRecords(response.data.records);
        console.log("data", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
                  <CurrentTime timezone={row.timezone} />
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
