Phase 1: Backend & Auth Cleanup
✅ Check Existing Code

 User signup route: make sure it handles duplicates and required fields

 Login route: make sure it validates email/password correctly

 Password hashing: confirm bcrypt hashing and comparison works

 JWT: check your token generation works and matches secret

 JWT verification middleware: ensure you can attach req.user for protected routes

🛠 Next Tasks

Finish JWT middleware to verify tokens and extract user ID

Update protected routes to use JWT (e.g., CreateListing)

Fix user deletion route to ensure only admin or owner can delete

Centralize error handling for all user routes

💾 Checkpoint for GitHub

Commit: backend/auth-complete

Includes: signup, login, password hashing, JWT middleware, error handling

Phase 2: Listings
✅ Check Existing Code

 Listing schema: check required fields (title, description, price, owner, images)

 Listing creation route: confirm owner is from JWT, not req.body.id

 Database integration: check you are using .create() or .save() to store listings

🛠 Next Tasks

Finish CreateListing route with JWT owner assignment

Implement GET all listings route

Implement GET listing by ID route

Optional: add update/delete listing routes

Test all routes with Postman

💾 Checkpoint for GitHub

Commit: backend/listings-core

Includes: CRUD routes for listings, JWT ownership, database integration

Phase 3: Image Handling
✅ Check Existing Code

 Multer setup: check memory storage

 HandleImages service: make sure it returns public URL

 Listing creation: verify images are stored in Supabase and URLs saved in DB

🛠 Next Tasks

Connect Multer to CreateListing route

Pass req.file to HandleImages service

Ensure image validation (file type, size)

Store Supabase URL in listing DB

Test uploading images via Postman

💾 Checkpoint for GitHub

Commit: backend/image-upload

Includes: Multer integration, HandleImages service, image URL stored in DB

Phase 4: Backend Testing & Cleanup
🛠 Tasks

Test all routes with Postman (signup, login, listings CRUD, image upload)

Add centralized error handling middleware

Ensure all responses are consistent JSON

Optional: add logging for debugging

💾 Checkpoint for GitHub

Commit: backend-tested-clean

Includes: fully tested backend, consistent API responses

Phase 5: Frontend (React)

(Once backend is solid)

🛠 Tasks

React setup: Home, Login, Signup, Listings pages

Auth flow: login → JWT stored → protected routes

CreateListing page: form with image upload

Display listings: fetch from backend, show images

Optional: search/filter listings

💾 Checkpoint for GitHub

Commit: frontend-basic

Includes: React setup, authentication, listing display, create listing form
