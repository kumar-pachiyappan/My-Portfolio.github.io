# API Contracts & Integration Plan
## Kumar Pachiyappan's Cybersecurity Portfolio

---

## Current State: Frontend with Mock Data ✅

All frontend components are built and functional with mock data from `/frontend/src/data/mock.js`

### Sections Implemented:
1. **Hero** - Profile image, name, title, social links, resume download
2. **About** - Summary + modal with full bio and education
3. **Experience** - Professional + Virtual experience cards with modals
4. **Certifications** - Carousel with certificate images and details
5. **Projects** - Grid cards with detailed modals (tools, outcomes, GitHub links)
6. **Upskill** - Progress tracking cards with status badges
7. **Blog** - Article cards with modals for full content
8. **Contact** - Form + skills showcase
9. **Admin Login** - Authentication page (mock credentials)
10. **Admin Dashboard** - Management interface placeholder

---

## Firebase Integration Requirements

### 1. Firebase Configuration

**File**: `/frontend/src/firebase/config.js`

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAO3KuDhQatqASjSX-d_qF_-aNLNkcw6G4",
  authDomain: "studio-7421079405-90b41.firebaseapp.com",
  projectId: "studio-7421079405-90b41",
  storageBucket: "studio-7421079405-90b41.firebasestorage.app",
  messagingSenderId: "539940879449",
  appId: "1:539940879449:web:d7d14626e545fcf1510548"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

---

### 2. Firestore Collections Structure

#### Collection: `profile`
- Document ID: `main`
- Fields:
  - name (string)
  - title (string)
  - tagline (string)
  - location (string)
  - contact (string)
  - email (string)
  - profileImage (string - Storage URL)
  - resumeUrl (string - Storage URL)
  - social (object): { linkedin, github, twitter }

#### Collection: `about`
- Document ID: `main`
- Fields:
  - summary (string)
  - fullBio (string)
  - education (array of objects): [{ degree, institution, period, details }]

#### Collection: `experience`
- Auto-generated document IDs
- Fields:
  - type (string): "professional" | "virtual"
  - company (string)
  - role (string)
  - project (string)
  - period (string)
  - location (string)
  - summary (string)
  - details (array of strings)
  - tools (array of strings)
  - order (number) - for sorting

#### Collection: `certifications`
- Auto-generated document IDs
- Fields:
  - name (string)
  - issuer (string)
  - code (string)
  - date (string)
  - image (string - Storage URL)
  - credentialUrl (string)
  - order (number)

#### Collection: `projects`
- Auto-generated document IDs
- Fields:
  - title (string)
  - category (string)
  - description (string)
  - image (string - Storage URL)
  - details (array of strings)
  - tools (array of strings)
  - outcomes (string)
  - githubUrl (string)
  - demoUrl (string)
  - order (number)

#### Collection: `upskill`
- Auto-generated document IDs
- Fields:
  - title (string)
  - category (string)
  - status (string): "In Progress" | "Active" | "Planned"
  - progress (number): 0-100
  - description (string)
  - estimatedCompletion (string)
  - order (number)

#### Collection: `blog`
- Auto-generated document IDs
- Fields:
  - title (string)
  - excerpt (string)
  - author (string)
  - date (string)
  - readTime (string)
  - category (string)
  - image (string - Storage URL)
  - content (string - full markdown/text)
  - published (boolean)
  - order (number)

#### Collection: `skills`
- Document ID: `main`
- Fields:
  - cybersecurity (array of strings)
  - networking (array of strings)
  - tools (array of strings)
  - programming (array of strings)

---

### 3. Firebase Storage Structure

```
/uploads
  /profile
    - profile-image.jpg
    - resume.pdf
  /certifications
    - cert-1.jpg
    - cert-2.jpg
    - cert-3.jpg
  /projects
    - project-1.jpg
    - project-2.jpg
    - ...
  /blog
    - blog-1.jpg
    - blog-2.jpg
    - ...
```

---

### 4. Backend API Endpoints (FastAPI)

#### Profile Management
- `GET /api/profile` - Get profile data
- `PUT /api/profile` - Update profile data
- `POST /api/profile/upload-image` - Upload profile image
- `POST /api/profile/upload-resume` - Upload resume

#### About Section
- `GET /api/about` - Get about data
- `PUT /api/about` - Update about data

#### Experience Management
- `GET /api/experience` - Get all experience entries
- `POST /api/experience` - Create new experience
- `PUT /api/experience/{id}` - Update experience
- `DELETE /api/experience/{id}` - Delete experience

#### Certifications Management
- `GET /api/certifications` - Get all certifications
- `POST /api/certifications` - Create new certification
- `POST /api/certifications/upload` - Upload certificate image
- `PUT /api/certifications/{id}` - Update certification
- `DELETE /api/certifications/{id}` - Delete certification

