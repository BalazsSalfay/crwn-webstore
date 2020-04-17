const INITIAL_STATE = {
  sections: [
    {
      title: 'travel',
      imageUrl: 'https://res.cloudinary.com/cloudimagine/image/upload/v1587123418/bs-prints/20181105113833_IMG_1070_vwjovy.jpg',
      id: 1,
      linkUrl: 'shop/travel'
    },
    {
      title: 'people',
      imageUrl: 'https://res.cloudinary.com/cloudimagine/image/upload/v1587123417/bs-prints/_B090397-01_djgya2.jpg',
      id: 2,
      linkUrl: 'shop/people'
    },
    {
      title: 'abstract',
      imageUrl: 'https://res.cloudinary.com/cloudimagine/image/upload/v1587123417/bs-prints/20190202163611_IMG_2657-01-02_lbarxk.jpg',
      id: 3,
      linkUrl: 'shop/abstract'
    },
    {
      title: 'street',
      imageUrl: 'https://res.cloudinary.com/cloudimagine/image/upload/v1587123418/bs-prints/20181031123437_IMG_0180-01_y19tx2.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/street'
    },
    {
      title: 'black & white',
      imageUrl: 'https://res.cloudinary.com/cloudimagine/image/upload/v1587123417/bs-prints/20190712185807_IMG_3334-01-01-01_mgqnug.jpg',
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