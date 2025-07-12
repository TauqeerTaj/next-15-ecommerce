export interface PeopleInterface {
  image: string;
  name: string;
  designation: string;
  social: Array<{
    image: string;
    link: string;
  }>;
}
