"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Lock, Mail, ShieldCheck, User } from "lucide-react";

const vertexSmokeySource = `
  attribute vec4 a_position;
  void main() {
    gl_Position = a_position;
  }
`;

const fragmentSmokeySource = `
precision mediump float;

uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;
uniform vec3 u_color;

void mainImage(out vec4 fragColor, in vec2 fragCoord){
    vec2 centeredUV = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);
    float time = iTime * 0.38;
    vec2 mouse = iMouse / iResolution;
    vec2 rippleCenter = 2.0 * mouse - 1.0;
    vec2 distortion = centeredUV;
    for (float i = 1.0; i < 8.0; i++) {
        distortion.x += 0.38 / i * cos(i * 2.0 * distortion.y + time + rippleCenter.x * 3.1415);
        distortion.y += 0.38 / i * cos(i * 2.0 * distortion.x + time + rippleCenter.y * 3.1415);
    }
    float wave = abs(sin(distortion.x + distortion.y + time));
    float glow = smoothstep(0.82, 0.18, wave);
    fragColor = vec4(u_color * glow, 1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

type BlurSize = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface SmokeyBackgroundProps {
  readonly backdropBlurAmount?: BlurSize;
  readonly color?: string;
  readonly className?: string;
}

interface LoginFormProps {
  readonly mode: "login" | "register";
  readonly error?: string;
  readonly loading?: boolean;
  readonly onModeChange: (mode: "login" | "register") => void;
  readonly onSubmit: (data: { email: string; name: string; password: string }) => void;
}

export function SmokeyBackground({
  backdropBlurAmount = "sm",
  color = "#41f6df",
  className = ""
}: SmokeyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, hovering: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSmokeySource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSmokeySource);
    const program = gl.createProgram();
    if (!vertexShader || !fragmentShader || !program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
    const iTimeLocation = gl.getUniformLocation(program, "iTime");
    const iMouseLocation = gl.getUniformLocation(program, "iMouse");
    const uColorLocation = gl.getUniformLocation(program, "u_color");
    const [r, g, b] = hexToRgb(color);
    gl.uniform3f(uColorLocation, r, g, b);
    const startTime = Date.now();
    let frame = 0;

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      const currentTime = (Date.now() - startTime) / 1000;
      gl.uniform2f(iResolutionLocation, width, height);
      gl.uniform1f(iTimeLocation, currentTime);
      gl.uniform2f(iMouseLocation, mouseRef.current.hovering ? mouseRef.current.x : width / 2, mouseRef.current.hovering ? height - mouseRef.current.y : height / 2);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = requestAnimationFrame(render);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top, hovering: true };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { ...mouseRef.current, hovering: false };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    render();

    return () => {
      cancelAnimationFrame(frame);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [color]);

  return (
    <div className={`smokey-bg ${className}`} data-blur={backdropBlurAmount}>
      <canvas ref={canvasRef} />
      <div />
    </div>
  );
}

export function LoginForm({
  error,
  loading = false,
  mode,
  onModeChange,
  onSubmit
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const isRegister = mode === "register";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ email, name, password });
  }

  return (
    <section className="login-card" aria-label="Acceso Ensaladas en Frasco">
      <div className="login-card-head">
        <span><ShieldCheck size={15} /> Acceso privado</span>
        <h1>{isRegister ? "Crea tu acceso" : "Entra a tu guía"}</h1>
        <p>{isRegister ? "Guarda tus recetas, favoritos y lista semanal." : "Usa el mismo e-mail de tu compra para continuar."}</p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        {isRegister ? (
          <label className="floating-field">
            <User size={17} />
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Nombre" autoComplete="name" />
          </label>
        ) : null}
        <label className="floating-field">
          <Mail size={17} />
          <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="E-mail de la compra" type="email" autoComplete="email" required />
        </label>
        <label className="floating-field">
          <Lock size={17} />
          <input value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Contraseña" type="password" autoComplete={isRegister ? "new-password" : "current-password"} required />
        </label>
        {error ? <p className="login-error">{error}</p> : null}
        <button className="protocol-primary login-submit" type="submit" disabled={loading}>
          {loading ? "Validando..." : isRegister ? "Crear cuenta" : "Entrar"}
          <ArrowRight size={18} />
        </button>
      </form>
      <p className="login-switch">
        {isRegister ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
        <button type="button" onClick={() => onModeChange(isRegister ? "login" : "register")}>
          {isRegister ? "Entrar" : "Crear acceso"}
        </button>
      </p>
    </section>
  );
}

function hexToRgb(hex: string): [number, number, number] {
  const normalized = hex.replace("#", "");
  const r = parseInt(normalized.substring(0, 2), 16) / 255;
  const g = parseInt(normalized.substring(2, 4), 16) / 255;
  const b = parseInt(normalized.substring(4, 6), 16) / 255;
  return [r, g, b];
}
