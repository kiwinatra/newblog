# TODO: Implement Fake Authentication for Blog

## Steps to Complete
- [x] Create components/AuthModal.js: Modal with fake login/signup forms, switcher that triggers error, GO! button with pulse effect, sets localStorage on signup.
- [x] Create pages/auth.js: Dedicated auth page using the AuthModal.
- [x] Update components/DropMenu.js: Change "Sign In (Disabled)" to "Sign In" linking to /auth.
- [x] Remove 'Auth' from data/headerNavLinks.js (not in navbar).
- [x] Revert changes to ScrollTopAndComment.js and comments/index.js (remove auth checks).
- [x] Test the auth page at http://localhost:3000/auth and the dropdown menu.
    