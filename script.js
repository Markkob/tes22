const { useState, useEffect } = React;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav class="fixed top-0 w-full bg-gray-800/90 backdrop-blur-md z-50 shadow-lg shadow-purple-500/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <img src="https://via.placeholder.com/40" alt="Logo" class="w-10 h-10 rounded-full" />
            <h1 class="text-2xl font-bold text-purple-400">MakSokii Studio</h1>
          </div>
          <div class="hamburger md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={menuOpen ? "fas fa-times text-2xl" : "fas fa-bars text-2xl"}></i>
          </div>
          <div className={`nav-menu md:flex md:space-x-6 ${menuOpen ? 'active' : ''}`}>
            <a href="#home" class="nav-link hover:text-purple-400"><i class="fas fa-home mr-2"></i>ទំព័រដើម</a>
            <a href="#services" class="nav-link hover:text-purple-400"><i class="fas fa-cogs mr-2"></i>សេវាកម្ម</a>
            <a href="#bots" class="nav-link hover:text-purple-400"><i class="fas fa-robot mr-2"></i>Bot សម្រាប់លក់</a>
            <a href="#custom-bot" class="nav-link hover:text-purple-400"><i class="fas fa-plus-circle mr-2"></i>ស្នើសុំ Bot</a>
            <a href="#team" class="nav-link hover:text-purple-400"><i class="fas fa-users mr-2"></i>ក្រុមរបស់យើង</a>
            <a href="#contact" class="nav-link hover:text-purple-400"><i class="fas fa-envelope mr-2"></i>ទំនាក់ទំនង</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  useEffect(() => {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#a855f7" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#a855f7", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
      },
      retina_detect: true
    });
  }, []);

  return (
    <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-gray-900 relative overflow-hidden">
      <div id="particles-js"></div>
      <div class="text-center z-10 px-4">
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 float-animation text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">MakSokii Studio</h1>
        <p class="text-lg sm:text-xl md:text-2xl mb-8">បង្កើត Bot ដ៏ឆ្លាតវៃជាមួយក្រុម Premium របស់យើង</p>
        <a href="#contact" class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-full text-lg transition shadow-lg hover:shadow-purple-500/50"><i class="fas fa-rocket mr-2"></i>ទាក់ទងឥឡូវនេះ</a>
        <div class="mt-6 flex flex-wrap justify-center space-x-4">
          <span class="trust-badge"><i class="fas fa-users mr-2"></i>Trusted by 1,000+ Users</span>
          <span class="trust-badge"><i class="fas fa-headset mr-2"></i>24/7 Support</span>
          <span class="trust-badge"><i class="fas fa-star mr-2"></i>Premium Pro Max Plus</span>
        </div>
      </div>
      <img
        src="https://via.placeholder.com/300"
        alt="Robot Mascot"
        class="absolute bottom-10 right-10 w-48 sm:w-64 md:w-[450px] float-animation glow-animation opacity-95"
      />
    </section>
  );
};

