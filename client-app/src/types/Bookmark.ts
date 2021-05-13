export default interface Bookmark {
  id: string;
  title: string;
  description: string;
  url: string;
  dateCreated: string | undefined;
  tags: string;
}
