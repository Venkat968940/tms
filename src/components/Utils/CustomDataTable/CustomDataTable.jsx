import { Grid2, TextField } from "@mui/material";
import { CustomPagination } from "../CustomPagination/CustomPagination";
import { DataGrid } from "@mui/x-data-grid";

export const CustomDataTable = ({ props }) => {
  const { page, rowsPerPage, isLoading, rows, columns, setSearch } = props;

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const CustomFooter = () => <CustomPagination props={props} />;

  return (
    <Grid2>
      {/* <Grid2
        sx={{
          display: "flex",
          justifyContent: "start",
          marginBlock: 2,
        }}
      >
        <TextField size="small" placeholder="Search" onChange={handleSearch} />
      </Grid2> */}
      <DataGrid
        columns={columns}
        rows={rows}
        loading={isLoading}
        density="compact"
        disableColumnMenu
        disableRowSelectionOnClick={true}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableColumnResize
        showColumnVerticalBorder={true}
        slots={{ footer: CustomFooter }}
        paginationModel={{ page, pageSize: rowsPerPage }}
        sx={{
          "--DataGrid-overlayHeight": "200px",
          borderRadius: 2,
        }}
      />
    </Grid2>
  );
};
