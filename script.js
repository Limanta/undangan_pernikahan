
  document.addEventListener("DOMContentLoaded", () => {
    const bar = document.getElementById('bar');
    const percentText = document.getElementById('progress-percent');
    const preloadScreen = document.getElementById('preload');
    const mainContent = document.getElementById('mainContent');

    // Loading bar
    let percent = 0;
    const loading = setInterval(() => {
      percent++;
      if (bar) bar.style.width = `${percent}%`;
      if (percentText) percentText.innerText = `${percent}%`;
      if (percent >= 100) {
        clearInterval(loading);
        if (preloadScreen) preloadScreen.classList.add('fade-out');
        setTimeout(() => {
          if (preloadScreen) preloadScreen.style.display = 'none';
          if (mainContent) mainContent.style.display = 'block';
        }, 1000);
      }
    }, 30);

    // Scroll reveal setup
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.scroll-section').forEach(section => {
      observer.observe(section);
    });

    startCountdown();
  });

  // Fungsi untuk menampilkan undangan
  function showInvitation() {
    const initialContent = document.getElementById('initialContent');
    const invitationContent = document.getElementById('invitationContent');

    if (initialContent) initialContent.style.display = 'none';
    if (invitationContent) invitationContent.style.display = 'block';

    document.querySelectorAll('.scroll-section').forEach(section => {
      observer.observe(section);
    });
  }

  // Countdown timer
  function startCountdown() {
    const targetDate = new Date("2025-06-23T06:00:00").getTime();
    const countdownTimer = document.getElementById('countdownTimer');

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (countdownTimer) {
        countdownTimer.innerHTML = `
          <div>${days} <span>Hari</span></div>
          <div>${hours} <span>Jam</span></div>
          <div>${minutes} <span>Menit</span></div>
          <div>${seconds} <span>Detik</span></div>
        `;
      }
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Fungsi untuk menyimpan acara ke kalender Google
  function saveToCalendar() {
    const title = encodeURIComponent("Pernikahan mas Fuad & Andrianna");
    const location = encodeURIComponent("Gedung Pernikahan, Medan, Indonesia");
    const details = encodeURIComponent("Kami mengundang Anda untuk hadir dalam acara pernikahan kami.");
    const startDate = "20250623T060000Z";
    const endDate = "20250623T090000Z";
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}&sf=true&output=xml`;

    window.open(calendarUrl, '_blank');
  }

  // Fungsi untuk toggle akordeon
  function toggleAccordion(id) {
    const content = document.getElementById(id);
    if (!content) return;

    const isVisible = content.style.display === 'block';

    document.querySelectorAll('.accordion-content').forEach(c => {
      c.style.display = 'none';
    });

    content.style.display = isVisible ? 'none' : 'block';
  }



  const audio = document.getElementById("customAudio");
  function toggleAudio() {
    if (audio.paused) {
         audio.play();
    } 
    else {
         audio.pause();
         }
  }
