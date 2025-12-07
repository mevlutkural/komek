<script setup lang="ts">
import { ref } from "vue";

const tweetText = ref("");
const tweets = ref([
  {
    id: 1,
    author: "Ahmet Yılmaz",
    username: "@ahmetyilmaz",
    avatar: "👨‍💼",
    content: "Vue 3 ve Tailwind CSS ile harika projeler geliştiriyorum! 🚀",
    time: "2s",
    likes: 42,
    retweets: 8,
    replies: 3,
  },
  {
    id: 2,
    author: "Ayşe Demir",
    username: "@aysedemir",
    avatar: "👩‍💻",
    content:
      "TypeScript kullanmak kod kalitesini gerçekten artırıyor. Herkese tavsiye ederim! 💯",
    time: "5dk",
    likes: 128,
    retweets: 24,
    replies: 15,
  },
  {
    id: 3,
    author: "Mehmet Kaya",
    username: "@mehmetkaya",
    avatar: "🧑‍🎨",
    content:
      "Yeni tasarımımız nasıl olmuş? Geri bildirimlerinizi bekliyorum! ✨",
    time: "15dk",
    likes: 89,
    retweets: 12,
    replies: 7,
  },
]);

const trends = ref([
  { topic: "#VueJS", tweets: "12.5B" },
  { topic: "#TailwindCSS", tweets: "8.2B" },
  { topic: "#TypeScript", tweets: "15.3B" },
  { topic: "#WebDevelopment", tweets: "22.1B" },
]);

const suggestedUsers = ref([
  {
    id: 1,
    name: "Zeynep Arslan",
    username: "@zeyneparslan",
    avatar: "👩‍🔬",
    bio: "Full Stack Developer",
  },
  {
    id: 2,
    name: "Can Öztürk",
    username: "@canozturk",
    avatar: "👨‍💻",
    bio: "UI/UX Designer",
  },
  {
    id: 3,
    name: "Elif Yıldız",
    username: "@elifyildiz",
    avatar: "👩‍🎨",
    bio: "Product Manager",
  },
]);

