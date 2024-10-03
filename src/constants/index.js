import { DashboardData } from "./ColumnsData";
import { AboutValidate, CompanyInfoValidate, LoginValidate, MemberValidate, ProductsValidate } from "./Validation";

export const LoginValidation = LoginValidate;

export const CompanyInfoValidation = CompanyInfoValidate;

export const AboutValidation = AboutValidate

export const MemberValidation = MemberValidate

export const ProductsValidation = ProductsValidate

export const DashboardTableData = (handleAction) => DashboardData(handleAction)