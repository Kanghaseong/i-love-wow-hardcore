"use client";

export default function Refresh() {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <li onClick={reloadPage}>
      <span class="material-symbols-outlined">refresh</span>Refresh
    </li>
  );
}
