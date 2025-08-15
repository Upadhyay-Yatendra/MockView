# MockView 🚀

**MockView** is a platform designed to help users prepare for interviews and assessments through AI-powered mock tests. With features like AI feedback, report generation, and efficient test management, MockView ensures a seamless experience while leveraging modern technology for scalability and performance.

---

## 🌟 Features
- **AI Mock Tests**: Take mock tests tailored to your role, tech stack, and experience level.
- **AI Feedback**: Receive detailed feedback, including ratings, to improve performance.
- **Test Reports**: Generate and download test reports in PDF format.
- **Pagination & Sorting**: Easily browse and manage test history.

---

## 🛠️ Tech Stack
- **Frontend**: Next.js
- **Backend**: Node.js (for heavy tasks and integrations)
- **Database**: PostgreSQL (via NeonDB and Drizzle-ORM)
- **Authentication**: Clerk
- **Caching**: Redis (for performance optimization and rate limiting)
- **Queue Management**: BullMQ (for handling intensive tasks)

---

## 📈 Key Contributions
1. **AI Mock Test System**: Developed a generator with AI feedback, ratings, and detailed test reports, featuring pagination and sorting for managing test histories.
2. **PDF & Email Service**:
   - Built a robust PDF generation system using **PDFKit**.
   - Implemented email notifications with **Nodemailer**.
   - Designed the system to handle 1000+ requests per minute with 99.9% uptime, reducing server load by **40%** and improving response times by **50%**.
3. **Performance Optimization**:
   - Used Redis to cache frequently accessed interviews, reducing access time from **2s to 60ms**.
   - Implemented rate limiting to prevent spamming and optimize resource usage.

---

## ⚙️ How It Works
1. **Take a Test**: Choose your role, tech stack, and experience level to generate an AI-powered mock test.
2. **Get Feedback**: AI evaluates your performance and provides actionable feedback with a score.
3. **Download Reports**: Generate and download professional-grade PDF reports summarizing your test results.

---

## 🏗️ Project Setup
### Prerequisites
- **Node.js**: Ensure Node.js is installed on your system.
- **Redis**: Set up a Redis instance for caching and rate limiting.
- **Database**: Configure PostgreSQL (NeonDB) and run migrations with Drizzle-ORM.

### Steps to Run
1. Clone the repository:

   git clone https://github.com/Upadhyay-Yatendra/MockView

   cd MockView
   
### Install dependencies:

npm install

### Set up environment variables:

Configure .env file with database, Redis, and email credentials.

### Start the application:

npm run dev

Access the application at http://localhost:3000.

## Testing credentials
   Use these credentials for the testing purpose
   
Email : themastermafia955@gmail.com
Password : Passtheword12345@

## Screenshots

## Screenshots  

<p align="center">
  <img src="https://raw.githubusercontent.com/Upadhyay-Yatendra/MockView/main/public/screenshots/MockView1.png" width="500" />
  <br/><br/>
  <img src="https://raw.githubusercontent.com/Upadhyay-Yatendra/MockView/main/public/screenshots/MockView2.png" width="500" />
  <br/><br/>
  <img src="https://raw.githubusercontent.com/Upadhyay-Yatendra/MockView/main/public/screenshots/MockView3.png" width="500" />
  <br/><br/>
  <img src="https://raw.githubusercontent.com/Upadhyay-Yatendra/MockView/main/public/screenshots/MockView4.png" width="500" />
  <br/><br/>
  <img src="https://raw.githubusercontent.com/Upadhyay-Yatendra/MockView/main/public/screenshots/MockView5.png" width="500" />
</p>


###🚀 Future Improvements
   
   Integration of advanced AI models for better feedback.
    
   Multi-language support for broader reach.
    
   Enhanced visualization of test reports.

    
💻 Contributors
Yatendra , Aryan 

Happy Testing! 🎯

