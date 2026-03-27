const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const list = document.querySelectorAll('.list');
const viewTitle = document.querySelector('#view-title');
const viewContent = document.querySelector('#view-content');

const views = {
  home: {
    title: 'Bienvenido al Home',
    content: `
      <article class="card span-8">
        <h3>Resumen general</h3>
        <p>Tu panel central muestra accesos rápidos, estadísticas y actividad reciente para comenzar el día.</p>
      </article>
      <article class="card span-4">
        <h3>Objetivo diario</h3>
        <p>Completar revisión visual y publicar versión premium del componente.</p>
      </article>
      <article class="card span-4"><h3>Conversión</h3><p>+18% respecto a la semana pasada.</p></article>
      <article class="card span-4"><h3>Rendimiento</h3><p>Interacciones fluidas y navegación clara.</p></article>
      <article class="card span-4"><h3>Estado</h3><p>Build estable y lista para portfolio.</p></article>
    `
  },
  about: {
    title: 'Sobre este proyecto',
    content: `
      <article class="card span-12">
        <h3>Sidebar moderno y mantenible</h3>
        <p>Este mini dashboard fue rediseñado con una identidad visual premium, estructura limpia y foco en experiencia de uso.</p>
      </article>
      <article class="card span-6">
        <h3>Stack</h3>
        <p>HTML semántico, CSS organizado y JavaScript para vistas dinámicas sin routing complejo.</p>
      </article>
      <article class="card span-6">
        <h3>Objetivo</h3>
        <p>Convertir una demo simple en una pieza realista, consistente y presentable para portfolio profesional.</p>
      </article>
    `
  },
  messages: {
    title: 'Bandeja de mensajes',
    content: `
      <article class="card span-12">
        <h3>Últimas conversaciones</h3>
        <div class="message"><div><strong>Equipo UI</strong><small> Ajusté el espaciado del sidebar.</small></div><small>Hace 5 min</small></div>
        <div class="message"><div><strong>Cliente Demo</strong><small> ¡El nuevo estilo se ve premium!</small></div><small>Hace 1 h</small></div>
        <div class="message"><div><strong>QA</strong><small> Responsive validado en móvil y tablet.</small></div><small>Ayer</small></div>
      </article>
    `
  },
  photos: {
    title: 'Galería visual',
    content: `
      <article class="card span-8">
        <h3>Previews del producto</h3>
        <div class="gallery">
          <div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </article>
      <article class="card span-4">
        <h3>Notas</h3>
        <p>Bloques visuales para representar mockups, capturas y material de presentación.</p>
      </article>
    `
  },
  settings: {
    title: 'Preferencias',
    content: `
      <article class="card span-6">
        <h3>Interfaz</h3>
        <div class="setting-row"><label>Animaciones suaves</label><span class="toggle"></span></div>
        <div class="setting-row"><label>Mostrar tooltips</label><span class="toggle"></span></div>
        <div class="setting-row"><label>Compactar menú</label><span class="toggle"></span></div>
      </article>
      <article class="card span-6">
        <h3>Cuenta</h3>
        <p>Gestiona el perfil, notificaciones y configuraciones de privacidad desde un único panel.</p>
      </article>
    `
  }
};

function renderView(viewName) {
  const selected = views[viewName] ?? views.home;
  viewTitle.textContent = selected.title;
  viewContent.innerHTML = selected.content;
}

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('open');
});

list.forEach((item) => {
  const label = item.querySelector('.text')?.textContent?.trim() || 'Menú';
  item.querySelector('.menu__button')?.setAttribute('data-tooltip', label);

  item.addEventListener('click', () => {
    list.forEach((li) => li.classList.remove('active'));
    item.classList.add('active');
    renderView(item.dataset.view);
  });
});

renderView('home');
