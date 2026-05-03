/* ============================================
   OVERLIMIT ADVENTURE - MAIN JAVASCRIPT
   ============================================ */

const LANGUAGE_STORAGE_KEY = 'overlimit-language';
let currentLanguage = 'es';
const restoreRegistry = new Map();
let restoreCounter = 0;
const AMAZON_NAV_GROUPS = [
  {
    label: 'Tours de Jungla',
    tours: [
      { file: 'amazon-madidi-2d-1n.html', label: 'Jungla Madidi 2D/1N' },
      { file: 'amazon-cultura-jungla-3d-2n.html', label: 'Cultura de la Jungla 3D/2N' },
      { file: 'amazon-madidi-magico-4d-3n.html', label: 'Madidi Magico 4D/3N' },
      { file: 'amazon-circuito-jungla-5d-4n.html', label: 'Circuito de la Jungla 5D/4N' },
      { file: 'amazon-espiritus-bosque-6d-5n.html', label: 'Espiritus del Bosque 6D/5N' }
    ]
  },
  {
    label: 'Tours de Pampas',
    tours: [
      { file: 'amazon-pampas-yacuma-2d-1n.html', label: 'Pampas del Yacuma 2D/1N' },
      { file: 'amazon-pampas-yacuma-3d-2n.html', label: 'Pampas del Yacuma 3D/2N' }
    ]
  }
];
const AMAZON_DROPDOWN_ICON = '<svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>';
const AMAZON_MOBILE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>';

