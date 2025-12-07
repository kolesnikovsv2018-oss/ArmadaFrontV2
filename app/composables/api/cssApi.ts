import type { IAppCssVariables } from "~/types/CssVariables";

import { defaultCssVariables } from "~/constants/defaultCssVariables";

export function useCssApi() {
  function fetchCssVariables(): Promise<IAppCssVariables> {
    // TODO заменить на реальный API вызов
    return new Promise<IAppCssVariables>((resolve) => {
      resolve(defaultCssVariables);
    });
    // return fetchData('/api/css-variables');
  }

  return {
    fetchCssVariables,
  };
}