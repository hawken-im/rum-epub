import type { quorumService } from '~/service';

export default () => `https://127.0.0.1:${((window as any).quorumService as typeof quorumService).state.port}`;
