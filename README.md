# Blog app for Test micro services

- impliment services with micro services architecture (evnet-bus handle communication between client, comment, post, and moderation serve)
- use MERN stack
- Docker for impliment services ([ Docker Desktop](https://www.docker.com/products/docker-desktop/) on Windows 11)
- Kubernetes for manage Containers [ (Minikube) ](https://minikube.sigs.k8s.io/docs/)
- impliment deployments and services [ (/infra/k8s/*) ](https://github.com/kavishkamk/blog/tree/main/infra/k8s)
- set NodePort for post service for development [ (/infra/k8s/post-srv.yaml) ](https://github.com/kavishkamk/blog/blob/main/infra/k8s/post-srv.yaml)
- set Cluster IP for commnication between pods [ (/infra/k8s/*) ](https://github.com/kavishkamk/blog/tree/main/infra/k8s)
- set Loadbalancer using [ "Ingress-Nginx" ](https://github.com/kubernetes/ingress-nginx)
- use [ dockerhub ](https://hub.docker.com/) to handle images
- [ Skaffold ](https://skaffold.dev/) for automate development process [ (./skaffold.yaml) ](https://github.com/kavishkamk/blog/blob/main/skaffold.yaml)

<img src="https://github.com/kavishkamk/blog/blob/main/images/ArchitectureDiagram.png" alt="Alt text" title="Architecture Diagram">