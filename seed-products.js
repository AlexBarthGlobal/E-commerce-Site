const seedProducts = [
  {
    name: 'Savana 1500',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    picture: 'http://dummyimage.com/247x128.jpg/ff4444/ffffff',
    price: 86.03,
    stock: 83
  },
  {
    name: 'Express 2500',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    picture: 'http://dummyimage.com/214x115.png/dddddd/000000',
    price: 2.4,
    stock: 82
  },
  {
    name: 'Jetta',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    picture: 'http://dummyimage.com/159x190.png/dddddd/000000',
    price: 30.59,
    stock: 73
  },
  {
    name: 'Impala',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    picture: 'http://dummyimage.com/126x230.png/cc0000/ffffff',
    price: 1.65,
    stock: 44
  },
  {
    name: 'Cooper',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    picture: 'http://dummyimage.com/219x184.jpg/cc0000/ffffff',
    price: 47.52,
    stock: 69
  },
  {
    name: 'Lynx',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    picture: 'http://dummyimage.com/211x160.png/ff4444/ffffff',
    price: 41.27,
    stock: 47
  },
  {
    name: 'Town & Country',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    picture: 'http://dummyimage.com/134x107.bmp/5fa2dd/ffffff',
    price: 98.6,
    stock: 100
  },
  {
    name: 'Mentor',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    picture: 'http://dummyimage.com/199x160.png/ff4444/ffffff',
    price: 41.99,
    stock: 30
  },
  {
    name: 'H1',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    picture: 'http://dummyimage.com/219x190.jpg/ff4444/ffffff',
    price: 39.05,
    stock: 66
  },
  {
    name: 'Suburban 2500',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    picture: 'http://dummyimage.com/163x203.png/ff4444/ffffff',
    price: 65.84,
    stock: 37
  },
  {
    name: 'S60',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    picture: 'http://dummyimage.com/179x225.png/dddddd/000000',
    price: 8.01,
    stock: 80
  },
  {
    name: 'Forester',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    picture: 'http://dummyimage.com/133x183.png/5fa2dd/ffffff',
    price: 64.7,
    stock: 95
  },
  {
    name: 'VUE',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    picture: 'http://dummyimage.com/184x199.png/dddddd/000000',
    price: 97.57,
    stock: 40
  },
  {
    name: 'Protege',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    picture: 'http://dummyimage.com/225x207.jpg/ff4444/ffffff',
    price: 90.49,
    stock: 67
  },
  {
    name: 'LeMans',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    picture: 'http://dummyimage.com/245x155.bmp/cc0000/ffffff',
    price: 84.63,
    stock: 78
  },
  {
    name: 'XK Series',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    picture: 'http://dummyimage.com/141x235.png/ff4444/ffffff',
    price: 32.75,
    stock: 67
  },
  {
    name: '350Z',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    picture: 'http://dummyimage.com/114x141.bmp/ff4444/ffffff',
    price: 26.68,
    stock: 71
  },
  {
    name: 'Avalanche',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    picture: 'http://dummyimage.com/211x143.png/5fa2dd/ffffff',
    price: 64.03,
    stock: 49
  },
  {
    name: 'Insight',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    picture: 'http://dummyimage.com/175x149.png/dddddd/000000',
    price: 76.16,
    stock: 44
  },
  {
    name: 'Legacy',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    picture: 'http://dummyimage.com/170x105.jpg/ff4444/ffffff',
    price: 16.27,
    stock: 100
  },
  {
    name: 'Aerostar',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    picture: 'http://dummyimage.com/196x106.jpg/cc0000/ffffff',
    price: 95.72,
    stock: 87
  },
  {
    name: 'Tercel',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    picture: 'http://dummyimage.com/211x176.bmp/5fa2dd/ffffff',
    price: 14.65,
    stock: 84
  },
  {
    name: '1500',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    picture: 'http://dummyimage.com/160x202.bmp/cc0000/ffffff',
    price: 67.01,
    stock: 56
  },
  {
    name: 'Sigma',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    picture: 'http://dummyimage.com/188x131.jpg/ff4444/ffffff',
    price: 27.9,
    stock: 62
  },
  {
    name: 'F350',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    picture: 'http://dummyimage.com/156x104.png/ff4444/ffffff',
    price: 62.8,
    stock: 42
  },
  {
    name: 'MKT',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    picture: 'http://dummyimage.com/238x109.png/5fa2dd/ffffff',
    price: 68.07,
    stock: 42
  },
  {
    name: 'Silverado 3500',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    picture: 'http://dummyimage.com/172x221.jpg/cc0000/ffffff',
    price: 26.6,
    stock: 62
  },
  {
    name: '1 Series',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    picture: 'http://dummyimage.com/208x193.jpg/ff4444/ffffff',
    price: 91.35,
    stock: 72
  },
  {
    name: 'Riviera',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    picture: 'http://dummyimage.com/249x173.png/ff4444/ffffff',
    price: 27.37,
    stock: 56
  },
  {
    name: 'S8',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    picture: 'http://dummyimage.com/219x164.jpg/ff4444/ffffff',
    price: 78.21,
    stock: 58
  },
  {
    name: 'Esperante',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    picture: 'http://dummyimage.com/190x211.jpg/dddddd/000000',
    price: 35.59,
    stock: 88
  },
  {
    name: 'Golf',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    picture: 'http://dummyimage.com/206x100.bmp/dddddd/000000',
    price: 68.24,
    stock: 26
  },
  {
    name: 'Miata MX-5',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    picture: 'http://dummyimage.com/229x171.jpg/5fa2dd/ffffff',
    price: 33.03,
    stock: 96
  },
  {
    name: 'Grand Vitara',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    picture: 'http://dummyimage.com/180x121.jpg/cc0000/ffffff',
    price: 91.29,
    stock: 28
  },
  {
    name: 'Patriot',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    picture: 'http://dummyimage.com/242x188.png/cc0000/ffffff',
    price: 11.07,
    stock: 35
  },
  {
    name: 'Mazda3',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    picture: 'http://dummyimage.com/122x239.jpg/dddddd/000000',
    price: 58.56,
    stock: 78
  },
  {
    name: 'Model T',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    picture: 'http://dummyimage.com/122x141.bmp/cc0000/ffffff',
    price: 2.44,
    stock: 54
  },
  {
    name: 'J',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    picture: 'http://dummyimage.com/250x110.bmp/dddddd/000000',
    price: 54.36,
    stock: 68
  },
  {
    name: 'Suburban 2500',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    picture: 'http://dummyimage.com/195x238.jpg/ff4444/ffffff',
    price: 84.98,
    stock: 77
  },
  {
    name: 'Grand Prix',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    picture: 'http://dummyimage.com/243x129.jpg/ff4444/ffffff',
    price: 80.93,
    stock: 87
  },
  {
    name: 'Colorado',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    picture: 'http://dummyimage.com/157x179.jpg/5fa2dd/ffffff',
    price: 9.43,
    stock: 79
  },
  {
    name: 'Savana 2500',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    picture: 'http://dummyimage.com/142x242.png/cc0000/ffffff',
    price: 24.88,
    stock: 69
  },
  {
    name: 'Lancer',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    picture: 'http://dummyimage.com/198x119.png/5fa2dd/ffffff',
    price: 21.22,
    stock: 39
  },
  {
    name: 'L300',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    picture: 'http://dummyimage.com/127x154.bmp/ff4444/ffffff',
    price: 16.8,
    stock: 47
  },
  {
    name: 'F350',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    picture: 'http://dummyimage.com/237x176.png/ff4444/ffffff',
    price: 63.55,
    stock: 87
  },
  {
    name: 'Truck',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    picture: 'http://dummyimage.com/179x121.bmp/dddddd/000000',
    price: 97.37,
    stock: 47
  },
  {
    name: 'MPV',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    picture: 'http://dummyimage.com/243x243.jpg/cc0000/ffffff',
    price: 74.5,
    stock: 68
  },
  {
    name: 'Scirocco',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    picture: 'http://dummyimage.com/110x101.png/5fa2dd/ffffff',
    price: 4.34,
    stock: 46
  },
  {
    name: 'Equator',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    picture: 'http://dummyimage.com/109x188.bmp/cc0000/ffffff',
    price: 21.03,
    stock: 13
  },
  {
    name: 'Outlook',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    picture: 'http://dummyimage.com/106x208.jpg/cc0000/ffffff',
    price: 23.6,
    stock: 26
  },
  {
    name: 'Murano',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    picture: 'http://dummyimage.com/188x200.bmp/5fa2dd/ffffff',
    price: 85.87,
    stock: 64
  },
  {
    name: 'E-Series',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    picture: 'http://dummyimage.com/180x209.jpg/ff4444/ffffff',
    price: 1.39,
    stock: 61
  },
  {
    name: 'Tempo',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    picture: 'http://dummyimage.com/152x148.jpg/cc0000/ffffff',
    price: 53.4,
    stock: 92
  },
  {
    name: 'Dakota',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    picture: 'http://dummyimage.com/213x182.png/dddddd/000000',
    price: 69.53,
    stock: 80
  },
  {
    name: 'HHR',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    picture: 'http://dummyimage.com/135x133.png/cc0000/ffffff',
    price: 90.05,
    stock: 50
  },
  {
    name: 'Tracker',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    picture: 'http://dummyimage.com/233x136.png/cc0000/ffffff',
    price: 43.87,
    stock: 91
  },
  {
    name: 'Flex',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    picture: 'http://dummyimage.com/209x199.jpg/cc0000/ffffff',
    price: 89.0,
    stock: 91
  },
  {
    name: 'Yukon XL 1500',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    picture: 'http://dummyimage.com/160x150.png/5fa2dd/ffffff',
    price: 30.66,
    stock: 85
  },
  {
    name: 'Silverado 2500',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    picture: 'http://dummyimage.com/243x175.jpg/ff4444/ffffff',
    price: 42.9,
    stock: 2
  },
  {
    name: 'SVX',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    picture: 'http://dummyimage.com/205x201.jpg/5fa2dd/ffffff',
    price: 67.4,
    stock: 61
  },
  {
    name: 'Terrain',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    picture: 'http://dummyimage.com/172x202.png/cc0000/ffffff',
    price: 86.63,
    stock: 49
  },
  {
    name: 'W201',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    picture: 'http://dummyimage.com/173x216.bmp/5fa2dd/ffffff',
    price: 4.63,
    stock: 48
  },
  {
    name: 'Grand Prix',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    picture: 'http://dummyimage.com/201x148.bmp/cc0000/ffffff',
    price: 47.21,
    stock: 62
  },
  {
    name: '9-3',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    picture: 'http://dummyimage.com/118x202.jpg/cc0000/ffffff',
    price: 58.85,
    stock: 58
  },
  {
    name: 'Talon',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    picture: 'http://dummyimage.com/195x117.bmp/dddddd/000000',
    price: 22.75,
    stock: 16
  },
  {
    name: 'Celica',
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    picture: 'http://dummyimage.com/163x182.bmp/5fa2dd/ffffff',
    price: 12.73,
    stock: 74
  },
  {
    name: 'Passat',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    picture: 'http://dummyimage.com/139x140.jpg/5fa2dd/ffffff',
    price: 98.21,
    stock: 53
  },
  {
    name: 'Amigo',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    picture: 'http://dummyimage.com/135x139.jpg/ff4444/ffffff',
    price: 89.46,
    stock: 49
  },
  {
    name: 'Catera',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    picture: 'http://dummyimage.com/134x138.bmp/5fa2dd/ffffff',
    price: 50.18,
    stock: 4
  },
  {
    name: 'Park Avenue',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    picture: 'http://dummyimage.com/170x135.png/dddddd/000000',
    price: 9.93,
    stock: 34
  },
  {
    name: 'Endeavor',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    picture: 'http://dummyimage.com/201x234.bmp/cc0000/ffffff',
    price: 23.26,
    stock: 42
  },
  {
    name: 'G6',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    picture: 'http://dummyimage.com/168x184.jpg/5fa2dd/ffffff',
    price: 18.49,
    stock: 27
  },
  {
    name: 'F350',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    picture: 'http://dummyimage.com/217x145.bmp/cc0000/ffffff',
    price: 14.51,
    stock: 18
  },
  {
    name: 'Sonata',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    picture: 'http://dummyimage.com/220x120.png/5fa2dd/ffffff',
    price: 45.29,
    stock: 62
  },
  {
    name: 'Fiero',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    picture: 'http://dummyimage.com/213x177.bmp/5fa2dd/ffffff',
    price: 76.52,
    stock: 24
  },
  {
    name: 'Escalade EXT',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    picture: 'http://dummyimage.com/137x221.jpg/ff4444/ffffff',
    price: 67.4,
    stock: 81
  },
  {
    name: 'Continental',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    picture: 'http://dummyimage.com/227x187.bmp/dddddd/000000',
    price: 62.15,
    stock: 29
  },
  {
    name: 'Rabbit',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    picture: 'http://dummyimage.com/140x231.bmp/ff4444/ffffff',
    price: 67.61,
    stock: 40
  },
  {
    name: 'FX',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    picture: 'http://dummyimage.com/167x108.png/cc0000/ffffff',
    price: 26.36,
    stock: 30
  },
  {
    name: 'GTI',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    picture: 'http://dummyimage.com/126x147.png/cc0000/ffffff',
    price: 93.27,
    stock: 37
  },
  {
    name: 'Rondo',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    picture: 'http://dummyimage.com/218x150.jpg/5fa2dd/ffffff',
    price: 5.94,
    stock: 99
  },
  {
    name: 'F250',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    picture: 'http://dummyimage.com/124x158.bmp/5fa2dd/ffffff',
    price: 15.47,
    stock: 15
  },
  {
    name: 'Clubman',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    picture: 'http://dummyimage.com/117x170.bmp/cc0000/ffffff',
    price: 88.95,
    stock: 40
  },
  {
    name: 'C-Class',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    picture: 'http://dummyimage.com/196x106.bmp/cc0000/ffffff',
    price: 77.4,
    stock: 44
  },
  {
    name: 'M6',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    picture: 'http://dummyimage.com/117x105.bmp/dddddd/000000',
    price: 86.5,
    stock: 8
  },
  {
    name: 'Axiom',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    picture: 'http://dummyimage.com/160x171.bmp/5fa2dd/ffffff',
    price: 86.14,
    stock: 3
  },
  {
    name: 'GTI',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    picture: 'http://dummyimage.com/164x115.jpg/dddddd/000000',
    price: 61.61,
    stock: 37
  },
  {
    name: 'LR4',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    picture: 'http://dummyimage.com/125x107.bmp/ff4444/ffffff',
    price: 57.6,
    stock: 76
  },
  {
    name: 'XL-7',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    picture: 'http://dummyimage.com/119x116.png/ff4444/ffffff',
    price: 27.52,
    stock: 5
  },
  {
    name: 'Gallardo',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    picture: 'http://dummyimage.com/143x156.png/dddddd/000000',
    price: 45.65,
    stock: 17
  },
  {
    name: 'B-Series',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    picture: 'http://dummyimage.com/151x154.bmp/5fa2dd/ffffff',
    price: 32.18,
    stock: 64
  },
  {
    name: 'Camaro',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    picture: 'http://dummyimage.com/117x176.png/cc0000/ffffff',
    price: 71.8,
    stock: 47
  },
  {
    name: 'Rocky',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    picture: 'http://dummyimage.com/206x137.bmp/5fa2dd/ffffff',
    price: 51.6,
    stock: 72
  },
  {
    name: 'B-Series',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    picture: 'http://dummyimage.com/119x160.png/ff4444/ffffff',
    price: 63.15,
    stock: 74
  },
  {
    name: 'Yukon XL 1500',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    picture: 'http://dummyimage.com/123x167.bmp/ff4444/ffffff',
    price: 7.85,
    stock: 42
  },
  {
    name: 'Altima',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    picture: 'http://dummyimage.com/199x239.bmp/dddddd/000000',
    price: 10.44,
    stock: 28
  },
  {
    name: '1500',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    picture: 'http://dummyimage.com/160x240.jpg/dddddd/000000',
    price: 72.3,
    stock: 53
  },
  {
    name: '5 Series',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    picture: 'http://dummyimage.com/147x140.bmp/5fa2dd/ffffff',
    price: 66.07,
    stock: 62
  },
  {
    name: '88',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    picture: 'http://dummyimage.com/196x185.png/ff4444/ffffff',
    price: 45.08,
    stock: 30
  },
  {
    name: 'Truck',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    picture: 'http://dummyimage.com/167x235.jpg/5fa2dd/ffffff',
    price: 17.92,
    stock: 61
  }
]

module.exports = seedProducts