const Services = () => (
  <section id="services" class="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"><i class="fas fa-cogs mr-3"></i>សេវាកម្មរបស់យើង</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          { title: "ការអភិវឌ្ឍ Bot", desc: "បង្កើត Telegram និង Discord Bot ដែលមានប្រសិទ្ធភាព", icon: "fas fa-robot" },
          { title: "គេហទំព័រ", desc: "រចនា និងអភិវឌ្ឍគេហទំព័រទំនើប", icon: "fas fa-globe" },
          { title: "ប្រឹក្សាបច្ចេកវិទ្យា", desc: "ផ្តល់ដំបូន្មានសម្រាប់គម្រោងបច្ចេកវិទ្យា", icon: "fas fa-headset" }
        ].map((service, index) => (
          <div key={index} class="bg-gray-700/50 backdrop-blur-md p-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2">
            <i className={`${service.icon} text-4xl text-purple-400 mb-4`}></i>
            <h3 class="text-xl font-semibold mb-4">{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BotModal = ({ bot, onClose }) => (
  <div class="modal">
    <div class="modal-content">
      <span class="close-btn" onClick={onClose}><i class="fas fa-times"></i></span>
      <div class="text-center">
        <img src={bot.logo} alt={`${bot.name} Logo`} class="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg shadow-purple-500/50" />
        <h2 class="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">{bot.name}</h2>
      </div>
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold text-purple-400"><i class="fas fa-cogs mr-2"></i>មុខងារ</h3>
          <p>{bot.features}</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-purple-400"><i class="fas fa-dollar-sign mr-2"></i>តម្លៃ</h3>
          <p class="text-xl font-bold text-purple-300">{bot.price}</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-purple-400"><i class="fas fa-star mr-2"></i>អត្ថប្រយោជន៍</h3>
          <p>{bot.benefits}</p>
        </div>
        <div class="text-center">
          <a href="#contact" class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-full text-lg transition shadow-lg hover:shadow-purple-500/50"><i class="fas fa-shopping-cart mr-2"></i>ទិញឥឡូវនេះ</a>
        </div>
      </div>
    </div>
  </div>
);

const Bots = () => {
  const [selectedBot, setSelectedBot] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const bots = [
    {
      name: "ChatBot Pro",
      category: "Social Media",
      price: "$99",
      desc: "Bot ឆ្លើយតបឆ្លាតវៃសម្រាប់អាជីវកម្ម",
      icon: "fas fa-comment-dots",
      logo: "https://via.placeholder.com/100",
      features: "ឆ្លើយសំណួរអតិថិជនស្វ័យប្រវត្តិ, គាំទ្រពហុភាសា, វិភាគទិន្នន័យអតិថិជន, ប្ដូរតាមតម្រូវការ",
      benefits: "ជួយសន្សំពេលវេលា និងថវិការបស់អ្នក! ChatBot Pro ត្រូវបានរចនាឡើងដើម្បីបង្កើនបទពិសោធន៍អតិថិជនរបស់អ្នកជាមួយនឹងបច្ចេកវិទ្យាទំនើបបំផុត។ យើងធានាគុណភាព និងសេវាកម្មក្រោយការលក់ដ៏ល្អបំផុត ដើម្បីឱ្យអ្នកអាចជឿជាក់លើផលិតផលរបស់យើង។"
    },
    {
      name: "AutoMod Bot",
      category: "Moderation",
      price: "$49",
      desc: "Bot គ្រប់គ្រងសហគមន៍ស្វ័យប្រវត្តិ",
      icon: "fas fa-shield-alt",
      logo: "https://via.placeholder.com/100",
      features: "គ្រប់គ្រងសហគមន៍ 24/7, ច្រោះសារមិនសមរម្យ, កំណត់ច្បាប់ស្វ័យប្រវត្តិ, ផ្ញើសារស្វាគមន៍",
      benefits: "ធ្វើឱ្យសហគមន៍របស់អ្នកមានសណ្តាប់ធ្នាប់ជាមួយ AutoMod Bot! យើងប្តេជ្ញាផ្តល់ឧបករណ៍ដែលអាចជឿទុកចិត្តបាន ដើម្បីជួយអ្នកគ្រប់គ្រងសហគមន៍បានយ៉ាងងាយស្រួល និងមានប្រសិទ្ធភាព។"
    },
    {
      name: "SMM Bot",
      category: "Social Media",
      price: "$79",
      desc: "Bot សម្រាប់បង្កើន engagement នៅលើបណ្តាញសង្គម",
      icon: "fas fa-users",
      logo: "https://via.placeholder.com/100",
      features: "បង្កើន followers, likes និង comments ដោយស្វ័យប្រវត្តិ, គ្រប់គ្រង campaign នៅលើ Instagram, Telegram និង Facebook, វិភាគទិន្នន័យ engagement",
      benefits: "បង្កើនវត្តមានអនឡាញរបស់អ្នកជាមួយ SMM Bot! យើងជួយឱ្យអាជីវកម្មរបស់អ្នកលេចធ្លោនៅលើបណ្តាញសង្គម ដោយប្រើបច្ចេកវិទ្យាទំនើប និងសុវត្ថិភាពខ្ពស់។"
    },
    {
      name: "Topup Bot",
      category: "Utility",
      price: "$59",
      desc: "Bot សម្រាប់បញ្ចូលលុយសម្រាប់ហ្គេម និងសេវាផ្សេងៗ",
      icon: "fas fa-coins",
      logo: "https://via.placeholder.com/100",
      features: "បញ្ចូលលុយភ្លាមៗសម្រាប់ហ្គេមដូចជា PUBG, Free Fire, និង Mobile Legends, គាំទ្រការទូទាត់ច្រើនប្រភេទ, ប្រតិបត្តិការរហ័ស និងសុវត្ថិភាព",
      benefits: "សម្រួលការបញ្ចូលលុយជាមួយ Topup Bot! យើងផ្តល់សេវាកម្មរហ័ស និងសុវត្ថិភាព ដើម្បីឱ្យអ្នករីករាយជាមួយហ្គេមដែលអ្នកចូលចិត្តដោយមិនចាំបាច់បារម្ភ។"
    },
    {
      name: "Reminder Bot",
      category: "Utility",
      price: "$29",
      desc: "Bot ជួយរំលឹកព្រឹត្តិការណ៍ និងកិច្ចការសំខាន់ៗ",
      icon: "fas fa-bell",
      logo: "https://via.placeholder.com/100",
      features: "រំលឹកព្រឹត្តិការណ៍សំខាន់ៗ, កំណត់កាលវិភាគដោយស្វ័យប្រវត្តិ, ផ្ញើការជូនដំណឹងទៅ Telegram ឬ Email, គាំទ្រពហុភាសា",
      benefits: "កុំឱ្យខកខានកិច្ចការសំខាន់ៗជាមួយ Reminder Bot! យើងជួយអ្នករៀបចំពេលវេលាប្រកបដោយប្រសិទ្ធភាព ដើម្បីឱ្យអ្នកផ្តោតលើអ្វីដែលសំខាន់។"
    },
    {
      name: "Auto Reply Bot",
      category: "Moderation",
      price: "$39",
      desc: "Bot ឆ្លើយសារដោយស្វ័យប្រវត្តិសម្រាប់អតិថិជន",
      icon: "fas fa-reply",
      logo: "https://via.placeholder.com/100",
      features: "ឆ្លើយសារដោយស្វ័យប្រវត្តិ 24/7, គាំទ្រការប្ដូរសារតាមតម្រូវការ, ច្រោះសារមិនសមរម្យ, ផ្ញើសារស្វាគមន៍",
      benefits: "បង្កើនបទពិសោធន៍អតិថិជនជាមួយ Auto Reply Bot! យើងផ្តល់សេវាកម្មឆ្លើយតបរហ័ស និងវៃឆ្លាត ដើម្បីឱ្យអតិថិជនរបស់អ្នកមានអារម្មណ៍ថាត្រូវបានយកចិត្តទុកដាក់។"
    },
    {
      name: "Analytics Bot",
      category: "Utility",
      price: "$69",
      desc: "Bot វិភាគទិន្នន័យអ្នកប្រើប្រាស់ និងសកម្មភាព",
      icon: "fas fa-chart-line",
      logo: "https://via.placeholder.com/100",
      features: "វិភាគទិន្នន័យ engagement, តាមដានសកម្មភាពអ្នកប្រើ, បង្កើតរបាយការណ៍លម្អិត, ផ្តល់ការណែនាំដើម្បីបង្កើនប្រសិទ្ធភាព",
      benefits: "យល់ដឹងពីអតិថិជនរបស់អ្នកជាមួយ Analytics Bot! យើងជួយអ្នកវិភាគទិន្នន័យដើម្បីធ្វើការសម្រេចចិត្តប្រកបដោយភាពវៃឆ្លាត និងបង្កើនប្រសិទ្ធភាពអាជីវកម្មរបស់អ្នក។"
    }
  ];

  const filteredBots = bots.filter(bot => {
    const matchesSearch = bot.name.toLowerCase().includes(searchTerm.toLowerCase()) || bot.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || bot.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="bots" class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"><i class="fas fa-robot mr-3"></i>Bot សម្រាប់លក់</h2>
        <div class="flex flex-col md:flex-row justify-between items-center mb-8">
          <div class="relative w-full md:w-1/3 mb-4 md:mb-0">
            <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"></i>
            <input
              type="text"
              placeholder="ស្វែងរក Bot..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              class="search-bar w-full p-4 pl-12 bg-gray-700/50 backdrop-blur-md rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div class="flex space-x-4">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              class="p-2 bg-gray-700/50 backdrop-blur-md rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="all">ទាំងអស់</option>
              <option value="Social Media">Social Media</option>
              <option value="Moderation">Moderation</option>
              <option value="Utility">Utility</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBots.map((bot, index) => (
            <div key={index} class="bg-gray-700/50 backdrop-blur-md p-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2">
              <i className={`${bot.icon} text-4xl text-purple-400 mb-4`}></i>
              <h3 class="text-xl font-semibold mb-2">{bot.name}</h3>
              <p class="text-purple-400 mb-4">{bot.price}</p>
              <p>{bot.desc}</p>
              <button
                onClick={() => setSelectedBot(bot)}
                class="mt-4 inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-full transition shadow-lg hover:shadow-purple-500/50"
              >
                <i class="fas fa-eye mr-2"></i>មើលឥឡូវនេះ
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedBot && <BotModal bot={selectedBot} onClose={() => setSelectedBot(null)} />}
    </section>
  );
};

const CustomBotRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    botType: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('សំណើរបស់អ្នកបានផ្ញើ! យើងនឹងទាក់ទងអ្នកឆាប់ៗនេះ។');
    setFormData({ name: '', email: '', botType: '', description: '' });
  };

  return (
    <section id="custom-bot" class="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"><i class="fas fa-plus-circle mr-3"></i>ស្នើសុំ Bot តាមតម្រូវការ</h2>
        <p class="text-center text-lg mb-8">យើងផ្តល់សេវាកម្មបង្កើត Bot តាមតម្រូវការរបស់អ្នក! ប្រាប់យើងពីអ្វីដែលអ្នកចង់បាន ហើយយើងនឹងបង្កើត Bot ដ៏ល្អឥតខ្ចោះសម្រាប់អ្នក។</p>
        <div class="max-w-lg mx-auto">
          <div class="space-y-4">
            <div class="relative">
              <i class="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"></i>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ឈ្មោះ"
                class="w-full p-4 pl-12 bg-gray-700/50 backdrop-blur-md rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div class="relative">
              <i class="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"></i>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="អ៊ីមែល"
                class="w-full p-4 pl-12 bg-gray-700/50 backdrop-blur-md rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div class="relative">
              <i class="fas fa-robot absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"></i>
              <select
                name="botType"
                value={formData.botType}
                onChange={handleChange}
                class="w-full p-4 pl-12 bg-gray-700/50 backdrop-blur-md rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option value="">ជ្រើសរើសប្រភេទ Bot</option>
                <option value="Sales">Bot សម្រាប់លក់</option>
                <option value="Moderation">Bot សម្រាប់គ្រប់គ្រង</option>
                <option value="Analytics">Bot សម្រាប់វិភាគ</option>
                <option value="Auto Reply">Bot សម្រាប់ឆ្លើយតប</option>
                <option value="Other">ផ្សេងៗ</option>
              </select>
            </div>
            <div class="relative">
              <i class="fas fa-comment absolute left-4 top-5 text-purple-400"></i>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="ពិពណ៌នាអំពី Bot ដែលអ្នកចង់បាន (ឧ. មុខងារ, គោលបំណង)"
                class="w-full p-4 pl-12 bg-gray-700/50 backdrop-blur-md rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 h-32"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              class="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg text-lg transition shadow-lg hover:shadow-purple-500/50"
            >
              <i class="fas fa-paper-plane mr-2"></i>ផ្ញើសំណើ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section id="testimonials" class="py-20 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"><i class="fas fa-quote-left mr-3"></i>មតិពីអតិថិជន</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          { name: "សុភ័ក្ត្រ", quote: "Bot ដែលខ្ញុំទិញពី MakSokii Studio ពិតជាអស្ចារ្យ! វាជួយខ្ញុំសន្សំពេលវេលាច្រើន ហើយសេវាកម្មក្រោយការលក់ក៏ល្អណាស់។", role: "ម្ចាស់អាជីវកម្ម" },
          { name: "រតនា", quote: "ខ្ញុំបានស្នើសុំ Bot តាមតម្រូវការ ហើយក្រុមការងារបានធ្វើឱ្យខ្ញុំពេញចិត្តខ្លាំង! ពួកគេយល់ចិត្តអតិថិជន និងផ្តល់សេវាកម្មប្រកបដោយវិជ្ជាជីវៈ។", role: "អ្នកគ្រប់គ្រងសហគមន៍" },
          { name: "សុវណ្ណ", quote: "Bot វិភាគទិន្នន័យរបស់ MakSokii Studio ជួយខ្ញុំយល់ដឹងពីអតិថិជនរបស់ខ្ញុំបានច្រើន! ខ្ញុំណែនាំគេហទំព័រនេះដល់អ្នកទាំងអស់គ្នា។", role: "អ្នកជំនួញអនឡាញ" }
        ].map((testimonial, index) => (
          <div key={index} class="bg-gray-700/50 backdrop-blur-md p-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2">
            <i class="fas fa-quote-left text-2xl text-purple-400 mb-4"></i>
            <p class="mb-4">{testimonial.quote}</p>
            <p class="font-semibold">{testimonial.name}</p>
            <p class="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="team" class="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"><i class="fas fa-users mr-3"></i>ក្រុម Bot របស់យើង</h2>
      <p class="text-center text-lg mb-8">ជួបជាមួយក្រុមរបស់យើងដែលនៅពីក្រោយ MakSokii Studio! យើងជាក្រុមអ្នកជំនាញដែលប្តេជ្ញាបង្កើត Bot ដ៏ឆ្លាតវៃ និងទំនើបសម្រាប់អតិថិជនរបស់យើង។</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          { name: "សុខី", role: "អ្នកអភិវឌ្ឍ Bot", desc: "អ្នកជំនាញខាង Telegram និង Discord Bot", img: "https://via.placeholder.com/150" },
          { name: "មករា", role: "អ្នករចនា UI/UX", desc: "អ្នករចនាបទពិសោធន៍អ្នកប្រើប្រាស់ទំនើប", img: "https://via.placeholder.com/150" },
          { name: "វណ្ណា", role: "អ្នកវិភាគទិន្នន័យ", desc: "អ្នកជំនាញខាងវិភាគទិន្នន័យសម្រាប់ Bot", img: "https://via.placeholder.com/150" }
        ].map((member, index) => (
          <div key={index} class="team-member-card p-6 rounded-lg text-center">
            <img src={member.img} alt={member.name} class="w-32 h-32 rounded-full mx-auto mb-4 object-cover float-animation glow-animation" />
            <h3 class="text-xl font-semibold mb-2">{member.name}</h3>
            <p class="text-purple-400 mb-2">{member.role}</p>
            <p>{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('សារបានផ្ញើ! ខ្ញុំនឹងឆ្លើយតបឆាប់ៗនេះ។');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"><i class="fas fa-envelope mr-3"></i>ទំនាក់ទំនង</h2>
        <div class="max-w-lg mx-auto">
          <div class="space-y-4">
            <div class="relative">
              <i class="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"></i>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ឈ្មោះ"
                class="w-full p-4 pl-12 bg-gray-700/50 backdrop-blur-md rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div class="relative">
              <i class="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"></i>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="អ៊ីមែល"
                class="w-full p-4 pl-12 bg-gray-700/50 backdrop-blur-md rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div class="relative">
              <i class="fas fa-comment absolute left-4 top-5 text-purple-400"></i>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="សារ"
                class="w-full p-4 pl-12 bg-gray-700/50 backdrop-blur-md rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 h-32"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              class="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg text-lg transition shadow-lg hover:shadow-purple-500/50"
            >
              <i class="fas fa-paper-plane mr-2"></i>ផ្ញើសារ
            </button>
          </div>
          <div class="mt-8 text-center space-y-2">
            <p><i class="fas fa-envelope mr-2 text-purple-400"></i>Email: maksokii@studio.com</p>
            <p><i class="fab fa-telegram-plane mr-2 text-purple-400"></i>Telegram: @MakSokii</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => (
  <div>
    <NavBar />
    <Hero />
    <Services />
    <Bots />
    <CustomBotRequest />
    <Testimonials />
    <Team />
    <Contact />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));