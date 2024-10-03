import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

  const theme = createTheme();

export const MainTheme = makeStyles(() => ({
  root: root,
}));

export const LoginTheme = makeStyles(() => ({
  root: loginRoot,
  mainRoot: loginCard,
}));

export const HeaderTheme = makeStyles(() => ({
  root: headerRoot,
  menu : headerMenu
}));


export const PaginationTheme = makeStyles(()=>({
  root: paginationRoot
}))

const root = {
  width: "100%",
  height: "100dvh",
};

const loginRoot = {
  display: "flex",
  width: "100%",
  height: "100dvh",
  justifyContent: "center",
  alignItems: "center",
  background: "#F6F6F6",
};
const loginCard = {
  backdropFilter: "blur(16px) saturate(180%)",
  backgroundColor: "rgba(255, 255, 255, 0.75);",
  border: "1px solid rgba(209, 213, 219, 0.3)",
  padding: "1.5rem",
  borderRadius: "0.5rem",
  boxShadow:
    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
};

const headerRoot = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
};

const headerMenu = {
  display: "flex",
  alignItems: "center",
  height: "100%",
  gap:1
}


const paginationRoot={
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: '1rem',
  marginTop: "auto",
}