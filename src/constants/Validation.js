import * as yup from 'yup'

const phoneRegExp = /^\+?(\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const linkedInUrlRegExp = /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?$/;

const urlRegex = /^(https?:\/\/)?([\w\d-]+\.){1,}\w{2,}(\/[\w\d-]*)*\/?$/;

const emailPattern = yup.string().email('Enter valid email').required('Email is required!')

const passwordPattern = yup.string().min(8).required('Password is required!')

const mobilePattern = yup.string().matches(phoneRegExp, 'Phone number is not valid')
.required('Phone number is required')

const namePattern = yup.string().required("This field is required")

const country = yup.object().required("Country is required")

const websitePattern = yup.string().matches(urlRegex, 'Please enter a valid URL').required("Website is required")

const linkedInPattern = yup.string().matches(linkedInUrlRegExp, 'Enter a valid LinkedIn profile URL').required('LinkedIn URL is required')

export const LoginValidate = yup.object({
    email : emailPattern,
    password : passwordPattern
})

export const CompanyInfoValidate = yup.object({
companyName : namePattern,
address: namePattern,
country : country,
city : namePattern,
postcode : namePattern,
countryCode : country,
mobile : mobilePattern,
website : websitePattern,
personName : namePattern,
designation : namePattern,
personCountryCode : country,
personNumber : mobilePattern,
email : emailPattern,
companyLogo : namePattern
})

export const AboutValidate = yup.object({
    companyProfile : namePattern,
    website : websitePattern,
    vision: namePattern,
   

})

export const MemberValidate = yup.object({
    emp_name : namePattern,
    emp_designation : namePattern,
    emp_profile : namePattern,
    linkedinLink : linkedInPattern,
})

export const ProductsValidate = yup.object({
    product_name : namePattern,
    desc : namePattern,
    website : websitePattern,
})