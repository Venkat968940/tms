export const ComponentOverride = (theme) => {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: "small",
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          position: "relative",
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            borderTop: "none",
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
            "&:focus-within": {
              outline: "none",
              boxShadow: "none",
            },
          },
          "& .MuiDataGrid-main": {
            width: "100%",
            height: "calc(100dvh - 240px)",
          },
          "& .MuiDataGrid-cell": {
            borderRight: "1px solid #ccc",
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
            "&:focus-within": {
              outline: "none",
              boxShadow: "none",
            },
            "&:last-child": {
              // Remove border for the last cell in each row
              borderRight: "none",
            },
          },
          "& .MuiDataGrid-header": {
            position: "sticky",
            top: 0,
            zIndex: 1,
          },
          "& .MuiDataGrid-menuIcon": {
            display: "none",
          },
          "& .MuiDataGrid-sortIcon": {
            display: "none",
            color: "white",
          },
          "& .MuiDataGrid-iconSeparator": {
            display: "none",
          },
        },
        row: {
          backgroundColor: theme.palette.common.white,
          "&:hover": {
            backgroundColor: theme.palette.common.white,
          },
        },
      },
    },
  };
};
