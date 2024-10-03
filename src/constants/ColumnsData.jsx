import { Clear, Done } from "@mui/icons-material"
import { Grid2, IconButton } from "@mui/material"

const serialNo ={
    field : "sno",
    headerName : 'S.no',
    minWidth : 60,
    headerAlign : "center",
    align : "center",
    sortable : "false",
}

const actionTable =(handleAction)=> ({
    field: "action",
    headerName: "Action",
    width: 120,
    headerAlign: "center",
    sortable: false,
    renderCell: (params) => (
      <Grid2>
        <IconButton onClick={()=> handleAction(params.row.id,"success")} sx={{marginRight:1}}><Done color="success" /></IconButton>
        <IconButton onClick={()=> handleAction(params.row.id,"delete")}><Clear color="error" /></IconButton>
      </Grid2>
    )
  })


export const DashboardData = (handleAction) => [serialNo, actionTable(handleAction)]