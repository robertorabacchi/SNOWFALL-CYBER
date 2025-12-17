/**
 * CYBER SNOWFALL Bookmarklet - Extreme Edition
 * 2500 digital particles (✦ 0 1) on ANY website!
 * GPU-accelerated | Auto-adjusts on mobile
 * 
 * Usage: Drag bookmarklet to bookmarks bar, click on any page
 */

(function() {
  // Detect mobile for performance
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 500 : 2500;
  
  // Check if snow already exists (toggle)
  if (document.getElementById('titan-cyber-snow')) {
    document.getElementById('titan-cyber-snow').remove();
    document.getElementById('titan-cyber-styles').remove();
    return;
  }

  // Add CSS styles
  const style = document.createElement('style');
  style.id = 'titan-cyber-styles';
  style.textContent = `
    #titan-cyber-snow {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999999;
      overflow: hidden;
    }
    
    .titan-cyber-flake {
      position: absolute;
      top: -10%;
      font-size: 1.5rem;
      color: #00ff9f;
      opacity: 0.8;
      user-select: none;
      animation: titan-cyber-fall linear infinite;
      text-shadow: 0 0 5px rgba(0, 255, 159, 0.8);
      will-change: transform, opacity;
      transform: translateZ(0);
    }
    
    @keyframes titan-cyber-fall {
      0% {
        transform: translateY(0) translateX(0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 0.8;
      }
      90% {
        opacity: 0.8;
      }
      100% {
        transform: translateY(110vh) translateX(100px) rotate(360deg);
        opacity: 0;
      }
    }
    
    @media (max-width: 768px) {
      .titan-cyber-flake {
        font-size: 1.2rem;
      }
    }
  `;
  document.head.appendChild(style);

  // Create snow container
  const container = document.createElement('div');
  container.id = 'titan-cyber-snow';
  
  // Cyber shapes
  const shapes = ['✦', '0', '1'];
  
  // Generate particles
  for (let i = 0; i < particleCount; i++) {
    const flake = document.createElement('div');
    flake.className = 'titan-cyber-flake';
    flake.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    flake.style.left = Math.random() * 100 + '%';
    flake.style.animationDelay = Math.random() * 10 + 's';
    flake.style.animationDuration = (6 + Math.random() * 6) + 's';
    container.appendChild(flake);
  }
  
  document.body.appendChild(container);
  
  // Show notification
  const notification = document.createElement('div');
  notification.textContent = `⚡ CYBER SNOW ACTIVATED! ${particleCount} particles | Click again to stop`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.9);
    color: #00ff9f;
    padding: 15px 20px;
    border: 2px solid #00ff9f;
    font-family: monospace;
    font-size: 14px;
    z-index: 9999999;
    box-shadow: 0 0 20px rgba(0, 255, 159, 0.5);
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.transition = 'opacity 0.3s';
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 300);
  }, 4000);
})();
