const initialState = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    authorName: 'Learn With Sumit',
    authorImg: '',
    thumbImg:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    date: '2019-01-01',
    duration: '5 min read',
    category: 'Article',
  },
  {
    id: 2,
    name: 'How to start Youtubing',
    authorName: 'Learn With Sumit',
    authorImg: '',
    thumbImg:
      'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    date: '2022-01-01',
    duration: '3 min read',
    category: 'Article',
  },
  {
    id: 3,
    name: 'How to Say I make free videos on Youtube on every video',
    authorName: 'Learn With Sumit',
    authorImg: '',
    thumbImg:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: '207-01-01',
    duration: '2 min read',
    category: 'Video',
  },
  {
    id: 4,
    name: 'Boost your mind sharping rate',
    authorName: 'Learn With Bumit',
    authorImg: '',
    thumbImg:
      'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    date: '2022-01-01',
    duration: '3 min read',
    category: 'Article',
  },
  {
    id: 5,
    name: 'Boost your writing rate',
    authorName: 'Learn With Tumit',
    authorImg: '',
    thumbImg:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    date: '207-01-01',
    duration: '2 min read',
    category: 'Video',
  },
  {
    id: 6,
    name: 'Boost your mind sharping rate',
    authorName: 'Learn With Bumit',
    authorImg: '',
    thumbImg:
      'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    date: '2022-01-01',
    duration: '3 min read',
    category: 'Article',
  },
  {
    id: 7,
    name: 'Boost your writing rate',
    authorName: 'Learn With Tumit',
    authorImg: '',
    thumbImg:
      'https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    date: '207-01-01',
    duration: '2 min read',
    category: 'Video',
  },
  {
    id: 8,
    name: 'Boost your mind sharping rate',
    authorName: 'Learn With Bumit',
    authorImg: '',
    thumbImg:
      'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    date: '2022-01-01',
    duration: '3 min read',
    category: 'Article',
  },
  {
    id: 9,
    name: 'Boost your writing rate',
    authorName: 'Learn With Tumit',
    authorImg: '',
    thumbImg:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    date: '207-01-01',
    duration: '2 min read',
    category: 'Video',
  },
  {
    id: 10,
    name: 'Boost your writing rate',
    authorName: 'Learn With Tumit',
    authorImg: '',
    thumbImg:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    date: '207-01-01',
    duration: '2 min read',
    category: 'Video',
  },
  {
    id: 11,
    name: 'Boost your writing rate',
    authorName: 'Learn With Tumit',
    authorImg: '',
    thumbImg:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    date: '207-01-01',
    duration: '2 min read',
    category: 'Video',
  },
  {
    id: 12,
    name: 'Boost your writing rate',
    authorName: 'Learn With Tumit',
    authorImg: '',
    thumbImg:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    date: '207-01-01',
    duration: '2 min read',
    category: 'Video',
  },
];

export default initialState;
