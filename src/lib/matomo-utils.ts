'use client';

import { push } from '@socialgouv/matomo-next';

// --------------------
// Enums
// --------------------
export enum MatomoCategory {
  Button = 'Button',
  Form = 'Form',
  Navigation = 'Navigation',
  Modal = 'Modal',
  Link = 'Link',
  Feature = 'Feature',
  Faq = 'FAQ',
  Pricing = 'Pricing',
  Download = 'Download',
  Media = 'Media',
  Error = 'Error',
  Experiment = 'Experiment',
  Search = 'Search',
  Onboarding = 'Onboarding',
  Interaction = 'Interaction',
}

export enum MatomoAction {
  Clicked = 'Clicked',
  Submitted = 'Submitted',
  Opened = 'Opened',
  Closed = 'Closed',
  Hovered = 'Hovered',
  Focused = 'Focused',
  Blurred = 'Blurred',
  Scrolled = 'Scrolled',
  Selected = 'Selected',
  Toggled = 'Toggled',
  Started = 'Started',
  Completed = 'Completed',
  Errored = 'Errored',
  Filtered = 'Filtered',
}

// --------------------
// Function
// --------------------

/**
 * Track a custom event in Matomo using the `@socialgouv/matomo-next` push wrapper.
 *
 * @param category - The event category (must be a value from MatomoCategory)
 * @param action - The event action (must be a value from MatomoAction)
 * @param name - Optional label or description of the event (e.g., 'Hero CTA Button')
 * @param value - Optional numeric value for the event (e.g., 1, 99.99)
 *
 * @example
 * trackMatomoEvent(MatomoCategory.Button, MatomoAction.Clicked, 'Try Now CTA');
 */

export function trackMatomoEvent(
  category: MatomoCategory,
  action: MatomoAction,
  name?: string,
  value?: number,
): void {
  const event: any[] = ['trackEvent', category, action];

  if (name !== undefined) {
    event.push(name);
  }

  if (value !== undefined) {
    event.push(value);
  }

  push(event);
}
