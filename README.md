# Todo DevOps App

Application Todo List avec chaîne DevOps complète.

## Stack technique
- Backend: Node.js + Express
- CI: GitHub Actions + SonarCloud + Trivy
- CD: ArgoCD + Kubernetes (Minikube)
- Monitoring: Prometheus + Grafana

## Architecture
GitHub → GitHub Actions → Docker Hub → ArgoCD → Kubernetes

## Lancer localement
```bash
npm install
npm start
```

## Lancer les tests
```bash
npm test
```

## Pipeline CI
- Tests automatiques
- Analyse qualité SonarCloud
- Scan sécurité Trivy
- Push image Docker Hub
