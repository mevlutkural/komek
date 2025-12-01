import { ref } from "vue";

const isDark = ref(false);

export function useDarkMode() {
  function toggleDarkMode() {
    isDark.value = !isDark.value;
  }

  return {
    isDark,
    toggleDarkMode,
  };
}
