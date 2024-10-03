import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import {
  Autocomplete,
  Grid2,
  Pagination,
  PaginationItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { PaginationTheme } from "../../../styles";

export const CustomPagination = ({ props }) => {
  const theme = useTheme();
  const classes = PaginationTheme()
  const { rowsPerPage, page, setPage, pageCount, setRowsPerPage, pageOption } =
    props;

  const handleChange = (event, newValue) => {
    setRowsPerPage(newValue);
  };
  return (
    <Grid2 className={classes.root}>
      <Grid2
        sx={{
          display: "flex",
          alignItems: "center",
          maxHeight: "fit-content",
        }}
      >
        <Autocomplete
          disablePortal
          id="page"
          size="small"
          value={rowsPerPage}
          onChange={handleChange}
          options={pageOption}
          getOptionLabel={(option) => option.toString()}
          disableClearable
          renderInput={(params) => (
            <TextField {...params} size="small" sx={{ width: "100px" }} />
          )}
        />
        <Typography variant="body1" ml="6px" color="GrayText">rows per page</Typography>
      </Grid2>
      <Pagination
        color="primary"
        size="small"
        count={Math.ceil(pageCount / rowsPerPage)}
        page={page + 1}
        onChange={(event, newPage) => setPage(newPage - 1)}
        boundaryCount={1}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowLeft, next: ArrowRight }}
            {...item}
            sx={{
              borderRadius: "5px",
              padding: "10px",
              "&.Mui-selected": {
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: "#ccc",
                  color: "#000",
                },
              },
              "& .MuiSvgIcon-root": { fontSize: 28 },
            }}
          />
        )}
      />
    </Grid2>
  );
};
