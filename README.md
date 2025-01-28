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
git clone https://github.com/Pavanikoduru/Multi-service-devops-task.git
cd devops-task

Build and start the application:
docker-compose up --build

Access the services in the browser:
Frontend: http://localhost:3000
Backend: http://localhost:4000
Python Service: http://localhost:5000

Pushing Docker Images to Docker Hub
1) Login to Docker Hub: docker login
2) Tag the images:
   docker tag multi-service-devops-task_frontend:latest pavanikoduru22/frontend:latest
   docker tag multi-service-devops-task_backend:latest pavanikoduru22/backend:latest
   docker tag multi-service-devops-task_python-service:latest pavanikoduru22/python-service:latest
3) Push the images:
   docker push pavanikoduru22/frontend:latest
   docker push pavanikoduru22/backend:latest
   docker push pavanikoduru22/python-service:latest
4) Verify the images on Docker Hub: https://hub.docker.com/repositories/pavanikoduru22
