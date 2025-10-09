import { track } from '@vercel/analytics';

// Custom event tracking functions
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  track(eventName, properties);
};

// Specific tracking functions for common actions
export const trackApplyAsTalent = () => {
  trackEvent('apply_as_talent', {
    location: 'button_click',
    timestamp: new Date().toISOString()
  });
};

export const trackSubscribeNow = () => {
  trackEvent('subscribe_now', {
    location: 'button_click',
    timestamp: new Date().toISOString()
  });
};

export const trackJoinCommunity = () => {
  trackEvent('join_community', {
    location: 'button_click',
    timestamp: new Date().toISOString()
  });
};

export const trackJoinDiscord = () => {
  trackEvent('join_discord', {
    location: 'button_click',
    timestamp: new Date().toISOString()
  });
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section: sectionName,
    timestamp: new Date().toISOString()
  });
};
