export function useCssVariables() {
  function generateCssVariableName(key: string): string {
    return `--${toKebabCase(key)}`;
  }

  function generateStyleObject(variables: Record<string, string | null | undefined>): Record<string, string> {
    const styleObject: Record<string, string> = {};

    for (const [key, value] of Object.entries(variables)) {
      if (value !== undefined && value !== null) {
        styleObject[generateCssVariableName(key)] = value;
      }
    }
    return styleObject;
  }

  function setCssVariables(variables: Record<string, string | null | undefined>) {
    const styleObject = generateStyleObject(variables);
    for (const [key, value] of Object.entries(styleObject)) {
      document.documentElement.style.setProperty(key, value);
    }
  }

  return {
    generateCssVariableName,
    generateStyleObject,
    setCssVariables,
  };
}
