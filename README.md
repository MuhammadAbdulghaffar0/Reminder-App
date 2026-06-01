# Reminder App (Node.js + Kubernetes + Doker + Linux Skills)

A production-style reminder system built using **Node.js, Docker, and Kubernetes (Minikube)** that sends scheduled notifications for:
- 💧 Water intake reminders (Console-pop up)
- 🤲 Daily Duas (Console-pop up)
- 🕌 Prayer-related reminders (Console-pop up)
- 📩 Telegram Bot notifications 

---

# 🚀 Tech Stack

- Node.js
- Axios
- Docker
- Kubernetes (Minikube)
- CoreDNS
- Telegram Bot API
- VirtualBox VM environment
- Linux Troubleshooting
- HTOP & Process Managment

---

# 🏗️ Architecture

water-reminder/
│
├── app/
│   ├── app.js
│   ├── water.js
│   ├── dua.js
│   ├── telegram.js
│
├── k8s/
│   ├── deployment.yaml
│   ├── secret.yaml
│   ├── service.yaml
|   ├── configmap.yaml
│
├── docker/
│   ├── Dockerfile
│  
│
├── README.md
└── package.json

# Future Improvements
Add Prometheus + Grafana monitoring
Add retry mechanism for Telegram API
Convert to Helm chart
CI/CD pipeline with GitHub Actions
Add persistent scheduling with CronJobs
