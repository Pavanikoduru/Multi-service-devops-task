# DevOps Task: Multi-Service Application

This project is a simple example of a multi-service application with the following components:
1. **Frontend**: A web app built with Next.js.
2. **Backend**: An API built with Express.js.
3. **Python Microservice**: A service built with FastAPI.

The services are containerized with Docker and managed using Docker Compose.

---

## How to Set It Up

### Step 1: Install the Required Tools

Make sure you have these tools installed:
- **Docker**
- **Docker Compose**
- **Git**

If you're on Ubuntu, you can install them like this:
1. Update your system:
   sudo apt update && sudo apt upgrade -y
Install Docker:
sudo apt install -y docker.io

Start Docker and enable it to run at startup:
sudo systemctl start docker
sudo systemctl enable docker

Install Docker Compose:
sudo apt install -y docker-compose

Install Git:
sudo apt install -y git

Step 2: Clone the Project and Run It
Download the project:
git clone https://github.com/YourUsername/devops-task.git
cd devops-task

Build and start the application:
docker-compose up --build

