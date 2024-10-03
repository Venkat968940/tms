import {
  Button,
  Grid2
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openRoute } from "../../../components/Hooks/Reducers/Trigger";
import { CustomDataTable } from "../../../components/Utils/CustomDataTable/CustomDataTable";
import { DashboardData } from "../../../constants/ColumnsData";

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const pageOption = [10, 25, 50, 100];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageOption[0]);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");
  const trigger = useSelector(state=> state.trigger)

  console.log(trigger)
  const handleAction = (id, actionType) => {
    if (actionType === "delete") {
      // Perform delete action, e.g., remove the appointment
      console.log(`Delete action on appointment ID: ${id}`);
    }
    // refetch();
  };

  const rows = [];
  const columns = DashboardData(handleAction);

  const props = {
    rows: rows,
    columns: columns,
    search: search,
    setSearch: setSearch,
    page: page,
    setPage: setPage,
    rowsPerPage: rowsPerPage,
    setRowsPerPage: setRowsPerPage,
    pageCount: pageCount,
    pageOption: pageOption,
    isLoading: false,
  };

  const handleForm = () =>{
  navigate('/company-info') 
  dispatch(openRoute())
  }
  return (
    <Grid2 sx={{ height: "100%", padding: 1 }}>
      <Grid2 sx={{ display: "flex", justifyContent: "end", marginBottom: 4 }}>
        <Button variant="contained" onClick={handleForm}>
          Create New
        </Button>
      </Grid2>
      <Grid2>
        <CustomDataTable props={props} />
      </Grid2>
    </Grid2>
  );
};

export default Dashboard;
