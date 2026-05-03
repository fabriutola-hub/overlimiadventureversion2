import os
import re
import glob

# Dropdown HTML for desktop nav (pages/ relative)
DESKTOP_DROPDOWN_PAGES = '''          <li class="nav-item has-dropdown">
            <a href="classic-tours.html" class="nav-link">
              Classic Tours
              <svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </a>
            <div class="dropdown" style="min-width: 760px;">
              <div class="dropdown-inner">
                <div class="dropdown-col">
                  <span class="dropdown-label">Destinos</span>
                  <a href="classic-tiwanaku.html" class="dropdown-link">Tiwanaku</a>
                  <a href="classic-charquini.html" class="dropdown-link">Charquini</a>
                </div>
                <div class="dropdown-col">
                  <span class="dropdown-label">Copacabana</span>
                  <a href="copacabana-1-day.html" class="dropdown-link">1 Dia</a>
                  <a href="copacabana-2-days.html" class="dropdown-link">2 Dias</a>
                  <a href="copacabana-3-days.html" class="dropdown-link">3 Dias</a>
                </div>
                <div class="dropdown-col">
                  <span class="dropdown-label">Isla del Sol</span>
                  <a href="isla-del-sol-1-day.html" class="dropdown-link">1 Dia</a>
                  <a href="isla-del-sol-2-days.html" class="dropdown-link">2 Dias</a>
                  <a href="isla-del-sol-3-days.html" class="dropdown-link">3 Dias</a>
                </div>
                <div class="dropdown-col">
                  <span class="dropdown-label">Death Road</span>
                  <a href="death-road-1-day.html" class="dropdown-link">1 Dia</a>
                  <a href="death-road-2-days.html" class="dropdown-link">2 Dias</a>
                  <a href="death-road-3-days.html" class="dropdown-link">3 Dias</a>
                </div>
              </div>
            </div>
          </li>
'''

# Compact desktop dropdown for single-line files
DESKTOP_DROPDOWN_COMPACT = ' '.join(DESKTOP_DROPDOWN_PAGES.split())

# Mobile dropdown (multiline)
MOBILE_DROPDOWN_PAGES = '''        <li class="mobile-nav-item">
          <div class="mobile-nav-link">
            <span>Classic Tours</span>
            <button class="mobile-dropdown-toggle"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></button>
          </div>
          <div class="mobile-dropdown-menu">
            <div>
              <div class="mobile-dropdown-group"><div class="mobile-dropdown-label">Destinos</div><a href="classic-tiwanaku.html" class="mobile-dropdown-link">Tiwanaku</a><a href="classic-charquini.html" class="mobile-dropdown-link">Charquini</a></div>
              <div class="mobile-dropdown-group"><div class="mobile-dropdown-label">Copacabana</div><a href="copacabana-1-day.html" class="mobile-dropdown-link">1 Dia</a><a href="copacabana-2-days.html" class="mobile-dropdown-link">2 Dias</a><a href="copacabana-3-days.html" class="mobile-dropdown-link">3 Dias</a></div>
              <div class="mobile-dropdown-group"><div class="mobile-dropdown-label">Isla del Sol</div><a href="isla-del-sol-1-day.html" class="mobile-dropdown-link">1 Dia</a><a href="isla-del-sol-2-days.html" class="mobile-dropdown-link">2 Dias</a><a href="isla-del-sol-3-days.html" class="mobile-dropdown-link">3 Dias</a></div>
              <div class="mobile-dropdown-group"><div class="mobile-dropdown-label">Death Road</div><a href="death-road-1-day.html" class="mobile-dropdown-link">1 Dia</a><a href="death-road-2-days.html" class="mobile-dropdown-link">2 Dias</a><a href="death-road-3-days.html" class="mobile-dropdown-link">3 Dias</a></div>
            </div>
          </div>
        </li>
'''

# Compact mobile dropdown for single-line files
MOBILE_DROPDOWN_COMPACT = ' '.join(MOBILE_DROPDOWN_PAGES.split())

# For index.html (root) - paths with pages/ prefix
DESKTOP_DROPDOWN_ROOT = '''          <li class="nav-item has-dropdown">
            <a href="pages/classic-tours.html" class="nav-link">
              Classic Tours
              <svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </a>
            <div class="dropdown" style="min-width: 760px;">
              <div class="dropdown-inner">
                <div class="dropdown-col">
                  <span class="dropdown-label">Destinos</span>
                  <a href="pages/classic-tiwanaku.html" class="dropdown-link">Tiwanaku</a>
                  <a href="pages/classic-charquini.html" class="dropdown-link">Charquini</a>
                </div>
                <div class="dropdown-col">
                  <span class="dropdown-label">Copacabana</span>
                  <a href="pages/copacabana-1-day.html" class="dropdown-link">1 Dia</a>
                  <a href="pages/copacabana-2-days.html" class="dropdown-link">2 Dias</a>
                  <a href="pages/copacabana-3-days.html" class="dropdown-link">3 Dias</a>
                </div>
                <div class="dropdown-col">
                  <span class="dropdown-label">Isla del Sol</span>
                  <a href="pages/isla-del-sol-1-day.html" class="dropdown-link">1 Dia</a>
                  <a href="pages/isla-del-sol-2-days.html" class="dropdown-link">2 Dias</a>
                  <a href="pages/isla-del-sol-3-days.html" class="dropdown-link">3 Dias</a>
                </div>
                <div class="dropdown-col">
                  <span class="dropdown-label">Death Road</span>
                  <a href="pages/death-road-1-day.html" class="dropdown-link">1 Dia</a>
                  <a href="pages/death-road-2-days.html" class="dropdown-link">2 Dias</a>
                  <a href="pages/death-road-3-days.html" class="dropdown-link">3 Dias</a>
                </div>
              </div>
            </div>
          </li>
'''

