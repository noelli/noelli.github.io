'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "3290772f06b8322cc362c4c2afb7f542",
"/": "3290772f06b8322cc362c4c2afb7f542",
"main.dart.js": "087390ac757bdfb198edac946ba076d1",
"favicon.png": "52ccc62d7f363cc6389cbae0d81b2e98",
"icons/Icon-192.png": "ed9042c0ce1146f6a8997d0f1dabc114",
"icons/Icon-512.png": "c911759c6e701fb89b9a6a93f21f45f5",
"manifest.json": "637bf0e9e63a601243157bb3ae85a70d",
".git/config": "cc1fd7cb95e5fa0398fc46d21c0079df",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/b28024c00d2cd846482ee04083945f440a1b0e": "75a61522ced54d090391d9ad4f42222c",
".git/objects/67/83044d989defb28d16fd466fdd7b32c2648341": "51d304d5b3f9c24572fa5e0c5ba07268",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/73/3518ba3a20fe06a7129417e5842a08b2f05f01": "ed4e2a2b750e679eafa886d3008183a8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/99/74e146d74a32d4204a6b4524da3e000640fd02": "75fb61e5156050bd26886f43d6456afa",
".git/objects/97/9bbe7d3d9a836b4ef975c060d55ef9057b3b81": "a4be3d3ac9e0c86f70aef5b520a5a932",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0a/21a2e1649ff53ed98ec334c66300cfa06b1958": "cc15d233deddd6d319ede146ba42fb00",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/c850ef085b67479d681af784e39357aed5a5f2": "e9b5b7648c571ae3be92f01688e3d8b3",
".git/objects/e9/e94893d02e453e2863386ab74295d120858dfd": "118e3e7248b644edb105ac0141fd5f6a",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/71/b5385c5547a17dc171ad2b41784c32dd3348a4": "84a4ae76c27b3af8bf72e27c96db18dc",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1b65ec914c044a9cde9adfde363f590f",
".git/logs/refs/heads/master": "1b65ec914c044a9cde9adfde363f590f",
".git/logs/refs/remotes/origin/master": "64958958cc7172317cb2d9d2f8b71823",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "dfe91f150bc61333e2474bdb964fdce1",
".git/refs/remotes/origin/master": "dfe91f150bc61333e2474bdb964fdce1",
".git/index": "67591d3165b3193f375d47922fa357fb",
".git/COMMIT_EDITMSG": "e1d8d5ce73561805202a55f9e9fd0b65",
".git/FETCH_HEAD": "e70ac784cfb01cf5b3416494f002def6",
"assets/LICENSE": "83c4a438e0f3930fbcd7818ef2b9cf9b",
"assets/images/noelli.png": "44b69233a263131460d63f6a18e8c9b8",
"assets/images/profile.jpg": "34510d2ddfc0b4e00df0b109b60f61ad",
"assets/AssetManifest.json": "7ba9ae0a43ed8ddc28df895d52ffdf4f",
"assets/FontManifest.json": "94a2494f1e7ff74a7d0b6cf4f3d4e39d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
