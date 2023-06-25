import { Category } from "./Category";

export interface LeadDTO {
    id: number;
    firstName: string;
    fullName: string;
    phoneNumber: number;
    email: string;
    suburb: string;
    description: string;
    price: number;
    category: Category;
    status: number;
    dateCreated: Date;
  }