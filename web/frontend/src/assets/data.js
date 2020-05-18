const videoSource = [
    {
      src: require('../assets/VIDEO/sparkle_your_name_am360p.mp4'),
      resolution: 360,
    }, {
      src: require('../assets/VIDEO/sparkle_your_name_am720p.mp4'),
      resolution: 720,
    }, {
      src: require('../assets/VIDEO/sparkle_your_name_am1080p.mp4'),
      resolution: 1080
    }
]

const five_cen_src =  [
  {
    src: require('../assets/VIDEO/5 Centimeters Per Second Trailer_360.mp4'),
    resolution: 360,
  }, {
    src: require('../assets/VIDEO/5 Centimeters Per Second Trailer_480.mp4'),
    resolution: 480,
  }, {
    src: require('../assets/VIDEO/5 Centimeters Per Second Trailer_720.mp4'),
    resolution: 720
  }
]
  
  
  const DATA = [{
    id: '1',
    mode: '1',
    title: '5 Centimeters per Second',
    author: 'Makoto Shinkai',
    date: '2007',
    desc: 'The story is set in Japan, beginning in the 1990s up until the present day (2008),[a] with each act centered on a boy named Takaki Tōno. The first act takes place during a time when cell phones are uncommon and email had not yet reached the general population',
    link: 'https://www.youtube.com/watch?v=tr8JzTLlq30',
    cover: 'https://img1.wxzxzj.com/vpc-example-cover-5cm.png',
    cover2: 'https://img1.wxzxzj.com/vpc-example-cover-5cm-v.jpg',
    cover3: 'https://img1.wxzxzj.com/vpc-example-cover-5cm-c.jpg',
    source: five_cen_src,
    duration: '1:02:35',
  }, {
    id: '2',
    mode: '1',
    title: 'The Garden of Words',
    author: 'Makoto Shinkai',
    date: '2013',
    desc: "The Garden of Words is considered a romance[1] and drama film.[2] It opens at the start of the rainy season in Tokyo with Takao Akizuki (秋月 孝雄, Akizuki Takao), a 15-year-old student and aspiring shoemaker, opting to skip his first class and sketch shoe designs in the garden at Shinjuku Gyoen. There he encounters Yukari Yukino (雪野 百香里, Yukino Yukari), a 27-year-old woman who is skipping work and enjoying beer and chocolate.",
    link: 'https://www.bilibili.com/bangumi/play/ss2546/?from=search&seid=5227685957756304310',
    cover: 'https://img1.wxzxzj.com/vpc-example-cover-the-garden.png',
    cover2: 'https://img1.wxzxzj.com/vpc-example-cover-the-garden-v.jpg',
    cover3: 'https://img1.wxzxzj.com/vpc-example-cover-the-garden-c.jpg',
    source: require('../assets/VIDEO/The Garden of Words- Trailer (English Subbed) 言の葉の庭.mp4'),
    duration: '00:46:04'
  },  {
    id: '3',
    mode: '1',
    title: 'Your Name',
    author: 'Makoto Shinkai',
    date: '2016',
    desc: "Mitsuha Miyamizu is a high school girl living in the town of Itomori in Japan's mountainous Hida region. She is bored with country life and wishes to be a handsome boy in her next life. She begins to switch bodies intermittently with Taki Tachibana, a high school boy in Tokyo, when they wake up. They communicate by writing messages on paper, their phones, and sometimes on each other's skin. Mitsuha causes Taki to develop a relationship with his coworker Miki, while Taki causes Mitsuha to become popular in school.",
    link: 'https://www.bilibili.com/bangumi/play/ss12044/?from=search&seid=9670386519186098373',
    cover: 'https://img1.wxzxzj.com/vpc-example-cover-your-name.png',
    cover2: 'https://img1.wxzxzj.com/vpc-example-cover-your-name-v.jpg',
    cover3: 'https://img1.wxzxzj.com/vpc-example-cover-your-name-c.png',
    source: videoSource,
    duration: '01:46:04'
  }, {
    id: '4',
    mode: '1',
    title: 'Weathering with You',
    author: 'Makoto Shinkai',
    date: '2019',
    desc: "High schooler Hodaka Morishima runs away from his island home, planning to move to Tokyo. When his ferry is hit by a freak rainstorm, he is saved by Keisuke Suga, who gives Hodaka his business card. In Tokyo, Hodaka struggles to find work; a teenage McDonald's employee, Hina, takes pity on him and gives him food. After a chance encounter with a mobster, Hodaka finds a gun in a trashcan. Suga hires him as his assistant at a small publishing company, where he meets Suga's niece Natsumi. They investigate urban legends relating to the unusually rainy weather in Tokyo; from a psychic, they hear the legend of a \"weather maiden\" who can control the weather.",
    link: 'https://www.youtube.com/watch?v=ps8qwWG8Uio',
    cover: 'https://img1.wxzxzj.com/vpc-example-cover-weathering.png',
    cover2: 'https://img1.wxzxzj.com/vpc-example-cover-weathering-v.jpg',
    cover3: 'https://img1.wxzxzj.com/vpc-example-cover-weathering-c.jpg',
    source: require('../assets/VIDEO/Weathering With You [Official Subtitled Trailer, GKIDS]_Q6iK6DjV_iE_1080p.mp4'),
    duration: '01:51:00'
  },{
    id: '5',
    mode: '4',
    // Documentary
    title: 'Evil Genius',
    author: 'Netflix',
    date: 'Apr 30,2018',
    desc: "2:28 PM. August 28, 2003. A man walks into a bank with a bomb locked around his neck. This is a true story.",
    link: "https://www.youtube.com/watch?v=Qpdb9zo_1t8",
    cover: 'https://img.youtube.com/vi/Qpdb9zo_1t8/maxresdefault.jpg',
    cover2: 'https://img.youtube.com/vi/Qpdb9zo_1t8/maxresdefault.jpg',
    cover3: 'https://img.youtube.com/vi/Qpdb9zo_1t8/maxresdefault.jpg',
    source: require('../assets/VIDEO/Evil Genius - Official Trailer [HD] - Netflix.mp4'),
    duration: '2:00:11'
  }, {
    id: '6',
    // Adventure
    mode: '2',
    title: 'Percy Jackson: Sea of Monsters',
    author: 'Cieon Movies',
    date: 'Apr 9, 2013',
    desc: "Percy Jackson: Sea of Monsters Trailer 2013 - Official movie trailer in HD - stars Logan Lerman, Sean Bean, Nathan Fillion, Alexandra Daddario, Leven Rambin - directed by Thor Freudenthal - in order to restore their dying safe haven, the son of Poseidon and his friends embark on a quest to the Sea of Monsters to find the mythical Golden Fleece and to stop an ancient evil from rising",
    link: 'https://www.youtube.com/watch?v=sIBPpc1cT1E',
    cover: 'https://img.youtube.com/vi/sIBPpc1cT1E/hqdefault.jpg',
    cover2: 'https://img.youtube.com/vi/sIBPpc1cT1E/hqdefault.jpg',
    cover3: 'https://img.youtube.com/vi/sIBPpc1cT1E/hqdefault.jpg',
    source: require('../assets/VIDEO/Percy Jackson- Sea of Monsters Trailer 2013 Movie - Official [HD].mp4'),
    duration: '01:51:00'
  }, {
    id: '7',
    // Commedies
    mode: '3',
    title: 'YOUNG SHELDON',
    author: 'Series Trailer MP',
    date: 'Sep 7,2017',
    desc: "Young Sheldon Season 1 PromoTeaser Trailers - 2017 cbs Big Bang Theory spinoff series about young Sheldon Cooper",
    link: 'https://www.youtube.com/watch?v=iGKnI3Lc7C4',
    cover: 'https://img.youtube.com/vi/iGKnI3Lc7C4/hqdefault.jpg',
    cover2: 'https://img.youtube.com/vi/iGKnI3Lc7C4/hqdefault.jpg',
    cover3: 'https://img.youtube.com/vi/iGKnI3Lc7C4/hqdefault.jpg',
    source: require('../assets/VIDEO/YOUNG SHELDON Trailer Promos Season 1 (2017) Big Bang Theory Spinoff Series.mp4'),
    duration: '01:51:00'
  },{
    id: '8',
    // Commedies
    mode: '3',
    title: 'GAME NIGHT',
    author: 'Warner Bros. Pictures',
    date: 'Feb 2,2018',
    desc: 'Bateman and McAdams star as Max and Annie, whose weekly couples game night gets kicked up a notch when Max’s charismatic brother, Brooks (Chandler), arranges a murder mystery party, complete with fake thugs and faux federal agents. So when Brooks gets kidnapped, it’s all part of the game…right?  But as the six uber-competitive gamers set out to solve the case and win, they begin to discover that neither this “game”—nor Brooks—are what they seem to be.  Over the course of one chaotic night, the friends find themselves increasingly in over their heads as each twist leads to another unexpected turn.  With no rules, no points, and no idea who all the players are, this could turn out to be the most fun they’ve ever had…or game over.',
    link: 'https://www.youtube.com/watch?v=qmxMAdV6s4U',
    cover: 'https://img.youtube.com/vi/qmxMAdV6s4U/maxresdefault.jpg',
    cover2: 'https://img.youtube.com/vi/qmxMAdV6s4U/maxresdefault.jpg',
    cover3: 'https://img.youtube.com/vi/qmxMAdV6s4U/maxresdefault.jpg',
    source: require('../assets/VIDEO/GAME NIGHT - Official Trailer.mp4'),
    duration: '1:02:35',
  },{
    id: '9',
    // Commedies
    mode: '3',
    title: 'Why Him?',
    author: '20th Century Studios',
    date: 'Nov 15,2016',
    desc: "Over the holidays, Ned (Bryan Cranston), an overprotective but loving dad and his family visit his daughter at Stanford, where he meets his biggest nightmare: her well-meaning but socially awkward Silicon Valley billionaire boyfriend, Laird (James Franco).  A rivalry develops, and Ned's panic level goes through the roof when he finds himself lost in this glamorous high-tech world and learns that Laird is about to pop the question. ",
    link: 'https://www.youtube.com/watch?v=xOZ2bs9IboU',
    cover: 'https://img.youtube.com/vi/xOZ2bs9IboU/maxresdefault.jpg',
    cover2: 'https://img.youtube.com/vi/xOZ2bs9IboU/maxresdefault.jpg',
    cover3: 'https://img.youtube.com/vi/xOZ2bs9IboU/maxresdefault.jpg',
    source: require('../assets/VIDEO/Why Him- - Trailer 2 - 20th Century FOX.mp4'),
    duration: '00:46:04'
  }, 
  
];
  
  export default DATA;
  