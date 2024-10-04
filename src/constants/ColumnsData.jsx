import { Delete, Edit } from "@mui/icons-material"
import { Avatar, Grid2, IconButton } from "@mui/material"

const serialNo ={
    field : "sno",
    headerName : 'S.no',
    minWidth : 60,
    headerAlign : "center",
    align : "center",
    sortable : "false",
}

const companyName={
  field : "company_name",
  minWidth:200,
  headerName : 'Company Name',
  headerAlign : "center",
  align : "center",
  sortable : "false",
}
const countyName={
  field : "country",
  minWidth:150,
  headerName : 'Country',
  headerAlign : "center",
  align : "center",
  sortable : "false",
}

const cityName={
  field : "city",
  headerName : 'City',
  minWidth:150,
  headerAlign : "center",
  align : "center",
  sortable : "false",
}

const website={
  field : "website",
  headerName : 'Website',
  minWidth:150,
  headerAlign : "center",
  align : "left",
  sortable : "false",
}

const mobileNo={
  field : "mobile",
  headerName : 'Mobile',
  minWidth:200,
  headerAlign : "center",
  align : "left",
  sortable : "false",
}

const contactPerson={
  field : "contact_person",
  headerName : 'Contact Person',
  minWidth:150,
  headerAlign : "center",
  align : "left",
  sortable : "false",
}

const personNo={
  field : "contact_person_mobile",
  headerName : 'Mobile No.',
  minWidth:150,
  headerAlign : "center",
  align : "left",
  sortable : "false",
}

const email={
  field : "email",
  headerName : 'Email',
  headerAlign : "center",
  align : "left",
  sortable : "false",
  width:200
}

const companyLogo={
  field : "company_logo",
  headerName : 'Logo',
  headerAlign : "center",
  align : "center",
  sortable : "false",
  renderCell: (params) =>(
      <Grid2 sx={{display:"flex", justifyContent:"center",alignItems:"center", height:"100%"}}><Avatar sx={{height:40}} /></Grid2>
  )
}
const actionTable =(handleAction)=> ({
    field: "action",
    headerName: "Action",
    width: 100,
    headerAlign: "center",
    sortable: false,
    renderCell: (params) => (
      <Grid2>
        <IconButton onClick={()=> handleAction(params.row.id,"edit")}><Edit color="primary" /></IconButton>
        <IconButton onClick={()=> handleAction(params.row.id,"delete")}><Delete color="error" /></IconButton>
      </Grid2>
    )
  })


export const DashboardData = (handleAction) => [serialNo,companyName, companyLogo,mobileNo, website,countyName,cityName, contactPerson,personNo,email, actionTable(handleAction)]