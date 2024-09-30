import { links } from "./data";
import { StaticImageData } from "next/image";

export type SectionName = (typeof links)[number]["name"];

export type References = {
  picture: StaticImageData;
  name: string;
  phone_number?: string;
  email?: string;
  title?: string;
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrls: string[];
  github?: string;
  figma?: string;
  link: string;
  instructionsDAcces?: string;
}
