

### **🌍 EcoBuddy - Your Gateway to a Greener Future**  

![EcoBuddy GIF](https://media.giphy.com/media/26BGD4XaoPO3zTz9K/giphy.gif)  

🌱 **EcoBuddy** is a smart, all-in-one platform that helps you find and access environment-friendly resources effortlessly. Whether it’s **EV charging stations**, **community gardens**, **wildlife parks**, or **eco-friendly event spaces**, EcoBuddy connects you with sustainable options in just a few clicks.  

> **Empower a greener lifestyle, one resource at a time.**  

---

## **📖 Overview**  
As the world shifts toward sustainability, finding and utilizing eco-friendly resources should be easier. **EcoBuddy** simplifies this by offering:  
✅ **Real-time locations** of EV charging stations, parks, gardens, and more.  
✅ **User-friendly search** with Google Maps integration.  
✅ **Secure authentication** using Google OAuth 2.0.  
✅ **Community-driven features** like reviews and event scheduling.
👉 Flash Messaging for real-time success/error alerts.

💡 Whether you're an **EV owner, a nature enthusiast, an event planner, or a fitness lover**, EcoBuddy is here to help you **embrace an eco-conscious lifestyle effortlessly**.  

---

## **🚀 Key Features**  

### **🌿 Discover & Access Sustainable Resources**  
- 🔋 **EV Charging Stations** – Find nearby electric vehicle charging points with real-time availability.  
- 🌱 **Community Gardens** – Join urban gardening initiatives and contribute to green spaces.  
- 🏀 **Eco-Friendly Sports Complexes** – Stay fit while reducing environmental impact.  
- 🐾 **Wildlife Parks & Green Zones** – Locate nature reserves and biodiversity hotspots.  
- 🏛 **Event Venues** – Reserve sustainable halls and eco-conscious event spaces.  

### **⚡ Smart & Secure Platform**  
- 🔐 **Google OAuth 2.0 Authentication** – Hassle-free, secure login.  
- 📍 **Google Maps API Integration** – Location-based search for seamless navigation.  
- 🛠 **Multer for File Uploads** – Share images and documents related to listings.  
- 📝 **User Reviews & Ratings** – Contribute feedback to improve resource listings.  
- 📊 **Admin Dashboard** – Track user engagement and resource utilization.  

---

## **🛠 Technology Stack**  

| **Category**      | **Technologies Used** |
|-------------------|----------------------|
| 🌐 **Frontend**  | HTML, CSS, Bootstrap, JavaScript, EJS |
| 🔥 **Backend**  | Node.js, Express.js |
| 🛢 **Database**  | MongoDB (Mongoose ORM) |
| 🔑 **Authentication**  | Google OAuth 2.0, Passport.js |
| 📍 **APIs**  | Google Maps API, RESTful API |
| 📂 **File Uploads**  | Multer (image/doc uploads) |
| 🔒 **Session Management**  | Cookies & Flash Tokens |
| 🚀 **Deployment**  | Vercel / Heroku / DigitalOcean |
| 🔄 **Version Control**  | Git & GitHub |

---

## **📂 Project File Structure**  

```
EcoBuddy/
├── public/                # Static assets (CSS, images)
│   ├── assets/
│   ├── styles/
│   ├── images/
├── src/
│   ├── controllers/       
│   │   ├── listingsController.js
│   │   ├── reviewController.js
│   │   └── navigationController.js
│   ├── middlewares/       
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   ├── models/             # MongoDB Schemas
│   │   ├── User.js
│   │   ├── Listing.js
│   │   ├── Review.js
│   ├── routes/             # API route handlers
│   │   ├── listingsRouter.js
│   │   ├── reviewRouter.js
│   │   ├── userRouter.js
│   
│   │   
│   │  
│   ├── views/              # EJS Templates
│   │   ├── layout.ejs
│   │   ├── index.ejs
│   │   ├── dashboard.ejs
│   ├── config/             # Configuration files
│   │   ├── database.js
│   │   ├── passport.js
│   ├── app.js              # Main Express.js application
├── .env                    # Environment variables
├── package.json            # Dependencies & scripts
├── README.md               # Project documentation
```

---

## **🛠 How to Install & Run Locally**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/NandKumarSahu/EcoBuddy.git
```

### **2️⃣ Navigate to the Project Directory**  
```bash
cd EcoBuddy
```

### **3️⃣ Install Dependencies**  
```bash
npm install
```

### **4️⃣ Set Up Environment Variables**  
Create a `.env` file and add:  
```env
DATABASE_URL=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
API_KEY=your_google_maps_api_key
```

### **5️⃣ Start the Application**  
```bash
npx nodemon app.js
```

### **6️⃣ Open in Browser**  
Go to: `http://localhost:8080`

---

## **💡 Use Cases**  

🚗 **For EV Owners** → Quickly locate available **charging stations**.  
🌳 **For Nature Enthusiasts** → Discover **parks, sanctuaries, and green spaces**.  
🏋️ **For Fitness Lovers** → Find **eco-friendly sports complexes**.  
🎭 **For Event Planners** → Book **sustainable event venues**.  
🌍 **For Community Builders** → Organize and join **local sustainability events**.  

---

## **📢 How to Contribute**  

💡 **Got ideas? Found a bug?** We’d love your contributions!  
Follow these steps:  

1. **Fork the repository**  
2. **Create a new feature branch**  
   ```bash
   git checkout -b feature-name
   ```
3. **Commit changes**  
   ```bash
   git commit -m "Add feature XYZ"
   ```
4. **Push to GitHub**  
   ```bash
   git push origin feature-name
   ```
5. **Submit a Pull Request** 🚀  

---


---

## **👨‍💻 Developer & Contact**  

💬 **Questions? Need support?**  
📧 Email: [contact on email](mailto:your.shivanandvansal9520@gmail.com)  
🔗 LinkedIn: [My Profile](www.linkedin.com/in/nandkumarsahu1234)  

🌟 _Let’s make the world greener, one click at a time!_ 🌍💚  

---

## **🚀 Conclusion**  
EcoBuddy is more than an app—it's a **movement** toward sustainability. By making **eco-friendly resources** more **accessible**, we encourage people to **adopt greener choices** effortlessly.  

> 🌱 **Together, let's build a more sustainable future.** 🌍  
