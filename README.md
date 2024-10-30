# Student Tools

A modern web application providing a suite of free tools for students, built with Next.js 13+ and styled with Tailwind CSS.

## 🌟 Features

### Image Resizer

- Upload and resize images while maintaining quality
- Maintain aspect ratio option
- Common size presets (Instagram, Twitter, etc.)
- Preview before download
- Supports JPG, PNG, and WebP formats

### Image Comparator

- Side-by-side image comparison with interactive slider
- Horizontal and vertical comparison modes
- Drag and drop image upload
- Real-time preview
- Smooth transitions and animations

### Bio Maker

- Multiple bio templates (Professional, Creative, Minimal, Student)
- Real-time preview
- Character count for different platforms
- One-click copying
- Emoji support
- Platform-specific length validation

### Resume Builder

- Multiple professional templates
- Section-based editing (Personal Info, Education, Experience, Skills)
- Real-time preview
- PDF export functionality
- ATS-friendly formats
- Save and edit functionality

## 🎨 Design

The application features a modern, attractive UI with:

- Primary Color: `#3B134E` (Dark Purple)
- Accent Color: `#F5CE48` (Gold)
- Text Color: `#FFFFFF` (White)

Design elements include:

- Glass-morphism effects
- Gradient backgrounds
- Interactive hover states
- Smooth animations
- Responsive layout
- Dark mode optimization

## 🛠️ Technology Stack

- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Rendering**: Server-Side Rendering (SSR)
- **Security**: Custom security headers
- **Performance**: Optimized assets and lazy loading

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/kundan175/student-toolkit
cd student-tools
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   └── tools/                  # Tool components
│       ├── image-resizer/
│       ├── image-comparator/
│       ├── bio-maker/
│       └── resume-builder/
├── components/                 # Shared components
└── styles/                    # Additional styles
```

## 🔒 Security Features

- CSP (Content Security Policy) headers
- X-Frame-Options protection
- XSS protection
- CSRF protection
- Secure cookie handling
- Rate limiting
- Input validation

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors who have helped with the project

## 📞 Contact

For any questions or suggestions, please open an issue in the repository.
