import * as yup from 'yup'

const phoneRegExp = /^\+?(\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const linkedInUrlRegExp = /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?$/;

const urlRegex = /^(https?:\/\/)?([\w\d-]+\.){1,}\w{2,}(\/[\w\d-]*)*\/?$/;

const emailPattern = yup.string().email('Enter valid email').required('Email is required!')

const passwordPattern = yup.string().min(8).required('Password is required!')

const mobilePattern = yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10,"Mobile number must be atleast 10 characters")
.required('Phone number is required')

const namePattern = yup.string().required("This field is required")

const country = yup.object().required("Country is required")

const websitePattern = yup.string().matches(urlRegex, 'Please enter a valid URL').required("Website is required")

const linkedInPattern = yup.string().matches(linkedInUrlRegExp, 'Enter a valid LinkedIn profile URL').required('LinkedIn URL is required')

const companyName = yup.string().required("Company name is required")
const address = yup.string().required("Address is required")
const city = yup.string().required("City is required")
const postcode = yup.string().required("Postal code is required")
const personName = yup.string().required("Name is required")
const designation = yup.string().required("Designation is required")
const companyLogo = yup.array().min(1, "Company Logo is required")
const countrycode = yup.object().required('Country code is required')

const companyProfile= yup.string().required('Company Profile is required')
const vision= yup.string().required('Vision is required')
const emp_name = yup.string().required("Employee name is required")
const emp_designation = yup.string().required("Employee designation is required")
const emp_profile = yup.string().required("Employee profile is required")

const product_name = yup.string().required("Product name is required")
const desc = yup.string().required("Product description is required")
export const LoginValidate = yup.object({
    email : emailPattern,
    password : passwordPattern
})

export const CompanyInfoValidate = yup.object({
companyName : companyName,
address: address,
country : country,
city : city,
postcode : postcode,
countryCode : countrycode,
mobile : mobilePattern,
website : websitePattern,
personName : personName,
designation : designation,
personCountryCode : countrycode,
personNumber : mobilePattern,
email : emailPattern,
companyLogo : companyLogo
})

export const AboutValidate = yup.object({
    companyProfile : companyProfile,
    website : websitePattern,
    vision: vision,
})

export const MemberValidate = yup.object({
    emp_name : emp_name,
    emp_designation : emp_designation,
    emp_profile : emp_profile,
    linkedinLink : linkedInPattern,
})

export const ProductsValidate = yup.object({
    product_name : product_name,
    desc : desc,
    website : websitePattern,
})