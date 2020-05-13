'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "3290772f06b8322cc362c4c2afb7f542",
"/": "3290772f06b8322cc362c4c2afb7f542",
"CNAME": "1474e01d67bb0da9ffe59d300d085dc0",
"main.dart.js": "1f4458bb3bf724f7b28893fb87a3cbdc",
"favicon.png": "52ccc62d7f363cc6389cbae0d81b2e98",
"icons/Icon-192.png": "ed9042c0ce1146f6a8997d0f1dabc114",
"icons/Icon-512.png": "c911759c6e701fb89b9a6a93f21f45f5",
"manifest.json": "637bf0e9e63a601243157bb3ae85a70d",
".git/ORIG_HEAD": "32e8aa756cac19fd2dcb798f1c1f38a4",
".git/config": "cc1fd7cb95e5fa0398fc46d21c0079df",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/3b/842ac3b5ec142dfaf60f379d7f214eccf407d0": "9c7aae2007db8f0af056643581ee6c51",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/b28024c00d2cd846482ee04083945f440a1b0e": "75a61522ced54d090391d9ad4f42222c",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/35/cf6dd02fe171584d4c031d6e8645f99f95b22a": "7fc1d06543c22ecc32ea9bc1725d9332",
".git/objects/58/f5ef20729dc6c1290ad95595ec3b985b7fb344": "7797a0658fb792b853d3cf9c0de364f7",
".git/objects/67/83044d989defb28d16fd466fdd7b32c2648341": "51d304d5b3f9c24572fa5e0c5ba07268",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/0b/2a0c9603f8ec1831107c59eb2463d4a1a0958f": "920e63901eb63ec0ab863d7b70b55239",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/94/7afdaec0a1d4384e87d32f99bef87b7fe571d7": "63ae4243eb8421934ec4d411df23ce27",
".git/objects/34/9a8f6222562c9fc70392ed0d89d222e4c6a4ec": "a0c5b2cb10fb1f0b759635b25cd3bb66",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/b2/90bb370128a5a27f9feda2486e8fd2f571e893": "cef6653e00e82572b20c93d7be8382a2",
".git/objects/b4/c63c7e44c1f6117c24cae15ce38dd6b883514d": "2bb2da0558f65e0e992f8417f3888581",
".git/objects/a2/aef02f07ef4ba60e3ee227d1a9292b5b0d60ba": "7bc12352c44e17898391577a7353bd9b",
".git/objects/a5/f09ca9cdb29615746a906fa4780cf378f4ce8e": "b6a59cc56e27b5b1cd4215052c008944",
".git/objects/d6/86f381eef4126d8056053a5d2c7828d58626a3": "4efabef730c71da589b2b4fdb3429f3f",
".git/objects/bc/2cd8699d033346a574f7ef176971e08bd4d7c5": "8451a0f388ab0da2b078f802cce4e9f3",
".git/objects/f4/026a18c5f02b2bada59315b64be896072630c3": "6c080410d58a919459f72786eb8b9ffa",
".git/objects/f3/b0f3748f21efbf5a5e9c414b3089a6075bdc0d": "c9a9f4c4b62f23d6568e2466d2951b24",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/e4/d36dc2ffc81d90f55db9f98860d6779a600557": "43c0bc5839bcdb499736f5912845e664",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/fe/2d73ea4bf896ada5af85088bc721aa397a6cb3": "44b654b9ef4313ee44b1b4ae612caadf",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/c8/17033ed8dff6231350f451edba4cd2ce40bbc8": "78429bebc45258c935d035772ab22d8f",
".git/objects/c1/d8af6a95235a5f342dc4c6da23cd4aa60b2655": "551e75d58b10b32308ea15cfd82795ad",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/16/1578da89263be4dcc490da154f92f6c8233a62": "8cf84273c58e150b8cb2bf500d169f79",
".git/objects/89/86e5bab77e3c20b94257b019b9f06abf747843": "a1374bf699486f79bc29ad70082b73ac",
".git/objects/73/3518ba3a20fe06a7129417e5842a08b2f05f01": "ed4e2a2b750e679eafa886d3008183a8",
".git/objects/80/ce3f881913ea63dc42f0c3b5c092ff5470e348": "c5e22e63173a452a6d0b06153a0f0458",
".git/objects/74/b38a5fdbf90650c8eabefa4272880f6f9e2b31": "9e73dbfe313ec4069ec5fb7ff1b3ca23",
".git/objects/1a/ad32c6d279c20301369a74d13a1c949c5582a4": "154cd762b6eff10c05b45fbbef8bf27e",
".git/objects/8a/8e330bd07a2899a259a6c1201559b5f526f839": "263b489f1d3b2fc471cd636ab9f7689c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/56296f7be8fd710b7a5d9e1846ca1762f5d382": "638cc412ba830837c9772a0623c7c402",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/44/fc213a591766a8c0d17e0f7af4937f9339814c": "ced68b4ea36c0f4658656bbff5bd6012",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/9a/5a9832bc9af252434afe6991c0b1baba2b516b": "1008fcf8f726a1c20f21dbadc97b4536",
".git/objects/5d/2542ccc1640a99a6393c75f8c2661cdc4e981a": "e9bc357a1516c30ad71c0dfc6137e79d",
".git/objects/91/4eb433f14a76e73b53cc428b7b38fecddb167a": "41417ba30174f70b2a06ab33acbf88fb",
".git/objects/65/15c6c051703534afe9cf9f6ff0a02d49cf0311": "1226664298a8585d3e025dc901b3e369",
".git/objects/53/cf5cf434384a10038038bff979d4eaad3ca42f": "04e808b479f69758c218807d46919fa5",
".git/objects/30/ff1b7cd27c25e883aec61af359720ea6f09dfb": "ce3204b8629e87e943b2264c4047cb73",
".git/objects/5e/7950408679cd687c6ce8b2fe17a84a29810d2d": "8d7de330746fe93557776268b3762d64",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/99/74e146d74a32d4204a6b4524da3e000640fd02": "75fb61e5156050bd26886f43d6456afa",
".git/objects/55/cfd92df65d77bf25156aaadf2117d7e604050c": "399cd44f5a1d00d35e1e0b7028d0b2dd",
".git/objects/55/03bf764b20ccbb2660d76db11af5fc77158ffe": "d2b3b0ab9ea1e9ca061cb6ab7d2737b6",
".git/objects/97/873f9cff9bd3e2712d5f562799a755d340380d": "0e3a0a4f4c9c88efb6d371d63f3189cc",
".git/objects/97/9bbe7d3d9a836b4ef975c060d55ef9057b3b81": "a4be3d3ac9e0c86f70aef5b520a5a932",
".git/objects/0f/79c5301dbf6a1d940390c1f2f6dcd0a0aff496": "415fb8d71b357940d181be15ac72bb0a",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/0a/21a2e1649ff53ed98ec334c66300cfa06b1958": "cc15d233deddd6d319ede146ba42fb00",
".git/objects/a7/93d4c973251444d762b609fe88e012c5ce616a": "450e61aeef08b34b13663abcf75d3288",
".git/objects/a7/da01ba5693f697ea22d24643c8c3e4ba7a9604": "11683c62ecc1d61b6cb81ef16a8389cd",
".git/objects/b8/d2b6f58e5e80a1c7cbb74c4288b530f38fa53d": "f753e429f563a33c1d3747168512568c",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dc/95ee56bdceff35f34015e39a5cbaa57b0a4897": "42afdc0cd8257c792f4a651c000757c5",
".git/objects/b6/6d8b9d5bd6df60ff57d7f3a109a9873c628124": "ce6640ce458dbaf1b78dbe95139a0fae",
".git/objects/a9/c2d5bf2f524483d41823be73705308a040bdf8": "f60a65c2b45c6a107e22f21542582537",
".git/objects/a9/ecc385a073012b7e5ec6202446d503d6e31e07": "536f5bab6b5f0d348f7b0ea0be428de4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/f87893f5395d860d68c5f2df4039db36e20f10": "edd7caeee368a983a30597a174e00f44",
".git/objects/b9/c850ef085b67479d681af784e39357aed5a5f2": "e9b5b7648c571ae3be92f01688e3d8b3",
".git/objects/ea/eb692155e20fad7bdec696e4c3b40ca64514a8": "6f9f8303dd6d9c1784dd460959880c52",
".git/objects/cd/b749dca17ccddbe7148b2d4aa5ed5b68522979": "e4d196535ff6fbc347779e51275b3365",
".git/objects/e6/49447eea6d0b7bb6b33f90a4b221f9791ce0cd": "4dc9646dd0b311c7729d86a99bd41941",
".git/objects/f6/c09df1c6e3c8e3943719e2e46729c34b403e6b": "b7a35a6526047fbeb379ba34fa77458f",
".git/objects/e9/e94893d02e453e2863386ab74295d120858dfd": "118e3e7248b644edb105ac0141fd5f6a",
".git/objects/f1/b0c08f69d661faa7e6626a5d82ec267b293356": "7b57a4f8f0d0a0bf610e87b86b590499",
".git/objects/79/9e543c69aa9181792a13571750535f9c203dea": "90d72617171a9fee0a69baa01dceedf8",
".git/objects/48/ebfc62f8689bbf9d87520229d797e00cc6bc88": "cba5f561637a232f53cdae6f3cab6730",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/15/70452c55a9a4cd42f20e024dee0ba60285ce49": "7e879cb7ccff343508e400063eb73e2e",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/71/b5385c5547a17dc171ad2b41784c32dd3348a4": "84a4ae76c27b3af8bf72e27c96db18dc",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/49/6ee2ca6a2f08396a4076fe43dedf3dc0da8b6d": "6589e8096e1d164d9dddd885d15a514e",
".git/objects/47/1c9403378965e3b24d9d587a21fafaf029c74b": "b9cd0ec3a3eeff5b3dae7218a2dda3ec",
".git/objects/78/fa6efc502ad7dca99a425af8fb20cfc74d145c": "e34056c8beeba7a84bd19fffaa4de4f3",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/14/2dfedcfe9335cf239e451067cbe3bf9c4cce88": "c553c5e29167fb112ede555ff2027d23",
".git/objects/14/9db3ce6032a74c01dd499b7783a3a6e60d2afc": "62974410eacab0571d232a6d7f65e43c",
".git/objects/22/4af9f15fbfb3950aaffbbcf2c3a100093c19ca": "ead3a55ead409269ac2784ae42e39a8d",
".git/objects/25/41697a9768b845ab4b378da78ff5f62798b394": "0a868711557c72337c3056a879d412dd",
".git/objects/25/3f8be57980f4121547724e24e7f1bd37acfbf7": "d44fae3dc4d80c9326f351e660172f39",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3bd4915a1aa0121ea2ce6c643edde702",
".git/logs/refs/heads/master": "3bd4915a1aa0121ea2ce6c643edde702",
".git/logs/refs/remotes/origin/master": "6f535c269195ee0f0aab04f3e5dd7c35",
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
".git/refs/heads/master": "eb58452b10d4a8d12fc90b79eb4b526b",
".git/refs/remotes/origin/master": "eb58452b10d4a8d12fc90b79eb4b526b",
".git/index": "8a1e0b932d8ee47d7661c4323bc3ef5b",
".git/COMMIT_EDITMSG": "708837c1d238f0955c23a38051f5ebb7",
".git/FETCH_HEAD": "7e7e7cb50c06c418110eb6c9ebe2a483",
"assets/LICENSE": "f9c641f75b3cbdec8fb9cb520d674c9c",
"assets/images/noelli.png": "44b69233a263131460d63f6a18e8c9b8",
"assets/images/profile.jpg": "34510d2ddfc0b4e00df0b109b60f61ad",
"assets/AssetManifest.json": "2e1e7d0bbfa8a0ea17c4b99783ab2dbe",
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
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/i18n/de.json": "7814396403e55e5d1501ee031fc6804d",
"assets/i18n/en.json": "d09cb2745cacac40fd4340a15b375939",
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