MOBILE_DROPDOWN_ROOT = '''        <li class="mobile-nav-item">
          <div class="mobile-nav-link">
            <span>Classic Tours</span>
            <button class="mobile-dropdown-toggle"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></button>
          </div>
          <div class="mobile-dropdown-menu">
            <div>
              <div class="mobile-dropdown-group"><div class="mobile-dropdown-label">Destinos</div><a href="pages/classic-tiwanaku.html" class="mobile-dropdown-link">Tiwanaku</a><a href="pages/classic-charquini.html" class="mobile-dropdown-link">Charquini</a></div>
              <div class="mobile-dropdown-group"><div class="mobile-dropdown-label">Copacabana</div><a href="pages/copacabana-1-day.html" class="mobile-dropdown-link">1 Dia</a><a href="pages/copacabana-2-days.html" class="mobile-dropdown-link">2 Dias</a><a href="pages/copacabana-3-days.html" class="mobile-dropdown-link">3 Dias</a></div>
              <div class="mobile-dropdown-group"><div class="mobile-dropdown-label">Isla del Sol</div><a href="pages/isla-del-sol-1-day.html" class="mobile-dropdown-link">1 Dia</a><a href="pages/isla-del-sol-2-days.html" class="mobile-dropdown-link">2 Dias</a><a href="pages/isla-del-sol-3-days.html" class="mobile-dropdown-link">3 Dias</a></div>
              <div class="mobile-dropdown-group"><div class="mobile-dropdown-label">Death Road</div><a href="pages/death-road-1-day.html" class="mobile-dropdown-link">1 Dia</a><a href="pages/death-road-2-days.html" class="mobile-dropdown-link">2 Dias</a><a href="pages/death-road-3-days.html" class="mobile-dropdown-link">3 Dias</a></div>
            </div>
          </div>
        </li>
'''

SKIP_FILES = {'classic-tours.html', 'classic-tiwanaku.html', 'classic-charquini.html'}

def process_file(filepath, is_root=False):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    filename = os.path.basename(filepath)
    
    if filename in SKIP_FILES:
        return False
    
    # Detect if file uses compact single-line format
    # Check if the header/nav section has very few newlines
    is_compact = False
    header_match = re.search(r'<header class="header"[^>]*>.*?</header>', content, re.DOTALL)
    if header_match:
        header_text = header_match.group(0)
        if header_text.count('\n') <= 2:
            is_compact = True
    
    if is_root:
        # Desktop nav replacement for root
        content = re.sub(
            r'<li class="nav-item"><a href="pages/classic-tours\.html" class="nav-link">Classic Tours</a></li>',
            DESKTOP_DROPDOWN_ROOT,
            content
        )
        # Mobile nav replacement for root
        content = re.sub(
            r'<li class="mobile-nav-item"><a href="pages/classic-tours\.html" class="mobile-nav-link">Classic Tours</a></li>',
            MOBILE_DROPDOWN_ROOT,
            content
        )
    else:
        if is_compact:
            # Compact single-line format
            content = re.sub(
                r'<li class="nav-item"><a href="classic-tours\.html" class="nav-link">Classic Tours</a></li>',
                DESKTOP_DROPDOWN_COMPACT,
                content
            )
            content = re.sub(
                r'<li class="mobile-nav-item"><a href="classic-tours\.html" class="mobile-nav-link">Classic Tours</a></li>',
                MOBILE_DROPDOWN_COMPACT,
                content
            )
        else:
            # Multiline format
            content = re.sub(
                r'<li class="nav-item"><a href="classic-tours\.html" class="nav-link">Classic Tours</a></li>',
                DESKTOP_DROPDOWN_PAGES,
                content
            )
            content = re.sub(
                r'<li class="mobile-nav-item"><a href="classic-tours\.html" class="mobile-nav-link">Classic Tours</a></li>',
                MOBILE_DROPDOWN_PAGES,
                content
            )
    
    # Fix Uyuni ? Atacama -> Uyuni - Atacama
    content = content.replace('Uyuni ? Atacama', 'Uyuni - Atacama')
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Process pages/*.html
pages_dir = os.path.join(os.path.dirname(__file__), 'pages')
updated = []
for filepath in glob.glob(os.path.join(pages_dir, '*.html')):
    if process_file(filepath):
        updated.append(os.path.basename(filepath))

# Process root index.html
root_index = os.path.join(os.path.dirname(__file__), 'index.html')
if os.path.exists(root_index):
    if process_file(root_index, is_root=True):
        updated.append('index.html')

print(f"Updated {len(updated)} files:")
for f in updated:
    print(f"  - {f}")
