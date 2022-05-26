/**
 *
 * @param {HTMLElement} element
 * @returns {HTMLElement}
 */

export const createElement = (element, className) => {
  const el = document.createElement(element);
  if (className) el.className = className;
  return el;
};
