# BMU ORBIT — Centralized Campus Ecosystem
> **"All Clubs. All Events. One Orbit."**  
> Official student platform for BML Munjal University that integrates clubs, campus events, registrations, contactless attendance check-in, and local data persistence.

---

## Key Highlights & Architecture

- **Single Page App (SPA) Dashboard**: 11 dedicated, deep-linked views (`#home`, `#events`, `#clubs`, `#club-details`, `#event-details`, `#registration`, `#host-event`, `#myqr`, `#attendance`, `#json-manager`, `#settings`).
- **Zero External Frameworks**: Built purely with **HTML5, CSS3, and Vanilla JavaScript** — strictly maintaining every file under the 2,000-line limit.
- **Real-Time Form Validation Engine**: Enforces official `@bmu.edu.in` university email domain, 10-digit Indian mobile validation, live visual tooltips, and shake animations on errors.
- **Vector SVG QR Code Generator**: Deterministic client-side 21x21 QR code synthesis generating unique contactless digital passes (`BMU-2026-XXXX`).
- **Interactive Venue Scanner Simulator**: Realistic checkpoint scanner simulation with sound synthesized dynamically via the Web Audio API.
- **Multi-Tier Local JSON Persistence**: Immediate syncing with `localStorage`, instant 1-click & auto `.json` Blob downloads, File System Access API support (`showSaveFilePicker`), and an interactive in-app JSON Data Vault.

---

## Contributors & Team Roles

This project was built collaboratively by:

| Contributor | GitHub Profile | Branch | Feature Area |
| :--- | :--- | :--- | :--- |
| **Kankanampati Chandrasekhar Gopi** (Lead) | [@kankanampatichandrasekhargopi25cse-ai](https://github.com/kankanampatichandrasekhargopi25cse-ai) | `chandrasekhar-workspace` | Core App Architecture, SPA Navigation Router, Responsive UI System |
| **Naman Kumar Yadav** | [@NAMAN123924](https://github.com/NAMAN123924) | `naman-workspace` | Campus Events Directory, Society Directory & Dynamic Club Profiles |
| **Uddeshya Dwivedi** | [@uddeshyadwivedi55-commits](https://github.com/uddeshyadwivedi55-commits) | `uddeshya-workspace` | Real-Time Validation Engine, Pass Modal & Dynamic Vector SVG QR Pass |
| **Veerabhadra Rao** | [@VEERABHADRARAO-Cyber](https://github.com/VEERABHADRARAO-Cyber) | `veerabhadra-workspace` | Attendance Verification Scanner, Web Audio Synthesis & JSON Data Vault |
| **Bharat Gupta** | [@satyamicso](https://github.com/satyamicso) | `satyam-workspace` | Event Proposals Engine, Host Form Logic & Nexus Coordination |

---

## Project Structure

```
BMU-Orbit/
│
├── index.html              # Main dashboard application shell (11 views & modals)
├── style.css               # Complete styling, animations, responsive design
├── app.js                  # Vanilla JS SPA router, validation & storage engine
├── README.md               # Project documentation & team guide
│
├── assets/                 # Campus images, BMU branding, and club crests
│   ├── bmu-logo-white.png
│   ├── bmu-logo-dark.png
│   ├── bmu-campus.jpg
│   └── clubs/              # 20+ University society crests (.webp, .jpg)
│
└── data/                   # Physical seed JSON files
    ├── events.json         # Campus event listings & agendas
    ├── registrations.json  # Student registrations & pass IDs
    ├── attendance.json     # Check-in verification records
    └── proposals.json      # Student event hosting proposals
```

---

## How to Run Locally

No build tools, bundlers, or `npm install` required!

1. Clone the repository:
   ```bash
   git clone https://github.com/kankanampatichandrasekhargopi25cse-ai/BMU-ORBIT.git
   ```
2. Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari) or use VS Code Live Server.

---

(c) 2026 BML Munjal University — BMU ORBIT
