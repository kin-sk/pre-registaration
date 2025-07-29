# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the Next.js development server on localhost:3000
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Project Architecture

This is a **dental clinic booking system** built with Next.js 15, TypeScript, Chakra UI, and Firebase. The system allows patients to book appointments online and enables administrators to manage bookings.

### Key Technologies
- **Next.js 15** with App Router for frontend/backend
- **TypeScript** for type safety
- **Chakra UI** for component library
- **Firebase** for authentication, Firestore database, and hosting
- **ESLint** with Next.js configuration for code quality

### Directory Structure
- `src/app/` - Next.js App Router with public and admin routes
- `src/app/admin/` - Admin dashboard routes (requires authentication)
- `src/components/` - Reusable React components
- `src/service/` - Firebase configuration and service functions
- `src/lib/firebase/` - Firebase helper functions
- `src/templates/` - Template components
- `src/views/` - View components

### Database Schema (Firebase Firestore)
The application uses the following Firestore collections:
- `shopSettings` - Clinic settings (singleton document with id: `main`)
- `menus` - Treatment options with pricing and duration
- `users` - Patient information (document ID = Firebase Auth UID)
- `bookings` - Appointment data with pickup service support

### Key Features
- **Patient booking system** with calendar availability
- **Pickup service requests** during booking (`needsPickup` field)
- **Admin dashboard** for managing appointments and settings
- **Firebase Authentication** for admin access
- **Responsive design** with Chakra UI components

### Import Aliases
- `@/*` - Maps to `./src/*` for clean import paths

### Firebase Configuration
- Environment variables required for Firebase connection (see `src/service/firebase.ts`)
- Firestore rules and indexes configured in `firestore.rules` and `firestore.indexes.json`
- Firebase project located in `asia-northeast2` region

### Development Workflow
- Feature branches follow `feature/issue-number-name` pattern
- Conventional Commits specification for commit messages
- Issue-driven development with GitHub Issues