// Centralized configuration for API and WebSocket URLs
// Uses environment variables to support dynamic port configuration for worktrees

const SERVER_PORT =
  import.meta.env.VITE_API_PORT ||
  import.meta.env.VITE_OBSERVABILITY_PORT ||
  '4005';

export const API_BASE_URL = trimTrailingSlash(
  import.meta.env.VITE_API_URL ||
    import.meta.env.VITE_OBSERVABILITY_API_URL ||
    `http://localhost:${SERVER_PORT}`,
);

export const WS_URL =
  import.meta.env.VITE_WS_URL ||
  import.meta.env.VITE_OBSERVABILITY_WS_URL ||
  `${API_BASE_URL.replace(/^http/, 'ws')}/stream`;

export const OBS_API_URL = API_BASE_URL;
export const OBS_WS_URL = WS_URL;

function trimTrailingSlash(value: string): string {
  return String(value || '').replace(/\/$/, '');
}
