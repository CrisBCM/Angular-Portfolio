import { ProjectDetail } from "./project-detail";

export interface Project {
    name:string;
    description:string;
    imgUrl:string;
    detail:ProjectDetail;
}
