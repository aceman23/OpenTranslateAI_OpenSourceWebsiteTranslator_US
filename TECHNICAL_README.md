# Technical Documentation - Open-Source Translation Widget

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Deployment Options](#deployment-options)
- [LibreTranslate Setup](#libretranslate-setup)
- [Framework Integration](#framework-integration)
- [CDN Distribution](#cdn-distribution)
- [Production Optimization](#production-optimization)
- [API Configuration](#api-configuration)
- [Advanced Usage](#advanced-usage)

---

## Architecture Overview

### Core Components

```
┌─────────────────────────────────────────┐
│         Translation Widget UI            │
│  (React/Vue/Angular/Vanilla JS)          │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│       Translation Service Layer          │
│  - API Communication                     │
│  - Caching Strategy                      │
│  - Batch Processing                      │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         DOM Translator                   │
│  - TreeWalker DOM Traversal              │
│  - Text Node Extraction                  │
│  - Content Replacement                   │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│      LibreTranslate API                  │
│  (Self-hosted or Public Instance)        │
└─────────────────────────────────────────┘
```

### Technology Stack

- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS 3+
- **Icons**: Lucide React
- **Build Tool**: Vite 5+
- **Translation API**: LibreTranslate (Python/Flask)
- **Optional Backend**: Supabase (Edge Functions, Database)

---

## Deployment Options

### 1. Vercel Deployment

#### Automatic Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

#### Configuration (`vercel.json`)

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/standalone-widget.html",
      "dest": "/standalone-widget.html"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "env": {
    "VITE_LIBRETRANSLATE_URL": "@libretranslate-url",
    "VITE_LIBRETRANSLATE_API_KEY": "@libretranslate-api-key"
  }
}
```

#### Environment Variables Setup

```bash
# Add secrets
vercel env add VITE_LIBRETRANSLATE_URL
vercel env add VITE_LIBRETRANSLATE_API_KEY

# Or use .env.production
cat > .env.production << EOF
VITE_LIBRETRANSLATE_URL=https://your-libretranslate-instance.com/translate
VITE_LIBRETRANSLATE_API_KEY=your_api_key
EOF
```

---

### 2. Netlify Deployment

#### Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

#### Configuration (`netlify.toml`)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

#### Environment Variables

```bash
# Set via CLI
netlify env:set VITE_LIBRETRANSLATE_URL "https://your-instance.com/translate"
netlify env:set VITE_LIBRETRANSLATE_API_KEY "your_key"

# Or via Netlify UI: Site settings > Environment variables
```

---

### 3. AWS S3 + CloudFront

#### Build and Upload

```bash
# Build project
npm run build

# Install AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Configure AWS
aws configure

# Create S3 bucket
aws s3 mb s3://translation-widget --region us-east-1

# Enable static website hosting
aws s3 website s3://translation-widget \
  --index-document index.html \
  --error-document index.html

# Upload build
aws s3 sync dist/ s3://translation-widget --delete

# Set public read access
aws s3api put-bucket-policy \
  --bucket translation-widget \
  --policy file://bucket-policy.json
```

#### Bucket Policy (`bucket-policy.json`)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::translation-widget/*"
    }
  ]
}
```

#### CloudFront Distribution

```bash
# Create CloudFront distribution
aws cloudfront create-distribution \
  --origin-domain-name translation-widget.s3.amazonaws.com \
  --default-root-object index.html
```

#### CloudFront Configuration (JSON)

```json
{
  "DistributionConfig": {
    "CallerReference": "translation-widget-v1",
    "DefaultRootObject": "index.html",
    "Origins": {
      "Quantity": 1,
      "Items": [
        {
          "Id": "S3-translation-widget",
          "DomainName": "translation-widget.s3.amazonaws.com",
          "S3OriginConfig": {
            "OriginAccessIdentity": ""
          }
        }
      ]
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": "S3-translation-widget",
      "ViewerProtocolPolicy": "redirect-to-https",
      "Compress": true,
      "MinTTL": 0,
      "DefaultTTL": 86400,
      "MaxTTL": 31536000
    },
    "CustomErrorResponses": {
      "Quantity": 1,
      "Items": [
        {
          "ErrorCode": 404,
          "ResponsePagePath": "/index.html",
          "ResponseCode": "200",
          "ErrorCachingMinTTL": 300
        }
      ]
    },
    "Enabled": true
  }
}
```

---

### 4. Google Cloud Platform (GCP)

#### App Engine Deployment

```bash
# Install gcloud CLI
curl https://sdk.cloud.google.com | bash

# Initialize
gcloud init

# Create app.yaml
cat > app.yaml << EOF
runtime: nodejs20

handlers:
  - url: /assets
    static_dir: dist/assets
    secure: always

  - url: /.*
    static_files: dist/index.html
    upload: dist/index.html
    secure: always

env_variables:
  VITE_LIBRETRANSLATE_URL: "https://your-instance.com/translate"
EOF

# Build and deploy
npm run build
gcloud app deploy
```

#### Cloud Storage + Cloud CDN

```bash
# Create bucket
gsutil mb gs://translation-widget

# Enable website configuration
gsutil web set -m index.html -e index.html gs://translation-widget

# Upload build
gsutil -m rsync -r -d dist/ gs://translation-widget

# Make public
gsutil iam ch allUsers:objectViewer gs://translation-widget

# Create load balancer (for HTTPS/CDN)
gcloud compute backend-buckets create translation-widget-backend \
  --gcs-bucket-name=translation-widget \
  --enable-cdn
```

---

### 5. Azure Static Web Apps

#### Azure CLI Deployment

```bash
# Install Azure CLI
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# Login
az login

# Create resource group
az group create --name translation-widget-rg --location eastus

# Create static web app
az staticwebapp create \
  --name translation-widget \
  --resource-group translation-widget-rg \
  --location eastus

# Build
npm run build

# Deploy
az staticwebapp deploy \
  --name translation-widget \
  --resource-group translation-widget-rg \
  --app-location dist
```

#### Configuration (`staticwebapp.config.json`)

```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/*.{css,scss,js,json,xml,txt,ico,png,jpg,jpeg,gif,svg,woff,woff2,ttf,eot}"]
  },
  "mimeTypes": {
    ".json": "application/json",
    ".woff": "font/woff",
    ".woff2": "font/woff2"
  },
  "globalHeaders": {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY"
  },
  "routes": [
    {
      "route": "/assets/*",
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    }
  ]
}
```

---

### 6. Docker Containerization

#### Multi-Stage Dockerfile

```dockerfile
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source
COPY . .

# Build application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### Nginx Configuration (`nginx.conf`)

```nginx
events {
  worker_connections 1024;
}

http {
  include /etc/nginx/mime.types;
  default_type application/octet-stream;

  sendfile on;
  keepalive_timeout 65;
  gzip on;
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

  server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Cache static assets
    location /assets/ {
      expires 1y;
      add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
      try_files $uri $uri/ /index.html;
    }

    # Standalone widget
    location /standalone-widget.html {
      try_files $uri =404;
    }
  }
}
```

#### Docker Compose with LibreTranslate

```yaml
version: '3.8'

services:
  # Translation Widget Frontend
  translation-widget:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "80:80"
    environment:
      - VITE_LIBRETRANSLATE_URL=http://libretranslate:5000/translate
    depends_on:
      - libretranslate
    networks:
      - translation-network
    restart: unless-stopped

  # LibreTranslate API
  libretranslate:
    image: libretranslate/libretranslate:latest
    ports:
      - "5000:5000"
    environment:
      - LT_LOAD_ONLY=en,zh,es,fr,de,ja,ko,ar,hi,pt
      - LT_THREADS=4
      - LT_API_KEYS=true
      - LT_API_KEYS_DB_PATH=/app/db/api_keys.db
    volumes:
      - libretranslate-data:/app/db
    networks:
      - translation-network
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:5000/"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Nginx Reverse Proxy (Optional)
  nginx-proxy:
    image: nginx:alpine
    ports:
      - "443:443"
    volumes:
      - ./nginx-proxy.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - translation-widget
      - libretranslate
    networks:
      - translation-network
    restart: unless-stopped

volumes:
  libretranslate-data:

networks:
  translation-network:
    driver: bridge
```

#### Build and Run

```bash
# Build image
docker build -t translation-widget .

# Run container
docker run -d -p 80:80 --name translation-widget translation-widget

# Or use docker-compose
docker-compose up -d

# View logs
docker logs -f translation-widget

# Scale LibreTranslate instances
docker-compose up -d --scale libretranslate=3
```

---

### 7. Kubernetes Deployment

#### Kubernetes Manifests

**deployment.yaml**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: translation-widget
  labels:
    app: translation-widget
spec:
  replicas: 3
  selector:
    matchLabels:
      app: translation-widget
  template:
    metadata:
      labels:
        app: translation-widget
    spec:
      containers:
      - name: translation-widget
        image: your-registry/translation-widget:latest
        ports:
        - containerPort: 80
        env:
        - name: VITE_LIBRETRANSLATE_URL
          valueFrom:
            configMapKeyRef:
              name: translation-config
              key: libretranslate-url
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"
        livenessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: translation-widget-service
spec:
  selector:
    app: translation-widget
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: LoadBalancer
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: translation-config
data:
  libretranslate-url: "http://libretranslate-service:5000/translate"
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: libretranslate
spec:
  replicas: 2
  selector:
    matchLabels:
      app: libretranslate
  template:
    metadata:
      labels:
        app: libretranslate
    spec:
      containers:
      - name: libretranslate
        image: libretranslate/libretranslate:latest
        ports:
        - containerPort: 5000
        env:
        - name: LT_LOAD_ONLY
          value: "en,zh,es,fr,de,ja,ko,ar,hi,pt"
        - name: LT_THREADS
          value: "4"
        resources:
          requests:
            memory: "2Gi"
            cpu: "1000m"
          limits:
            memory: "4Gi"
            cpu: "2000m"
---
apiVersion: v1
kind: Service
metadata:
  name: libretranslate-service
spec:
  selector:
    app: libretranslate
  ports:
  - protocol: TCP
    port: 5000
    targetPort: 5000
  type: ClusterIP
```

#### Ingress Configuration

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: translation-widget-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  tls:
  - hosts:
    - translate.example.com
    secretName: translation-widget-tls
  rules:
  - host: translate.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: translation-widget-service
            port:
              number: 80
```

#### Deploy to Kubernetes

```bash
# Apply configurations
kubectl apply -f deployment.yaml
kubectl apply -f ingress.yaml

# Scale deployment
kubectl scale deployment translation-widget --replicas=5

# Update image
kubectl set image deployment/translation-widget \
  translation-widget=your-registry/translation-widget:v2

# View status
kubectl get pods
kubectl get services
kubectl logs -f deployment/translation-widget
```

---

## LibreTranslate Setup

### 1. Self-Hosted Docker (Production)

```bash
# Basic setup
docker run -ti --rm -p 5000:5000 libretranslate/libretranslate

# Production setup with specific languages
docker run -d \
  --name libretranslate \
  -p 5000:5000 \
  -e LT_LOAD_ONLY=en,zh,es,fr,de,ja,ko,ar,hi,pt \
  -e LT_THREADS=4 \
  -e LT_API_KEYS=true \
  -e LT_API_KEYS_DB_PATH=/app/db/api_keys.db \
  -e LT_REQ_LIMIT=100 \
  -e LT_BATCH_LIMIT=10 \
  -e LT_CHAR_LIMIT=5000 \
  -v libretranslate-data:/app/db \
  --restart unless-stopped \
  libretranslate/libretranslate:latest

# Generate API key
docker exec libretranslate ./venv/bin/ltmanage keys add
```

### 2. Self-Hosted with Ngrok (Development)

```bash
# Start LibreTranslate
docker run -d -p 5000:5000 libretranslate/libretranslate

# Install ngrok
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | \
  sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && \
  echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | \
  sudo tee /etc/apt/sources.list.d/ngrok.list && \
  sudo apt update && sudo apt install ngrok

# Expose to internet
ngrok http 5000

# Use the ngrok URL in your widget
# VITE_LIBRETRANSLATE_URL=https://abc123.ngrok.io/translate
```

### 3. Kubernetes Deployment (Production Scale)

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: libretranslate-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: libretranslate
spec:
  serviceName: libretranslate
  replicas: 3
  selector:
    matchLabels:
      app: libretranslate
  template:
    metadata:
      labels:
        app: libretranslate
    spec:
      containers:
      - name: libretranslate
        image: libretranslate/libretranslate:latest
        ports:
        - containerPort: 5000
        env:
        - name: LT_LOAD_ONLY
          value: "en,zh,es,fr,de,ja,ko,ar,hi,pt"
        - name: LT_THREADS
          value: "4"
        - name: LT_API_KEYS
          value: "true"
        volumeMounts:
        - name: libretranslate-storage
          mountPath: /app/db
  volumeClaimTemplates:
  - metadata:
      name: libretranslate-storage
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 10Gi
```

### 4. AWS EC2 Installation

```bash
# SSH into EC2 instance
ssh -i your-key.pem ec2-user@your-instance-ip

# Install Docker
sudo yum update -y
sudo yum install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user

# Run LibreTranslate
docker run -d \
  --name libretranslate \
  -p 5000:5000 \
  -e LT_LOAD_ONLY=en,zh,es,fr,de,ja,ko \
  --restart always \
  libretranslate/libretranslate:latest

# Setup nginx reverse proxy
sudo yum install nginx -y
sudo nano /etc/nginx/nginx.conf
```

**Nginx config for LibreTranslate:**

```nginx
server {
    listen 80;
    server_name translate.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 5. DigitalOcean Droplet

```bash
# Create droplet via CLI
doctl compute droplet create libretranslate \
  --image ubuntu-22-04-x64 \
  --size s-2vcpu-4gb \
  --region nyc3 \
  --ssh-keys your-ssh-key-id

# SSH into droplet
ssh root@droplet-ip

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Create docker-compose.yml
cat > docker-compose.yml << EOF
version: '3.8'
services:
  libretranslate:
    image: libretranslate/libretranslate:latest
    ports:
      - "5000:5000"
    environment:
      - LT_LOAD_ONLY=en,zh,es,fr,de,ja,ko
      - LT_THREADS=4
    volumes:
      - ./data:/app/db
    restart: always
EOF

# Start service
docker-compose up -d
```

---

## Framework Integration

### React Integration

```tsx
// src/hooks/useTranslation.ts
import { useState, useEffect } from 'react';
import { TranslationService } from '../services/translation';
import { DOMTranslator } from '../services/domTranslator';

export function useTranslation(
  targetElementId: string,
  defaultLang: string = 'en',
  apiConfig?: { apiUrl?: string; apiKey?: string }
) {
  const [currentLang, setCurrentLang] = useState(defaultLang);
  const [isTranslating, setIsTranslating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [translator, setTranslator] = useState<DOMTranslator | null>(null);

  useEffect(() => {
    const service = new TranslationService(apiConfig);
    const domTranslator = new DOMTranslator(service, defaultLang);

    const element = document.getElementById(targetElementId);
    if (element) {
      domTranslator.initialize(element);
    }

    setTranslator(domTranslator);
  }, [targetElementId, defaultLang, apiConfig]);

  const translateTo = async (targetLang: string) => {
    if (!translator || isTranslating) return;

    setIsTranslating(true);
    try {
      await translator.translateTo(targetLang, setProgress);
      setCurrentLang(targetLang);
    } finally {
      setIsTranslating(false);
      setProgress(0);
    }
  };

  return { currentLang, isTranslating, progress, translateTo };
}
```

### Vue 3 Integration

```vue
<!-- TranslationWidget.vue -->
<template>
  <div class="translation-widget">
    <button @click="toggleDropdown" :disabled="isTranslating">
      <Globe :size="16" />
      {{ currentLanguage.nativeName }}
    </button>

    <div v-if="showDropdown" class="dropdown">
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="translateTo(lang.code)"
        :class="{ active: currentLang === lang.code }"
      >
        {{ lang.nativeName }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { Globe } from 'lucide-vue-next';
import { TranslationService } from '../services/translation';
import { DOMTranslator } from '../services/domTranslator';

interface Props {
  defaultLang?: string;
  apiUrl?: string;
  apiKey?: string;
  targetElementId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  defaultLang: 'en',
  targetElementId: 'app'
});

const languages = [
  { code: 'zh', nativeName: '中文' },
  { code: 'en', nativeName: 'English' },
  { code: 'es', nativeName: 'Español' }
];

const currentLang = ref(props.defaultLang);
const isTranslating = ref(false);
const showDropdown = ref(false);
const translator = ref<DOMTranslator | null>(null);

const currentLanguage = computed(() =>
  languages.find(l => l.code === currentLang.value) || languages[0]
);

onMounted(() => {
  const service = new TranslationService({
    apiUrl: props.apiUrl,
    apiKey: props.apiKey
  });

  const domTranslator = new DOMTranslator(service, props.defaultLang);
  const element = document.getElementById(props.targetElementId);

  if (element) {
    domTranslator.initialize(element);
  }

  translator.value = domTranslator;
});

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const translateTo = async (lang: string) => {
  if (!translator.value || isTranslating.value) return;

  isTranslating.value = true;
  showDropdown.value = false;

  try {
    await translator.value.translateTo(lang);
    currentLang.value = lang;
  } finally {
    isTranslating.value = false;
  }
};
</script>
```

### Angular Integration

```typescript
// translation-widget.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { DOMTranslator } from '../services/dom-translator.service';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

@Component({
  selector: 'app-translation-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './translation-widget.component.html',
  styleUrls: ['./translation-widget.component.css']
})
export class TranslationWidgetComponent implements OnInit {
  @Input() defaultLang: string = 'en';
  @Input() apiUrl?: string;
  @Input() apiKey?: string;
  @Input() targetElementId: string = 'content';

  languages: Language[] = [
    { code: 'zh', name: 'Chinese', nativeName: '中文' },
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' }
  ];

  currentLang: string = 'en';
  isTranslating: boolean = false;
  showDropdown: boolean = false;
  private translator?: DOMTranslator;

  constructor(
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.currentLang = this.defaultLang;
    this.initializeTranslator();
  }

  private initializeTranslator() {
    this.translator = new DOMTranslator(
      this.translationService,
      this.defaultLang
    );

    const element = document.getElementById(this.targetElementId);
    if (element) {
      this.translator.initialize(element);
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  async translateTo(langCode: string) {
    if (!this.translator || this.isTranslating) return;

    this.isTranslating = true;
    this.showDropdown = false;

    try {
      await this.translator.translateTo(langCode);
      this.currentLang = langCode;
    } finally {
      this.isTranslating = false;
    }
  }

  getCurrentLanguage(): Language {
    return this.languages.find(l => l.code === this.currentLang)
      || this.languages[0];
  }
}
```

### Svelte Integration

```svelte
<!-- TranslationWidget.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { Globe } from 'lucide-svelte';
  import { TranslationService } from '../services/translation';
  import { DOMTranslator } from '../services/domTranslator';

  export let defaultLang: string = 'en';
  export let apiUrl: string | undefined = undefined;
  export let apiKey: string | undefined = undefined;
  export let targetElementId: string = 'content';

  const languages = [
    { code: 'zh', nativeName: '中文' },
    { code: 'en', nativeName: 'English' },
    { code: 'es', nativeName: 'Español' }
  ];

  let currentLang = defaultLang;
  let isTranslating = false;
  let showDropdown = false;
  let translator: DOMTranslator | null = null;

  $: currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  onMount(() => {
    const service = new TranslationService({ apiUrl, apiKey });
    translator = new DOMTranslator(service, defaultLang);

    const element = document.getElementById(targetElementId);
    if (element) {
      translator.initialize(element);
    }
  });

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  async function translateTo(lang: string) {
    if (!translator || isTranslating) return;

    isTranslating = true;
    showDropdown = false;

    try {
      await translator.translateTo(lang);
      currentLang = lang;
    } finally {
      isTranslating = false;
    }
  }
</script>

<div class="translation-widget">
  <button on:click={toggleDropdown} disabled={isTranslating}>
    <Globe size={16} />
    {currentLanguage.nativeName}
  </button>

  {#if showDropdown}
    <div class="dropdown">
      {#each languages as lang}
        <button
          on:click={() => translateTo(lang.code)}
          class:active={currentLang === lang.code}
        >
          {lang.nativeName}
        </button>
      {/each}
    </div>
  {/if}
</div>
```

### Vanilla JavaScript (No Framework)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Translation Widget</title>
</head>
<body>
  <div id="translation-widget"></div>
  <div id="content">
    <!-- Your content here -->
  </div>

  <script type="module">
    // Translation Service
    class TranslationService {
      constructor(config = {}) {
        this.apiUrl = config.apiUrl || 'https://libretranslate.com/translate';
        this.apiKey = config.apiKey;
        this.cache = {};
      }

      async translate(text, source, target) {
        const key = `${source}-${target}-${text}`;
        if (this.cache[key]) return this.cache[key];

        const response = await fetch(this.apiUrl, {
          method: 'POST',
          body: JSON.stringify({
            q: text,
            source,
            target,
            format: 'text',
            api_key: this.apiKey
          }),
          headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();
        this.cache[key] = data.translatedText;
        return data.translatedText;
      }
    }

    // DOM Translator
    class DOMTranslator {
      constructor(service, originalLang) {
        this.service = service;
        this.originalLang = originalLang;
        this.currentLang = originalLang;
        this.textNodes = [];
      }

      initialize(root) {
        this.extractTextNodes(root);
      }

      extractTextNodes(root) {
        const walker = document.createTreeWalker(
          root,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode: (node) => {
              if (node.parentElement.hasAttribute('data-no-translate')) {
                return NodeFilter.FILTER_REJECT;
              }
              return node.textContent.trim() ?
                NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            }
          }
        );

        let node;
        while (node = walker.nextNode()) {
          this.textNodes.push({
            node,
            originalText: node.textContent
          });
        }
      }

      async translateTo(targetLang, onProgress) {
        if (targetLang === this.originalLang) {
          this.textNodes.forEach(n => n.node.textContent = n.originalText);
          this.currentLang = this.originalLang;
          return;
        }

        const batchSize = 10;
        for (let i = 0; i < this.textNodes.length; i += batchSize) {
          const batch = this.textNodes.slice(i, i + batchSize);
          await Promise.all(batch.map(async (nodeData) => {
            const translated = await this.service.translate(
              nodeData.originalText,
              this.originalLang,
              targetLang
            );
            nodeData.node.textContent = translated;
          }));

          if (onProgress) {
            onProgress((i + batchSize) / this.textNodes.length * 100);
          }
        }

        this.currentLang = targetLang;
      }
    }

    // Initialize widget
    const service = new TranslationService();
    const translator = new DOMTranslator(service, 'zh');
    translator.initialize(document.getElementById('content'));

    // Create UI
    const widget = document.getElementById('translation-widget');
    widget.innerHTML = `
      <select id="lang-select">
        <option value="zh">中文</option>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    `;

    document.getElementById('lang-select').addEventListener('change', async (e) => {
      await translator.translateTo(e.target.value);
    });
  </script>
</body>
</html>
```

---

## CDN Distribution

### NPM Package Publishing

```bash
# Package for npm
npm login
npm publish --access public

# Or use package registries
npm config set registry https://registry.npmjs.org/
```

**package.json for publishing:**

```json
{
  "name": "@yourorg/translation-widget",
  "version": "1.0.0",
  "description": "Open-source translation widget powered by LibreTranslate",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "README.md"
  ],
  "keywords": [
    "translation",
    "i18n",
    "libretranslate",
    "react",
    "widget"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/yourorg/translation-widget"
  },
  "license": "MIT"
}
```

### CDN via jsDelivr

After publishing to npm, your package is automatically available:

```html
<!-- Latest version -->
<script src="https://cdn.jsdelivr.net/npm/@yourorg/translation-widget/dist/standalone.min.js"></script>

<!-- Specific version -->
<script src="https://cdn.jsdelivr.net/npm/@yourorg/translation-widget@1.0.0/dist/standalone.min.js"></script>

<!-- Usage -->
<script>
  TranslationWidget.init({
    defaultLang: 'zh',
    targetElementId: 'content',
    apiUrl: 'https://your-libretranslate.com/translate'
  });
</script>
```

### CDN via unpkg

```html
<script src="https://unpkg.com/@yourorg/translation-widget"></script>
```

### Self-Hosted CDN

```bash
# Build for CDN
npm run build

# Upload to your CDN
aws s3 sync dist/ s3://your-cdn-bucket/translation-widget/v1/ \
  --cache-control "max-age=31536000"

# Or use your preferred CDN
```

---

## Production Optimization

### Performance Optimization

```typescript
// Lazy loading translation service
const TranslationWidget = lazy(() =>
  import('./components/TranslationWidget')
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TranslationWidget />
    </Suspense>
  );
}
```

### Caching Strategy

```typescript
// Advanced caching with IndexedDB
class IndexedDBCache {
  private dbName = 'translation-cache';
  private storeName = 'translations';
  private db: IDBDatabase | null = null;

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        db.createObjectStore(this.storeName);
      };
    });
  }

  async get(key: string): Promise<string | null> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.get(key);

      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }

  async set(key: string, value: string): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.put(value, key);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
}
```

### Build Optimization

**vite.config.ts:**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'brotliCompress' })
  ],
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'translation': ['./src/services/translation', './src/services/domTranslator']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
```

### Monitoring & Analytics

```typescript
// Add monitoring
class TranslationMonitor {
  private analytics: any;

  trackTranslation(from: string, to: string, wordCount: number) {
    // Google Analytics
    gtag('event', 'translation', {
      from_lang: from,
      to_lang: to,
      word_count: wordCount
    });

    // Custom endpoint
    fetch('/api/analytics/translation', {
      method: 'POST',
      body: JSON.stringify({ from, to, wordCount, timestamp: Date.now() })
    });
  }

  trackError(error: Error, context: any) {
    // Sentry or similar
    Sentry.captureException(error, { extra: context });
  }
}
```

---

## API Configuration

### Environment Variables

```bash
# .env.production
VITE_LIBRETRANSLATE_URL=https://translate.yourdomain.com/translate
VITE_LIBRETRANSLATE_API_KEY=your_production_api_key
VITE_CACHE_DURATION=3600000
VITE_BATCH_SIZE=10
VITE_REQUEST_TIMEOUT=30000
```

### Runtime Configuration

```typescript
// config.ts
export const config = {
  translation: {
    apiUrl: import.meta.env.VITE_LIBRETRANSLATE_URL,
    apiKey: import.meta.env.VITE_LIBRETRANSLATE_API_KEY,
    timeout: parseInt(import.meta.env.VITE_REQUEST_TIMEOUT) || 30000,
    batchSize: parseInt(import.meta.env.VITE_BATCH_SIZE) || 10,
    cacheDuration: parseInt(import.meta.env.VITE_CACHE_DURATION) || 3600000
  }
};
```

---

## Advanced Usage

### Multi-Instance Support

```typescript
// Multiple translators on same page
const contentTranslator = new DOMTranslator(service, 'zh');
contentTranslator.initialize(document.getElementById('main-content'));

const sidebarTranslator = new DOMTranslator(service, 'zh');
sidebarTranslator.initialize(document.getElementById('sidebar'));

// Translate both
await Promise.all([
  contentTranslator.translateTo('en'),
  sidebarTranslator.translateTo('en')
]);
```

### Custom Language Detection

```typescript
// Auto-detect user language
function detectUserLanguage(): string {
  const browserLang = navigator.language.split('-')[0];
  const supportedLangs = ['zh', 'en', 'es', 'fr', 'de', 'ja', 'ko'];
  return supportedLangs.includes(browserLang) ? browserLang : 'en';
}

<TranslationWidget defaultLang={detectUserLanguage()} />
```

### Webhooks for Translation Events

```typescript
// Server-side webhook handler (Node.js/Express)
app.post('/webhooks/translation', async (req, res) => {
  const { fromLang, toLang, wordCount, userId } = req.body;

  // Log to database
  await db.translations.insert({
    userId,
    fromLang,
    toLang,
    wordCount,
    timestamp: new Date()
  });

  // Trigger analytics
  await analytics.track('translation_completed', {
    fromLang,
    toLang,
    wordCount
  });

  res.json({ success: true });
});
```

---

## License

MIT License - Free for personal and commercial use

---

## Support

- GitHub Issues: https://github.com/yourorg/translation-widget/issues
- Documentation: https://docs.yourdomain.com
- Community: https://discord.gg/yourinvite
