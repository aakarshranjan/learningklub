export interface CourseContent {
  id: number;
  name: string;
  subSection: SubSection[];
}

interface SubSection {
  id: number;
  name: string;
}
