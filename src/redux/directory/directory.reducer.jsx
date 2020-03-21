const INITIAL_STATE = {
  sections: [
    {
      title: 'travel',
      imageUrl: 'https://drive.google.com/uc?export=download&id=10jjQXDftBq9U8O5GcQQor4kXDjkjFKMT',
      id: 1,
      linkUrl: 'shop/travel'
    },
    {
      title: 'people',
      imageUrl: 'https://drive.google.com/uc?export=download&id=1b3pXxARm7V1rl4cCQmXxi44p6mNs0EsP',
      id: 2,
      linkUrl: 'shop/people'
    },
    {
      title: 'abstract',
      imageUrl: 'https://drive.google.com/uc?export=download&id=1o_DpnXiZEfIVX40AuWU361u-inGizfz2',
      id: 3,
      linkUrl: 'shop/abstract'
    },
    {
      title: 'street',
      imageUrl: 'https://drive.google.com/uc?export=download&id=1N936XRYykoIL2an0iZhclo2q6AhFmhCj',
      size: 'large',
      id: 4,
      linkUrl: 'shop/street'
    },
    {
      title: 'black & white',
      imageUrl: 'https://drive.google.com/uc?export=download&id=1rTuYz5-G8ZxXtuZd2VVPN5a97FktLFrF',
      size: 'large',
      id: 5,
      linkUrl: 'shop/blackandwhite'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;