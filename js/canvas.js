/**
 * Canvas Triangle Animation
 * 粒子三角形连线动画
 */
(function() {
  const canvas = document.getElementById('triangle-lost-in-space');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function createParticle() {
    return {
      x: random(0, canvas.width),
      y: random(0, canvas.height),
      vx: random(-0.3, 0.3),
      vy: random(-0.3, 0.3),
      size: random(1, 2.5),
      alpha: random(0.3, 0.8),
      color: random(0, 1) > 0.5 ? '0, 166, 220' : '0, 200, 255'
    };
  }
  
  function init() {
    resize();
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 12000);
    for (let i = 0; i < count; i++) {
      particles.push(createParticle());
    }
  }
  
  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0, 166, 220, ' + (0.12 * (1 - dist / 130)) + ')';
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
  
  function drawParticles() {
    particles.forEach(function(p) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + p.color + ', ' + p.alpha + ')';
      ctx.fill();
    });
  }
  
  function update() {
    particles.forEach(function(p) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    drawLines();
    drawParticles();
    animationId = requestAnimationFrame(animate);
  }
  
  window.addEventListener('resize', function() {
    resize();
  });
  
  // 隐藏加载动画
  window.addEventListener('load', function() {
    const loader = document.querySelector('.lodding-wrap');
    if (loader) {
      setTimeout(function() {
        loader.classList.add('hidden');
      }, 500);
    }
  });
  
  init();
  animate();
})();