function buildAmazonHref(baseHref, fileName) {
  const normalizedHref = baseHref || 'amazon.html';
  return normalizedHref.replace(/amazon\.html(?:[?#].*)?$/i, fileName);
}

function buildAmazonDropdownGroups(baseHref, linkClass, labelClass) {
  return AMAZON_NAV_GROUPS.map((group) => {
    const links = group.tours.map((tour) => {
      return `<a href="${buildAmazonHref(baseHref, tour.file)}" class="${linkClass}">${tour.label}</a>`;
    }).join('');
    const wrapperClass = labelClass === 'dropdown-label' ? 'dropdown-col' : 'mobile-dropdown-group';

    return `<div class="${wrapperClass}"><div class="${labelClass}">${group.label}</div>${links}</div>`;
  }).join('');
}

function createAmazonDesktopItem(baseHref) {
  const item = document.createElement('li');
  item.className = 'nav-item has-dropdown';
  item.innerHTML = `
    <a href="${baseHref}" class="nav-link">
      Amazon
      ${AMAZON_DROPDOWN_ICON}
    </a>
    <div class="dropdown" style="min-width: 460px;">
      <div class="dropdown-inner">
        ${buildAmazonDropdownGroups(baseHref, 'dropdown-link', 'dropdown-label')}
      </div>
    </div>
  `;

  return item;
}

function createAmazonMobileItem(baseHref) {
  const item = document.createElement('li');
  item.className = 'mobile-nav-item';
  item.innerHTML = `
    <div class="mobile-nav-link">
      <span>Amazon</span>
      <button class="mobile-dropdown-toggle" aria-label="Mostrar opciones de Amazon" aria-expanded="false">${AMAZON_MOBILE_ICON}</button>
    </div>
    <div class="mobile-dropdown-menu">
      <div>
        ${buildAmazonDropdownGroups(baseHref, 'mobile-dropdown-link', 'mobile-dropdown-label')}
      </div>
    </div>
  `;

  return item;
}

function enhanceAmazonNavigation() {
  document.querySelectorAll('.nav-list .nav-item > .nav-link[href]').forEach((link) => {
    const href = link.getAttribute('href');
    const item = link.closest('.nav-item');

    if (!item || item.classList.contains('has-dropdown') || !/amazon\.html(?:[?#].*)?$/i.test(href || '')) {
      return;
    }

    item.replaceWith(createAmazonDesktopItem(href));
  });

  document.querySelectorAll('.mobile-nav-list .mobile-nav-item > a.mobile-nav-link[href]').forEach((link) => {
    const href = link.getAttribute('href');
    const item = link.closest('.mobile-nav-item');

    if (!item || !/amazon\.html(?:[?#].*)?$/i.test(href || '')) {
      return;
    }

    item.replaceWith(createAmazonMobileItem(href));
  });
}

function getRestoreId(target, suffix) {
  if (!target.__i18nRestoreId) {
    restoreCounter += 1;
    target.__i18nRestoreId = `i18n-${restoreCounter}`;
  }

  return `${target.__i18nRestoreId}:${suffix}`;
}

function rememberRestore(target, suffix, restoreFn) {
  const id = getRestoreId(target, suffix);
  if (!restoreRegistry.has(id)) {
    restoreRegistry.set(id, restoreFn);
  }
}

function setText(element, value) {
  if (!element) {
    return;
  }

  rememberRestore(element, 'text', () => {
    element.textContent = element.__i18nOriginalText;
  });

  if (typeof element.__i18nOriginalText === 'undefined') {
    element.__i18nOriginalText = element.textContent;
  }

  element.textContent = value;
}

function setHTML(element, value) {
  if (!element) {
    return;
  }

  rememberRestore(element, 'html', () => {
    element.innerHTML = element.__i18nOriginalHTML;
  });

  if (typeof element.__i18nOriginalHTML === 'undefined') {
    element.__i18nOriginalHTML = element.innerHTML;
  }

  element.innerHTML = value;
}

function setAttr(element, attr, value) {
  if (!element) {
    return;
  }

  rememberRestore(element, `attr:${attr}`, () => {
    const original = element.__i18nOriginalAttrs?.[attr];
    if (original === null) {
      element.removeAttribute(attr);
    } else {
      element.setAttribute(attr, original);
    }
  });

  if (!element.__i18nOriginalAttrs) {
    element.__i18nOriginalAttrs = {};
  }

  if (!(attr in element.__i18nOriginalAttrs)) {
    element.__i18nOriginalAttrs[attr] = element.hasAttribute(attr) ? element.getAttribute(attr) : null;
  }

  element.setAttribute(attr, value);
}

function setLeadingText(element, value) {
  if (!element) {
    return;
  }

  const textNode = Array.from(element.childNodes).find((node) => {
    return node.nodeType === Node.TEXT_NODE && node.textContent.trim();
  });

  if (!textNode) {
    return;
  }

  rememberRestore(element, 'leadingText', () => {
    const currentNode = Array.from(element.childNodes).find((node) => {
      return node.nodeType === Node.TEXT_NODE && node.textContent.trim();
    });
    if (currentNode) {
      currentNode.textContent = element.__i18nOriginalLeadingText;
    }
  });

  if (typeof element.__i18nOriginalLeadingText === 'undefined') {
    element.__i18nOriginalLeadingText = textNode.textContent;
  }

  textNode.textContent = `${value} `;
}

function setTrailingText(element, value) {
  if (!element) {
    return;
  }

  const textNodes = Array.from(element.childNodes).filter((node) => {
    return node.nodeType === Node.TEXT_NODE && node.textContent.trim();
  });
  const textNode = textNodes[textNodes.length - 1];

  if (!textNode) {
    return;
  }

  rememberRestore(element, 'trailingText', () => {
    const currentNodes = Array.from(element.childNodes).filter((node) => {
      return node.nodeType === Node.TEXT_NODE && node.textContent.trim();
    });
    const currentNode = currentNodes[currentNodes.length - 1];
    if (currentNode) {
      currentNode.textContent = element.__i18nOriginalTrailingText;
    }
  });

  if (typeof element.__i18nOriginalTrailingText === 'undefined') {
    element.__i18nOriginalTrailingText = textNode.textContent;
  }

  textNode.textContent = ` ${value}`;
}

function setNodeListText(elements, values) {
  elements.forEach((element, index) => {
    if (typeof values[index] !== 'undefined') {
      setText(element, values[index]);
    }
  });
}

function setNodeListHTML(elements, values) {
  elements.forEach((element, index) => {
    if (typeof values[index] !== 'undefined') {
      setHTML(element, values[index]);
    }
  });
}

function setNodeListLeadingText(elements, values) {
  elements.forEach((element, index) => {
    if (typeof values[index] !== 'undefined') {
      setLeadingText(element, values[index]);
    }
  });
}

function setNodeListTrailingText(elements, values) {
  elements.forEach((element, index) => {
    if (typeof values[index] !== 'undefined') {
      setTrailingText(element, values[index]);
    }
  });
}

function setDocumentTitle(value) {
  rememberRestore(document.documentElement, 'documentTitle', () => {
    document.title = document.documentElement.__i18nOriginalTitle;
  });

  if (typeof document.documentElement.__i18nOriginalTitle === 'undefined') {
    document.documentElement.__i18nOriginalTitle = document.title;
  }

  document.title = value;
}

function setMetaDescription(value) {
  setAttr(document.querySelector('meta[name="description"]'), 'content', value);
}

function restoreOriginalLanguage() {
  restoreRegistry.forEach((restoreFn) => restoreFn());
}

function getPageKey() {
  const path = window.location.pathname.replace(/\\/g, '/');
  const fileName = path.split('/').pop() || 'index.html';
  return fileName.replace('.html', '') || 'index';
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const queryLanguage = params.get('lang');
  if (queryLanguage === 'es' || queryLanguage === 'en') {
    return queryLanguage;
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return storedLanguage === 'en' ? 'en' : 'es';
}

function syncUrlLanguage(language) {
  const url = new URL(window.location.href);
  if (language === 'en') {
    url.searchParams.set('lang', 'en');
  } else {
    url.searchParams.delete('lang');
  }

  window.history.replaceState({}, '', url);
}

function syncInternalLinks(language) {
  document.querySelectorAll('a[href]').forEach((link) => {
    const originalHref = link.dataset.originalHref || link.getAttribute('href');
    if (!originalHref || originalHref.startsWith('#') || originalHref.startsWith('tel:') || originalHref.startsWith('mailto:') || originalHref.startsWith('javascript:')) {
      return;
    }

    if (!link.dataset.originalHref) {
      link.dataset.originalHref = originalHref;
    }

    const resolvedUrl = new URL(originalHref, window.location.href);
    if (resolvedUrl.origin !== window.location.origin) {
      return;
    }

    if (language === 'en') {
      resolvedUrl.searchParams.set('lang', 'en');
    } else {
      resolvedUrl.searchParams.delete('lang');
    }

    link.setAttribute('href', resolvedUrl.href);
  });
}

function updateLanguageButtons(language) {
  document.querySelectorAll('.language-option').forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function createLanguageSwitch(isMobile) {
  const wrapper = document.createElement('div');
  wrapper.className = `language-switch${isMobile ? ' language-switch--mobile' : ''}`;
  wrapper.setAttribute('role', 'group');
  wrapper.setAttribute('aria-label', 'Language selector');
  wrapper.innerHTML = '<button type="button" class="language-option" data-lang="es" aria-pressed="false">ES</button><button type="button" class="language-option" data-lang="en" aria-pressed="false">EN</button>';
  return wrapper;
}

function initializeLanguageControls() {
  const headerInner = document.querySelector('.header-inner');
  const mobileNavInner = document.querySelector('.mobile-nav-inner');
  const mobileNavList = document.querySelector('.mobile-nav-list');
  const mobileMenuButton = document.getElementById('mobileMenuBtn');

  if (headerInner && !headerInner.querySelector('.language-switch')) {
    const desktopSwitch = createLanguageSwitch(false);
    if (mobileMenuButton) {
      headerInner.insertBefore(desktopSwitch, mobileMenuButton);
    } else {
      headerInner.appendChild(desktopSwitch);
    }
  }

  if (mobileNavInner && mobileNavList && !mobileNavInner.querySelector('.language-switch--mobile')) {
    mobileNavInner.insertBefore(createLanguageSwitch(true), mobileNavList);
  }

  document.querySelectorAll('.language-option').forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
    });
  });
}

function getFooterLinkTranslations() {
  if (getPageKey() === 'index') {
    return ['Trekking', 'Climbing', 'Amazon', 'Classic Tours', 'About', 'Contact', 'FAQ', 'Physical preparation', 'Equipment'];
  }

  return ['Trekking', 'Climbing', 'Amazon', 'Classic Tours', 'Contact', 'About'];
}

function translateCommon() {
  const mobileDropdownLabels = Array.from(document.querySelectorAll('.mobile-dropdown-label'));
  const mobileDropdownLinks = Array.from(document.querySelectorAll('.mobile-dropdown-link'));
  const dropdownLabelTranslations = ['Salar de Uyuni', 'Other destinations', 'Popular peaks', 'More ascents', 'Destinations', 'Copacabana', 'Island of the Sun', 'Death Road'];
  const dropdownLinkTranslations = ['Full Day', '2 Days', '3 Days Classic', 'Uyuni to Atacama', 'From San Pedro', 'Deluxe', 'Premium Atacama', 'Cordillera Real', 'Yungas', 'Copacabana', 'Huayna Potosi', 'Illimani', 'Sajama', 'Condoriri', 'Mururata', 'Pequeno Alpamayo', 'Parinacota', 'Acotango', 'Tiwanaku', 'Charquini', '1 Day', '2 Days', '3 Days', '1 Day', '2 Days', '3 Days', '1 Day', '2 Days', '3 Days'];
  const mobileLabelTranslations = mobileDropdownLabels.length === 7
    ? ['By duration', ...dropdownLabelTranslations.slice(0, 6)]
    : dropdownLabelTranslations;
  const mobileLinkTranslations = mobileDropdownLinks.length === 28
    ? ['Half day', '1-2 days', '3-5 days', '6+ days', ...dropdownLinkTranslations.slice(0, 24)]
    : dropdownLinkTranslations;

  setAttr(document.documentElement, 'lang', 'en');
  setAttr(document.getElementById('navMenu'), 'aria-label', 'Primary navigation');
  setAttr(document.getElementById('mobileMenuBtn'), 'aria-label', 'Open menu');

  setNodeListLeadingText(Array.from(document.querySelectorAll('.nav-item.has-dropdown > .nav-link')), ['Trekking', 'Climbing', 'Classic Tours']);
  setNodeListText(Array.from(document.querySelectorAll('.nav-item:not(.has-dropdown) > .nav-link')), ['Amazon', 'About']);
  setNodeListText(Array.from(document.querySelectorAll('.nav-cta')), ['Contact']);
  setNodeListText(Array.from(document.querySelectorAll('.dropdown-label')), dropdownLabelTranslations);
  setNodeListText(Array.from(document.querySelectorAll('.dropdown-link')), dropdownLinkTranslations);
  setNodeListText(Array.from(document.querySelectorAll('.mobile-nav-link > span')), ['Trekking', 'Climbing', 'Amazon']);
  setNodeListText(Array.from(document.querySelectorAll('.mobile-nav-item > a.mobile-nav-link')), ['Classic Tours', 'About']);
  setNodeListText(mobileDropdownLabels, mobileLabelTranslations);
  setNodeListText(mobileDropdownLinks, mobileLinkTranslations);
  setNodeListText(Array.from(document.querySelectorAll('.mobile-nav-cta')), ['Contact']);
  setNodeListText(Array.from(document.querySelectorAll('.footer-title')), ['Explore', 'Help', 'Contact']);
  setNodeListText(Array.from(document.querySelectorAll('.footer-text')), ['Specialists in trekking and climbing in Bolivia. We take your passion for adventure to the next level.']);
  setNodeListText(Array.from(document.querySelectorAll('.footer-copyright')), ['© 2026 OverLimitAdventure. All rights reserved.']);
  setNodeListText(Array.from(document.querySelectorAll('.footer-links a')), getFooterLinkTranslations());

  const mobileDropdownButtons = Array.from(document.querySelectorAll('.mobile-dropdown-toggle'));
  if (mobileDropdownButtons[0]) {
    setAttr(mobileDropdownButtons[0], 'aria-label', 'Show Trekking options');
  }
  if (mobileDropdownButtons[1]) {
    setAttr(mobileDropdownButtons[1], 'aria-label', 'Show Climbing options');
  }
  if (mobileDropdownButtons[2]) {
    setAttr(mobileDropdownButtons[2], 'aria-label', 'Show Amazon options');
  }
}

function translateHomePage() {
  setDocumentTitle('OverLimitAdventure | Trekking and Climbing in Bolivia - Your next summit starts here');
  setMetaDescription('Trekking and climbing tours in Bolivia. Salar de Uyuni, Huayna Potosi, Illimani and Death Road with expert guides and premium adventure planning.');

  setText(document.querySelector('.hero-subtitle'), 'We take your passion for adventure to the next level');
  setText(document.querySelector('.hero-title'), 'Where sky and earth become one');
  setText(document.querySelector('.hero-description'), 'Discover Bolivia from new heights. Trekking, climbing and adventure experiences that push your limits and create memories for life.');
  setLeadingText(document.querySelector('.hero-ctas .btn-primary'), 'Explore tours');
  setText(document.querySelector('.hero-ctas .btn-secondary'), 'Message us on WhatsApp');

  setNodeListText(Array.from(document.querySelectorAll('.section-subtitle')), ['Why choose us', 'Choose your challenge', 'Most popular', 'Trust is earned on every summit', 'Simple and fast']);
  setNodeListHTML(Array.from(document.querySelectorAll('.section-title')).slice(0, 5), ['Your next adventure starts with <span>us</span>', 'Experiences that <span>transform</span>', 'Featured <span>tours</span>', 'Numbers that support our <span>promise</span>', 'Your adventure in <span>3 steps</span>']);
  setNodeListText(Array.from(document.querySelectorAll('.feature-title')), ['Certified local experts', 'Professional safety guaranteed', 'Custom tours', 'Fair price, real quality']);
  setNodeListText(Array.from(document.querySelectorAll('.feature-text')), ['Our guides are certified Bolivian mountaineers with years of high altitude rescue experience. When you climb with us, you climb with people who grew up in these mountains.', 'UIAA-certified helmets, Petzl harnesses, dynamic ropes and emergency oxygen on every expedition. Your safety is never negotiable.', 'We design every experience around your level, schedule and goals. Private expedition, small group or specific dates, your adventure stays your way.', 'We are local operators. Your investment goes directly into quality equipment, professional guides and local communities.']);
  setNodeListText(Array.from(document.querySelectorAll('.category-card-title')), ['Trekking', 'Climbing', 'Custom Tours']);
  setNodeListText(Array.from(document.querySelectorAll('.category-card-text')), ['Explore trails that few people know. From one-day hikes to multi-day expeditions across the Salar de Uyuni.', 'Huayna Potosi for your first 6,000m summit. Illimani for the challenge of your life. Every mountain has its own test.', 'Dreaming of a private expedition? We design custom experiences from itinerary to meal plan.']);
  setNodeListText(Array.from(document.querySelectorAll('.category-card .btn-outline')), ['View available treks', 'Explore climbs', 'Request my tour']);
  setNodeListText(Array.from(document.querySelectorAll('.card-badge')).slice(0, 4), ['Most popular', 'Classic', 'Adrenaline', 'Challenge']);
  setNodeListText(Array.from(document.querySelectorAll('.card-title')).slice(0, 4), ['Huayna Potosi', 'Salar de Uyuni', 'Death Road', 'Illimani']);
  setNodeListText(Array.from(document.querySelectorAll('.card-text')).slice(0, 4), ['Your first 6,000m summit. A two-day expedition that ends with the most spectacular sunrise of your life.', 'The largest salt desert on Earth. Cross otherworldly landscapes in this three-day expedition.', '64 kilometers of epic descent. The most dangerous road in the world is now your bike adventure.', 'The guardian of La Paz. Three days of technical expedition for true alpinists.']);
  setNodeListTrailingText(Array.from(document.querySelectorAll('.card-meta-item')).slice(0, 8), ['2 days', '6,088m', '3 days', 'Easy', '7 hours', 'Moderate', '3 days', '6,438m']);
  setNodeListText(Array.from(document.querySelectorAll('.card-price-label')).slice(0, 4), ['From', 'From', 'From', 'From']);
  setNodeListText(Array.from(document.querySelectorAll('.card-footer .btn.btn-primary')).slice(0, 4), ['Book now', 'Book now', 'Book now', 'Book now']);
  setNodeListText(Array.from(document.querySelectorAll('.stat-label')), ['Summits achieved since we started', 'Severe accidents. Your safety comes first.', 'Of our clients recommend us', 'Years of experience guiding in the Bolivian Andes']);
  setText(document.querySelector('.testimonial-text'), '"I climbed Huayna Potosi with OverLimitAdventure and it was far more than an expedition. The guides do not just take you to the summit, they teach, protect and motivate you every step of the way."');
  setText(document.querySelector('.testimonial-author'), '- Maria G., Spain');
  setNodeListText(Array.from(document.querySelectorAll('.step-title')), ['Choose your experience', 'Confirm your spot', 'Live your adventure']);
  setNodeListText(Array.from(document.querySelectorAll('.step-text')), ['Explore our tours or tell us your idea. We help you choose the right adventure.', 'Reserve with a 30% deposit. Pay the rest on the day of the tour. We accept card, transfer or cash.', 'Meet us at our office on Sagarnaga 339. Gear ready, guide assigned, experience guaranteed.']);
  setNodeListText(Array.from(document.querySelectorAll('.step-note')), ['From $85 USD', 'Free cancellation up to 48h before', 'See you on the summit']);
  setText(document.querySelector('.text-center .btn.btn-primary'), 'Message us on WhatsApp');
  setText(document.querySelector('.text-center p[style]'), 'Reply in less than 10 minutes');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .section-title'))[0], 'The mountain will not wait. Will you?');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[0], 'Book my adventure now');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[1], 'Call now');
}

function translateTrekkingPage() {
  setDocumentTitle('Trekking in Bolivia | Routes and Expeditions - OverLimitAdventure');
  setMetaDescription('Trekking in Bolivia: Choro, Takesi, Condoriri Trek, Pico Austria and Trans Cordillera Real with expert local guides.');

  setText(document.querySelector('.page-header-title'), 'Every step tells a story');
  setText(document.querySelector('.page-header-subtitle'), 'Trekking in the Bolivian Andes. High altitude hikes, historic traverses and routes across the Cordillera Real.');
  setNodeListText(Array.from(document.querySelectorAll('.section-subtitle')).slice(0, 2), ['The Andes are waiting for you', 'Our routes']);
  setNodeListHTML(Array.from(document.querySelectorAll('.section-title')).slice(0, 2), ['Trekking in <span>Bolivia</span>', 'Trekking <span>tours</span>']);
  setNodeListText(Array.from(document.querySelectorAll('.section.section-light p[style*="line-height: 1.7"]')).slice(0, 2), ['This category brings together high altitude hikes, historic traverses and routes through the Cordillera Real and ancient Andean trails.', 'Every route is an immersion in landscapes that challenge the imagination, connecting you with Andean history and nature at its most powerful.']);
  setNodeListHTML(Array.from(document.querySelectorAll('.checklist-text')), ['<strong>High altitude hikes</strong> - from 3,600 to 5,500 meters', '<strong>Ancestral trails</strong> - preserved pre-Inca routes', '<strong>Certified guides</strong> - high altitude experts']);
  setNodeListText(Array.from(document.querySelectorAll('.card-badge')), ['Pre-Inca', 'Inca', 'High altitude', 'Acclimatization', 'Expedition']);
  setNodeListText(Array.from(document.querySelectorAll('.card-title')), ['Choro', 'Takesi', 'Condoriri Trek', 'Pico Austria', 'Trans Cordillera Real']);
  setNodeListText(Array.from(document.querySelectorAll('.card-text')), ['A pre-Inca trail descending from the mountains into the Yungas, known for its dramatic ecosystem shift and changing landscape.', 'A remarkably preserved Inca trail descending from high terrain into tropical vegetation and mountain rivers.', 'A high altitude hike with views of the Condoriri massif, glacier lagoons and the chance to spot condors above the summits.', 'A panoramic ascent focused on acclimatization and first high altitude experiences.', 'An extended traverse across the Cordillera Real designed for several days of intense trekking.']);
  setNodeListTrailingText(Array.from(document.querySelectorAll('.card-meta-item')), ['3-4 days', '4,800 masl', '2-3 days', '4,850 masl', '2-3 days', '5,200 masl', '1 day', '5,350 masl', '6+ days', '5,500 masl']);
  setNodeListText(Array.from(document.querySelectorAll('.card-price-label')), ['From', 'From', 'From', 'From', 'From']);
  setNodeListText(Array.from(document.querySelectorAll('.card-footer .btn.btn-primary')), ['Book now', 'Book now', 'Book now', 'Book now', 'Book now']);
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .section-title'))[0], 'Ready for your next adventure?');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[0], 'Request my trek');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[1], 'Message us on WhatsApp');
}

function translateClimbingPage() {
  setDocumentTitle('Climbing in Bolivia | Ascents and Mountaineering - OverLimitAdventure');
  setMetaDescription('Bolivia climbing ascents: Huayna Potosi, Illimani, Sajama, Condoriri and more with expert guides and premium mountain gear.');

  setText(document.querySelector('.page-header-title'), 'The summit is waiting for you');
  setText(document.querySelector('.page-header-subtitle'), 'Ascents in the Bolivian Andes. From your first 6,000m summit to the most demanding technical challenges.');
  setNodeListText(Array.from(document.querySelectorAll('.section-subtitle')).slice(0, 2), ['High altitude mountaineering', 'Our ascents']);
  setNodeListHTML(Array.from(document.querySelectorAll('.section-title')).slice(0, 2), ['Climbing in <span>Bolivia</span>', 'Available <span>mountains</span>']);
  setNodeListText(Array.from(document.querySelectorAll('.section.section-light p[style*="line-height: 1.7"]')).slice(0, 2), ['High altitude summits across the Cordillera Real and other Bolivian mountain ranges.', 'Bolivia is a perfect destination for high altitude mountaineering with 6,000m peaks and friendlier access than many other ranges.']);
  setNodeListHTML(Array.from(document.querySelectorAll('.checklist-text')).slice(0, 3), ['<strong>UIAGM / IFMGA guides</strong> - certified professional mountaineers', '<strong>High altitude gear</strong> - Petzl, Black Diamond, UIAA', '<strong>2:1 ratio</strong> - maximum 2 clients per guide on summit day']);
  setNodeListText(Array.from(document.querySelectorAll('.card-badge')), ['Most popular', 'Challenge', '6,542m', 'Technical', 'Remote', 'Technical', '6,342m', 'Intro']);
  setNodeListText(Array.from(document.querySelectorAll('.card-title')), ['Huayna Potosi', 'Illimani', 'Sajama', 'Condoriri', 'Mururata', 'Pequeno Alpamayo', 'Parinacota', 'Acotango']);
  setNodeListText(Array.from(document.querySelectorAll('.card-text')), ['Your first 6,000m summit. Bolivia\'s most popular mountain with approachable technique and unmatched views from the top.', 'The guardian of La Paz. A technical expedition for experienced alpinists.', 'Bolivia\'s highest peak and a serious objective in Sajama National Park.', 'A mountain shaped like a condor with a technical ascent requiring prior experience.', 'A less crowded mountain ideal for a more solitary and authentic experience.', 'One of Bolivia\'s most beautiful mountains with a technical ice and snow route.', 'A perfect volcanic cone on the Chilean border and a serious challenge from Sajama.', 'An accessible volcano near Sajama and a great acclimatization option before bigger summits.']);
  setNodeListTrailingText(Array.from(document.querySelectorAll('.card-meta-item')), ['2 days', '6,088m', '3 days', '6,438m', '3-4 days', '6,542m', '2-3 days', '5,648m', '2-3 days', '5,868m', '2 days', '5,370m', '2-3 days', '6,342m', '1 day', '6,052m']);
  setNodeListText(Array.from(document.querySelectorAll('.card-price-label')), ['From', 'From', 'From', 'From', 'From', 'From', 'From', 'From']);
  setNodeListText(Array.from(document.querySelectorAll('.card-footer .btn.btn-primary')), ['Book now', 'Book now', 'Book now', 'Book now', 'Book now', 'Book now', 'Book now', 'Book now']);
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .section-title'))[0], 'Ready to conquer your first summit?');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[0], 'Request my ascent');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[1], 'Message us on WhatsApp');
}

function translateAmazonPage() {
  setDocumentTitle('Amazon Bolivia | Pampas and Jungle - OverLimitAdventure');
  setMetaDescription('Bolivian Amazon tours in Yacuma Pampas and Madidi jungle with wildlife spotting, boat rides and eco-lodge stays.');

  setText(document.querySelector('.page-header-title'), 'The pulse of the jungle');
  setText(document.querySelector('.page-header-subtitle'), 'Step into the Bolivian Amazon. Pampas, jungle, wildlife and the magic of one of the most biodiverse ecosystems on Earth.');
  setNodeListText(Array.from(document.querySelectorAll('.section-subtitle')).slice(0, 2), ['Nature in its purest form', 'Our experiences']);
  setNodeListHTML(Array.from(document.querySelectorAll('.section-title')).slice(0, 2), ['Bolivian <span>Amazon</span>', 'Tours in the <span>Amazon</span>']);
  setNodeListText(Array.from(document.querySelectorAll('.section.section-light p[style*="line-height: 1.7"]')).slice(0, 2), ['The Bolivian Amazon is one of the most biodiverse regions in the world.', 'Our tours combine adventure, local knowledge and respect for the ecosystem through native guides and eco-lodges.']);
  setNodeListHTML(Array.from(document.querySelectorAll('.checklist-text')).slice(0, 3), ['<strong>Wildlife spotting</strong> - pink river dolphins, caimans, monkeys and more', '<strong>Eco lodges</strong> - sustainable accommodation in the jungle', '<strong>Native guides</strong> - ancestral rainforest knowledge']);
  setNodeListText(Array.from(document.querySelectorAll('.card-badge')), ['Wildlife', 'Biodiversity']);
  setNodeListText(Array.from(document.querySelectorAll('.card-title')), ['Yacuma Pampas', 'Madidi Jungle']);
  setNodeListText(Array.from(document.querySelectorAll('.card-text')), ['Savanna wetlands where wildlife takes center stage, with boat travel through rivers and lagoons.', 'Enter the heart of Madidi National Park, one of the most biodiverse protected areas on Earth.']);
  setNodeListTrailingText(Array.from(document.querySelectorAll('.card-meta-item')), ['3 days / 2 nights', 'Easy', '3-4 days', 'Moderate']);
  setNodeListText(Array.from(document.querySelectorAll('.card-content ul li')), ['Boat rides across lagoons', 'Pink dolphin spotting', 'Piranha fishing', 'Night walk to spot caimans', 'Stay in an eco-lodge', 'Trekking on primary jungle trails', 'Visits to indigenous communities', 'Swimming in natural waterfalls', 'Spotting monkeys and exotic birds', 'Nights in eco cabins']);
  setNodeListText(Array.from(document.querySelectorAll('.card-price-label')), ['From', 'From']);
  setNodeListText(Array.from(document.querySelectorAll('.card-footer .btn.btn-primary')), ['Book now', 'Book now']);
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .section-title'))[0], 'Ready to hear the pulse of the jungle?');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[0], 'Request my tour');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[1], 'Message us on WhatsApp');
}

function translateClassicToursPage() {
  setDocumentTitle('Classic Tours Bolivia | Signature Destinations - OverLimitAdventure');
  setMetaDescription('Classic Bolivia tours: Salar de Uyuni, Copacabana, Tiwanaku, Lake Titicaca and more with expert local planning.');

  setText(document.querySelector('.page-header-title'), 'The destinations that define Bolivia');
  setText(document.querySelector('.page-header-subtitle'), 'Discover the iconic places of our country with the comfort and quality you deserve.');
  setNodeListText(Array.from(document.querySelectorAll('.section-subtitle')).slice(0, 1), ['Iconic destinations']);
  setNodeListHTML(Array.from(document.querySelectorAll('.section-title')).slice(0, 1), ['Classic <span>Tours</span>']);
  setNodeListText(Array.from(document.querySelectorAll('.card-badge')), ['Lake Titicaca', 'UNESCO Heritage', 'Glacier', 'Island of the Sun', 'Most popular', 'Adrenaline']);
  setNodeListText(Array.from(document.querySelectorAll('.card-title')), ['Copacabana', 'Tiwanaku', 'Charquini', 'Island of the Sun', 'Salar de Uyuni', 'Death Road']);
  setNodeListText(Array.from(document.querySelectorAll('.card-text')), ['The most important town on the shores of the sacred lake with sweeping Titicaca views.', 'Bolivia\'s most important archaeological site and one of the key civilizations of the central Andes.', 'An accessible glacier near La Paz, ideal for a first high altitude ice experience.', 'Navigation on the highest navigable lake in the world with a visit to the Island of the Sun.', 'The largest salt desert on Earth with surreal landscapes, flamingos and colored lagoons.', 'A bike descent down the world\'s most dangerous road, from snow to tropical forest.']);
  setNodeListText(Array.from(document.querySelectorAll('.card-content > div[style*="flex"] .btn')), ['1 Day', '2 Days', '3 Days', '1 Day', '2 Days', '3 Days', '1 Day', '2 Days', '3 Days']);
  setNodeListText(Array.from(document.querySelectorAll('.card-price-label')), ['From', 'From', 'From', 'From', 'From', 'From']);
  setNodeListText(Array.from(document.querySelectorAll('.card-footer .btn.btn-primary')), ['View page', 'View page', 'View options']);
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .section-title'))[0], 'Ready to discover Bolivia?');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[0], 'Request my itinerary');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[1], 'Message us on WhatsApp');
}

function translateDeathRoadPage() {
  setDocumentTitle('Death Road Bolivia | Biking and Adventure - OverLimitAdventure');
  setMetaDescription('Downhill biking on Bolivia\'s Death Road with expert guides, safety gear and transport included.');

  setText(document.querySelector('.page-header-title'), 'The most dangerous road in the world');
  setText(document.querySelector('.page-header-subtitle'), '64 km of downhill biking. Adrenaline, landscapes and a story only Bolivia can tell.');
  setNodeListText(Array.from(document.querySelectorAll('.section-subtitle')).slice(0, 3), ['History and adrenaline', 'Choose your experience', 'No compromises']);
  setNodeListHTML(Array.from(document.querySelectorAll('.section-title')).slice(0, 3), ['Death <span>Road</span>', 'Death Road <span>options</span>', 'Safety <span>first</span>']);
  setNodeListText(Array.from(document.querySelectorAll('.section.section-light p[style*="line-height: 1.7"]')).slice(0, 3), ['Death Road was once considered the most dangerous road in the world. Today it is one of South America\'s most iconic adventure experiences.', 'The descent starts at 4,650 masl in the snow of La Cumbre and ends at 1,200 masl in the tropical Yungas.', 'We invest in top-tier equipment, certified guides and safety protocols aligned with international standards.']);
  setNodeListHTML(Array.from(document.querySelectorAll('.checklist-text')).slice(0, 8), ['<strong>Safety equipment</strong> - full suspension bike, protection and certified helmet', '<strong>Bilingual guide</strong> - support in Spanish and English', '<strong>Accident insurance</strong> - included in every tour', 'Full suspension bikes checked daily', 'Certified helmets, gloves, knee pads and elbow pads', 'Support vehicle following the group at all times', 'Lead guide and tail guide in every group', 'Accident insurance included for all participants']);
  setNodeListText(Array.from(document.querySelectorAll('.card-title')), ['Classic Tour', 'Death Road + Zip Line', 'Private Tour']);
  setNodeListText(Array.from(document.querySelectorAll('.card-text')), ['Full Death Road descent with guide, gear, transport and lunch included.', 'Everything from the classic tour plus an epic zip line in the Yungas.', 'An exclusive experience for your group with private vehicle, dedicated guide and flexible timing.']);
  setNodeListText(Array.from(document.querySelectorAll('.card-content ul li')), ['Full suspension bike', 'Helmet, gloves and protection', 'Round-trip transport', 'Buffet lunch in the Yungas', 'Commemorative jersey', 'Everything included in the Classic', '300 meter zip line', 'Professional photos from the tour', 'Craft beer in the Yungas', 'Descent video', 'Private vehicle', 'Exclusive guide for your group', 'Flexible departure time', 'Custom lunch', 'Hotel pickup']);
  setNodeListText(Array.from(document.querySelectorAll('.card-price-label')), ['From', 'From', 'From']);
  setNodeListText(Array.from(document.querySelectorAll('.card-footer .btn.btn-primary')), ['Book now', 'Book now', 'Book now']);

  const popularityBar = Array.from(document.querySelectorAll('.card > div[style*="background: var(--inca-gold)"]'))[0];
  setText(popularityBar, 'Most popular');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .section-title'))[0], 'Ready for the adrenaline?');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[0], 'Book my tour');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[1], 'Message us on WhatsApp');
}

function translateAboutPage() {
  setDocumentTitle('About Us | OverLimitAdventure - Trekking and Climbing Specialists');
  setMetaDescription('Meet the OverLimitAdventure team: certified guides, years of experience in the Bolivian Andes and a deep passion for the mountains.');

  setText(document.querySelector('.page-header-title'), 'Our story is written on every summit');
  setText(document.querySelector('.page-header-subtitle'), 'We are Bolivian mountaineers passionate about sharing the magic of the Andes with the world.');
  setNodeListText(Array.from(document.querySelectorAll('.section-subtitle')).slice(0, 3), ['30 years of combined experience', 'What drives us', 'Professional trust']);
  setNodeListHTML(Array.from(document.querySelectorAll('.section-title')).slice(0, 3), ['Who <span>we are</span>', 'Mission, Vision and <span>Values</span>', 'Certifications and <span>guarantees</span>']);
  setNodeListText(Array.from(document.querySelectorAll('.section.section-light p[style*="line-height: 1.7"]')).slice(0, 2), ['OverLimitAdventure was born in 2023 in the heart of La Paz, driven by a group of young Bolivian mountaineers.', 'Although OverLimitAdventure was founded in 2023, our team brings together 30 years of combined guiding experience. We are not just a travel agency, we are a mountain-loving community committed to safety, nature and local development.']);
  setNodeListText(Array.from(document.querySelectorAll('.feature-title')), ['Mission', 'Vision', 'Values', 'Registered tour operators', 'Certified guides', 'UIAA certified gear', 'Insurance included']);
  setNodeListText(Array.from(document.querySelectorAll('.feature-text')), ['To create safe, authentic and transformative adventure experiences in the Bolivian Andes.', 'To become a trusted adventure agency in Bolivia, recognized for safety and authenticity.', 'Safety, respect for nature, honesty, service excellence and commitment to local communities.', 'A formally registered company recognized by Bolivia\'s Ministry of Tourism.', 'Our guides hold certifications in first aid, high altitude rescue and group management.', 'Helmets, harnesses, ropes and climbing gear meet international safety standards.', 'All of our tours include accident insurance for your peace of mind.']);
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .section-title'))[0], 'Want to be part of our next expedition?');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[0], 'Contact us');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[1], 'WhatsApp');
}

function translateCustomToursPage() {
  setDocumentTitle('Custom Tours Bolivia | Tailor-Made Itineraries - OverLimitAdventure');
  setMetaDescription('We design custom tours in Bolivia based on your schedule, budget and experience level. Trekking, climbing and adventure made to fit.');

  setText(document.querySelector('.page-header-title'), 'Your adventure, your way');
  setText(document.querySelector('.page-header-subtitle'), 'We design unique itineraries around your time, budget and the challenge level you are looking for.');
  setNodeListText(Array.from(document.querySelectorAll('.section-subtitle')).slice(0, 2), ['For every kind of traveler', 'Simple and transparent']);
  setNodeListHTML(Array.from(document.querySelectorAll('.section-title')).slice(0, 2), ['Custom <span>tours</span>', 'How your <span>quote</span> works']);
  setNodeListText(Array.from(document.querySelectorAll('.feature-title')), ['Private groups', 'Combined itineraries', 'Flexible dates', 'Premium experiences']);
  setNodeListText(Array.from(document.querySelectorAll('.feature-text')), ['From families to companies, we design the full logistics so your group enjoys an exclusive and safe experience.', 'We build integrated routes that make the most of your time in Bolivia.', 'You do not adapt to our calendar, we adapt to yours.', 'Exclusive guides, private vehicles, gourmet meals and high-quality accommodation.']);
  setNodeListText(Array.from(document.querySelectorAll('.step-title')), ['Tell us your idea', 'Receive your proposal', 'Refine the details', 'Reserve and go']);
  setNodeListText(Array.from(document.querySelectorAll('.step-text')), ['Fill out the form or message us on WhatsApp.', 'In less than 24 hours we send you a detailed itinerary.', 'We work together until the itinerary matches what you imagined.', 'Confirm with a 30% deposit and leave the rest in our hands.']);
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .section-title'))[0], 'Have an adventure in mind?');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[0], 'Request a quote');
  setText(Array.from(document.querySelectorAll('section[style*="linear-gradient"] .btn'))[1], 'Message us on WhatsApp');
}

function translateContactPage() {
  setDocumentTitle('Contact | OverLimitAdventure - Book Your Adventure');
  setMetaDescription('Contact us to book your trekking or climbing tour in Bolivia. WhatsApp +591 62364372. Office on Sagarnaga 339, La Paz.');

  setText(document.querySelector('.page-header-title'), 'Let us talk about your next adventure');
  setText(document.querySelector('.page-header-subtitle'), 'We are on Sagarnaga 339, La Paz. Message us on WhatsApp, call us or fill out the form.');
  setText(Array.from(document.querySelectorAll('.section-subtitle'))[0], 'We are here for you');
  setHTML(Array.from(document.querySelectorAll('.section-title'))[0], 'Contact <span>information</span>');
  setText(Array.from(document.querySelectorAll('.section.section-light p[style*="line-height: 1.7"]'))[0], 'You can visit us directly at our office in the heart of La Paz, message us on WhatsApp for a quick response, or call us to answer every question.');
  setNodeListText(Array.from(document.querySelectorAll('h4[style*="font-family: var(--font-heading)"]')), ['Office', 'Phone', 'WhatsApp']);
  setNodeListText(Array.from(document.querySelectorAll('p[style*="font-size: 0.85rem;"]')).slice(0, 2), ['Monday to Sunday: 8:00 - 20:00', 'Reply in less than 10 minutes']);
  setText(Array.from(document.querySelectorAll('h3[style*="font-family: var(--font-heading)"]'))[0], 'Send us a message');
  setNodeListText(Array.from(document.querySelectorAll('.form-label')), ['Full name', 'Email address', 'WhatsApp', 'Tour of interest', 'Message']);
  setAttr(document.getElementById('nombre'), 'placeholder', 'Your name');
  setAttr(document.getElementById('mensaje'), 'placeholder', 'Tell us what kind of experience you want, how many people are coming and which dates you have in mind...');
  setNodeListText(Array.from(document.querySelectorAll('#tour option')), ['Select a tour', 'Huayna Potosi', 'Illimani', 'Sajama', 'Condoriri', 'Salar de Uyuni', 'Death Road', 'Trekking', 'Amazon', 'Custom Tour']);
  setText(document.querySelector('button[type="submit"]'), 'Send message');
  setAttr(document.querySelector('iframe[title]'), 'title', 'OverLimitAdventure location');
}

function applyEnglishForPage(pageKey) {
  switch (pageKey) {
    case 'index':
      translateHomePage();
      break;
    case 'trekking':
      translateTrekkingPage();
      break;
    case 'climbing':
      translateClimbingPage();
      break;
    case 'amazon':
      translateAmazonPage();
      break;
    case 'classic-tours':
      translateClassicToursPage();
      break;
    case 'death-road':
      translateDeathRoadPage();
      break;
    case 'nosotros':
      translateAboutPage();
      break;
    case 'tours-personalizados':
      translateCustomToursPage();
      break;
    case 'contacto':
      translateContactPage();
      break;
    default:
      break;
  }
}

function setLanguage(language) {
  currentLanguage = language === 'en' ? 'en' : 'es';

  if (currentLanguage === 'en') {
    translateCommon();
    applyEnglishForPage(getPageKey());
  } else {
    restoreOriginalLanguage();
  }

  syncUrlLanguage(currentLanguage);
  syncInternalLinks(currentLanguage);
  updateLanguageButtons(currentLanguage);
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
}

document.addEventListener('DOMContentLoaded', function() {
  enhanceAmazonNavigation();

  const header = document.getElementById('header');
  const topBar = document.getElementById('topBar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const desktopDropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
  const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
  const desktopMediaQuery = window.matchMedia('(min-width: 901px)');

  initializeLanguageControls();
  currentLanguage = getInitialLanguage();

  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50) {
      header.classList.add('scrolled');
      if (topBar) {
        topBar.classList.add('hidden');
      }
    } else {
      header.classList.remove('scrolled');
      if (topBar) {
        topBar.classList.remove('hidden');
      }
    }
  });

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      const isOpen = mobileNav.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
      mobileNav.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';

      if (!isOpen) {
        closeMobileDropdowns();
      }
    });

    mobileNav.addEventListener('click', function(event) {
      if (event.target === mobileNav) {
        closeMobileMenu();
      }
    });
  }

  mobileDropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();

      const item = this.closest('.mobile-nav-item');
      const menu = item ? item.querySelector('.mobile-dropdown-menu') : null;
      const expanded = this.getAttribute('aria-expanded') === 'true';

      mobileDropdownToggles.forEach((otherToggle) => {
        if (otherToggle !== this) {
          otherToggle.setAttribute('aria-expanded', 'false');
          const otherItem = otherToggle.closest('.mobile-nav-item');
          const otherMenu = otherItem ? otherItem.querySelector('.mobile-dropdown-menu') : null;
          if (otherMenu) {
            otherMenu.classList.remove('open');
          }
          if (otherItem) {
            otherItem.classList.remove('is-open');
          }
        }
      });

      this.setAttribute('aria-expanded', String(!expanded));
      if (menu) {
        menu.classList.toggle('open', !expanded);
      }
      if (item) {
        item.classList.toggle('is-open', !expanded);
      }
    });
  });

  document.querySelectorAll('a.mobile-nav-link, .mobile-dropdown-link, .mobile-nav-cta').forEach((link) => {
    link.addEventListener('click', function() {
      closeMobileMenu();
    });
  });

  desktopDropdownItems.forEach((item) => {
    const trigger = item.querySelector('.nav-link');
    let closeTimer;

    function openDropdown() {
      if (!desktopMediaQuery.matches) {
        return;
      }

      clearTimeout(closeTimer);
      closeDesktopDropdowns(item);
      item.classList.add('is-open');
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'true');
      }
    }

    function closeDropdown() {
      item.classList.remove('is-open');
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
      }
    }

    item.addEventListener('mouseenter', openDropdown);
    item.addEventListener('mouseleave', function() {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(closeDropdown, 140);
    });

    item.addEventListener('focusin', openDropdown);
    item.addEventListener('focusout', function() {
      requestAnimationFrame(() => {
        if (!item.contains(document.activeElement)) {
          closeDropdown();
        }
      });
    });

    if (trigger) {
      trigger.setAttribute('aria-haspopup', 'true');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.addEventListener('click', function(event) {
        if (!desktopMediaQuery.matches) {
          return;
        }

        if (!item.classList.contains('is-open')) {
          event.preventDefault();
          openDropdown();
        }
      });
    }
  });

  document.addEventListener('click', function(event) {
    if (![...desktopDropdownItems].some((item) => item.contains(event.target))) {
      closeDesktopDropdowns();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeDesktopDropdowns();
      closeMobileMenu();
    }
  });

  desktopMediaQuery.addEventListener('change', function(event) {
    if (!event.matches) {
      closeDesktopDropdowns();
    } else {
      closeMobileMenu();
    }
  });

  /* ============================================================
     HERO STATS COUNTER ANIMATION
     ============================================================ */
  const heroStatNumbers = document.querySelectorAll('.hero-stat-number[data-count]');

  function animateHeroCounters() {
    heroStatNumbers.forEach((el) => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.textContent.replace(/[\d]/g, '');
      const duration = 2000;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });
  }

  // Trigger hero counters after a short delay
  if (heroStatNumbers.length > 0) {
    setTimeout(animateHeroCounters, 1200);
  }

  /* ============================================================
     HERO SLIDER
     ============================================================ */
  const heroSlider = document.getElementById('heroSlider');
  const sliderDots = document.getElementById('sliderDots');

  if (heroSlider && sliderDots) {
    const slides = heroSlider.querySelectorAll('.hero-slide');
    const dots = sliderDots.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    const slideInterval = 5000;

    function showSlide(index) {
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('active', slideIndex === index);
      });

      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === index);
      });

      currentSlide = index;
    }

    function nextSlide() {
      showSlide((currentSlide + 1) % slides.length);
    }

    let slideTimer = window.setInterval(nextSlide, slideInterval);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        window.clearInterval(slideTimer);
        showSlide(index);
        slideTimer = window.setInterval(nextSlide, slideInterval);
      });
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', function(event) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });

      if (!isValid) {
        event.preventDefault();
        alert(currentLanguage === 'en' ? 'Please complete all required fields.' : 'Por favor completa todos los campos requeridos.');
      }
    });
  });

  const currentPath = window.location.pathname;

  function matchesCurrentPath(href) {
    if (!href) {
      return false;
    }

    const resolvedUrl = new URL(href, window.location.href);
    const resolvedPath = resolvedUrl.pathname;
    const resolvedBase = resolvedPath.replace('.html', '');

    if (resolvedPath === currentPath) return true;
    if (resolvedBase === currentPath) return true;
    if (currentPath === resolvedBase + '.html') return true;
    if (currentPath === resolvedBase + '/') return true;

    return false;
  }

  document.querySelectorAll('.nav-link').forEach((link) => {
    if (matchesCurrentPath(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    if (matchesCurrentPath(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('.dropdown-link, .mobile-dropdown-link').forEach((link) => {
    if (matchesCurrentPath(link.getAttribute('href'))) {
      link.classList.add('active');

      const desktopTrigger = link.closest('.nav-item.has-dropdown')?.querySelector('.nav-link');
      if (desktopTrigger) {
        desktopTrigger.classList.add('active');
      }
    }
  });

  /* ============================================================
     STATS SECTION COUNTER ANIMATION
     ============================================================ */
  const statBlocks = document.querySelectorAll('.stat-block[data-count]');

  const statsCounterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const block = entry.target;
        const numberEl = block.querySelector('.stat-number');
        const target = parseInt(block.dataset.count, 10);
        const suffix = block.dataset.suffix || '';

        if (!Number.isNaN(target) && numberEl) {
          animateCounter(numberEl, 0, target, 2000, suffix);
        }

        statsCounterObserver.unobserve(block);
      }
    });
  }, {
    threshold: 0.5
  });

  statBlocks.forEach((block) => {
    statsCounterObserver.observe(block);
  });

  function animateCounter(element, start, end, duration, suffix) {
    const range = end - start;
    const stepTime = Math.max(Math.abs(Math.floor(duration / Math.max(range, 1))), 50);
    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    let timer;

    function run() {
      const now = new Date().getTime();
      const remaining = Math.max((endTime - now) / duration, 0);
      const value = Math.round(end - (remaining * range));
      element.textContent = value + suffix;

      if (value === end) {
        window.clearInterval(timer);
      }
    }

    timer = window.setInterval(run, stepTime);
    run();
  }

  function closeDesktopDropdowns(exceptionItem) {
    desktopDropdownItems.forEach((item) => {
      if (item === exceptionItem) {
        return;
      }

      item.classList.remove('is-open');
      const trigger = item.querySelector('.nav-link');
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function closeMobileDropdowns() {
    mobileDropdownToggles.forEach((toggle) => {
      toggle.setAttribute('aria-expanded', 'false');
      const item = toggle.closest('.mobile-nav-item');
      const menu = item ? item.querySelector('.mobile-dropdown-menu') : null;

      if (menu) {
        menu.classList.remove('open');
      }
      if (item) {
        item.classList.remove('is-open');
      }
    });
  }

  function closeMobileMenu() {
    if (!mobileNav || !mobileMenuBtn) {
      return;
    }

    mobileNav.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    closeMobileDropdowns();
  }

  setLanguage(currentLanguage);
});

if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.dataset.src;
        image.removeAttribute('data-src');
        imageObserver.unobserve(image);
      }
    });
  });

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
}
