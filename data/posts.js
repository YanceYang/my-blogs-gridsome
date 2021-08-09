// 首页公告数据
module.exports = {
  posts: (addCollection) => {
    const posts = addCollection({
      typeName: 'BlogPost',
    })
    posts.addNode({
      id: '2021-08-08 10:02:52',
      title: 'Simplicity. Aesthetics. Value...',
      desc: `i there, I'm an independent Digital Designer & Art Director focused on digital design for brands that like to have fun.`,
      date: '2018-11-02',
      aricles: [
        {
          id: 'chelsea-landmark',
          title: 'banana',
          categories: ['fruits-', 'IT'],
          desc:
            'The banana fruits grow from a banana blossom in hanging clusters, also called a bunch or banana stem. The fruits grow in rows called tiers or hands. There can be as many as twenty fruits to a hand, and as many as twenty tiers in a bunch. A bunch usually weighs between 30 and 50 kilograms (65 to 110 pounds).',
          date: '2021-08-08 10:05:30',
          imageUrl:
            'https://gridsome-forestry.netlify.app/assets/static/mike-dorner-173502-unsplash.42db587.16e7958f24c375d7bd7b08073b4ce000.jpg',
        },
        {
          id: 'live',
          title: 'live-2',
          categories: ['fruits-'],
          desc:
            'The banana fruits grow from a banana blossom in hanging clusters, also called a bunch or banana stem. The fruits grow in rows called tiers or hands. There can be as many as twenty fruits to a hand, and as many as twenty tiers in a bunch. A bunch usually weighs between 30 and 50 kilograms (65 to 110 pounds).',
          date: '2021-08-08 10:05:30',
          imageUrl:
            'https://gridsome-forestry.netlify.app/assets/static/mike-dorner-173502-unsplash.42db587.16e7958f24c375d7bd7b08073b4ce000.jpg',
        },
      ],
    })
  },
  post: (addCollection) => {
    const postInfo = addCollection({
      typeName: 'BlogPostInfo',
    })
    postInfo.addNode({
      id: 'chelsea-landmark',
      title: 'banana',
      categories: ['fruits-', 'IT'],
      desc:
        'The banana fruits grow from a banana blossom in hanging clusters, also called a bunch or banana stem. The fruits grow in rows called tiers or hands. There can be as many as twenty fruits to a hand, and as many as twenty tiers in a bunch. A bunch usually weighs between 30 and 50 kilograms (65 to 110 pounds).',
      date: '2021-08-08 10:05:30',
      imageUrl:
        'https://gridsome-forestry.netlify.app/assets/static/mike-dorner-173502-unsplash.42db587.16e7958f24c375d7bd7b08073b4ce000.jpg',
    })
  },
}
