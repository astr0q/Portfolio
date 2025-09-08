# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 14, featuring dynamic routing, contact form integration, and project showcases.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Dynamic Project Showcase**: Individual pages for each project
- **Interactive Contact Form**: EmailJS integration for direct messaging
- **Modern UI**: Built with Tailwind CSS and Shadcn UI
- **Performance Optimized**: Fast loading and smooth animations

## 🛠️ Tech Stack

- Next.js 14
- React
- Tailwind CSS
- EmailJS
- Shadcn UI
- React Icons

## 🚦 Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```plaintext
portfolio/
├── app/                  # Next.js app directory
│   ├── projects/        # Project pages
│   ├── contacts/        # Contact form
│   └── page.js         # Home page
├── components/          # Reusable components
├── public/             # Static assets
└── styles/            # Global styles
```

## 🔧 Configuration

- Tailwind configuration in `tailwind.config.js`
- Next.js configuration in `next.config.js`
- Email template configuration in EmailJS dashboard

## 📱 Features in Detail

- **Home Page**: Introduction and featured projects
- **Projects**: Showcase of development work
- **Contact**: Interactive form with email integration
- **Responsive Navigation**: Mobile-friendly menu
- **Animations**: Smooth transitions and hover effects

## 🚀 Deployment

This project is deployed on Vercel. For deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy!

## 👤 Author

**Kristers Kalķis**
- Phone: (+371) 28879971
- Email: kkalkis89@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
