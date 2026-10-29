/**
 * BMU ORBIT — Centralized Campus Ecosystem
 * "All Clubs. All Events. One Orbit." | BML Munjal University
 */
(function () {
  'use strict';

  // 1. DATA SEEDS & STATE
  const CLUBS_DATA = {
    acm: {
      id: 'acm', name: 'ACM Student Chapter', cat: 'Technical',
      logo: 'assets/clubs/acm.webp', lead: 'Aayush Patel (B.Tech CSE 4th Year)',
      advisor: 'Dr. R. K. Sharma (Head, School of Engineering & Tech)', members: 184,
      desc: 'Official ACM student chapter at BML Munjal University. Dedicated to algorithmic computing, systems programming, and competitive hackathons.',
      highlights: ['Organizer of BMU HackGrid 24h Hackathon', 'Top 10 Global Chapter Excellence Nominee', 'Weekly Data Structures & Competitive Coding Circles'],
      events: ['evt-1', 'evt-5']
    },
    agraga: {
      id: 'agraga', name: 'Agraga – The HR & IR Club', cat: 'Professional',
      logo: 'assets/clubs/agraga.webp', lead: 'Devanshi Kulkarni (MBA 2nd Year)',
      advisor: 'Prof. Anupama Verma (School of Management)', members: 92,
      desc: 'Fostering industrial relations, leadership conclaves, HR simulations, and corporate transition workshops for aspiring business leaders.',
      highlights: ['Annual National HR Leadership Summit', 'Live Mock Corporate Assessment Center', 'Industry Mentorship Connect Program'],
      events: ['evt-3']
    },
    automobile: {
      id: 'automobile', name: 'Automobile Club', cat: 'Technical',
      logo: 'assets/clubs/automobile.jpg', lead: 'Karanvir Singh (B.Tech ME 4th Year)',
      advisor: 'Dr. Maneesh Yadav (Automotive Labs)', members: 140,
      desc: 'Student formula motorsport society designing, building, and competing with formula student single-seaters and custom EV prototypes.',
      highlights: ['Formula Bharat Design Finalist', 'Custom EV Battery Pack & Telemetry Rig', 'Annual Campus Track Day & Auto Expo'],
      events: ['evt-4']
    },
    blaze: {
      id: 'blaze', name: 'Blaze – Fashion Society', cat: 'Cultural',
      logo: 'assets/clubs/blaze.jpg', lead: 'Isha Mehra (BBA 3rd Year)',
      advisor: 'Prof. Sen (Student Welfare Dean)', members: 110,
      desc: 'BMU premier fashion design and runway society celebrating self-expression, sustainable apparel styling, and visual productions.',
      highlights: ['Flagship Runway Show at 67th Milestone Fest', 'Eco-Chic Sustainable Textile Showcase', 'Inter-University Fashion Trophy Winners'],
      events: ['evt-2']
    },
    robotics: {
      id: 'robotics', name: 'Robotics Club', cat: 'Technical',
      logo: 'assets/clubs/robotics.webp', lead: 'Siddharth Nair (B.Tech CSE 3rd Year)',
      advisor: 'Dr. Vikram Chandra', members: 125,
      desc: 'Autonomous rovers, aerial drone surveying, robot combat, ROS integration, and embedded sensor architectures.',
      highlights: ['National Robowars Podium Winners', 'Autonomous Campus Delivery Drone Prototype', 'Hands-on Arduino & ROS Bootcamp'],
      events: ['evt-1']
    },
    savera: {
      id: 'savera', name: 'Savera – Social Club', cat: 'Social Impact',
      logo: 'assets/clubs/savera.webp', lead: 'Pooja Reddy (B.Tech 3rd Year)',
      advisor: 'Dr. Sunita Sharma', members: 210,
      desc: 'Grassroots community outreach society conducting evening classes for underprivileged village children around Sidhrawali.',
      highlights: ['180+ Local Children Tutored Daily', 'Annual Winter Clothes & Books Donation Drives', 'Community Health & Sanitation Camps'],
      events: ['evt-2']
    },
    pfa: {
      id: 'pfa', name: 'Performing Arts (PFA)', cat: 'Cultural',
      logo: 'assets/clubs/pfa.webp', lead: 'Tanmay Saxena (B.Tech 4th Year)',
      advisor: 'Prof. Alok Tiwari', members: 135,
      desc: 'Theatrical stage plays, street dramatics (Nukkad Natak), musical ensembles, and national university dramatics tournaments.',
      highlights: ['National Street Play Trophy at IIT Roorkee', 'Annual Shakespeare & Modern Stage Productions', 'Campus Open Mic Nights'],
      events: ['evt-2', 'evt-6']
    },
    sierra: {
      id: 'sierra', name: 'Sierra Club', cat: 'Social Impact',
      logo: 'assets/clubs/sierra.jpg', lead: 'Neha Roy', advisor: 'Dr. Sen', members: 85,
      desc: 'Environmental conservation, tree plantation drives, and campus sustainability audits.',
      highlights: ['Campus Solar Audit', 'Green Campus Mission'], events: []
    },
    sata: {
      id: 'sata', name: 'SATA – Science & Tech', cat: 'Technical',
      logo: 'assets/clubs/sata.webp', lead: 'Kunal Verma', advisor: 'Dr. Bose', members: 95,
      desc: 'Applied physical sciences, astronomy observation nights, and STEM innovation research.',
      highlights: ['Stargazing Night', 'Science Conclave'], events: ['evt-5']
    },
    adventure: {
      id: 'adventure', name: 'Adventure Club', cat: 'Sports',
      logo: 'assets/clubs/adventure.webp', lead: 'Rishi Kapoor', advisor: 'Prof. Rawat', members: 110,
      desc: 'Trekking expeditions, mountaineering bootcamps, and outdoor wilderness exploration.',
      highlights: ['Himalayan Trek', 'Survival Camp'], events: []
    },
    culinary: {
      id: 'culinary', name: 'Culinary Club', cat: 'Lifestyle',
      logo: 'assets/clubs/culinary.webp', lead: 'Ananya Roy', advisor: 'Prof. Sen', members: 70,
      desc: 'Gastronomy, baking masterclasses, and nutritional cooking challenges.',
      highlights: ['MasterChef BMU', 'Baking Gala'], events: []
    },
    enactus: {
      id: 'enactus', name: 'Enactus BMU', cat: 'Social Impact',
      logo: 'assets/clubs/enactus.webp', lead: 'Simran Kaur', advisor: 'Dr. Gupta', members: 120,
      desc: 'Social entrepreneurship projects empowering underserved regional communities.',
      highlights: ['Project Umeed', 'Project Vanya'], events: []
    },
    liquid: {
      id: 'liquid', name: 'Liquid – Dance Society', cat: 'Cultural',
      logo: 'assets/clubs/liquid.jpg', lead: 'Varun Dhawan', advisor: 'Prof. Sharma', members: 90,
      desc: 'Contemporary, hip-hop, classical choreography, and inter-collegiate dance battles.',
      highlights: ['B-Boy Battle', 'Annual Fest Intro'], events: ['evt-2']
    }
  };

  const DEFAULT_EVENTS = [
    {
      id: 'evt-1', title: 'BMU Tech Workshop', clubId: 'acm', club: 'ACM Student Chapter',
      category: 'Technical', date: '20 September 2026', time: '10:00 AM – 1:00 PM',
      venue: 'Innovation Lab', desc: 'Hands-on IoT, microcontroller programming, and cloud telemetry workshop. Hardware kits provided for student teams.',
      seats: 28, capacity: 60, speakers: ['Dr. R. K. Sharma (Faculty Advisor)', 'Aayush Patel (Chair, ACM BMU)'],
      prerequisites: 'Laptop with VS Code installed. Basic C++/Python familiarity recommended.',
      agenda: [
        { time: '10:00 AM', title: 'Welcome & Hardware Kit Unboxing' },
        { time: '10:45 AM', title: 'ESP32 & Sensor Interfacing' },
        { time: '11:45 AM', title: 'Cloud MQTT Telemetry Streaming' },
        { time: '12:30 PM', title: 'Live Prototype Demo & Q&A' }
      ]
    },
    {
      id: 'evt-2', title: 'Cultural Night & Jam', clubId: 'blaze', club: 'Blaze & PFA',
      category: 'Cultural', date: '25 September 2026', time: '6:00 PM Onwards',
      venue: 'Main Auditorium', desc: 'Annual campus cultural kickoff featuring musical jam sessions, dance performances, and Blaze runway showcase.',
      seats: 'Open Campus', capacity: 500, speakers: ['Prof. Ananya Sen', 'Blaze Executive Board'],
      prerequisites: 'Open to all BMU students with valid campus ID.',
      agenda: [
        { time: '6:00 PM', title: 'Acoustic Musical Jam by Symphony' },
        { time: '7:15 PM', title: 'Liquid Dance Crew Spotlight' },
        { time: '8:00 PM', title: 'Blaze Fashion Runway Collection' },
        { time: '9:00 PM', title: 'Open Mic & DJ Night' }
      ]
    },
    {
      id: 'evt-3', title: 'HR Conclave 2026', clubId: 'agraga', club: 'Agraga – The HR & IR Club',
      category: 'Professional', date: '28 September 2026', time: '11:00 AM – 4:00 PM',
      venue: 'Executive Conference Hall', desc: 'Industry leadership keynote and HR masterclass panels featuring corporate heads from Fortune 500 enterprises.',
      seats: 45, capacity: 100, speakers: ['Ms. Neha Gupta (VP HR, Hero MotoCorp)', 'Mr. Rajesh Verma (Talent Head, Deloitte)'],
      prerequisites: 'Formal attire required. Bring resumes for networking rounds.',
      agenda: [
        { time: '11:00 AM', title: 'Keynote: The AI-Driven Future of Work' },
        { time: '12:30 PM', title: 'Panel Discussion: Campus-to-Corporate Transition' },
        { time: '02:00 PM', title: 'Mock Behavioral Interview Simulation' },
        { time: '03:30 PM', title: 'Networking Mixer & Certificates' }
      ]
    },
    {
      id: 'evt-4', title: 'Auto Expo & Track Day', clubId: 'automobile', club: 'Automobile Club',
      category: 'Technical', date: '30 September 2026', time: '10:00 AM – 5:00 PM',
      venue: 'Main Academic Ground', desc: 'Live showcase of student-designed formula prototypes, electric vehicle builds, and mechanical performance displays.',
      seats: 'Open Entry', capacity: 350, speakers: ['Dr. Maneesh Yadav (Faculty Lead)', 'Formula Student Team Leads'],
      prerequisites: 'Safety goggles provided on site for track demonstrations.',
      agenda: [
        { time: '10:00 AM', title: 'Formula Student Vehicle Unveiling' },
        { time: '11:30 AM', title: 'Telemetry & Powertrain Walkthrough' },
        { time: '02:00 PM', title: 'Live Track Lap Time Trials' },
        { time: '04:00 PM', title: 'Student Design Competition Awards' }
      ]
    },
    {
      id: 'evt-5', title: 'CodeQuest Hackathon', clubId: 'acm', club: 'ACM & SATA',
      category: 'Technical', date: '05 October 2026', time: '24 Hours Non-Stop',
      venue: 'Innovation Lab & Ground', desc: '24-hour sprint on applied AI, smart mobility, and sustainability challenges with mentorship and rewards.',
      seats: 50, capacity: 120, speakers: ['ACM Faculty Mentors', 'Industry Engineering Judges'],
      prerequisites: 'Teams of 2 to 4 students. Bring laptops and chargers.',
      agenda: [
        { time: '10:00 AM', title: 'Hackathon Opening & Problem Release' },
        { time: '02:00 PM', title: 'Mentor Checkpoint Round 1' },
        { time: '08:00 PM', title: 'Mid-Hack Pitch & Pizza Break' },
        { time: '09:00 AM (Day 2)', title: 'Final Demos & Grand Prize Ceremony' }
      ]
    },
    {
      id: 'evt-6', title: 'Rhythms 2.0 Dance Fest', clubId: 'pfa', club: 'The Performing Arts Club',
      category: 'Cultural', date: '12 October 2026', time: '5:00 PM Onwards',
      venue: 'MPH (Multi-Purpose Hall)', desc: 'Inter-batch choreography battles, solo classical showcases, street dance face-offs, and open musical mic.',
      seats: 'Open Campus', capacity: 400, speakers: ['National Dance Adjudicators'],
      prerequisites: 'Audience entry free. Participant registrations close Oct 8.',
      agenda: [
        { time: '05:00 PM', title: 'Classical Solo Competition' },
        { time: '06:30 PM', title: 'Inter-Batch Crew Showcase' },
        { time: '08:00 PM', title: 'All-Styles Street Dance Cypher' },
        { time: '09:15 PM', title: 'Trophy Presentation & Celebration' }
      ]
    }
  ];

  const DEFAULT_REGISTRATIONS = [
    {
      regId: 'BMU-2026-X8921', eventId: 'evt-1', eventName: 'BMU Tech Workshop', club: 'ACM Student Chapter',
      studentName: 'Rohan Verma', studentId: 'BMU2024CS042', studentEmail: 'rohan.verma@bmu.edu.in',
      course: 'B.Tech Computer Science & Engineering', year: '2nd Year', phone: '+91 98765 43210',
      date: '20 September 2026', time: '10:00 AM', venue: 'Innovation Lab', status: 'Not Present',
      registeredAt: '10 Sep 2026, 09:30 AM'
    },
    {
      regId: 'BMU-2026-C4410', eventId: 'evt-2', eventName: 'Cultural Night & Jam', club: 'Blaze & PFA',
      studentName: 'Rohan Verma', studentId: 'BMU2024CS042', studentEmail: 'rohan.verma@bmu.edu.in',
      course: 'B.Tech Computer Science & Engineering', year: '2nd Year', phone: '+91 98765 43210',
      date: '25 September 2026', time: '6:00 PM', venue: 'Main Auditorium', status: 'Present',
      registeredAt: '08 Sep 2026, 04:15 PM', scannedAt: '25 Sep 2026, 06:12 PM'
    }
  ];

  const DEFAULT_PROPOSALS = [
    {
      id: 'prop-101', title: 'AI Ethics & Autonomous Systems Forum', club: 'ACM Student Chapter',
      category: 'Technical', proposedDate: '18 November 2026', venue: 'Executive Conference Hall',
      coordinator: 'Prof. Shalini Gupta', coordinatorEmail: 'shalini.gupta@bmu.edu.in',
      status: 'Under Faculty Review', submittedAt: '12 Sep 2026'
    }
  ];

  function loadState(key, fallback) {
    try {
      const stored = localStorage.getItem('bmu_orbit_' + key);
      return stored ? JSON.parse(stored) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function saveState(key, val) {
    try {
      localStorage.setItem('bmu_orbit_' + key, JSON.stringify(val));
    } catch (e) {}
  }

  const state = {
    activePage: 'home',
    activeClubId: 'acm',
    activeEventId: 'evt-1',
    activePassRegId: 'BMU-2026-X8921',
    events: loadState('events', DEFAULT_EVENTS),
    registrations: loadState('registrations', DEFAULT_REGISTRATIONS),
    proposals: loadState('proposals', DEFAULT_PROPOSALS)
  };

  function syncAllData() {
    saveState('events', state.events);
    saveState('registrations', state.registrations);
    saveState('proposals', state.proposals);
    renderAttendanceTable();
    renderMyQrPass(state.activePassRegId);
    renderJsonVault();
    renderCatalogGrids();
  }

  // 2. VECTOR SVG QR GENERATOR
  function generateQrSvg(codeStr, size) {
    size = size || 180;
    let hash = 0;
    for (let i = 0; i < codeStr.length; i++) {
      hash = ((hash << 5) - hash) + codeStr.charCodeAt(i);
      hash |= 0;
    }
    const dim = 21;
    const cell = 100.0 / dim;
    let rects = '';
    for (let r = 0; r < dim; r++) {
      for (let c = 0; c < dim; c++) {
        const isFinder = (r < 7 && c < 7) || (r < 7 && c >= dim - 7) || (r >= dim - 7 && c < 7);
        let isDark = false;
        if (isFinder) {
          const bR = (r === 0 || r === 6 || r === dim - 7 || r === dim - 1);
          const bC = (c === 0 || c === 6 || c === dim - 7 || c === dim - 1);
          const iR = (r >= 2 && r <= 4) || (r >= dim - 5 && r <= dim - 3);
          const iC = (c >= 2 && c <= 4) || (c >= dim - 5 && c <= dim - 3);
          if (bR || bC || (iR && iC)) isDark = true;
        } else if (r === 6 || c === 6) {
          isDark = ((r + c) % 2 === 0);
        } else {
          isDark = (Math.abs((hash ^ (r * 31 + c * 17)) % 100) > 46);
        }
        if (isDark) {
          rects += `<rect x="${(c * cell).toFixed(2)}" y="${(r * cell).toFixed(2)}" width="${(cell + 0.05).toFixed(2)}" height="${(cell + 0.05).toFixed(2)}" fill="#0f172a"/>`;
        }
      }
    }
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="qr-svg-graphic" shape-rendering="crispEdges"><rect width="100" height="100" fill="#ffffff" rx="4"/>${rects}</svg>`;
  }

  // 3. TOAST & AUDIO SYSTEM
  function playChime(freq1, freq2) {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const ctx = new AC();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq1 || 587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq2 || 880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {}
  }

  function showToast(type, title, message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type} toast-enter`;
    const icons = { success: '✓', info: 'ℹ', warning: '⚠', error: '✕' };
    toast.innerHTML = `<div class="toast-icon">${icons[type] || 'ℹ'}</div><div class="toast-body"><div class="toast-title">${title}</div><div class="toast-msg">${message}</div></div><button class="toast-close" aria-label="Close">✕</button>`;
    container.appendChild(toast);
    playChime(type === 'error' ? 300 : 650, type === 'error' ? 200 : 950);
    setTimeout(() => toast.classList.remove('toast-enter'), 10);
    const dismiss = () => { toast.classList.add('toast-exit'); setTimeout(() => toast.remove(), 260); };
    toast.querySelector('.toast-close').addEventListener('click', dismiss);
    setTimeout(dismiss, 4500);
  }

  // 4. SPA ROUTER
  const VALID_ROUTES = ['home', 'events', 'clubs', 'club-details', 'event-details', 'registration', 'host-event', 'myqr', 'attendance', 'settings', 'json-manager'];

  function navigateTo(routeHash) {
    let clean = (routeHash || '').replace('#', '');
    let page = clean.split('?')[0];
    let params = new URLSearchParams(clean.includes('?') ? clean.split('?')[1] : '');
    if (!VALID_ROUTES.includes(page)) page = 'home';
    state.activePage = page;

    document.querySelectorAll('.page-view').forEach(v => v.classList.toggle('active', v.id === 'page-' + page));
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(i => i.classList.toggle('active', i.getAttribute('data-page') === page));

    const crumb = document.getElementById('topbar-page-title');
    if (crumb) {
      const titles = {
        home: 'Dashboard Overview', events: 'Events Directory', clubs: 'BMU Clubs & Nexus Hub',
        'club-details': 'Club Profile & Leadership', 'event-details': 'Event Agenda & Details',
        registration: 'Upcoming Events & Registration', 'host-event': 'Host a Campus Event',
        myqr: 'My Event Pass & QR Code', attendance: 'Attendance Portal & Scanner',
        settings: 'Student Profile & Settings', 'json-manager': 'Data Vault & JSON Manager'
      };
      crumb.textContent = titles[page] || 'Dashboard Overview';
    }

    const scroller = document.getElementById('main-content-scroll');
    if (scroller) scroller.scrollTop = 0;

    if (page === 'club-details') renderClubDetailsView(params.get('club') || state.activeClubId || 'acm');
    else if (page === 'event-details') renderEventDetailsView(params.get('id') || state.activeEventId || 'evt-1');
    else if (page === 'myqr') renderMyQrPass(state.activePassRegId);
    else if (page === 'attendance') renderAttendanceTable();
    else if (page === 'json-manager') renderJsonVault();

    document.body.classList.remove('sidebar-open');
  }

  // 5. CATALOG GRIDS DYNAMIC POPULATION
  function renderCatalogGrids() {
    const cardBadge = cat => cat === 'Technical' ? 'tag-tech' : cat === 'Cultural' ? 'tag-cult' : 'tag-prof';

    // 1. Home Events (first 3)
    const homeEv = document.getElementById('home-events-grid');
    if (homeEv) {
      homeEv.innerHTML = state.events.slice(0, 3).map(e => `
        <div class="event-card-item">
          <div class="event-card-header"><span class="badge-tag ${cardBadge(e.category)}">${e.category.toUpperCase()}</span><span class="demo-tag">Sample Event</span></div>
          <h4 class="event-card-title">${e.title}</h4>
          <div class="event-card-club">${e.club}</div>
          <div class="event-meta-list">
            <div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg><span>${e.date} • ${e.time}</span></div>
            <div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>${e.venue}</span></div>
          </div>
          <p class="event-card-desc">${e.desc}</p>
          <div class="event-card-footer">
            <a href="#event-details?id=${e.id}" class="link-action">Agenda →</a>
            <button class="btn btn-sm btn-primary btn-register-trigger" data-event-id="${e.id}">Register Now →</button>
          </div>
        </div>
      `).join('');
    }

    // 2. Home Clubs
    const homeCl = document.getElementById('home-clubs-grid');
    if (homeCl) {
      homeCl.innerHTML = ['acm', 'blaze', 'robotics', 'savera'].map(id => {
        const c = CLUBS_DATA[id];
        if (!c) return '';
        return `
          <div class="club-mini-card">
            <div class="club-mini-logo"><img src="${c.logo}" alt="${c.name}" loading="lazy"></div>
            <h4>${c.name}</h4>
            <span class="badge-tag ${cardBadge(c.cat)}">${c.cat.toUpperCase()}</span>
            <p>${c.desc.slice(0, 75)}...</p>
            <a href="#club-details?club=${c.id}" class="club-mini-link">View Profile →</a>
          </div>
        `;
      }).join('');
    }

    // 3. Events Directory
    const evGrid = document.getElementById('events-grid');
    if (evGrid) {
      evGrid.innerHTML = state.events.map(e => `
        <div class="event-card-item" data-category="${e.category}">
          <div class="event-card-header"><span class="badge-tag ${cardBadge(e.category)}">${e.category.toUpperCase()}</span><span class="demo-tag">Sample Event</span></div>
          <h3 class="event-card-title">${e.title}</h3>
          <div class="event-card-club">${e.club}</div>
          <div class="event-meta-list">
            <div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg><span>${e.date} • ${e.time}</span></div>
            <div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>${e.venue}</span></div>
          </div>
          <p class="event-card-desc">${e.desc}</p>
          <div class="event-card-footer">
            <a href="#event-details?id=${e.id}" class="link-action">Agenda →</a>
            <button class="btn btn-sm btn-primary btn-register-trigger" data-event-id="${e.id}">Register Now →</button>
          </div>
        </div>
      `).join('');
    }

    // 4. Clubs Directory
    const clGrid = document.getElementById('clubs-grid');
    if (clGrid) {
      clGrid.innerHTML = Object.values(CLUBS_DATA).map(c => `
        <div class="club-card-item">
          <div class="club-card-logo"><img src="${c.logo}" alt="${c.name}" loading="lazy"></div>
          <span class="badge-tag ${cardBadge(c.cat)}">${c.cat.toUpperCase()}</span>
          <h3 class="club-card-name">${c.name}</h3>
          <p class="club-card-desc">${c.desc}</p>
          <a href="#club-details?club=${c.id}" class="club-view-events-btn">View Profile & Team →</a>
        </div>
      `).join('');
    }

    // 5. Registration Events Grid
    const regGrid = document.getElementById('registration-events-grid');
    if (regGrid) {
      regGrid.innerHTML = state.events.map(e => `
        <div class="event-card-item">
          <div class="event-card-header"><span class="badge-tag ${cardBadge(e.category)}">${e.category.toUpperCase()}</span><span class="demo-tag">Sample Event</span></div>
          <h3 class="event-card-title">${e.title}</h3>
          <div class="event-card-club">${e.club}</div>
          <div class="event-meta-list">
            <div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg><span>${e.date} • ${e.time}</span></div>
            <div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>${e.venue}</span></div>
          </div>
          <p class="event-card-desc">${e.desc}</p>
          <div class="event-card-footer">
            <span class="seats-status-pill ${typeof e.seats === 'string' ? 'pill-open' : ''}">
              ${typeof e.seats === 'number' ? `${e.seats} seats remaining` : e.seats}
            </span>
            <button class="btn btn-sm btn-primary btn-register-trigger" data-event-id="${e.id}">Register Now →</button>
          </div>
        </div>
      `).join('');
    }
  }

  // 6. DYNAMIC PROFILE & AGENDA DETAILS
  function renderClubDetailsView(clubId) {
    state.activeClubId = clubId;
    const club = CLUBS_DATA[clubId] || CLUBS_DATA['acm'];

    const logo = document.getElementById('cd-logo');
    const name = document.getElementById('cd-name');
    const tag = document.getElementById('cd-tag');
    const desc = document.getElementById('cd-desc');
    const lead = document.getElementById('cd-lead');
    const advisor = document.getElementById('cd-advisor');
    const members = document.getElementById('cd-members');
    const highlights = document.getElementById('cd-highlights');
    const evContainer = document.getElementById('cd-events-grid');

    if (logo) logo.src = club.logo;
    if (name) name.textContent = club.name;
    if (tag) {
      tag.textContent = club.cat.toUpperCase();
      tag.className = 'badge-tag ' + (club.cat === 'Technical' ? 'tag-tech' : club.cat === 'Cultural' ? 'tag-cult' : 'tag-prof');
    }
    if (desc) desc.textContent = club.desc;
    if (lead) lead.textContent = club.lead;
    if (advisor) advisor.textContent = club.advisor;
    if (members) members.textContent = club.members + ' Verified Members';
    if (highlights) highlights.innerHTML = club.highlights.map(h => `<li><span class="hl-bullet">✦</span> ${h}</li>`).join('');

    if (evContainer) {
      const clubEvents = state.events.filter(e => e.clubId === clubId);
      if (clubEvents.length === 0) {
        evContainer.innerHTML = `<div class="empty-state">No scheduled events currently for ${club.name}. Check back soon!</div>`;
      } else {
        evContainer.innerHTML = clubEvents.map(e => `
          <div class="event-card-item">
            <div class="event-card-header"><span class="badge-tag tag-tech">${e.category.toUpperCase()}</span><span class="demo-tag">${e.seats} seats</span></div>
            <h4 class="event-card-title">${e.title}</h4>
            <div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg><span>${e.date} • ${e.time}</span></div>
            <div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>${e.venue}</span></div>
            <div class="event-card-footer" style="margin-top:14px">
              <a href="#event-details?id=${e.id}" class="link-action">Agenda & Details →</a>
              <button class="btn btn-sm btn-primary btn-register-trigger" data-event-id="${e.id}">Register Now →</button>
            </div>
          </div>
        `).join('');
      }
    }
  }

  function renderEventDetailsView(eventId) {
    state.activeEventId = eventId;
    const ev = state.events.find(e => e.id === eventId) || state.events[0];

    const title = document.getElementById('ed-title');
    const club = document.getElementById('ed-club');
    const cat = document.getElementById('ed-cat');
    const dt = document.getElementById('ed-datetime');
    const venue = document.getElementById('ed-venue');
    const desc = document.getElementById('ed-desc');
    const prereq = document.getElementById('ed-prereq');
    const speakers = document.getElementById('ed-speakers');
    const agenda = document.getElementById('ed-agenda');
    const regBtn = document.getElementById('ed-btn-register');

    if (title) title.textContent = ev.title;
    if (club) club.textContent = ev.club;
    if (cat) cat.textContent = ev.category.toUpperCase();
    if (dt) dt.textContent = ev.date + ' • ' + ev.time;
    if (venue) venue.textContent = ev.venue;
    if (desc) desc.textContent = ev.desc;
    if (prereq) prereq.textContent = ev.prerequisites || 'Valid university ID required at door.';

    if (speakers && ev.speakers) {
      speakers.innerHTML = ev.speakers.map(s => `<div class="speaker-chip"><div class="speaker-avatar">🎙</div><div class="speaker-name">${s}</div></div>`).join('');
    }
    if (agenda && ev.agenda) {
      agenda.innerHTML = ev.agenda.map(a => `<div class="agenda-row"><div class="agenda-time">${a.time}</div><div class="agenda-content"><div class="agenda-title">${a.title}</div></div></div>`).join('');
    }
    if (regBtn) regBtn.setAttribute('data-event-id', ev.id);
  }

  // 7. FORM VALIDATION
  const VALIDATORS = {
    name: { regex: /^[a-zA-Z\s.]{3,50}$/, error: 'Please enter a valid full name (letters only, min 3 characters).' },
    id: { regex: /^[a-zA-Z0-9]{6,16}$/, error: 'Please enter a valid University ID (e.g. BMU2024CS042).' },
    email: {
      validate: val => val && val.includes('@') && val.trim().toLowerCase().endsWith('@bmu.edu.in'),
      error: 'Official BMU email required (must end with @bmu.edu.in).'
    },
    phone: { regex: /^(\+91[\-\s]?)?[6-9]\d{9}$/, error: 'Please enter a valid 10-digit Indian phone number.' },
    title: { regex: /^.{4,80}$/, error: 'Title must be between 4 and 80 characters.' },
    venue: { regex: /^.{3,60}$/, error: 'Please specify a campus venue (min 3 chars).' }
  };

  function validateInput(inputEl, ruleKey) {
    if (!inputEl) return true;
    if (!ruleKey) {
      const id = (inputEl.id || '').toLowerCase();
      const type = (inputEl.type || '').toLowerCase();
      if (id.includes('email') || type === 'email') ruleKey = 'email';
      else if (id.includes('phone') || type === 'tel') ruleKey = 'phone';
      else if (id.includes('venue')) ruleKey = 'venue';
      else if (id.includes('title')) ruleKey = 'title';
      else if (id.includes('id') || id.includes('roll')) ruleKey = 'id';
      else if (id.includes('name')) ruleKey = 'name';
    }
    const val = inputEl.value.trim();
    const rule = VALIDATORS[ruleKey];
    if (!rule) return true;

    const isValid = rule.validate ? rule.validate(val) : rule.regex.test(val);
    const parent = inputEl.closest('.form-field') || inputEl.parentElement;
    let errSpan = parent.querySelector('.field-error');

    if (!isValid) {
      inputEl.classList.add('is-invalid');
      inputEl.classList.remove('is-valid');
      if (!errSpan) {
        errSpan = document.createElement('span');
        errSpan.className = 'field-error';
        parent.appendChild(errSpan);
      }
      errSpan.textContent = rule.error;
    } else {
      inputEl.classList.remove('is-invalid');
      inputEl.classList.add('is-valid');
      if (errSpan) errSpan.textContent = '';
    }
    return isValid;
  }

  function setupFormValidation(formEl, fieldMap) {
    if (!formEl) return;
    Object.keys(fieldMap).forEach(fieldId => {
      const el = document.getElementById(fieldId);
      if (!el) return;
      el.addEventListener('input', () => validateInput(el, fieldMap[fieldId]));
      el.addEventListener('blur', () => validateInput(el, fieldMap[fieldId]));
    });
  }

  // 8. STORAGE & DOWNLOADS
  function downloadJsonFile(fileName, dataObj) {
    const jsonStr = JSON.stringify(dataObj, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  async function saveWithFileSystemApi(fileName, dataObj) {
    if ('showSaveFilePicker' in window) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName: fileName,
          types: [{ description: 'JSON Database File', accept: { 'application/json': ['.json'] } }]
        });
        const writable = await handle.createWritable();
        await writable.write(JSON.stringify(dataObj, null, 2));
        await writable.close();
        return true;
      } catch (err) {
        return false;
      }
    }
    return false;
  }

  // 9. FORM SUBMISSIONS
  function handleRegistrationSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('reg-form-name');
    const id = document.getElementById('reg-form-id');
    const email = document.getElementById('reg-form-email');
    const phone = document.getElementById('reg-form-phone');
    const course = document.getElementById('reg-form-course');
    const year = document.getElementById('reg-form-year');
    const evIdInp = document.getElementById('reg-form-event-id');

    if (!validateInput(name, 'name') || !validateInput(id, 'id') || !validateInput(email, 'email') || !validateInput(phone, 'phone')) {
      const dialog = document.querySelector('.modal-dialog') || e.target;
      dialog.classList.remove('shake-anim');
      void dialog.offsetWidth;
      dialog.classList.add('shake-anim');
      showToast('error', 'Validation Error', 'Please correct the highlighted fields before submitting.');
      return;
    }

    const eventId = evIdInp ? evIdInp.value : state.activeEventId;
    const targetEvent = state.events.find(ev => ev.id === eventId) || state.events[0];
    const newRegId = 'BMU-2026-' + Math.random().toString(36).substring(2, 6).toUpperCase();

    const newReg = {
      regId: newRegId, eventId: targetEvent.id, eventName: targetEvent.title, club: targetEvent.club,
      studentName: name.value.trim(), studentId: id.value.trim().toUpperCase(), studentEmail: email.value.trim().toLowerCase(),
      course: course ? course.value : 'B.Tech CSE', year: year ? year.value : '2nd Year', phone: phone.value.trim(),
      date: targetEvent.date, time: targetEvent.time, venue: targetEvent.venue, status: 'Not Present',
      registeredAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    };

    state.registrations.unshift(newReg);
    state.activePassRegId = newRegId;
    syncAllData();
    closeRegistrationModal();
    showToast('success', 'Registration Confirmed!', `Pass generated: ${newRegId}. Data saved to local storage.`);
    downloadJsonFile(`bmu_registration_${newRegId}.json`, newReg);
    window.location.hash = '#myqr';
  }

  function handleHostEventSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('host-title');
    const club = document.getElementById('host-club');
    const cat = document.getElementById('host-cat');
    const date = document.getElementById('host-date');
    const time = document.getElementById('host-time');
    const venue = document.getElementById('host-venue');
    const desc = document.getElementById('host-desc');
    const coord = document.getElementById('host-coord');
    const email = document.getElementById('host-coord-email');

    if (!validateInput(title, 'title') || !validateInput(venue, 'venue') || !validateInput(email, 'email')) {
      showToast('error', 'Validation Error', 'Please complete all required event proposal fields.');
      return;
    }

    const newPropId = 'prop-' + (state.proposals.length + 101);
    const newProposal = {
      id: newPropId, title: title.value.trim(), club: club.value, category: cat.value,
      proposedDate: date.value || 'TBD', time: time.value || '10:00 AM', venue: venue.value.trim(),
      desc: desc.value.trim(), coordinator: coord.value.trim(), coordinatorEmail: email.value.trim(),
      status: 'Submitted / Faculty Review',
      submittedAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    };

    state.proposals.unshift(newProposal);
    syncAllData();
    showToast('success', 'Proposal Submitted!', `Event proposal #${newPropId} saved to local proposals.json.`);
    downloadJsonFile(`bmu_event_proposal_${newPropId}.json`, newProposal);
    e.target.reset();
    window.location.hash = '#events';
  }

  function handleSettingsSubmit(e) {
    e.preventDefault();
    showToast('success', 'Profile Updated', 'Student preferences and notification settings saved.');
  }

  // 10. QR PASS & SCANNER
  function renderMyQrPass(targetRegId) {
    const reg = state.registrations.find(r => r.regId === targetRegId) || state.registrations[0];
    if (!reg) return;
    state.activePassRegId = reg.regId;

    const name = document.getElementById('myqr-student-name');
    const id = document.getElementById('myqr-student-id');
    const event = document.getElementById('myqr-event-name');
    const club = document.getElementById('myqr-club-name');
    const date = document.getElementById('myqr-event-date');
    const venue = document.getElementById('myqr-event-venue');
    const regId = document.getElementById('myqr-reg-id');
    const qrContainer = document.getElementById('myqr-qr-container');
    const status = document.getElementById('myqr-pass-status');
    const selector = document.getElementById('myqr-pass-selector');

    if (name) name.textContent = reg.studentName;
    if (id) id.textContent = reg.studentId;
    if (event) event.textContent = reg.eventName;
    if (club) club.textContent = reg.club;
    if (date) date.textContent = reg.date + ' • ' + reg.time;
    if (venue) venue.textContent = reg.venue;
    if (regId) regId.textContent = reg.regId;
    if (qrContainer) qrContainer.innerHTML = generateQrSvg(reg.regId, 180);

    if (status) {
      const isPresent = reg.status === 'Present';
      status.textContent = isPresent ? '✓ PRESENT' : 'NOT PRESENT';
      status.className = `status-badge ${isPresent ? 'present' : 'pending'}`;
    }

    if (selector) {
      selector.innerHTML = state.registrations.map(r => `
        <option value="${r.regId}" ${r.regId === reg.regId ? 'selected' : ''}>${r.eventName} (${r.regId})</option>
      `).join('');
    }
  }

  function renderAttendanceTable() {
    const tbody = document.getElementById('attendance-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    state.registrations.forEach(reg => {
      const isPresent = reg.status === 'Present';
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><div class="table-event-name">${reg.eventName}</div><div class="table-event-sub">${reg.club}</div></td>
        <td><code class="reg-id-pill">${reg.regId}</code></td>
        <td><div>${reg.date}</div><div class="table-time-sub">${reg.time}</div></td>
        <td>
          <span class="status-tag ${isPresent ? 'present' : 'pending'}">${isPresent ? '✓ Present' : 'Not Present'}</span>
          ${reg.scannedAt ? `<div class="table-time-sub" style="font-size:10px">Scanned: ${reg.scannedAt}</div>` : ''}
        </td>
        <td><button class="btn btn-sm ${isPresent ? 'btn-secondary' : 'btn-primary'} btn-toggle-checkin" data-reg="${reg.regId}">${isPresent ? 'Mark Not Present' : 'Scan & Mark Present'}</button></td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-toggle-checkin').forEach(btn => {
      btn.addEventListener('click', function () {
        toggleAttendanceStatus(this.getAttribute('data-reg'));
      });
    });
  }

  function toggleAttendanceStatus(regId) {
    const reg = state.registrations.find(r => r.regId === regId);
    if (!reg) return;
    if (reg.status === 'Present') {
      reg.status = 'Not Present';
      delete reg.scannedAt;
      showToast('info', 'Check-in Revoked', `${reg.studentName} marked Not Present.`);
    } else {
      reg.status = 'Present';
      reg.scannedAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      playChime(600, 900);
      showToast('success', 'Attendance Verified!', `${reg.studentName} marked Present at ${reg.scannedAt}.`);
    }
    syncAllData();
  }

  function runScannerSweep() {
    const laser = document.querySelector('.laser-scanner-line');
    const msg = document.getElementById('scanner-output-msg');
    if (laser) {
      laser.style.animation = 'laserSweepFast 0.8s ease-in-out infinite alternate';
      laser.style.background = '#10b981';
      laser.style.boxShadow = '0 0 16px #10b981';
    }
    if (msg) {
      msg.textContent = 'Active Laser Sweep: Scanning attendee pass QR...';
      msg.style.color = '#059669';
    }

    setTimeout(() => {
      const pendingReg = state.registrations.find(r => r.status !== 'Present') || state.registrations[0];
      if (pendingReg) {
        pendingReg.status = 'Present';
        pendingReg.scannedAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        syncAllData();
        playChime(700, 1050);
        showToast('success', 'Pass Verified!', `Check-in confirmed for ${pendingReg.studentName} (${pendingReg.regId}).`);
        if (msg) msg.textContent = `✓ Scan Complete: Verified ${pendingReg.studentName} [${pendingReg.regId}]`;
      }
      setTimeout(() => {
        if (laser) {
          laser.style.animation = 'laserSweep 3s ease-in-out infinite alternate';
          laser.style.background = '#38bdf8';
          laser.style.boxShadow = '0 0 10px #38bdf8';
        }
      }, 1200);
    }, 900);
  }

  // 11. JSON DATA VAULT MANAGER
  function renderJsonVault() {
    const pre = document.getElementById('json-vault-viewer');
    const cReg = document.getElementById('vault-count-reg');
    const cEvt = document.getElementById('vault-count-evt');
    const cProp = document.getElementById('vault-count-prop');

    if (cReg) cReg.textContent = state.registrations.length;
    if (cEvt) cEvt.textContent = state.events.length;
    if (cProp) cProp.textContent = state.proposals.length;

    if (pre) {
      const activeTab = document.querySelector('.vault-tab.active');
      const tabType = activeTab ? activeTab.getAttribute('data-vault-type') : 'registrations';
      const dataToDisplay = tabType === 'events' ? state.events : (tabType === 'proposals' ? state.proposals : state.registrations);
      pre.textContent = JSON.stringify(dataToDisplay, null, 2);
    }
  }

  function setupJsonManager() {
    const btnExpReg = document.getElementById('btn-export-reg-json');
    const btnExpEvt = document.getElementById('btn-export-evt-json');
    const btnExpAll = document.getElementById('btn-export-all-json');
    const btnSaveFs = document.getElementById('btn-save-fs-api');
    const fileImport = document.getElementById('vault-file-import');
    const btnReset = document.getElementById('btn-reset-vault-data');

    if (btnExpReg) btnExpReg.addEventListener('click', () => { downloadJsonFile('bmu_orbit_registrations.json', state.registrations); showToast('success', 'File Downloaded', 'bmu_orbit_registrations.json saved.'); });
    if (btnExpEvt) btnExpEvt.addEventListener('click', () => { downloadJsonFile('bmu_orbit_events.json', state.events); showToast('success', 'File Downloaded', 'bmu_orbit_events.json saved.'); });
    if (btnExpAll) btnExpAll.addEventListener('click', () => {
      downloadJsonFile('bmu_orbit_full_backup.json', { app: 'BMU ORBIT', exportedAt: new Date().toISOString(), registrations: state.registrations, events: state.events, proposals: state.proposals });
      showToast('success', 'Backup Exported', 'Full BMU ORBIT JSON database downloaded.');
    });

    if (btnSaveFs) {
      btnSaveFs.addEventListener('click', async () => {
        const ok = await saveWithFileSystemApi('bmu_orbit_registrations.json', state.registrations);
        if (ok) showToast('success', 'File Saved', 'JSON written directly to local file system.');
        else { downloadJsonFile('bmu_orbit_registrations.json', state.registrations); showToast('info', 'File Exported', 'Browser fallback download initiated.'); }
      });
    }

    if (fileImport) {
      fileImport.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (evt) {
          try {
            const parsed = JSON.parse(evt.target.result);
            if (Array.isArray(parsed)) {
              state.registrations = parsed;
              syncAllData();
              showToast('success', 'Import Successful', `Loaded ${parsed.length} records into database.`);
            } else if (parsed.registrations && Array.isArray(parsed.registrations)) {
              state.registrations = parsed.registrations;
              if (parsed.events) state.events = parsed.events;
              if (parsed.proposals) state.proposals = parsed.proposals;
              syncAllData();
              showToast('success', 'Full Backup Restored', `Restored database from ${file.name}.`);
            } else {
              showToast('error', 'Import Error', 'Unrecognized JSON structure.');
            }
          } catch (err) {
            showToast('error', 'Invalid JSON', 'Could not parse JSON file.');
          }
        };
        reader.readAsText(file);
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        if (confirm('Reset database to default seed records? Any custom submissions will be cleared.')) {
          state.events = DEFAULT_EVENTS;
          state.registrations = DEFAULT_REGISTRATIONS;
          state.proposals = DEFAULT_PROPOSALS;
          syncAllData();
          showToast('info', 'Database Reset', 'Default BMU ORBIT records restored.');
        }
      });
    }

    document.querySelectorAll('.vault-tab').forEach(tab => {
      tab.addEventListener('click', function () {
        document.querySelectorAll('.vault-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        renderJsonVault();
      });
    });
  }

  // 12. REGISTRATION MODAL
  function openRegistrationModal(eventId) {
    const modal = document.getElementById('reg-modal');
    if (!modal) return;
    state.activeEventId = eventId || state.activeEventId;
    const ev = state.events.find(e => e.id === state.activeEventId) || state.events[0];
    const title = document.getElementById('modal-event-name');
    const details = document.getElementById('modal-event-details-text');
    const evIdInput = document.getElementById('reg-form-event-id');

    if (title) title.textContent = ev.title;
    if (details) details.textContent = `${ev.club} • ${ev.date} • ${ev.venue}`;
    if (evIdInput) evIdInput.value = ev.id;
    modal.classList.add('open');
  }

  function closeRegistrationModal() {
    const modal = document.getElementById('reg-modal');
    if (modal) modal.classList.remove('open');
  }

  // 13. SEARCH & CATEGORY FILTERS
  function setupGlobalSearch() {
    const searchInput = document.getElementById('topbar-global-search');
    const dropdown = document.getElementById('search-results-dropdown');
    if (!searchInput || !dropdown) return;

    searchInput.addEventListener('input', function () {
      const q = this.value.trim().toLowerCase();
      if (q.length < 2) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        return;
      }

      const matchEvents = state.events.filter(e => e.title.toLowerCase().includes(q) || e.club.toLowerCase().includes(q));
      const matchClubs = Object.values(CLUBS_DATA).filter(c => c.name.toLowerCase().includes(q) || c.cat.toLowerCase().includes(q));
      const matchRegs = state.registrations.filter(r => r.regId.toLowerCase().includes(q) || r.studentName.toLowerCase().includes(q));

      if (matchEvents.length === 0 && matchClubs.length === 0 && matchRegs.length === 0) {
        dropdown.innerHTML = `<div class="search-empty">No results found for "${q}"</div>`;
      } else {
        let html = '';
        if (matchEvents.length > 0) {
          html += '<div class="search-category">Events</div>';
          html += matchEvents.slice(0, 3).map(e => `
            <a href="#event-details?id=${e.id}" class="search-result-item">
              <span class="search-icon">📅</span>
              <div><div class="search-title">${e.title}</div><div class="search-sub">${e.club} • ${e.date}</div></div>
            </a>
          `).join('');
        }
        if (matchClubs.length > 0) {
          html += '<div class="search-category">Clubs</div>';
          html += matchClubs.slice(0, 3).map(c => `
            <a href="#club-details?club=${c.id}" class="search-result-item">
              <span class="search-icon">👥</span>
              <div><div class="search-title">${c.name}</div><div class="search-sub">${c.cat} • ${c.lead}</div></div>
            </a>
          `).join('');
        }
        if (matchRegs.length > 0) {
          html += '<div class="search-category">Your Passes</div>';
          html += matchRegs.slice(0, 2).map(r => `
            <a href="#myqr" class="search-result-item" data-pass="${r.regId}">
              <span class="search-icon">🎫</span>
              <div><div class="search-title">${r.regId} — ${r.eventName}</div><div class="search-sub">${r.studentName} (${r.status})</div></div>
            </a>
          `).join('');
        }
        dropdown.innerHTML = html;
      }
      dropdown.classList.add('open');
    });

    document.addEventListener('click', function (e) {
      if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) dropdown.classList.remove('open');
    });

    dropdown.addEventListener('click', function (e) {
      const passTarget = e.target.closest('[data-pass]');
      if (passTarget) {
        state.activePassRegId = passTarget.getAttribute('data-pass');
        renderMyQrPass(state.activePassRegId);
      }
      dropdown.classList.remove('open');
    });
  }

  function setupCategoryPillFilters() {
    const filterPills = document.querySelectorAll('.events-filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', function () {
        filterPills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        const cat = this.getAttribute('data-filter');
        const cards = document.querySelectorAll('#page-events .event-card-item');
        cards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          card.style.display = (cat === 'all' || cardCat === cat) ? 'flex' : 'none';
        });
      });
    });
  }

  // 14. APP INITIALIZATION
  function initApp() {
    window.addEventListener('hashchange', () => navigateTo(window.location.hash));
    navigateTo(window.location.hash || '#home');

    setupFormValidation(document.getElementById('event-registration-form'), {
      'reg-form-name': 'name', 'reg-form-id': 'id',
      'reg-form-email': 'email', 'reg-form-phone': 'phone'
    });

    setupFormValidation(document.getElementById('host-event-form'), {
      'host-title': 'title', 'host-venue': 'venue', 'host-coord-email': 'email'
    });

    const regForm = document.getElementById('event-registration-form');
    if (regForm) regForm.addEventListener('submit', handleRegistrationSubmit);

    const hostForm = document.getElementById('host-event-form');
    if (hostForm) hostForm.addEventListener('submit', handleHostEventSubmit);

    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) settingsForm.addEventListener('submit', handleSettingsSubmit);

    document.addEventListener('click', function (e) {
      const trigger = e.target.closest('.btn-register-trigger');
      if (trigger) {
        e.preventDefault();
        openRegistrationModal(trigger.getAttribute('data-event-id'));
      }
    });

    const modalClose = document.getElementById('modal-close-btn');
    const modalCancel = document.getElementById('modal-cancel-btn');
    const modalOverlay = document.getElementById('reg-modal');
    if (modalClose) modalClose.addEventListener('click', closeRegistrationModal);
    if (modalCancel) modalCancel.addEventListener('click', closeRegistrationModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) closeRegistrationModal();
      });
    }

    const passSelector = document.getElementById('myqr-pass-selector');
    if (passSelector) passSelector.addEventListener('change', function () { renderMyQrPass(this.value); });

    const btnSimScan = document.getElementById('btn-sim-scanner');
    if (btnSimScan) btnSimScan.addEventListener('click', runScannerSweep);

    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeSidebarBtn = document.getElementById('sidebar-close-btn');
    const backdrop = document.getElementById('mobile-overlay-backdrop');
    if (menuBtn) menuBtn.addEventListener('click', () => document.body.classList.toggle('sidebar-open'));
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', () => document.body.classList.remove('sidebar-open'));
    if (backdrop) backdrop.addEventListener('click', () => document.body.classList.remove('sidebar-open'));

    setupGlobalSearch();
    setupCategoryPillFilters();
    setupJsonManager();
    syncAllData();
  }

  // Global API exposure for testing and debugging
  window.OrbitApp = {
    state,
    validateInput,
    showToast,
    playChime,
    generateQrSvg,
    downloadJsonFile,
    saveWithFileSystemApi,
    navigateTo,
    renderClubDetailsView,
    renderEventDetailsView,
    renderMyQrPass,
    renderAttendanceTable,
    toggleAttendanceStatus,
    runScannerSweep,
    renderJsonVault,
    openRegistrationModal,
    closeRegistrationModal,
    syncAllData,
    initApp
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
