export interface TransitionController {
  cover(): Promise<void>;
  reveal(): Promise<void>;
}

export const transitionControllerRef = { current: null as TransitionController | null };
