import * as Sentry from "@sentry/browser";

const isLocal = false;

export function initSentry() {
  if (isLocal) {
    return;
  }

  Sentry.init({dsn: "https://5c736acad9e44bb0adecb3d8061e631a@o396155.ingest.sentry.io/5249126"});
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
  let errorInfo = {};
  let message = error.toString();

  // Auth errors
  if (!(error instanceof Error) && error.message) {
    errorInfo = error;
    message = error.message;
    error = new Error(message);
    // API errors
  } else if (error.config && error.config.url) {
    errorInfo.url = error.config.url;
  }

  logError(error, errorInfo);

  alert(message);
}