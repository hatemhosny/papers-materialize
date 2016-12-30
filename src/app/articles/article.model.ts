export interface IArticle {
  id: number;
  title: string;
  pmid: string;
  date: string;
  year: string;
  month: string;
  abstract: {}[];
  journal: string;
  journalIssn: string;
  publicationTypes: {}[];
  audioDuration: string;
}
