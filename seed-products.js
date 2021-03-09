const seedProducts = [
  {
    name: '1957 Jaguar XKSS',
    description:
      'The Jaguar D-Type was a race car that really put the British company on the map, so much so that they decided to make a road-going version, the XKSS, in 1957.',
    picture:
      'https://static1.thethingsimages.com/wordpress/wp-content/uploads/2020/01/lux1.jpg?q=50&fit=crop&w=740&h=493&dpr=1.5',
    price: 8603,
    stock: 83
  },
  {
    name: '1955 Mercedes-Benz 300SL 198.043 Type Alloy',
    description:
      'The Mercedes-Benz 300SL is an absolute classic, and even though there were over 3,000 of them built between 1954 and 1963, there were only 29 built with all-aluminum alloy versions of the car, given the “198.043 Type” chassis name. For one of the fastest cars of its time, running on a 3-liter straight-six that delivered 215 hp and a top speed of 160 mph.',
    picture:
      'https://static1.thethingsimages.com/wordpress/wp-content/uploads/2020/01/lux3.jpg?q=50&fit=crop&w=740&h=591&dpr=1.5',
    price: 24,
    stock: 29
  },
  {
    name: '2008 Maybach Exelero',
    description:
      'One of the rarest luxury/supercars in the world is the one-off Maybach Exelero, built in 2008. The high-performance vehicle was powered by a twin-turbo V12 engine that produced 690 hp and a top speed of 218 mph.',
    picture:
      'https://static1.thethingsimages.com/wordpress/wp-content/uploads/2020/01/lux5.jpg?q=50&fit=crop&w=740&h=461&dpr=1.5',
    price: 3059,
    stock: 73
  },
  {
    name: '1937 Bugatti Type 57SC Atlantic Coupe',
    description:
      'The 1937 Bugatti Type 57SC Atlantic Coupe has been called the most expensive car on the planet, after fashion mogul Ralph Lauren showcased (and won) numerous car shows with his.',
    picture:
      'https://static1.thethingsimages.com/wordpress/wp-content/uploads/2020/01/lux9-e1578650387949.jpg?q=50&fit=crop&w=740&h=469&dpr=1.5',
    price: 40000000,
    stock: 44
  },
  {
    name: '1947 Talbot-Lago T-26 Grand Sport',
    description:
      ' The car was built by Talbot, a company that would file for bankruptcy numerous times, and there are only 12 versions of the luxury model ever produced. Equipped with a 4.5-liter six-cylinder that was one of the most powerful in the world at the time (190 hp, 125 mph top speed), a race car version of the Grand Sport won the Le Mans 24 Hour Race in 1950, with Louis Rosier behind the wheel.',
    picture:
      'https://static2.thethingsimages.com/wordpress/wp-content/uploads/2020/01/lux10.jpg?q=50&fit=crop&w=740&h=508&dpr=1.5',
    price: 4752,
    stock: 69
  },
  {
    name: '2018 Rolls-Royce Sweptail',
    description:
      'The Rolls-Royce Sweptail is a unique one-off two-seater car that is popular because Rolls-Royce isn’t known for making many special edition models. It was hand-built at the request of a yacht and aircraft collector whose identity remains anonymous, and it cost the guy $13 million when all was said and done. It occasionally makes appearances at car shows, complete with its bespoke design and intricately carved “swept-tail” backside.',
    picture:
      'https://static2.thethingsimages.com/wordpress/wp-content/uploads/2020/01/lux16.jpg?q=50&fit=crop&w=740&h=416&dpr=1.5',
    price: 41.27,
    stock: 47
  },
  {
    name: 'Town & Country',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    picture: 'http://dummyimage.com/134x107.bmp/5fa2dd/ffffff',
    price: 986,
    stock: 100
  },
  {
    name: 'Mentor',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    picture: 'http://dummyimage.com/199x160.png/ff4444/ffffff',
    price: 4199,
    stock: 30
  },
  {
    name: 'H1',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    picture: 'http://dummyimage.com/219x190.jpg/ff4444/ffffff',
    price: 3905,
    stock: 66
  },
  {
    name: 'Suburban 2500',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    picture: 'http://dummyimage.com/163x203.png/ff4444/ffffff',
    price: 6584,
    stock: 37
  },
  {
    name: 'S60',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    picture: 'http://dummyimage.com/179x225.png/dddddd/000000',
    price: 801,
    stock: 80
  },
  {
    name: 'Forester',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    picture: 'http://dummyimage.com/133x183.png/5fa2dd/ffffff',
    price: 647,
    stock: 95
  },
  {
    name: 'VUE',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    picture: 'http://dummyimage.com/184x199.png/dddddd/000000',
    price: 9757,
    stock: 40
  },
  {
    name: 'Protege',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    picture: 'http://dummyimage.com/225x207.jpg/ff4444/ffffff',
    price: 9049,
    stock: 67
  },
  {
    name: 'LeMans',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    picture: 'http://dummyimage.com/245x155.bmp/cc0000/ffffff',
    price: 8463,
    stock: 78
  },
  {
    name: 'XK Series',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    picture: 'http://dummyimage.com/141x235.png/ff4444/ffffff',
    price: 3275,
    stock: 67
  },
  {
    name: '350Z',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    picture: 'http://dummyimage.com/114x141.bmp/ff4444/ffffff',
    price: 2668,
    stock: 71
  },
  {
    name: 'Avalanche',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    picture: 'http://dummyimage.com/211x143.png/5fa2dd/ffffff',
    price: 6403,
    stock: 49
  },
  {
    name: 'Insight',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    picture: 'http://dummyimage.com/175x149.png/dddddd/000000',
    price: 7616,
    stock: 44
  },
  {
    name: 'Legacy',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    picture: 'http://dummyimage.com/170x105.jpg/ff4444/ffffff',
    price: 1627,
    stock: 100
  },
  {
    name: 'Aerostar',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    picture: 'http://dummyimage.com/196x106.jpg/cc0000/ffffff',
    price: 9572,
    stock: 87
  },
  {
    name: 'Tercel',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    picture: 'http://dummyimage.com/211x176.bmp/5fa2dd/ffffff',
    price: 1465,
    stock: 84
  },
  {
    name: '1500',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    picture: 'http://dummyimage.com/160x202.bmp/cc0000/ffffff',
    price: 6701,
    stock: 56
  },
  {
    name: 'Sigma',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    picture: 'http://dummyimage.com/188x131.jpg/ff4444/ffffff',
    price: 279,
    stock: 62
  },
  {
    name: 'F350',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    picture: 'http://dummyimage.com/156x104.png/ff4444/ffffff',
    price: 628,
    stock: 42
  },
  {
    name: 'MKT',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    picture: 'http://dummyimage.com/238x109.png/5fa2dd/ffffff',
    price: 6807,
    stock: 42
  },
  {
    name: 'Silverado 3500',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    picture: 'http://dummyimage.com/172x221.jpg/cc0000/ffffff',
    price: 266,
    stock: 62
  },
  {
    name: '1 Series',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    picture: 'http://dummyimage.com/208x193.jpg/ff4444/ffffff',
    price: 9135,
    stock: 72
  },
  {
    name: 'Riviera',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    picture: 'http://dummyimage.com/249x173.png/ff4444/ffffff',
    price: 2737,
    stock: 56
  },
  {
    name: 'S8',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    picture: 'http://dummyimage.com/219x164.jpg/ff4444/ffffff',
    price: 7821,
    stock: 58
  },
  {
    name: 'Esperante',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    picture: 'http://dummyimage.com/190x211.jpg/dddddd/000000',
    price: 3559,
    stock: 88
  },
  {
    name: 'Golf',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    picture: 'http://dummyimage.com/206x100.bmp/dddddd/000000',
    price: 6824,
    stock: 26
  },
  {
    name: 'Miata MX-5',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    picture: 'http://dummyimage.com/229x171.jpg/5fa2dd/ffffff',
    price: 3303,
    stock: 96
  },
  {
    name: 'Grand Vitara',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    picture: 'http://dummyimage.com/180x121.jpg/cc0000/ffffff',
    price: 9129,
    stock: 28
  },
  {
    name: 'Patriot',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    picture: 'http://dummyimage.com/242x188.png/cc0000/ffffff',
    price: 1107,
    stock: 35
  },
  {
    name: 'Mazda3',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    picture: 'http://dummyimage.com/122x239.jpg/dddddd/000000',
    price: 5856,
    stock: 78
  },
  {
    name: 'Model T',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    picture: 'http://dummyimage.com/122x141.bmp/cc0000/ffffff',
    price: 244,
    stock: 54
  },
  {
    name: 'J',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    picture: 'http://dummyimage.com/250x110.bmp/dddddd/000000',
    price: 5436,
    stock: 68
  },
  {
    name: 'Suburban 2500',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    picture: 'http://dummyimage.com/195x238.jpg/ff4444/ffffff',
    price: 8498,
    stock: 77
  },
  {
    name: 'Grand Prix',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    picture: 'http://dummyimage.com/243x129.jpg/ff4444/ffffff',
    price: 8093,
    stock: 87
  },
  {
    name: 'Colorado',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    picture: 'http://dummyimage.com/157x179.jpg/5fa2dd/ffffff',
    price: 943,
    stock: 79
  },
  {
    name: 'Savana 2500',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    picture: 'http://dummyimage.com/142x242.png/cc0000/ffffff',
    price: 2488,
    stock: 69
  },
  {
    name: 'Lancer',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    picture: 'http://dummyimage.com/198x119.png/5fa2dd/ffffff',
    price: 2122,
    stock: 39
  },
  {
    name: 'L300',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    picture: 'http://dummyimage.com/127x154.bmp/ff4444/ffffff',
    price: 168,
    stock: 47
  },
  {
    name: 'F350',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    picture: 'http://dummyimage.com/237x176.png/ff4444/ffffff',
    price: 6355,
    stock: 87
  },
  {
    name: 'Truck',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    picture: 'http://dummyimage.com/179x121.bmp/dddddd/000000',
    price: 9737,
    stock: 47
  },
  {
    name: 'MPV',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    picture: 'http://dummyimage.com/243x243.jpg/cc0000/ffffff',
    price: 745,
    stock: 68
  },
  {
    name: 'Scirocco',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    picture: 'http://dummyimage.com/110x101.png/5fa2dd/ffffff',
    price: 434,
    stock: 46
  },
  {
    name: 'Equator',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    picture: 'http://dummyimage.com/109x188.bmp/cc0000/ffffff',
    price: 2103,
    stock: 13
  },
  {
    name: 'Outlook',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    picture: 'http://dummyimage.com/106x208.jpg/cc0000/ffffff',
    price: 236,
    stock: 26
  },
  {
    name: 'Murano',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    picture: 'http://dummyimage.com/188x200.bmp/5fa2dd/ffffff',
    price: 8587,
    stock: 64
  },
  {
    name: 'E-Series',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    picture: 'http://dummyimage.com/180x209.jpg/ff4444/ffffff',
    price: 139,
    stock: 61
  },
  {
    name: 'Tempo',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    picture: 'http://dummyimage.com/152x148.jpg/cc0000/ffffff',
    price: 534,
    stock: 92
  },
  {
    name: 'Dakota',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    picture: 'http://dummyimage.com/213x182.png/dddddd/000000',
    price: 6953,
    stock: 80
  },
  {
    name: 'HHR',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    picture: 'http://dummyimage.com/135x133.png/cc0000/ffffff',
    price: 9005,
    stock: 50
  },
  {
    name: 'Tracker',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    picture: 'http://dummyimage.com/233x136.png/cc0000/ffffff',
    price: 4387,
    stock: 91
  },
  {
    name: 'Flex',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    picture: 'http://dummyimage.com/209x199.jpg/cc0000/ffffff',
    price: 890,
    stock: 91
  },
  {
    name: 'Yukon XL 1500',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    picture: 'http://dummyimage.com/160x150.png/5fa2dd/ffffff',
    price: 3066,
    stock: 85
  },
  {
    name: 'Silverado 2500',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    picture: 'http://dummyimage.com/243x175.jpg/ff4444/ffffff',
    price: 429,
    stock: 2
  },
  {
    name: 'SVX',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    picture: 'http://dummyimage.com/205x201.jpg/5fa2dd/ffffff',
    price: 674,
    stock: 61
  },
  {
    name: 'Terrain',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    picture: 'http://dummyimage.com/172x202.png/cc0000/ffffff',
    price: 8663,
    stock: 49
  },
  {
    name: 'W201',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    picture: 'http://dummyimage.com/173x216.bmp/5fa2dd/ffffff',
    price: 463,
    stock: 48
  },
  {
    name: 'Grand Prix',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    picture: 'http://dummyimage.com/201x148.bmp/cc0000/ffffff',
    price: 4721,
    stock: 62
  },
  {
    name: '9-3',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    picture: 'http://dummyimage.com/118x202.jpg/cc0000/ffffff',
    price: 5885,
    stock: 58
  },
  {
    name: 'Talon',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    picture: 'http://dummyimage.com/195x117.bmp/dddddd/000000',
    price: 2275,
    stock: 16
  },
  {
    name: 'Celica',
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    picture: 'http://dummyimage.com/163x182.bmp/5fa2dd/ffffff',
    price: 1273,
    stock: 74
  },
  {
    name: 'Passat',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    picture: 'http://dummyimage.com/139x140.jpg/5fa2dd/ffffff',
    price: 9821,
    stock: 53
  },
  {
    name: 'Amigo',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    picture: 'http://dummyimage.com/135x139.jpg/ff4444/ffffff',
    price: 8946,
    stock: 49
  },
  {
    name: 'Catera',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    picture: 'http://dummyimage.com/134x138.bmp/5fa2dd/ffffff',
    price: 5018,
    stock: 4
  },
  {
    name: 'Park Avenue',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    picture: 'http://dummyimage.com/170x135.png/dddddd/000000',
    price: 993,
    stock: 34
  },
  {
    name: 'Endeavor',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    picture: 'http://dummyimage.com/201x234.bmp/cc0000/ffffff',
    price: 2326,
    stock: 42
  },
  {
    name: 'G6',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    picture: 'http://dummyimage.com/168x184.jpg/5fa2dd/ffffff',
    price: 1849,
    stock: 27
  },
  {
    name: 'F350',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    picture: 'http://dummyimage.com/217x145.bmp/cc0000/ffffff',
    price: 1451,
    stock: 18
  },
  {
    name: 'Sonata',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    picture: 'http://dummyimage.com/220x120.png/5fa2dd/ffffff',
    price: 4529,
    stock: 62
  },
  {
    name: 'Fiero',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    picture: 'http://dummyimage.com/213x177.bmp/5fa2dd/ffffff',
    price: 7652,
    stock: 24
  },
  {
    name: 'Escalade EXT',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    picture: 'http://dummyimage.com/137x221.jpg/ff4444/ffffff',
    price: 674,
    stock: 81
  },
  {
    name: 'Continental',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    picture: 'http://dummyimage.com/227x187.bmp/dddddd/000000',
    price: 6215,
    stock: 29
  },
  {
    name: 'Rabbit',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    picture: 'http://dummyimage.com/140x231.bmp/ff4444/ffffff',
    price: 6761,
    stock: 40
  },
  {
    name: 'FX',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    picture: 'http://dummyimage.com/167x108.png/cc0000/ffffff',
    price: 2636,
    stock: 30
  },
  {
    name: 'GTI',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    picture: 'http://dummyimage.com/126x147.png/cc0000/ffffff',
    price: 9327,
    stock: 37
  },
  {
    name: 'Rondo',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    picture: 'http://dummyimage.com/218x150.jpg/5fa2dd/ffffff',
    price: 594,
    stock: 99
  },
  {
    name: 'F250',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    picture: 'http://dummyimage.com/124x158.bmp/5fa2dd/ffffff',
    price: 1547,
    stock: 15
  },
  {
    name: 'Clubman',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    picture: 'http://dummyimage.com/117x170.bmp/cc0000/ffffff',
    price: 8895,
    stock: 40
  },
  {
    name: 'C-Class',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    picture: 'http://dummyimage.com/196x106.bmp/cc0000/ffffff',
    price: 774,
    stock: 44
  },
  {
    name: 'M6',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    picture: 'http://dummyimage.com/117x105.bmp/dddddd/000000',
    price: 865,
    stock: 8
  },
  {
    name: 'Axiom',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    picture: 'http://dummyimage.com/160x171.bmp/5fa2dd/ffffff',
    price: 8614,
    stock: 3
  },
  {
    name: 'GTI',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    picture: 'http://dummyimage.com/164x115.jpg/dddddd/000000',
    price: 6161,
    stock: 37
  },
  {
    name: 'LR4',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    picture: 'http://dummyimage.com/125x107.bmp/ff4444/ffffff',
    price: 576,
    stock: 76
  },
  {
    name: 'XL-7',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    picture: 'http://dummyimage.com/119x116.png/ff4444/ffffff',
    price: 2752,
    stock: 5
  },
  {
    name: 'Gallardo',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    picture: 'http://dummyimage.com/143x156.png/dddddd/000000',
    price: 4565,
    stock: 17
  },
  {
    name: 'B-Series',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    picture: 'http://dummyimage.com/151x154.bmp/5fa2dd/ffffff',
    price: 3218,
    stock: 64
  },
  {
    name: 'Camaro',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    picture: 'http://dummyimage.com/117x176.png/cc0000/ffffff',
    price: 718,
    stock: 47
  },
  {
    name: 'Rocky',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    picture: 'http://dummyimage.com/206x137.bmp/5fa2dd/ffffff',
    price: 516,
    stock: 72
  },
  {
    name: 'B-Series',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    picture: 'http://dummyimage.com/119x160.png/ff4444/ffffff',
    price: 6315,
    stock: 74
  },
  {
    name: 'Yukon XL 1500',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    picture: 'http://dummyimage.com/123x167.bmp/ff4444/ffffff',
    price: 785,
    stock: 42
  },
  {
    name: 'Altima',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    picture: 'http://dummyimage.com/199x239.bmp/dddddd/000000',
    price: 1044,
    stock: 28
  },
  {
    name: '1500',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    picture: 'http://dummyimage.com/160x240.jpg/dddddd/000000',
    price: 723,
    stock: 53
  },
  {
    name: '5 Series',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    picture: 'http://dummyimage.com/147x140.bmp/5fa2dd/ffffff',
    price: 6607,
    stock: 62
  },
  {
    name: '88',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    picture: 'http://dummyimage.com/196x185.png/ff4444/ffffff',
    price: 4508,
    stock: 30
  },
  {
    name: 'Truck',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    picture: 'http://dummyimage.com/167x235.jpg/5fa2dd/ffffff',
    price: 1792,
    stock: 61
  }
]

module.exports = seedProducts
