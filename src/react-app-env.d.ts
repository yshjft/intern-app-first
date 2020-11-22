/// <reference types="react-scripts" />

declare module '*.css' {
  const content: {[key: string]: string}
  export default content
}

declare module '*.scss' {
  const content: {[className: string]: string}
  export default content
}
