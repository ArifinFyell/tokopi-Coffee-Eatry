// ===== DATA MENU TOKOPI =====
// Edit nama, deskripsi, harga, emoji di sini.
// Untuk foto: isi field 'img' dengan path/URL gambar Anda.
// Contoh: img: 'foto/nasi-goreng.jpg'

const MENU = {
  makanan: [
    {
      id: 'm1',
      nama: 'Bakmie Chilli Oil',
      desc: 'Mie kenyal dengan siraman chilli oil pedas aromatik yang menggugah selera',
      harga: 'Rp 24.000',
      img: 'foto/bakmi.png',
      badge: 'Spicy',
      tag: 'Noodle'
    },
    {
      id: 'm2',
      nama: 'Nasi Ayam Serundeng',
      desc: 'Nasi dengan ayam berbumbu dan taburan serundeng kelapa gurih yang renyah',
      harga: 'Rp 28.000',
      emoji: '🍚',
      img: '',
      badge: '',
      tag: 'Rice Dish'
    },
    {
      id: 'm3',
      nama: 'Nasi Ayam Penyet',
      desc: 'Ayam goreng empuk dipenyetkan dengan sambal bawang pedas dan lalapan segar',
      harga: 'Rp 28.000',
      emoji: '🍗',
      img: '',
      badge: 'Best Seller',
      tag: 'Chicken'
    },
    {
      id: 'm4',
      nama: 'Nasi Ayam Sambal Matah',
      desc: 'Nasi ayam goreng disajikan dengan sambal matah segar khas Bali yang harum',
      harga: 'Rp 24.000',
      img: 'foto/sambal matah.png',
      badge: 'Spicy 🌶️',
      tag: 'Chicken'
    },
    {
      id: 'm5',
      nama: 'Nasi Ayam Sambal Terasi',
      desc: 'Nasi ayam dengan sambal terasi bakar yang kaya rasa dan aroma khas',
      harga: 'Rp 24.000',
      emoji: '🍗',
      img: '',
      badge: '',
      tag: 'Chicken'
    },
    {
      id: 'm6',
      nama: 'Nasi Ayam Teriyaki',
      desc: 'Ayam fillet dimasak saus teriyaki manis gurih di atas nasi putih hangat',
      harga: 'Rp 24.000',
      emoji: '🍱',
      img: '',
      badge: 'Favorit',
      tag: 'Chicken'
    },
    {
      id: 'm7',
      nama: 'Nasi Goreng Spesial Katsu',
      desc: 'Nasi goreng wangi berbumbu dengan potongan chicken katsu crispy di atasnya',
      harga: 'Rp 28.000',
      emoji: '🍳',
      img: '',
      badge: 'Best Seller',
      tag: 'Rice Dish'
    },
    {
      id: 'm8',
      nama: 'Chicken Butter Rice',
      desc: 'Nasi pulen dengan ayam berbumbu butter yang creamy dan lezat',
      harga: 'Rp 24.000',
      emoji: '🧈',
      img: '',
      badge: '',
      tag: 'Rice Dish'
    },
    {
      id: 'm9',
      nama: 'Chicken Teriyaki Butter Rice',
      desc: 'Paduan sempurna ayam teriyaki dan butter di atas nasi hangat yang gurih',
      harga: 'Rp 28.000',
      emoji: '🍱',
      img: '',
      badge: 'Favorit',
      tag: 'Rice Dish'
    },
    {
      id: 'm10',
      nama: 'Nasi Goreng Telur',
      desc: 'Nasi goreng klasik dengan telur dadar atau ceplok pilihan, sederhana tapi lezat',
      harga: 'Rp 18.000',
      emoji: '🍳',
      img: '',
      badge: '',
      tag: 'Rice Dish'
    },
    {
      id: 'm11',
      nama: 'Spaghetti Chicken Katsu',
      desc: 'Spaghetti saus tomat dengan topping chicken katsu crispy yang gurih',
      harga: 'Rp 26.000',
      emoji: '🍝',
      img: '',
      badge: '',
      tag: 'Pasta'
    },
    {
      id: 'm12',
      nama: 'Spaghetti Bolognese',
      desc: 'Spaghetti dengan saus bolognese daging cincang berbumbu tomat Italia',
      harga: 'Rp 22.000',
      emoji: '🍝',
      img: '',
      badge: '',
      tag: 'Pasta'
    },
    {
      id: 'm13',
      nama: 'Spaghetti Carbonara',
      desc: 'Spaghetti creamy carbonara dengan saus keju, telur, dan beef bacon',
      harga: 'Rp 22.000',
      emoji: '🍝',
      img: '',
      badge: '',
      tag: 'Pasta'
    },
    {
      id: 'm14',
      nama: 'Mienas',
      desc: 'Menu mie spesial andalan Tokopi dengan bumbu rahasia yang khas dan nikmat',
      harga: 'Rp 22.000',
      emoji: '🍜',
      img: '',
      badge: 'Signature',
      tag: 'Noodle'
    },
    {
      id: 'm15',
      nama: 'Martabak Mie',
      desc: 'Mie telur dibungkus kulit tipis renyah, digoreng hingga keemasan sempurna',
      harga: 'Rp 18.000',
      emoji: '🥙',
      img: '',
      badge: '',
      tag: 'Snack'
    },
    {
      id: 'm16',
      nama: 'Indomie Goreng / Rebus',
      desc: 'Indomie dengan bumbu aslinya, pilih goreng atau rebus sesuai selera',
      harga: 'Rp 15.000',
      emoji: '🍜',
      img: '',
      badge: '',
      tag: 'Noodle'
    },
    {
      id: 'm17',
      nama: 'Mix Platter',
      desc: 'Piring campur berisikan berbagai macam gorengan dan snack pilihan Tokopi',
      harga: 'Rp 22.000',
      emoji: '🍽️',
      img: '',
      badge: 'Favorit',
      tag: 'Snack'
    },
    {
      id: 'm18',
      nama: 'French Fries Bolognese',
      desc: 'Kentang goreng crispy disiram saus bolognese daging yang kaya rasa',
      harga: 'Rp 22.000',
      emoji: '🍟',
      img: '',
      badge: '',
      tag: 'Snack'
    },
    {
      id: 'm19',
      nama: 'Pangsit Seafood Goreng',
      desc: 'Pangsit isi seafood digoreng renyah keemasan, disajikan dengan saus spesial',
      harga: 'Rp 20.000',
      emoji: '🦐',
      img: '',
      badge: '',
      tag: 'Seafood'
    },
    {
      id: 'm20',
      nama: 'Tahu Walik',
      desc: 'Tahu dibalik isinya, diisi mie pedas dan digoreng crispy hingga kecokelatan',
      harga: 'Rp 18.000',
      img: 'foto/tahu walik.png',
      badge: 'Spicy 🌶️',
      tag: 'Snack'
    },
    {
      id: 'm21',
      nama: 'Ubi Goreng',
      desc: 'Ubi jalar manis dipotong dan digoreng hingga luar renyah dalam lembut',
      harga: 'Rp 18.000',
      emoji: '🍠',
      img: '',
      badge: 'Vegan',
      tag: 'Snack'
    },
    {
      id: 'm22',
      nama: 'Snow Pancake',
      desc: 'Pancake fluffy lembut berlapis krim salju dengan topping manis pilihan',
      harga: 'Rp 24.000',
      emoji: '🥞',
      img: '',
      badge: 'Sweet',
      tag: 'Dessert'
    },
    {
      id: 'm23',
      nama: 'Ice Cream Toast',
      desc: 'Roti panggang renyah dengan topping es krim lembut yang meleleh nikmat',
      harga: 'Rp 24.000',
      emoji: '🍦',
      img: '',
      badge: 'Sweet',
      tag: 'Dessert'
    },
    {
      id: 'm24',
      nama: 'Pisang Gula Aren',
      desc: 'Pisang goreng dengan siraman gula aren khas yang legit dan karamel',
      harga: 'Rp 18.000',
      emoji: '🍌',
      img: '',
      badge: '',
      tag: 'Dessert'
    },
    {
      id: 'm25',
      nama: 'Donat Kampung',
      desc: 'Donat tradisional bertekstur kenyal dengan taburan gula halus yang manis',
      harga: 'Rp 18.000',
      emoji: '🍩',
      img: 'foto/donat.jpeg',
      badge: '',
      tag: 'Dessert'
    },
    {
      id: 'm26',
      nama: 'Roti Bakar Original',
      desc: 'Roti tawar dipanggang hingga renyah dengan mentega dan selai pilihan',
      harga: 'Rp 18.000',
      emoji: '🍞',
      img: '',
      badge: '',
      tag: 'Dessert'
    },
    {
      id: 'm27',
      nama: 'Roti Kulus',
      desc: 'Roti tawar polos panggang dengan mentega lumer, simple dan memuaskan',
      harga: 'Rp 18.000',
      emoji: '🍞',
      img: '',
      badge: '',
      tag: 'Dessert'
    },
    {
      id: 'm28',
      nama: 'Ice Cream Scoop',
      desc: 'Satu scoop es krim pilihan rasa dengan topping sesuai selera Anda',
      harga: 'Rp 18.000',
      emoji: '🍨',
      img: '',
      badge: 'Sweet',
      tag: 'Dessert'
    }
  ],

  minuman: [
    {
      id: 'd1',
      nama: 'Creamy Salted Caramel',
      desc: 'Perpaduan karamel manis dan sentuhan garam laut di atas minuman creamy dingin',
      harga: 'Rp 24.000',
      emoji: '🍮',
      img: '',
      badge: 'Best Seller',
      tag: 'Signature'
    },
    {
      id: 'd2',
      nama: 'Tokopi Coffee',
      desc: 'Kopi racikan khas Tokopi dengan blend biji pilihan yang bold dan aromatik',
      harga: 'Rp 20.000',
      emoji: '☕',
      img: '',
      badge: 'Signature',
      tag: 'Coffee'
    },
    {
      id: 'd3',
      nama: 'Butterscoot / Creamy Butterscooth',
      desc: 'Minuman creamy dengan rasa butterscotch lembut, manis dan legit menyenangkan',
      harga: 'Rp 20.000/22.000',
      emoji: '🧈',
      img: '',
      badge: 'Favorit',
      tag: 'Signature'
    },
    {
      id: 'd4',
      nama: 'Mocca Coffee',
      desc: 'Kopi espresso dengan sentuhan cokelat mocca yang rich dan menyegarkan',
      harga: 'Rp 20.000',
      emoji: '🍫',
      img: '',
      badge: '',
      tag: 'Coffee'
    },
    {
      id: 'd5',
      nama: 'Kopi Susu Gula Aren',
      desc: 'Espresso dengan susu segar dan manisnya gula aren asli yang karamel',
      harga: 'Rp 18.000',
      emoji: '☕',
      img: '',
      badge: 'Best Seller',
      tag: 'Coffee'
    },
    {
      id: 'd6',
      nama: 'Kopi Susu Tokopi',
      desc: 'Kopi susu racikan spesial Tokopi dengan formula rasa yang khas dan nikmat',
      harga: 'Rp 18.000',
      emoji: '☕',
      img: '',
      badge: 'Signature',
      tag: 'Coffee'
    },
    {
      id: 'd7',
      nama: 'Ice / Hot Latte',
      desc: 'Espresso dengan susu segar berbusa, tersedia dalam sajian dingin atau panas',
      harga: 'Rp 20.000',
      emoji: '🥛',
      img: '',
      badge: '',
      tag: 'Coffee'
    },
    {
      id: 'd8',
      nama: 'Americano',
      desc: 'Espresso diencerkan dengan air panas, rasa kopi bold bersih tanpa susu',
      harga: 'Rp 18.000',
      emoji: '☕',
      img: '',
      badge: '',
      tag: 'Coffee'
    },
    {
      id: 'd9',
      nama: 'Long Black',
      desc: 'Air panas dituang di atas double espresso, mempertahankan crema sempurna',
      harga: 'Rp 20.000',
      emoji: '☕',
      img: '',
      badge: '',
      tag: 'Coffee'
    },
    {
      id: 'd10',
      nama: 'Choco Hazelnut',
      desc: 'Minuman cokelat kaya dengan aroma hazelnut yang intens dan memikat',
      harga: 'Rp 20.000',
      emoji: '🍫',
      img: '',
      badge: '',
      tag: 'Chocolate'
    },
    {
      id: 'd11',
      nama: 'Matcha Latte',
      desc: 'Matcha bubuk pilihan dipadukan susu segar lembut, rasa earthy yang khas',
      harga: 'Rp 20.000',
      emoji: '🍵',
      img: '',
      badge: 'Favorit',
      tag: 'Matcha'
    },
    {
      id: 'd12',
      nama: 'Taro Latte',
      desc: 'Minuman latte dengan rasa taro ungu yang creamy manis dan cantik',
      harga: 'Rp 20.000',
      emoji: '💜',
      img: '',
      badge: '',
      tag: 'Latte'
    },
    {
      id: 'd13',
      nama: 'Red Velvet Latte',
      desc: 'Latte merah memikat dengan rasa red velvet yang manis dan sedikit cokelat',
      harga: 'Rp 20.000',
      emoji: '❤️',
      img: '',
      badge: '',
      tag: 'Latte'
    },
    {
      id: 'd14',
      nama: 'Choco Latte Milk',
      desc: 'Susu segar dengan cokelat premium yang rich dan lembut di setiap tegukan',
      harga: 'Rp 20.000',
      emoji: '🍫',
      img: '',
      badge: '',
      tag: 'Chocolate'
    },
    {
      id: 'd15',
      nama: 'To-Matcha',
      desc: 'Minuman signature Tokopi berbasis matcha dengan sentuhan khas yang unik',
      harga: 'Rp 24.000',
      emoji: '🍵',
      img: '',
      badge: 'Signature',
      tag: 'Matcha'
    },
    {
      id: 'd16',
      nama: 'To-Taro',
      desc: 'Minuman signature Tokopi berbasis taro dengan rasa yang creamy dan khas',
      harga: 'Rp 24.000',
      emoji: '💜',
      img: '',
      badge: 'Signature',
      tag: 'Signature'
    },
    {
      id: 'd17',
      nama: 'To-Cookies',
      desc: 'Minuman signature Tokopi dengan cita rasa cookies yang kaya dan memanjakan',
      harga: 'Rp 24.000',
      emoji: '🍪',
      img: '',
      badge: 'Signature',
      tag: 'Signature'
    },
    {
      id: 'd18',
      nama: 'Lemon Peach',
      desc: 'Minuman segar perpaduan lemon asam dan persik manis yang menyegarkan',
      harga: 'Rp 18.000',
      emoji: '🍑',
      img: '',
      badge: '',
      tag: 'Fresh'
    },
    {
      id: 'd19',
      nama: 'Fresh Strawberry',
      desc: 'Minuman stroberi segar tanpa pemanis buatan, manis alami dan menyegarkan',
      harga: 'Rp 18.000',
      emoji: '🍓',
      img: '',
      badge: '',
      tag: 'Fresh'
    },
    {
      id: 'd20',
      nama: 'Blue Ocean',
      desc: 'Minuman soda biru segar dengan rasa butterfly pea yang cantik dan unik',
      harga: 'Rp 18.000',
      emoji: '💙',
      img: '',
      badge: 'Signature',
      tag: 'Mocktail'
    },
    {
      id: 'd21',
      nama: 'Lychee Tea',
      desc: 'Teh dingin segar dengan sirup leci harum yang manis dan menyegarkan',
      harga: 'Rp 18.000',
      emoji: '🍈',
      img: '',
      badge: '',
      tag: 'Tea'
    },
    {
      id: 'd22',
      nama: 'V60',
      desc: 'Kopi manual brew V60 dengan biji pilihan, menghasilkan rasa yang bersih',
      harga: 'Rp 20.000',
      emoji: '☕',
      img: '',
      badge: '',
      tag: 'Manual Brew'
    },
    {
      id: 'd23',
      nama: 'Japanese',
      desc: 'Kopi iced bergaya Jepang yang ringan dan bersih dengan es batu segar',
      harga: 'Rp 22.000',
      emoji: '🧊',
      img: '',
      badge: '',
      tag: 'Manual Brew'
    },
    {
      id: 'd24',
      nama: 'Vietnam Drip',
      desc: 'Kopi tetes Vietnam yang kental dan bold dengan sedikit susu kental manis',
      harga: 'Rp 18.000',
      emoji: '🫗',
      img: '',
      badge: '',
      tag: 'Manual Brew'
    }
  ]
};