const postTweet = () => {
  if (tweetText.value.trim()) {
    tweets.value.unshift({
      id: Date.now(),
      author: "Sen",
      username: "@kullanici",
      avatar: "😊",
      content: tweetText.value,
      time: "şimdi",
      likes: 0,
      retweets: 0,
      replies: 0,
    });
    tweetText.value = "";
  }
};
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <div class="max-w-7xl mx-auto flex">
      <!-- Sol Sidebar - Navigasyon -->
      <aside class="w-64 h-screen sticky top-0 p-4 border-r border-gray-800">
        <div class="flex flex-col gap-2">
          <div class="text-3xl mb-4 px-3">𝕏</div>

          <button
            class="flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-900 transition-colors text-xl"
          >
            <span>🏠</span>
            <span class="font-bold">Ana Sayfa</span>
          </button>

          <button
            class="flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-900 transition-colors text-xl"
          >
            <span>🔍</span>
            <span>Keşfet</span>
          </button>

          <button
            class="flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-900 transition-colors text-xl"
          >
            <span>🔔</span>
            <span>Bildirimler</span>
          </button>

          <button
            class="flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-900 transition-colors text-xl"
          >
            <span>✉️</span>
            <span>Mesajlar</span>
          </button>

          <button
            class="flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-900 transition-colors text-xl"
          >
            <span>👤</span>
            <span>Profil</span>
          </button>

          <button
            class="bg-blue-500 text-white font-bold py-3 px-8 rounded-full mt-4 hover:bg-blue-600 transition-colors text-lg"
          >
            Gönder
          </button>
        </div>
      </aside>

      <!-- Orta - Ana İçerik -->
      <main class="flex-1 border-r border-gray-800 max-w-2xl">
        <!-- Başlık -->
        <div
          class="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4"
        >
          <h1 class="text-xl font-bold">Ana Sayfa</h1>
        </div>

        <!-- Tweet Oluştur -->
        <div class="border-b border-gray-800 p-4">
          <div class="flex gap-3">
            <div class="text-4xl">😊</div>
            <div class="flex-1">
              <textarea
                v-model="tweetText"
                placeholder="Neler oluyor?"
                class="w-full bg-transparent text-xl outline-none resize-none placeholder-gray-600"
                rows="3"
              ></textarea>
              <div
                class="flex items-center justify-between mt-3 pt-3 border-t border-gray-800"
              >
                <div class="flex gap-2 text-blue-500">
                  <button
                    class="hover:bg-blue-500/10 p-2 rounded-full transition-colors"
                  >
                    📷
                  </button>
                  <button
                    class="hover:bg-blue-500/10 p-2 rounded-full transition-colors"
                  >
                    🎬
                  </button>
                  <button
                    class="hover:bg-blue-500/10 p-2 rounded-full transition-colors"
                  >
                    📊
                  </button>
                  <button
                    class="hover:bg-blue-500/10 p-2 rounded-full transition-colors"
                  >
                    😀
                  </button>
                </div>
                <button
                  @click="postTweet"
                  :disabled="!tweetText.trim()"
                  class="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Gönder
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Tweet Listesi -->
        <div>
          <article
            v-for="tweet in tweets"
            :key="tweet.id"
            class="border-b border-gray-800 p-4 hover:bg-gray-900/50 transition-colors cursor-pointer"
          >
            <div class="flex gap-3">
              <div class="text-4xl">{{ tweet.avatar }}</div>
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <span class="font-bold hover:underline">{{
                    tweet.author
                  }}</span>
                  <span class="text-gray-500">{{ tweet.username }}</span>
                  <span class="text-gray-500">·</span>
                  <span class="text-gray-500">{{ tweet.time }}</span>
                </div>
                <p class="mt-2 text-base leading-normal">{{ tweet.content }}</p>
                <div
                  class="flex items-center justify-between mt-3 max-w-md text-gray-500"
                >
                  <button
                    class="flex items-center gap-2 hover:text-blue-500 transition-colors group"
                  >
                    <span
                      class="group-hover:bg-blue-500/10 p-2 rounded-full transition-colors"
                      >💬</span
                    >
                    <span class="text-sm">{{ tweet.replies }}</span>
                  </button>
                  <button
                    class="flex items-center gap-2 hover:text-green-500 transition-colors group"
                  >
                    <span
                      class="group-hover:bg-green-500/10 p-2 rounded-full transition-colors"
                      >🔁</span
                    >
                    <span class="text-sm">{{ tweet.retweets }}</span>
                  </button>
                  <button
                    class="flex items-center gap-2 hover:text-pink-500 transition-colors group"
                  >
                    <span
                      class="group-hover:bg-pink-500/10 p-2 rounded-full transition-colors"
                      >❤️</span
                    >
                    <span class="text-sm">{{ tweet.likes }}</span>
                  </button>
                  <button class="hover:text-blue-500 transition-colors group">
                    <span
                      class="group-hover:bg-blue-500/10 p-2 rounded-full transition-colors"
                      >📤</span
                    >
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <!-- Sağ Sidebar - Trendler -->
      <aside class="w-80 sticky top-0 p-4 hidden xl:block">
        <div class="space-y-4">
          <!-- Arama -->
          <div class="bg-gray-900 rounded-full p-3">
            <input
              type="text"
              placeholder="Ara"
              class="w-full bg-transparent text-white outline-none placeholder-gray-500"
            />
          </div>

          <!-- Gündemdekiler -->
          <div class="bg-gray-900 rounded-2xl overflow-hidden">
            <h2 class="text-xl font-bold px-4 pt-4 pb-3">Gündemdekiler</h2>
            <div
              v-for="(trend, index) in trends"
              :key="index"
              class="px-4 py-3 hover:bg-gray-800/50 transition-colors cursor-pointer"
            >
              <div class="text-gray-500 text-xs mb-0.5">Gündem</div>
              <div class="font-bold text-[15px]">{{ trend.topic }}</div>
              <div class="text-gray-500 text-xs mt-0.5">
                {{ trend.tweets }} Gönderi
              </div>
            </div>
            <button
              class="text-blue-500 hover:bg-gray-800/50 w-full text-left px-4 py-3 transition-colors text-[15px]"
            >
              Daha fazla göster
            </button>
          </div>

          <!-- Kimi Takip Etmeli -->
          <div class="bg-gray-900 rounded-2xl overflow-hidden">
            <h2 class="text-xl font-bold px-4 pt-4 pb-3">Kimi Takip Etmeli</h2>
            <div
              v-for="user in suggestedUsers"
              :key="user.id"
              class="px-4 py-3 hover:bg-gray-800/50 transition-colors"
            >
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-start gap-3 flex-1 min-w-0">
                  <div class="text-4xl flex-shrink-0">{{ user.avatar }}</div>
                  <div class="flex-1 min-w-0">
                    <div
                      class="font-bold text-[15px] hover:underline cursor-pointer truncate"
                    >
                      {{ user.name }}
                    </div>
                    <div class="text-gray-500 text-[13px] truncate">
                      {{ user.username }}
                    </div>
                  </div>
                </div>
                <button
                  class="bg-white text-black font-bold py-1.5 px-4 rounded-full hover:bg-gray-200 transition-colors text-sm flex-shrink-0"
                >
                  Takip Et
                </button>
              </div>
            </div>
            <button
              class="text-blue-500 hover:bg-gray-800/50 w-full text-left px-4 py-3 transition-colors text-[15px]"
            >
              Daha fazla göster
            </button>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
