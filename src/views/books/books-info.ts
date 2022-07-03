export const booksInfo: Book[] = [
  {
    id: 1,
    price: 15,
    name: 'THE TIME MACHINE',
    author: 'H. G. Wells',
    wallet: 'EQCNheJO4mxadQzdoB65fFA1wzfsV45o4b3g7VO-JtuxG3XQ',
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  },
  {
    id: 2,
    price: 5,
    name: 'The War of the Worlds',
    author: 'H. G. Wells',
    wallet: 'EQCNheJO4mxadQzdoB65fFA1wzfsV45o4b3g7VO-JtuxG3XQ',
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  },
  {
    id: 3,
    price: 10,
    name: 'The Little Prince',
    author: 'Antoine De Saint-Exupéry',
    wallet: 'EQCNheJO4mxadQzdoB65fFA1wzfsV45o4b3g7VO-JtuxG3XQ',
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  },
  {
    id: 4,
    price: 10,
    name: 'The Brothers Grimm Fairy Tales',
    author: 'Brothers Grimm',
    wallet: 'EQCNheJO4mxadQzdoB65fFA1wzfsV45o4b3g7VO-JtuxG3XQ',
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  },
  {
    id: 5,
    price: 10,
    name: 'The Black Cat',
    author: 'EDGAR ALLAN POE',
    wallet: 'EQCNheJO4mxadQzdoB65fFA1wzfsV45o4b3g7VO-JtuxG3XQ',
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  },
  {
    id: 6,
    price: 10,
    name: 'The Diaries of Adam and Eve',
    author: 'Mark Twain',
    wallet: 'EQCNheJO4mxadQzdoB65fFA1wzfsV45o4b3g7VO-JtuxG3XQ',
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  },
  {
    id: 7,
    price: 10,
    name: 'The Discovery of the Future',
    author: 'H. G. Wells',
    wallet: 'EQCNheJO4mxadQzdoB65fFA1wzfsV45o4b3g7VO-JtuxG3XQ',
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  },
  {
    id: 8,
    price: 10,
    name: 'Hamlet',
    author: 'William Shakespeare',
    wallet: 'EQCNheJO4mxadQzdoB65fFA1wzfsV45o4b3g7VO-JtuxG3XQ',
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  },
  {
    id: 9,
    price: 10,
    name: 'The Merchant of Venice',
    author: 'William Shakespeare',
    wallet: 'EQCNheJO4mxadQzdoB65fFA1wzfsV45o4b3g7VO-JtuxG3XQ',
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  },
  {
    id: 10,
    price: 10,
    name: 'Twenty Years After',
    author: 'Alexandre Dumas',
    wallet: 'EQCNheJO4mxadQzdoB65fFA1wzfsV45o4b3g7VO-JtuxG3XQ',
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  },
  {
    id: 11,
    price: 10,
    name: 'The Memoirs of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    wallet: 'EQCNheJO4mxadQzdoB65fFA1wzfsV45o4b3g7VO-JtuxG3XQ',
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  },
  {
    id: 12,
    price: 10,
    name: 'The Golem',
    author: 'Gustav Meyrink',
    wallet: 'EQCNheJO4mxadQzdoB65fFA1wzfsV45o4b3g7VO-JtuxG3XQ',
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  },
];

export interface Book {
  image?: string;
  id: number;
  price: number;
  name: string;
  url: string;
  author: string;
  wallet?: string;
}
