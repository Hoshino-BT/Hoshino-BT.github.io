'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d391b5f9371d47c8c96e0ca7fb3b252f",
"index.html": "976f2722277453b15f8eb48808e02db3",
"/": "976f2722277453b15f8eb48808e02db3",
"main.dart.js": "90b38ab50dc29545730b5f6c23ebd6e2",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "42380a29429551e900f67b48378050fa",
"assets/AssetManifest.json": "f68f42137e020b995508bc72eaaae201",
"assets/NOTICES": "b12f26b99d6a7029718df07303c42bbf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/record_windows/assets/fmedia/fmedia.conf": "2778179ad014443ad062631f63aa64d3",
"assets/packages/record_windows/assets/fmedia/fmedia.exe": "c182c407aca9486143cdeca1efda6561",
"assets/packages/record_windows/assets/fmedia/mod/libwavpack-ff.dll": "11b980ec2f5cace9af9a79ae06d601b8",
"assets/packages/record_windows/assets/fmedia/mod/direct-sound.dll": "82ffef756bf3452f2bc626347286c384",
"assets/packages/record_windows/assets/fmedia/mod/soxr.dll": "bb65510f4719e36c409be41c76c43703",
"assets/packages/record_windows/assets/fmedia/mod/mpc.dll": "f3406e69faee9d692f90e469c56e5244",
"assets/packages/record_windows/assets/fmedia/mod/libopus-ff.dll": "9c86baf6a0b97b15a0819bf5088cde5d",
"assets/packages/record_windows/assets/fmedia/mod/libALAC-ff.dll": "247ac15cecfd98b7cb3f60925065b190",
"assets/packages/record_windows/assets/fmedia/mod/alac.dll": "0bb2dc9e1b2f9e3dc886be6b6f9f4291",
"assets/packages/record_windows/assets/fmedia/mod/core.dll": "316a2def3e18b83a7abd27cf459b8a4b",
"assets/packages/record_windows/assets/fmedia/mod/libmp3lame-ff.dll": "94fc6548daa41605945c02077f4a2bb1",
"assets/packages/record_windows/assets/fmedia/mod/fmt.dll": "43a24cddd2ddd2230fd9faae0a25a176",
"assets/packages/record_windows/assets/fmedia/mod/libfdk-aac-ff.dll": "32545a83392e7c50f03899f77b7d3ad9",
"assets/packages/record_windows/assets/fmedia/mod/libFLAC-ff.dll": "729a0fe2b337a863ea1796c94fb60448",
"assets/packages/record_windows/assets/fmedia/mod/wavpack.dll": "b2d78fdaa0d7b49c63da387809cb7adf",
"assets/packages/record_windows/assets/fmedia/mod/aac.dll": "533a3cbd100c91c23861effeb3311cef",
"assets/packages/record_windows/assets/fmedia/mod/tui.dll": "83452a2335319af5dca0d21d7d95ddf3",
"assets/packages/record_windows/assets/fmedia/mod/libvorbisenc-ff.dll": "c8d21d47f9eb36a2307aabbf47dafd88",
"assets/packages/record_windows/assets/fmedia/mod/libmpc-ff.dll": "e21c0a35e22be1104c958547b14a4613",
"assets/packages/record_windows/assets/fmedia/mod/wasapi.dll": "2fe41f516406b74a64c8bce01ff8c66b",
"assets/packages/record_windows/assets/fmedia/mod/net.dll": "fdadd9de2028ea47fb1ed578c2d6c151",
"assets/packages/record_windows/assets/fmedia/mod/dynanorm.dll": "4aa0ca48fdefab0e9f569cc1509498bc",
"assets/packages/record_windows/assets/fmedia/mod/opus.dll": "75e43c640374a983bea5be943fe59d81",
"assets/packages/record_windows/assets/fmedia/mod/afilter.dll": "96482458dc4d2e85490c8af8eccb4e36",
"assets/packages/record_windows/assets/fmedia/mod/plist.dll": "30ba22d6ad7e89605b92f16a41cd7abc",
"assets/packages/record_windows/assets/fmedia/mod/libMAC-ff.dll": "37d50336ae42fd8e17a95244aa096af1",
"assets/packages/record_windows/assets/fmedia/mod/libmpg123-ff.dll": "2ba538e38058894e4bd465ab522f9dbe",
"assets/packages/record_windows/assets/fmedia/mod/libDynamicAudioNormalizer-ff.dll": "f553893afa563f6fb07f7e0ce6b8a4ee",
"assets/packages/record_windows/assets/fmedia/mod/vorbis.dll": "7521fd59e33d9b60ad6edde94743ed46",
"assets/packages/record_windows/assets/fmedia/mod/libvorbis-ff.dll": "bca4ba9389bf4ecf17edc5b4054efc03",
"assets/packages/record_windows/assets/fmedia/mod/libogg-ff.dll": "6070f38352adf081864211bfde5dc9f9",
"assets/packages/record_windows/assets/fmedia/mod/libsoxr-ff.dll": "7b684353fd4e0c32d219b064a24056f3",
"assets/packages/record_windows/assets/fmedia/mod/flac.dll": "563e9d5f3edd4d52981c7be36e0b1abe",
"assets/packages/record_windows/assets/fmedia/mod/ape.dll": "707bc4ace999e04d34239c641559d213",
"assets/packages/record_windows/assets/fmedia/mod/mpeg.dll": "e9271482004fd5bb17a47573fa3c1086",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
