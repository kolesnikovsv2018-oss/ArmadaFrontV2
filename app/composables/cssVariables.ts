export function useCssVariables() {
  function setCssVariables(variables: Record<string, string | null | undefined>) {
    for (const [key, value] of Object.entries(variables)) {
      if (value !== undefined) {
        document.documentElement.style.setProperty(`--${toKebabCase(key)}`, value);
      }
    }
  }

  return {
    setCssVariables,
  };
}
