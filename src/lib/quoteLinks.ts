// Online application forms for each line of business.
// Business insurance has no online form yet.
const BINDER_LABS_BASE =
  "https://www.binderlabs.co/apply/cherries-insurance-agency-llc-1788889158234";

export const QUOTE_LINKS = {
  home: `${BINDER_LABS_BASE}/homeowner-insurance-application`,
  auto: `${BINDER_LABS_BASE}/auto-insurance-application`,
  renters: `${BINDER_LABS_BASE}/renters-insurance-application`,
  landlord: `${BINDER_LABS_BASE}/landlord-insurance-application`,
  condo: `${BINDER_LABS_BASE}/condo-insurance-application`,
  motorcycle: `${BINDER_LABS_BASE}/motorcycle-application-form`,
} as const;

// The application forms live on another site, so open them in a new tab.
export const NEW_TAB = { target: "_blank", rel: "noopener noreferrer" } as const;

export const newTabIfExternal = (href: string) =>
  href.startsWith("http") ? NEW_TAB : {};
