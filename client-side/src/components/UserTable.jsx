import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDeleteUser, useUserList } from "ApiHelper";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { toast } from "react-toastify";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UserTable = ({ open, setOpen,setUpdateUser }) => {
  const { data, isLoading, isError } = useUserList({});

  const deleteUserMutation = useDeleteUser();

  const handleUpdateClickBtn = async (_id) => {
    console.log(_id , '_IDDDDDDDDDDDDd');
    setUpdateUser(_id)
    setOpen(!open)
    // await deleteUserMutation.mutateAsync({ _id });
    // toast.success("User Deleted Successfully");
  };

  const handleDeleteBtn = async (_id) => {
    console.log(_id);
    await deleteUserMutation.mutateAsync({ _id });
    toast.success("User Deleted Successfully");
  };

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>{" "}
            {/* firstName + lastName  */}
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.data?.map(
            ({ _id, firstName, lastName, email, phone, address, city }) => (
              <StyledTableRow key={_id}>
                <StyledTableCell component="th" scope="row">
                  {`${firstName} ${lastName}`}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {email ? email : "-"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {phone ? phone : "-"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {address ? address : "-"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {city ? city : "-"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleUpdateClickBtn(_id)}>
                      <EditIcon sx={{ color: "orange" }} />
                    </IconButton>
                  </Tooltip>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDeleteBtn(_id)}>
                      <DeleteIcon sx={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                </StyledTableCell>
              </StyledTableRow>
            )
          )}
        </TableBody>
      </Table>
      {!data?.data?.data?.length ? (
        <Box sx={{ width: "100%", fontWeight: "bold" }}>
          <Typography variant="h6" textAlign="center" m={2} p={2}>
            No Data
          </Typography>
        </Box>
      ) : null}
    </TableContainer>
  );
};

export default UserTable;
