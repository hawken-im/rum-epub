import { bookService } from './book';
import { dbService } from './db';
import { escService } from './esc';
import { nodeService } from './node';
import { pollingService } from './polling';
import { profileService } from './profile';
import { quorumService } from './quorum';
import { readerSettingsService } from './readerSettings';
import { updateService } from './update';

import { ConfirmDialogContainer } from './dialog/ConfirmDialogContainer';
import { LoadingContainer } from './loading/LoadingContainer';
import { TooltipContainer } from './tooltip/TooltipContainer';
import { UpdateContainer } from './update/UpdateContainer';

export * from './book';
export * from './bus';
export * from './db';
export * from './dialog';
export * from './esc';
export * from './i18n';
export * from './loading';
export * from './node';
export * from './polling';
export * from './profile';
export * from './quorum';
export * from './readerSettings';
export * from './tooltip';
export * from './update';

export const initService = () => {
  Object.entries({
    nodeService,
    quorumService,
    bookService,
    updateService,
    dbService,
    pollingService,
  }).forEach(([k, v]) => {
    (window as any)[k] = v;
  });

  const disposes = [
    nodeService.init(),
    quorumService.init(),
    readerSettingsService.init(),
    bookService.init(),
    updateService.init(),
    escService.init(),
  ];

  return () => disposes.forEach((v) => v());
};

export const initServiceAfterDB = () => {
  const disposes = [
    nodeService.startPolling(true),
    profileService.init(),
    bookService.initAfterDB(),
    pollingService.initAfterDB(),
  ];

  return () => disposes.forEach((v) => v());
};

export const serviceViewContainers = [
  ConfirmDialogContainer,
  LoadingContainer,
  TooltipContainer,
  UpdateContainer,
];