#### Projects Management
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `POST /api/projects/upload` - Upload project image
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

#### Upskill Management
- `GET /api/upskill` - Get all upskill items
- `POST /api/upskill` - Create new upskill item
- `PUT /api/upskill/{id}` - Update upskill progress
- `DELETE /api/upskill/{id}` - Delete upskill item

#### Blog Management
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/{id}` - Get single blog post
- `POST /api/blog` - Create new blog post
- `POST /api/blog/upload` - Upload blog image
- `PUT /api/blog/{id}` - Update blog post
- `DELETE /api/blog/{id}` - Delete blog post

#### Skills Management
- `GET /api/skills` - Get all skills
- `PUT /api/skills` - Update skills

#### Contact Form
- `POST /api/contact` - Submit contact form (store in Firestore + send email)

#### Authentication
- `POST /api/auth/login` - Admin login via Firebase Auth
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/verify` - Verify admin token

---

### 5. Frontend Integration Steps

#### Phase 1: Firebase Setup
1. Create Firebase config file
2. Set up authentication context
3. Create custom hooks for Firestore operations
4. Create upload utilities for Storage

#### Phase 2: Replace Mock Data
1. Update Hero to fetch from Firestore
2. Update About section
3. Update Experience section
4. Update Certifications section
5. Update Projects section
6. Update Upskill section
7. Update Blog section
8. Update Contact form to submit to Firestore
9. Update Skills display

#### Phase 3: Admin Dashboard
1. Implement Firebase Authentication
2. Create protected routes
3. Build CRUD forms for each section
4. Implement file upload for images/resume
5. Add live preview functionality
6. Add success/error notifications

---

### 6. Mock Data Locations

**Current Mock File**: `/frontend/src/data/mock.js`

**Mock Data Exported:**
- `profileData` → Firebase: `profile/main`
- `aboutData` → Firebase: `about/main`
- `experienceData` → Firebase: `experience` collection
- `certificationsData` → Firebase: `certifications` collection
- `projectsData` → Firebase: `projects` collection
- `upskillData` → Firebase: `upskill` collection
- `blogData` → Firebase: `blog` collection
- `skillsData` → Firebase: `skills/main`

---

### 7. Integration Priority

**High Priority** (Core functionality):
1. Profile & About (read-only)
2. Experience (read-only)
3. Projects (read-only)
4. Contact form (write)

**Medium Priority** (Admin features):
5. Admin authentication
6. Profile editing
7. Experience CRUD
8. Projects CRUD
9. Image uploads

**Low Priority** (Nice to have):
10. Blog CRUD
11. Certifications CRUD
12. Upskill CRUD
13. Skills editing

---

### 8. Security Considerations

1. **Firestore Rules**: Restrict write access to authenticated admins only
2. **Storage Rules**: Restrict uploads to authenticated admins
3. **API Authentication**: Verify Firebase tokens in backend
4. **Environment Variables**: Store Firebase config in .env (frontend)
5. **CORS**: Configure backend to accept requests from GitHub Pages domain

---

### 9. Deployment Checklist

**Frontend (GitHub Pages)**:
- [ ] Build React app: `yarn build`
- [ ] Configure `homepage` in package.json
- [ ] Deploy to GitHub Pages
- [ ] Configure custom domain (optional)

**Backend (Not needed for Firebase)**:
- Firebase handles all backend operations
- No FastAPI backend required for basic portfolio
- FastAPI can be added later for contact form emails

**Firebase**:
- [ ] Set up Firestore database
- [ ] Configure security rules
- [ ] Set up Firebase Storage
- [ ] Enable Firebase Authentication (Email/Password)
- [ ] Add admin user

---

### 10. Testing Plan

**Frontend**:
- [ ] Test all sections load correctly
- [ ] Test responsive design (mobile/tablet/desktop)
- [ ] Test modal interactions
- [ ] Test form validation
- [ ] Test navigation and smooth scrolling
- [ ] Test admin login/logout
- [ ] Test image uploads
- [ ] Test live preview

**Backend**:
- [ ] Test Firestore read operations
- [ ] Test Firestore write operations
- [ ] Test file uploads to Storage
- [ ] Test authentication flow
- [ ] Test error handling

---

## Next Steps

1. ✅ **Frontend with mock data** - COMPLETE
2. 🔄 **Firebase setup** - Ready to implement
3. ⏳ **Backend integration** - Pending
4. ⏳ **Admin dashboard functionality** - Pending
5. ⏳ **Deployment** - Pending

---

## Notes

- All mock data is comprehensive and ready for Firebase migration
- Frontend UI is complete and fully functional
- Admin dashboard structure is in place
- Firebase credentials are provided
- Ready for backend integration phase
