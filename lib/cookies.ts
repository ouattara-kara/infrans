// Fonction pour définir un cookie
export function setCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return; // Ne rien faire côté serveur
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Fonction pour récupérer un cookie
export function getCookie(name: string): string {
  if (typeof document === "undefined") return ""; // Ne rien faire côté serveur
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return "";
}

// Fonction pour supprimer un cookie
export function eraseCookie(name: string) {
  if (typeof document === "undefined") return; // Ne rien faire côté serveur
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
