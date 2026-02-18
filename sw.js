const CACHE_NAME = 'my-app-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['./index.html']);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
```

#### ④ 아이콘 파일

- `icon-192.png` (192×192 px)
- `icon-512.png` (512×512 px)

원하는 앱 아이콘 이미지를 이 이름으로 저장소에 업로드합니다.

---

### Step 3: 배포 확인

GitHub Pages가 활성화되면 아래 주소로 접속됩니다:
```
https://[GitHub유저명].github.io/my-pwa-app/
