// 期刊数据
module.exports = {
  journals: (addCollection) => {
    const posts = addCollection({
      typeName: 'Journals',
    })
    posts.addNode({
      id: 1,
      title: 'Simplicity. Aesthetics. Value',
      desc: `i there, I'm an independent Digital Designer & Art Director focused on digital design for brands that like to have fun.`,
      tag:'Simplicity',
      date: '2018-11-02',
    })
    posts.addNode({
      id: 2,
      title: '2-Simplicity. Aesthetics. Value...',
      desc: `2-i there, I'm an independent Digital Designer & Art Director focused on digital design for brands that like to have fun.`,
      tag:'2-Simplicity-Aesthetics',
      date: '2018-11-03',
    })
  },
  /* journalInfo: (addCollection) => {
    const postInfo = addCollection({
      typeName: 'BlogPostInfo',
    })
    postInfo.addNode({
      id: 1,
      title: 'Simplicity. Aesthetics. Value...',
      desc: `i there, I'm an independent Digital Designer & Art Director focused on digital design for brands that like to have fun.`,
      date: '2018-11-02',
    })
  }, */
}
