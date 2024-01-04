export interface ComplementsProps {
    header:string,
    description:string,
    isHeader:boolean
}
export interface SubtopicsProps {
    descritive:string,
    img:any,
}
export interface IntroduceProps {
    titleHeader:string,
    descriptionHeader:string,   
}
export interface ExperienceProps {
    year:string,
    title:string,
   company:string,
   isLast:boolean
}
export interface SpecializationsProps {
    header:string,
    description:string,
    projects:string,
    img:any
}
export interface imgProps {
    img:any
}
export interface aboutProps {
    year:string,
    unitOfMeasurement:string,
    description:string
}
export interface imgLinkProps {
    img:any,
    functionOnClick:() => void
}
