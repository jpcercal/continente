export async function loadMustache(): Promise<void> {
  return new Promise<void>((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/mustache@4.2.0';
    script.onload = (): void => resolve();
    document.head.appendChild(script);
  });
}
