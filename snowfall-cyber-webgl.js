/**
 * CYBER SNOWFALL - WebGL Edition
 * 1000 particles | 0 and 1 | Cyber Green | GPU-accelerated
 * Pure WebGL (no dependencies)
 */

(function() {
  // Toggle if already exists
  if (document.getElementById('titan-cyber-webgl')) {
    document.getElementById('titan-cyber-webgl').remove();
    return;
  }

  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'titan-cyber-webgl';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999999;
  `;
  document.body.appendChild(canvas);

  const gl = canvas.getContext('webgl', { alpha: true, antialias: false });
  if (!gl) {
    alert('WebGL not supported');
    canvas.remove();
    return;
  }

  // Resize canvas
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resize();
  window.addEventListener('resize', resize);

  // Particle data
  const particleCount = 1000;
  const particles = [];
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: -Math.random() * canvas.height,
      speed: 1 + Math.random() * 2,
      size: 12 + Math.random() * 8,
      char: Math.random() > 0.5 ? '0' : '1',
      opacity: 0.6 + Math.random() * 0.4,
      sway: Math.random() * Math.PI * 2
    });
  }

  // Create offscreen canvas for text rendering
  const textCanvas = document.createElement('canvas');
  const textCtx = textCanvas.getContext('2d');
  textCanvas.width = 64;
  textCanvas.height = 64;

  function renderText(char) {
    textCtx.clearRect(0, 0, 64, 64);
    textCtx.fillStyle = '#00ff9f';
    textCtx.font = 'bold 48px monospace';
    textCtx.textAlign = 'center';
    textCtx.textBaseline = 'middle';
    textCtx.shadowColor = '#00ff9f';
    textCtx.shadowBlur = 10;
    textCtx.fillText(char, 32, 32);
  }

  // WebGL setup
  const vertexShaderSrc = `
    attribute vec2 a_position;
    attribute vec2 a_texCoord;
    uniform vec2 u_resolution;
    varying vec2 v_texCoord;
    
    void main() {
      vec2 pos = (a_position / u_resolution) * 2.0 - 1.0;
      gl_Position = vec4(pos * vec2(1, -1), 0, 1);
      v_texCoord = a_texCoord;
    }
  `;

  const fragmentShaderSrc = `
    precision mediump float;
    uniform sampler2D u_texture;
    uniform float u_opacity;
    varying vec2 v_texCoord;
    
    void main() {
      vec4 texColor = texture2D(u_texture, v_texCoord);
      gl_FragColor = vec4(texColor.rgb, texColor.a * u_opacity);
    }
  `;

  function compileShader(src, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    return shader;
  }

  const vertShader = compileShader(vertexShaderSrc, gl.VERTEX_SHADER);
  const fragShader = compileShader(fragmentShaderSrc, gl.FRAGMENT_SHADER);
  
  const program = gl.createProgram();
  gl.attachShader(program, vertShader);
  gl.attachShader(program, fragShader);
  gl.linkProgram(program);
  gl.useProgram(program);

  // Attributes and uniforms
  const posLoc = gl.getAttribLocation(program, 'a_position');
  const texCoordLoc = gl.getAttribLocation(program, 'a_texCoord');
  const resLoc = gl.getUniformLocation(program, 'u_resolution');
  const opacityLoc = gl.getUniformLocation(program, 'u_opacity');

  // Buffers
  const posBuffer = gl.createBuffer();
  const texCoordBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0,0, 1,0, 0,1, 1,1]), gl.STATIC_DRAW);

  // Texture setup
  const texture0 = gl.createTexture();
  const texture1 = gl.createTexture();

  renderText('0');
  gl.bindTexture(gl.TEXTURE_2D, texture0);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  renderText('1');
  gl.bindTexture(gl.TEXTURE_2D, texture1);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  // Animation
  let time = 0;
  function animate() {
    if (!document.getElementById('titan-cyber-webgl')) return;
    
    time += 0.016;
    
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    gl.uniform2f(resLoc, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.y += p.speed;
      p.sway += 0.02;
      p.x += Math.sin(p.sway) * 0.5;
      
      if (p.y > canvas.height + 50) {
        p.y = -50;
        p.x = Math.random() * canvas.width;
      }
      
      const hw = p.size / 2;
      const positions = new Float32Array([
        p.x - hw, p.y - hw,
        p.x + hw, p.y - hw,
        p.x - hw, p.y + hw,
        p.x + hw, p.y + hw
      ]);
      
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
      
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
      gl.enableVertexAttribArray(texCoordLoc);
      gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, false, 0, 0);
      
      gl.bindTexture(gl.TEXTURE_2D, p.char === '0' ? texture0 : texture1);
      gl.uniform1f(opacityLoc, p.opacity);
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();

  // Notification
  const notification = document.createElement('div');
  notification.textContent = '⚡ CYBER SNOW WEBGL! 1000 particles (0|1) | Click again to stop';
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
