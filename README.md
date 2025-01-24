🚀 Expo React Native Boilerplate made by Artem Redia

This repository serves as a boilerplate for an Expo Bare Workflow app, designed for team collaboration with best practices in code quality, automation, and modularity.

It includes essential developer tools, pre-configured integrations, and a structured architecture to accelerate development.

    ✅ Expo Bare Workflow – Fully customizable native code while keeping Expo benefits
    ✅ GitHub Actions – Automates:
        🔹 ESLint & TypeScript checks
        🔹 Unit tests
        🔹 APK build on each MR for QA verification
    ✅ Jest Support – Pre-configured for unit and integration testing
    ✅ ESLint + Prettier – Pre-configured for consistent code formatting
    ✅ Pre-commit Hooks – Runs linting, code formatting before commits
    ✅ TypeScript Support – Fully typed for better developer experience including aliases for cleaner imports
    ✅ Authentication Flow – Includes the mocked sign in screen
    ✅ Navigation set up - Includes modal and tab bar navigators using Expo Router
    ✅ Full theming support - Light & Dark Mode built using styled components
    ✅ Internationalization (i18n) - Several languages available out of the box
    ✅ Core UI Components
    ✅ Horizontal mode support
    ✅ State Management – Configured with Redux & MMKV for persisted fast storage
    ✅ Mock Native Modules – Sample modules for Expo builds

Extra features:

    ✅ Custom scrollbar for FlatList with theming support
    ✅ Input with interactive labels for an enhanced user experience

📦 Installation

```
git clone https://github.com/RediaUa/redia.expo-boilerplate.git
cd redia.expo-boilerplate
npm install # Install dependencies
npx pod-install  # Installs CocoaPods dependencies
```

🚀 Run the app

Use the following commands to run the app on your desired platform:

```
npm run ios      # Run the app on iOS
npm run android  # Run the app on Android
```

Using Expo Go

```
npm run start
```

Use the credentials `Guest / Guest` to sign in

![result](https://github.com/user-attachments/assets/d3e98039-7619-424f-9e4c-d5e7f7b3c0d0)
