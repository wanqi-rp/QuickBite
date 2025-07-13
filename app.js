document.addEventListener('DOMContentLoaded', function () {
  const WAIT_LEVELS = [
    '1-5 mins',
    '5-10 mins',
    '10-15 mins',
    '15-20 mins',
    '20-25 mins',
    '25-30 mins',
    '30+ mins'
  ];

  // Helper to initialize waitLevel for all stalls
  function initializeStallsWithWaitLevel(stallsObj) {
    Object.keys(stallsObj).forEach(loc => {
      stallsObj[loc].forEach(stall => {
        if (typeof stall.waitLevel !== 'number') stall.waitLevel = 1;
      });
    });
    return stallsObj;
  }
  const stalls = initializeStallsWithWaitLevel({
    north: [
      {
        key: 'north-western-japanese',
        name: 'Western & Japanese',
       img: 'https://th.bing.com/th/id/OIP.VnxdRZnMJnvUtKVABPfzIwHaFH?w=223&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        menu: [
          { item: 'fish & chips', price: '$6.50', img: 'https://media.timeout.com/images/103696693/image.jpg' },
          { item: 'chicken katsu don', price: '$5.80', img: 'https://th.bing.com/th/id/OIP.PwG9JSHRA-q38Ic1g5EOtAHaE8?w=278&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'spaghetti with fish fillet', price: '$6.00', img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/27/0/FNK_spicy-fish-and-olive-spaghetti_s4x3.jpg.rend.hgtvcom.616.462.suffix/1389218637695.jpeg' },
          { item: 'chicken chop with mushroom sauce', price: '$6.20', img: 'https://th.bing.com/th/id/OIP.M4FeO9zviKzfVg3j1IH04gHaEK?w=306&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
        ]
      },
      {
        key: 'north-prata',
        name: 'Prata',
       img: 'https://th.bing.com/th/id/OIP.dj9X1XE9SjDE3PdIR-a68wAAAA?w=266&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        menu: [
          { item: 'plain prata', price: '$1.20', img: 'https://th.bing.com/th/id/OIP.j64oqCVxkTb4EVcQ55qv3QHaEl?w=287&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'egg prata', price: '$1.80', img: 'https://th.bing.com/th/id/OIP.btXprpBnm_u82zo_-zSFMQHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'cheese prata', price: '$2.20', img: 'https://th.bing.com/th/id/OIP.B87Y9S6aT4Oa80LaLBXOQwHaEK?w=254&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'mee goreng', price: '$3.50', img: 'https://th.bing.com/th/id/OIP.IXoKVeGRwO-9MUw_1vzy6gHaHa?w=191&h=190&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
        ]
      },
      {
        key: 'north-banmian-fishsoup',
        name: 'Banmian/Fishsoup',
       img: 'https://th.bing.com/th/id/OIP.f6zcLj8Cm07MgTtz_S8fiAHaFa?w=232&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        menu: [
          { item: 'soup ban mian', price: '$4.50', img: 'https://th.bing.com/th/id/OIP.ST5MuYFQGjw8OA_GOKvt5QHaFj?w=249&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'sliced fish soup', price: '$5.00', img: 'https://th.bing.com/th/id/OIP.at3LtDqkKYX0W1Rlot5bZQHaFj?w=234&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'fried fish bee hoon', price: '$5.50', img: 'https://guanchee.com.sg/wp-content/uploads/2017/11/Fried-Fish-Beehoon-Soup-1024x683.jpg' }
        ]
      },
      {
        key: 'north-waffles',
        name: 'Waffles',
       img: 'https://th.bing.com/th/id/OIP.EUYCHVYPbiZefR-SACYIYAHaE8?w=255&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        menu: [
          { item: 'butter maple', price: '$2.80', img: 'https://eatbook.sg/wp-content/uploads/2022/10/ann-chin-speculoos-waffle.jpg' },
          { item: 'peanut butter', price: '$2.80', img: 'https://th.bing.com/th/id/OIP.mhF7Gmz3YLDans5a9yleagHaE8?w=263&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'chocolate', price: '$3.00', img: 'https://eatbook.sg/wp-content/uploads/2022/10/queensway-lau-tan-tutu-kueh-waffles-chocolate-768x512.jpg' },
          { item: 'ice cream', price: '$3.50', img: 'https://th.bing.com/th/id/OIP.xBYbfKiseXKVlZPD4TkTsQHaE8?w=241&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' }
        ]
      }
    ],
    south: [
      {
        key: 'south-chickenrice',
        name: 'Chicken Rice',
       img: 'https://th.bing.com/th/id/OIP.vXieBmpBXZ7nd9yNRpUWNAHaFj?w=313&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        menu: [
          { item: 'steamed chicken rice', price: '$4.00', img: 'https://th.bing.com/th/id/OIP.cK8yUvUk7yjEkzN1eMiYEwHaFW?w=276&h=200&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'roasted chicken rice', price: '$4.50', img: 'https://th.bing.com/th/id/OIP.C2jVjeMlq8McCz9eFRRSdQHaFf?w=245&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'char siew rice', price: '$4.80', img: 'https://th.bing.com/th/id/OIP.e91ar0m2_qs5_mHw3OGlJgHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
        ]
      },
      {
        key: 'south-nanyangcafe',
        name: 'Nanyang cafe',
       img: 'https://ts1.mm.bing.net/th?id=OIP.1d-DSLzdgb6vNZ1NlvCIaAHaHa&pid=15.1',
        menu: [
          { item: 'nasi lemak', price: '$3.80', img: 'https://th.bing.com/th/id/OIP.dgdgL9MsX9E225Zn_DSe5QHaFj?w=197&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'curry popcorn chicken rice', price: '$5.20', img: 'https://tse3.mm.bing.net/th/id/OIP.tv_MPBr2j6AlfvYduiGrJQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
          { item: 'mee siam', price: '$3.50', img: 'https://th.bing.com/th/id/OIP.T9JNq6saYwRMt6FqHi_QSQHaE8?w=239&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'lontong', price: '$3.50', img: 'https://th.bing.com/th/id/OIP.PLkTuuJU_ASVvCpWnguNlgHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
        ]
      },
      {
        key: 'south-taiwan',
        name: 'Taiwan',
       img: 'https://th.bing.com/th/id/OIP.aXKsoxcZPPc_YN9TcCFBBwHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        menu: [
          { item: 'braised pork rice', price: '$5.50', img: 'https://th.bing.com/th/id/OIP.aXKsoxcZPPc_YN9TcCFBBwHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'chicken chop rice', price: '$5.80', img: 'https://tse4.mm.bing.net/th/id/OIP.YYAPK-8jRMG6X8dmCRBGigHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' },
          { item: 'taiwan fried rice', price: '$5.00', img: 'https://th.bing.com/th/id/OIP.WeaFxOu35pjNe-12etkdXwHaFr?w=196&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
        ]
      },
      {
        key: 'south-koreanjapanese',
        name: 'Korean/Japanese',
       img: 'https://th.bing.com/th/id/OIP.oOSOWb9nLBhSlYPqgAU7eQHaE8?w=294&h=196&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        menu: [
          { item: 'bibimbap', price: '$6.00', img: 'https://th.bing.com/th/id/OIP.Uc8KYQyeJrc4E-2fJNqxjAHaKX?w=204&h=196&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'kimchi fried rice', price: '$5.80', img: 'https://th.bing.com/th/id/OIP.BVKCOMUqL4CI4Vat1wQ8IAHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'chicken teriyaki bento', price: '$6.20', img: 'https://th.bing.com/th/id/OIP.70gfwQkBnKfpfihR1ciMHgAAAA?w=280&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'bulgogi chicken rice', price: '$6.00', img: 'https://th.bing.com/th/id/OIP.29JShivAFz5TjNDzoRikgQHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
        ]
      }
    ],
    lawn: [
      {
        key: 'lawn-thai',
        name: 'Thai',
        img: 'https://th.bing.com/th/id/OIP.hY-eFP0uLdckRfV2PMconQHaHa?w=189&h=189&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        menu: [
          { item: 'basil chicken rice', price: '$5.50', img: 'https://th.bing.com/th/id/OIP.TGlj2viiYn952i-nOvks_gHaKQ?w=202&h=281&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'pineapple fried rice', price: '$5.00', img: 'https://th.bing.com/th/id/OIP.syFzIK_ywiMcDCWCJJfXfQHaLI?w=202&h=304&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'green curry chicken', price: '$6.00', img: 'https://th.bing.com/th/id/OIP.2ORn3oR8DQP__E9mLjp0GAHaKt?w=115&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'phad thai', price: '$5.80', img: 'https://th.bing.com/th/id/OIP.AOTEqVYg1VF4niAvyuM9rQHaJJ?w=153&h=189&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
        ]
      },
      {
        key: 'lawn-western',
        name: 'Western',
        img: 'https://th.bing.com/th/id/OIP.OowDmNa2QVm0PDsw6Ugj7wHaE8?w=245&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        menu: [
          { item: 'grilled chicken pasta', price: '$6.20', img: 'https://th.bing.com/th/id/OIP.jHWuYAt0Odnk7ebnfh1GGAHaK0?w=202&h=296&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'black pepper chicken rice', price: '$5.80', img: 'https://th.bing.com/th/id/OIP.0NexS-RrPwUXQMMr3YTq4QHaJ4?w=103&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'bbq chicken wings', price: '$5.50', img: 'https://th.bing.com/th/id/OIP.na2ug7j7MJ9QorRTYN1DYgHaJ4?w=202&h=269&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
        ]
      },
      {
        key: 'lawn-ayampenyet',
        name: 'Ayam Penyet',
        img: 'https://th.bing.com/th/id/OIP.wvylONuU9RfX9zlDK4PekAHaFj?w=263&h=197&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        menu: [
          { item: 'ayam penyet set', price: '$6.00', img: 'https://th.bing.com/th/id/OIP.AZWrht1f8ctIGu-Yjc5TBQHaFj?w=256&h=192&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'beef rendang', price: '$6.50', img: 'https://th.bing.com/th/id/OIP.kV-d0kFxbRj_aO5jWSWwowHaHa?w=187&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'sambal goreng', price: '$5.00', img: 'https://th.bing.com/th/id/OIP.lSxrYPfRwewpBAR25-napgHaE8?w=253&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
        ]
      },
      {
        key: 'lawn-japanesekorean',
        name: 'Japanese/Korean',
        img: 'https://th.bing.com/th/id/OIP.REL7TS65ziELY-HThzZmyQHaE8?w=244&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        menu: [
          { item: 'salmon mentai don', price: '$7.00', img: 'https://th.bing.com/th/id/OIP.310bz9afwn41PTFDgyzWyAHaE7?w=260&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'ebi tempura udon', price: '$6.50', img: 'https://th.bing.com/th/id/OIP.k9PM9Tt6qRIMjDDo59WExwHaH-?w=173&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
          { item: 'korean bibimbap', price: '$6.00', img: 'https://th.bing.com/th/id/OIP.XQIww0eJrl8VSqLyJUCWeAHaE8?w=240&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
        ]
      }
    ]
  });

  // Login logic
  const loginPage = document.getElementById('loginPage');
  const mainContent = document.getElementById('mainContent');
  const vendorLoginBtn = document.getElementById('vendorLoginBtn');
  const customerLoginBtn = document.getElementById('customerLoginBtn');
  const stallsGrid = document.getElementById('stallsGrid');
  const stallMenu = document.getElementById('stallMenu');
  let currentStallKey = null;

  // Map for vendor login
  const stallMap = {
    'western & japanese': { key: 'north-western-japanese', location: 'north' },
    'prata': { key: 'north-prata', location: 'north' },
    'banmian/fishsoup': { key: 'north-banmian-fishsoup', location: 'north' },
    'waffles': { key: 'north-waffles', location: 'north' },
    'chicken rice': { key: 'south-chickenrice', location: 'south' },
    'nanyang cafe': { key: 'south-nanyangcafe', location: 'south' },
    'taiwan': { key: 'south-taiwan', location: 'south' },
    'korean/japanese': { key: 'south-koreanjapanese', location: 'south' },
    'thai': { key: 'lawn-thai', location: 'lawn' },
    'western': { key: 'lawn-western', location: 'lawn' },
    'ayam penyet': { key: 'lawn-ayampenyet', location: 'lawn' },
    'japanese/korean': { key: 'lawn-japanesekorean', location: 'lawn' }
  };
  let vendorStallKey = null;
  let vendorLocation = null;

  function showMainContent(role) {
    loginPage.style.display = 'none';
    mainContent.style.display = 'block';
    window.userRole = role;
    // Always sync from localStorage before rendering anything
    loadOrders();
    loadWaitLevels();
    // Show return button
    let header = mainContent.querySelector('header');
    let existingBtn = header.querySelector('.logout-btn, .return-btn');
    if (!existingBtn) {
      const returnBtn = document.createElement('button');
      returnBtn.textContent = 'Return';
      returnBtn.className = 'return-btn';
      returnBtn.onclick = function () {
        // Instead of reload, just show login page and reload wait levels
        mainContent.style.display = 'none';
        loginPage.style.display = 'flex';
        loadWaitLevels();
        loadOrders();
      };
      header.appendChild(returnBtn);
    }
    if (role === 'vendor' && vendorStallKey && vendorLocation) {
      showStallMenu(vendorStallKey, vendorLocation);
    } else {
      showStallsForLocation(window.customerLocation);
    }
  }

  function showStallMenu(stallKey, location) {
    currentStallKey = stallKey;
    const stall = stalls[location].find(s => s.key === stallKey);
    let waitLevel = typeof stall.waitLevel === 'number' ? stall.waitLevel : 1;
    let html = `<div class="menu-panel">
      <button class="back-btn">&larr; Back to Stalls</button>
      <h2>${stall.name} Menu</h2>
      <div class="wait-time"><strong>Estimated Waiting Time:</strong> <span id="waitTime">${WAIT_LEVELS[waitLevel]}</span></div>
      <table class="menu-list" style="width:100%;margin-top:2rem;">
        <thead>
          <tr><th style="text-align:left;">Picture</th><th style="text-align:left;">Food</th><th style="text-align:right;">Price</th></tr>
        </thead>
        <tbody>`;
    stall.menu.forEach((item, idx) => {
      html += `<tr class="food-row" data-food-idx="${idx}">
        <td style="width:60px;"><img src="${item.img}" alt="${item.item}" style="width:50px;height:50px;object-fit:cover;border-radius:8px;"></td>
        <td>${item.item}</td>
        <td style="text-align:right;">${item.price}</td>
      </tr>`;
    });
    html += '</tbody></table>';
    // Show different button for vendor
    if (window.userRole === 'vendor') {
      html += '<h3>Orders</h3>';
      html += `<div id="ordersList"></div>`;
      html += `<button id="resetStallBtn" class="back-btn" style="margin-top:1rem;background:#ff6b6b;">Reset Stall</button>`;
    } else if (window.userRole === 'customer') {
      html += '<button class="preorder-btn">View Cart</button>';
    }
    html += '</div>';
    html += `<div id="foodModal" class="food-modal" style="display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.3);align-items:center;justify-content:center;z-index:1000;">
      <div style="background:#fff;padding:2rem 1.5rem;border-radius:16px;min-width:300px;text-align:center;box-shadow:0 4px 24px rgba(44,108,223,0.12);">
        <h3 id="modalFoodName"></h3>
        <img id="modalFoodImg" src="" alt="" style="width:80px;height:80px;object-fit:cover;border-radius:8px;margin-bottom:1rem;">
        <div style="margin-bottom:1rem;font-size:1.2rem;">Price: <span id="modalFoodPrice"></span></div>
        <label for="modalQty">Quantity:</label>
        <input type="number" id="modalQty" min="1" value="1" style="width:60px;margin:0 1rem;">
        <button id="addToCartBtn" class="preorder-btn">Add to Cart</button>
        <button id="closeModalBtn" class="back-btn" style="margin-left:1rem;">Cancel</button>
      </div>
    </div>`;
    stallMenu.innerHTML = html;
    stallsGrid.style.display = 'none';
    stallMenu.style.display = 'block';
    document.querySelector('.back-btn').onclick = function () {
      stallMenu.style.display = 'none';
      if (window.userRole === 'vendor') {
        window.location.reload();
      } else {
        stallsGrid.style.display = 'grid';
      }
    };
    if (window.userRole === 'vendor') {
      loadOrders(); // Always load latest orders before rendering
      renderOrders(stallKey.toLowerCase(), location.toLowerCase());
      document.getElementById('resetStallBtn').onclick = function() {
        // Remove all orders for this stall
        orders = orders.filter(o => !(o.stall === stallKey.toLowerCase() && o.location === location.toLowerCase()));
        saveOrders();
        // Reset waitLevel for this stall
        let stallArr = stalls[location.toLowerCase()];
        let stallObj = stallArr.find(s => s.key === stallKey);
        if (stallObj) {
          stallObj.waitLevel = 1;
        }
        saveWaitLevels();
        // Refresh menu
        showStallMenu(stallKey, location);
        alert('Stall reset!');
      };
    } else if (window.userRole === 'customer') {
      document.querySelector('.preorder-btn').onclick = showCart;
      Array.from(document.querySelectorAll('.food-row')).forEach(row => {
        row.onclick = function() {
          const idx = parseInt(row.getAttribute('data-food-idx'));
          const food = stall.menu[idx];
          showFoodModal(food, stallKey, location);
        };
      });
    }
  }
  // Cart and orders logic
  let cart = [];
  let orders = [];
  function showFoodModal(food, stallKey, location) {
    const modal = document.getElementById('foodModal');
    document.getElementById('modalFoodName').textContent = food.item;
    document.getElementById('modalFoodImg').src = food.img;
    document.getElementById('modalFoodImg').alt = food.item;
    document.getElementById('modalFoodPrice').textContent = food.price;
    document.getElementById('modalQty').value = 1;
    modal.style.display = 'flex';
    document.getElementById('closeModalBtn').onclick = () => { modal.style.display = 'none'; };
    document.getElementById('addToCartBtn').onclick = function() {
      const qty = parseInt(document.getElementById('modalQty').value);
      if (qty > 0) {
        cart.push({ food: food.item, price: food.price, img: food.img, qty, stall: stallKey, location });
        modal.style.display = 'none';
        alert('Added to cart!');
      }
    };
  }

  // Load orders from localStorage
  function loadOrders() {
    const saved = localStorage.getItem('canteenOrders');
    if (saved) {
        try {
            orders = JSON.parse(saved);
        } catch { orders = []; }
    }
  }
  // Save orders to localStorage
  function saveOrders() {
    localStorage.setItem('canteenOrders', JSON.stringify(orders));
  }

  function showCart() {
    let html = `<div class="menu-panel">
      <button class="back-btn">Back</button>
      <h2>Your Cart</h2>`;
    if (cart.length === 0) {
      html += '<p>Your cart is empty.</p>';
    } else {
      html += '<table style="width:100%;margin-top:1rem;">';
      html += '<thead><tr><th>Picture</th><th>Food</th><th>Qty</th><th>Price</th></tr></thead><tbody>';
      let grandTotal = 0;
      cart.forEach((item, idx) => {
        let unitPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
        let total = (unitPrice * item.qty).toFixed(2);
        grandTotal += unitPrice * item.qty;
        html += `<tr>
          <td style="width:50px;"><img src="${item.img}" alt="${item.food}" style="width:40px;height:40px;object-fit:cover;border-radius:8px;"></td>
          <td>${item.food} <span style='color:#888;font-size:0.95em;'>(Unit: $${unitPrice.toFixed(2)})</span></td>
          <td><input type="number" min="1" value="${item.qty}" data-idx="${idx}" class="cart-qty-input" style="width:50px;"></td>
          <td class="cart-total" data-idx="${idx}">$${total}</td>
        </tr>`;
      });
      html += `</tbody><tfoot><tr><td colspan="3" style="text-align:right;font-weight:600;">Total:</td><td id="cartGrandTotal" style="font-weight:600;">$${grandTotal.toFixed(2)}</td></tr></tfoot></table>`;
      html += `<button class="preorder-btn" style="margin-top:1rem;">Place Preorder</button>`;
    }
    html += '</div>';
    stallMenu.innerHTML = html;
    document.querySelector('.back-btn').onclick = function () {
      showStallsForLocation(window.customerLocation);
      stallMenu.style.display = 'none';
      stallsGrid.style.display = 'grid';
    };
    // Live quantity editing
    Array.from(document.querySelectorAll('.cart-qty-input')).forEach(input => {
      input.oninput = function() {
        const idx = parseInt(input.getAttribute('data-idx'));
        let newQty = Math.max(1, parseInt(input.value));
        cart[idx].qty = newQty;
        let unitPrice = parseFloat(cart[idx].price.replace(/[^\d.]/g, ''));
        let total = (unitPrice * newQty).toFixed(2);
        document.querySelector(`.cart-total[data-idx='${idx}']`).textContent = `$${total}`;
        // Update grand total
        let grandTotal = 0;
        cart.forEach(item => {
          grandTotal += parseFloat(item.price.replace(/[^\d.]/g, '')) * item.qty;
        });
        document.getElementById('cartGrandTotal').textContent = `$${grandTotal.toFixed(2)}`;
      };
    });
    if (cart.length > 0) {
      document.querySelector('.preorder-btn').onclick = function() {
        cart.forEach(item => {
          orders.push({
            food: item.food,
            price: item.price,
            img: item.img,
            qty: item.qty,
            stall: item.stall.toLowerCase(),
            location: item.location.toLowerCase(),
            status: 'pending'
          });
          // Update waitLevel for the stall
          let stallArr = stalls[item.location.toLowerCase()];
          let stallObj = stallArr.find(s => s.key === item.stall);
          if (stallObj) {
            stallObj.waitLevel = Math.min(stallObj.waitLevel + 1, WAIT_LEVELS.length - 1);
          }
        });
        saveWaitLevels(); // Persist wait levels after preorder
        saveOrders(); // Persist orders after preorder
        cart = [];
        alert('Preorder placed!');
        showStallsForLocation(window.customerLocation);
        stallMenu.style.display = 'none';
        stallsGrid.style.display = 'grid';
      };
    }
  }
  function renderOrders(stallKey, location) {
    const ordersList = document.getElementById('ordersList');
    // Always compare location and stall in lowercase
    const stallOrders = orders.filter(o => o.stall === stallKey.toLowerCase() && o.location === location.toLowerCase());
    if (stallOrders.length === 0) {
      ordersList.innerHTML = '<p>No orders yet.</p>';
      return;
    }
    let html = '<table style="width:100%;margin-top:1rem;">';
    html += '<thead><tr><th>Picture</th><th>Food</th><th>Qty</th><th>Total Price</th><th>Status</th><th>Action</th></tr></thead><tbody>';
    stallOrders.forEach((order, idx) => {
      let unitPrice = parseFloat(order.price.replace(/[^\d.]/g, ''));
      let total = (unitPrice * order.qty).toFixed(2);
      html += `<tr>
        <td style="width:50px;"><img src="${order.img}" alt="${order.food}" style="width:40px;height:40px;object-fit:cover;border-radius:8px;"></td>
        <td>${order.food}</td>
        <td>${order.qty}</td>
        <td>$${total}</td>
        <td>${order.status}</td>
        <td>${order.status === 'pending' ? `<button class='checked-btn' data-idx='${idx}'>Mark Ready</button>` : ''}</td>
      </tr>`;
    });
    html += '</tbody></table>';
    ordersList.innerHTML = html;
    // Mark order as ready
    Array.from(ordersList.querySelectorAll('.checked-btn')).forEach(btn => {
      btn.onclick = function() {
        const idx = parseInt(btn.getAttribute('data-idx'));
        // Find the correct order in orders array
        let orderIdx = orders.findIndex(o => o.stall === stallKey.toLowerCase() && o.location === location.toLowerCase() && o.food === stallOrders[idx].food && o.qty === stallOrders[idx].qty);
        if (orderIdx !== -1) {
          orders[orderIdx].status = 'ready';
          // Decrease waitLevel for the stall
          let stallArr = stalls[location.toLowerCase()];
          let stallObj = stallArr.find(s => s.key === stallKey);
          if (stallObj) {
            stallObj.waitLevel = Math.max(1, stallObj.waitLevel - 1);
          }
          saveWaitLevels(); // Persist wait levels after marking ready
          saveOrders(); // Persist orders after marking ready
          renderOrders(stallKey, location);
          // Update wait time display
          const waitTimeSpan = document.getElementById('waitTime');
          if (waitTimeSpan && stallObj) {
            waitTimeSpan.textContent = WAIT_LEVELS[stallObj.waitLevel];
          }
        }
      };
    });
  }

  // Load wait levels from localStorage if available
  function loadWaitLevels() {
    const saved = localStorage.getItem('stallWaitLevels');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        Object.keys(parsed).forEach(loc => {
          if (Array.isArray(stalls[loc])) {
            // parsed[loc] is an object mapping stallKey to waitLevel
            Object.keys(parsed[loc]).forEach(stallKey => {
              let stallObj = stalls[loc].find(s => s.key === stallKey);
              if (stallObj && typeof parsed[loc][stallKey] === 'number') {
                stallObj.waitLevel = parsed[loc][stallKey];
              }
            });
          }
        });
      } catch {}
    }
  }

  // Save wait levels for each stall
  function saveWaitLevels() {
    const data = {};
    Object.keys(stalls).forEach(loc => {
      data[loc] = {};
      stalls[loc].forEach(stall => {
        data[loc][stall.key] = stall.waitLevel;
      });
    });
    localStorage.setItem('stallWaitLevels', JSON.stringify(data));
  }

  // Call load on page load
  loadWaitLevels();
  loadOrders();

  function handlePreorder() {
    if (currentStallKey && stalls[currentStallKey]) {
      let stall = stalls[currentStallKey];
      if (stall.waitLevel < WAIT_LEVELS.length - 1) {
        stall.waitLevel++;
      }
      saveWaitLevels();
      document.getElementById('waitTime').textContent = WAIT_LEVELS[stall.waitLevel];
      showStallMenu(currentStallKey);
    }
  }

  function handleChecked() {
    if (currentStallKey && stalls[currentStallKey]) {
      let stall = stalls[currentStallKey];
      if (stall.waitLevel > 0) {
        stall.waitLevel--;
      }
      saveWaitLevels();
      document.getElementById('waitTime').textContent = WAIT_LEVELS[stall.waitLevel];
      showStallMenu(currentStallKey);
    }
  }

  vendorLoginBtn.addEventListener('click', function () {
    // Show vendor login form
    loginPage.innerHTML = `
      <div class="login-container">
        <h1>Vendor Login</h1>
        <form id="vendorForm">
          <input type="text" id="stallNameInput" placeholder="Stall Name" required style="margin-bottom:1rem;width:100%;padding:0.7rem 1rem;font-size:1rem;">
          <input type="password" id="stallPasswordInput" placeholder="Password" required style="margin-bottom:1.5rem;width:100%;padding:0.7rem 1rem;font-size:1rem;">
          <button class="login-btn" type="submit">Login</button>
          <button class="login-btn" type="button" id="backToLogin" style="background:#eee;color:#2d6cdf;margin-top:0.5rem;">Back</button>
        </form>
      </div>
    `;
    document.getElementById('backToLogin').onclick = () => window.location.reload();
    document.getElementById('vendorForm').onsubmit = function(e) {
      e.preventDefault();
      const stallName = document.getElementById('stallNameInput').value.trim().toLowerCase();
      const password = document.getElementById('stallPasswordInput').value.trim().toLowerCase();
      // Accept only if password matches stall name
      if (stallName && password && stallName === password && stallMap[stallName]) {
        vendorStallKey = stallMap[stallName].key;
        vendorLocation = stallMap[stallName].location;
        showMainContent('vendor');
        alert('Vendor login successful!');
      } else {
        alert('Invalid stall name or password. Password is your stall name.');
      }
    };
  });

  // Only attach stallsGrid event if customer
  function enableStallsGridClick() {
    stallsGrid.addEventListener('click', function (e) {
      if (window.userRole !== 'customer') return;
      const card = e.target.closest('.stall-card');
      if (!card) return;
      const stallKey = card.getAttribute('data-stall');
      if (!stallKey) return;
      showStallMenu(stallKey, window.customerLocation.toLowerCase());
    });
  }
  function showStallsForLocation(location) {
    loadWaitLevels(); // Always reload wait levels before rendering stalls
    const loc = location.toLowerCase();
    const stallList = stalls[loc];
    let html = '';
    stallList.forEach(stall => {
      html += `<div class="stall-card" data-stall="${stall.key}">
        <img src="${stall.img || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'}" alt="${stall.name}">
        <h2>${stall.name}</h2>
        <button>View Menu</button>
      </div>`;
    });
    stallsGrid.innerHTML = html;
  }

  customerLoginBtn.addEventListener('click', function () {
    // Show location selection before main content
    loginPage.innerHTML = `
      <div class="login-container">
        <h1>Select Your Location</h1>
        <form id="locationForm">
          <select id="locationSelect" required style="width:100%;padding:0.7rem 1rem;font-size:1rem;margin-bottom:1.5rem;">
            <option value="" disabled selected>Select location</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="Lawn">Lawn</option>
          </select>
          <button class="login-btn" type="submit">Continue</button>
          <button class="login-btn" type="button" id="backToLogin" style="background:#eee;color:#2d6cdf;margin-top:0.5rem;">Back</button>
        </form>
      </div>
    `;
    document.getElementById('backToLogin').onclick = () => window.location.reload();
    document.getElementById('locationForm').onsubmit = function(e) {
      e.preventDefault();
      const location = document.getElementById('locationSelect').value;
      if (location) {
        window.customerLocation = location;
        showMainContent('customer');
        enableStallsGridClick();
      }
    };
  });
});